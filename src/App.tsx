import { Canvas } from '@react-three/fiber';
import './App.css';
import { useAudioEngine } from './audio/useAudioEngine';
import { AudioPanel } from './components/AudioPanel';
import { CAMERA_POSITION, CUBE_SIZE, STAGE_BACKGROUND } from './stageConfig';

function StaticCube() {
  return (
    <mesh>
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
        <StaticCube />
      </Canvas>
    </div>
  );
}

export default App;
