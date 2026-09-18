import { useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { readBands } from '../audio/audioBus';
import { liveRefs, useDirectorStore } from '../director/directorStore';
import { decayBurst } from './sceneMath';

export function GridLedScene({
  color = '#ffba6a',
  emissive = '#ff3b00',
  gain = 1.5,
  speed = 1.2,
}: {
  color?: string;
  emissive?: string;
  gain?: number;
  speed?: number;
}) {
  const meshTextureUrl = useDirectorStore((s) => s.meshTextureUrl);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    if (!meshTextureUrl) return;
    const store = useDirectorStore.getState();
    const loader = new THREE.TextureLoader();
    let cancelled = false;
    loader.load(
      meshTextureUrl,
      (loaded) => {
        if (cancelled) return;
        loaded.colorSpace = THREE.SRGBColorSpace;
        setTexture((prev) => {
          prev?.dispose();
          return loaded;
        });
        store.setMeshTextureStatus('ready');
      },
      undefined,
      () => {
        if (cancelled) return;
        setTexture(null);
        store.setMeshTextureStatus('error');
      },
    );
    return () => {
      cancelled = true;
    };
  }, [meshTextureUrl]);

  const ledCount = 32;
  const ledPositions = useMemo(() => {
    const pos = new Float32Array(ledCount * 3);
    const radius = 2.2;
    for (let i = 0; i < ledCount; i++) {
      const angle = (i / ledCount) * Math.PI * 2;
      // Octagon approximation via radius
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = 1.2 + Math.sin(angle * 2) * 0.05;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  const planeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }, delta) => {
    const { bass, mids } = readBands();
    liveRefs.boost = decayBurst(liveRefs.boost, delta);
    const time = clock.elapsedTime * speed;

    if (pointsRef.current) {
      const geom = pointsRef.current.geometry as THREE.BufferGeometry;
      const pos = geom.attributes.position as THREE.BufferAttribute;
      // Chase moves LEDs along ring with mids, bass makes them breathe
      for (let i = 0; i < ledCount; i++) {
        const baseAngle = (i / ledCount) * Math.PI * 2;
        const chaseAngle = baseAngle + mids * 1.2 + time * 0.4;
        const radius = 2.2 + bass * 0.35 * gain + liveRefs.boost * 0.4;
        pos.setXYZ(i, Math.cos(chaseAngle) * radius, 1.2 + Math.sin(chaseAngle * 2) * 0.15, Math.sin(chaseAngle) * radius);
      }
      pos.needsUpdate = true;
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      const intensity = 0.7 + bass * 0.8 * gain + liveRefs.boost * 0.6;
      mat.opacity = Math.min(1, intensity);
      mat.size = 0.16 + bass * 0.18 + mids * 0.08;
      const hue = (0.08 + mids * 0.12 + time * 0.02) % 1;
      mat.color.setHSL(hue, 1, 0.55);
    }

    if (planeRef.current) {
      planeRef.current.rotation.y = Math.sin(time * 0.15) * 0.12;
      planeRef.current.position.y = Math.sin(time * 0.3) * 0.08 * gain;
    }
  });

  return (
    <group>
      <mesh ref={planeRef} position={[0, 0, -1.5]}>
        <planeGeometry args={[4.5, 2.8]} />
        {meshTextureUrl && texture ? (
          <meshBasicMaterial map={texture} toneMapped={false} />
        ) : (
          <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.3} />
        )}
      </mesh>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[ledPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.14} transparent opacity={0.9} sizeAttenuation color={color} />
      </points>
    </group>
  );
}
