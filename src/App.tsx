import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type * as THREE from 'three';
import './App.css';
import { readBands } from './audio/audioBus';
import { useAudioEngine } from './audio/useAudioEngine';
import { AudioPanel } from './components/AudioPanel';
import {
  DEFAULT_SCENE_PARAMS,
  bassTargetScale,
  reactiveScale,
} from './scenes/sceneContract';
import { CAMERA_POSITION, CUBE_SIZE, STAGE_BACKGROUND } from './stageConfig';

function ReactiveCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const { bass } = readBands();
    const target = bassTargetScale(bass);
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
      <boxGeometry args={CUBE_SIZE} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

function App() {
  const engine = useAudioEngine();

  return (
    <div className="stage-container" data-testid="blank-stage">
      <AudioPanel engine={engine} />
      <Canvas camera={{ position: CAMERA_POSITION }}>
        <color attach="background" args={[STAGE_BACKGROUND]} />
        <ambientLight intensity={1} />
        <ReactiveCube />
      </Canvas>
    </div>
  );
}

export default App;
