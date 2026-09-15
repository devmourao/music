import { useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { readBands } from '../audio/audioBus';
import { useDirectorStore } from '../director/directorStore';
import { meshDisplacement } from './sceneMath';

export function DeformableMeshScene({
  color = '#f0abfc',
  emissive = '#a21caf',
  gain = 1,
}: {
  color?: string;
  emissive?: string;
  gain?: number;
}) {
  const meshTextureUrl = useDirectorStore((s) => s.meshTextureUrl);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  // Textured mode is unlit (tone mapping off) so uploaded images keep
  // their original colors. Flat mode keeps the lit wireframe look.
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
        console.info(`[texture] loaded ${loaded.image.width}x${loaded.image.height}`);
        setTexture((previous) => {
          previous?.dispose();
          return loaded;
        });
        store.setMeshTextureStatus('ready');
      },
      undefined,
      (error) => {
        if (cancelled) return;
        console.error('[texture] failed to load image', error);
        setTexture(null);
        store.setMeshTextureStatus('error');
      },
    );
    return () => {
      cancelled = true;
    };
  }, [meshTextureUrl]);
  const meshRef = useRef<THREE.Mesh>(null);
  const base = useMemo(() => {
    const geometry = new THREE.SphereGeometry(1.2, 40, 40);
    return geometry.attributes.position.array.slice();
  }, []);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geometry = mesh.geometry as THREE.BufferGeometry;
    const position = geometry.attributes.position as THREE.BufferAttribute;
    const { bass, mids } = readBands();
    const time = clock.elapsedTime;

    for (let i = 0; i < position.count; i += 1) {
      const x = base[i * 3];
      const y = base[i * 3 + 1];
      const z = base[i * 3 + 2];
      const normal = new THREE.Vector3(x, y, z).normalize();
      const offset = meshDisplacement(bass, mids, x, y, z, time) * gain;
      position.setXYZ(
        i,
        x + normal.x * offset,
        y + normal.y * offset,
        z + normal.z * offset,
      );
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh
      ref={meshRef}
      key={meshTextureUrl ? (texture ? 'textured' : 'loading') : 'flat'}
    >
      <sphereGeometry args={[1.2, 40, 40]} />
      {meshTextureUrl && texture ? (
        <meshBasicMaterial map={texture} toneMapped={false} />
      ) : (
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.7}
          wireframe
        />
      )}
    </mesh>
  );
}
