import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { readBands } from '../audio/audioBus';
import { liveRefs } from '../director/directorStore';
import { decayBurst } from './sceneMath';

export function AvatarScene({
  color = '#4ade80',
  emissive = '#00d4ff',
  gain = 1.2,
}: {
  color?: string;
  emissive?: string;
  gain?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const edgeLineMatRef = useRef<THREE.LineBasicMaterial>(null);
  const fillMatRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }, delta) => {
    const group = groupRef.current;
    if (!group) return;
    const { bass, mids, treble } = readBands();
    liveRefs.boost = decayBurst(liveRefs.boost, delta);
    const time = clock.elapsedTime;

    // Bounce on bass, sway on mids — more dynamic
    const bounce = bass * 0.65 * gain + liveRefs.boost * 0.5;
    const sway = mids * 0.45 + Math.sin(time * 0.7) * 0.08;
    group.position.y = -0.3 + bounce;
    group.position.x = Math.sin(time * 0.5) * 0.15 * gain;
    group.rotation.y = sway;
    group.rotation.z = Math.sin(time * 0.6) * 0.12 * gain;
    group.scale.setScalar(1 + bass * 0.18 * gain + liveRefs.boost * 0.12);

    // Edge color alternates on treble
    if (edgeLineMatRef.current) {
      const hue = (0.55 + treble * 0.25 + time * 0.05) % 1;
      edgeLineMatRef.current.color.setHSL(hue, 1, 0.7);
    }
    if (fillMatRef.current) {
      fillMatRef.current.color.set(color);
      fillMatRef.current.emissive.set(emissive);
      fillMatRef.current.emissiveIntensity = 0.6 + treble * 0.4;
    }
  });

  // Low-poly human assembled from boxes — no GLB needed for MVP
  return (
    <group ref={groupRef}>
      {/* Head */}
      <mesh position={[0, 1.35, 0]}>
        <boxGeometry args={[0.45, 0.45, 0.45]} />
        <meshStandardMaterial ref={fillMatRef} color={color} emissive={emissive} emissiveIntensity={0.6} />
      </mesh>
      <lineSegments position={[0, 1.35, 0]}>
        <edgesGeometry args={[new THREE.BoxGeometry(0.45, 0.45, 0.45)]} />
        <lineBasicMaterial ref={edgeLineMatRef} color={emissive} linewidth={2} />
      </lineSegments>
      {/* Torso */}
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[0.7, 0.75, 0.35]} />
        <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.5} />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.55, 0.7, 0]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.55, 0.7, 0]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.5} />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.18, -0.05, 0]}>
        <boxGeometry args={[0.26, 0.75, 0.28]} />
        <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[0.18, -0.05, 0]}>
        <boxGeometry args={[0.26, 0.75, 0.28]} />
        <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}
