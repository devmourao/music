import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { readBands } from '../audio/audioBus';
import { RING_COUNT, RING_SPACING, wrapRingZ } from './sceneMath';

export function TunnelFieldScene() {
  const groupRef = useRef<THREE.Group>(null);
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#22d3ee',
        emissive: '#0e7490',
        emissiveIntensity: 1.4,
      }),
    [],
  );
  const offsets = useMemo(
    () => Array.from({ length: RING_COUNT }, (_, i) => -i * RING_SPACING),
    [],
  );

  useFrame(({ clock }, delta) => {
    const group = groupRef.current;
    if (!group) return;
    const { bass, mids, treble } = readBands();
    const time = clock.elapsedTime;
    const speed = 2 + mids * 7;
    const span = RING_COUNT * RING_SPACING;
    void delta;

    group.children.forEach((ring, i) => {
      ring.position.z = wrapRingZ(offsets[i] + ((time * speed) % span));
    });

    group.scale.setScalar(1 + bass * 0.3);
    material.color.setHSL((0.55 + treble * 0.45 + time * 0.02) % 1, 0.9, 0.6);
    material.emissive.setHSL((0.55 + treble * 0.45) % 1, 0.9, 0.35);
  });

  return (
    <group ref={groupRef}>
      {offsets.map((z, i) => (
        <mesh key={i} position={[0, 0, z]} material={material}>
          <torusGeometry args={[2.4, 0.045, 8, 64]} />
        </mesh>
      ))}
    </group>
  );
}
