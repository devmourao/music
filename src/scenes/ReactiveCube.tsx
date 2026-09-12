import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type * as THREE from 'three';
import { liveRefs } from '../director/directorStore';
import {
  DEFAULT_SCENE_PARAMS,
  bassTargetScale,
  reactiveScale,
} from './sceneContract';
import { readBands } from '../audio/audioBus';

const BURST_DECAY = 3;

export function ReactiveCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const seenBurstRef = useRef(0);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    if (seenBurstRef.current !== liveRefs.burstId) {
      seenBurstRef.current = liveRefs.burstId;
      liveRefs.boost = 1;
    }
    liveRefs.boost *= Math.exp(-BURST_DECAY * Math.min(0.1, Math.max(0, delta)));

    const { bass } = readBands();
    const target =
      bassTargetScale(bass) +
      liveRefs.boost * DEFAULT_SCENE_PARAMS.gain * 0.5;
    const next = reactiveScale(
      mesh.scale.x,
      target,
      delta,
      DEFAULT_SCENE_PARAMS.responsiveness,
    );
    mesh.scale.setScalar(next);
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}
