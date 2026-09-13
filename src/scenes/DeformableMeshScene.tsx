import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { readBands } from '../audio/audioBus';
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
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 40, 40]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.7}
        wireframe
      />
    </mesh>
  );
}
