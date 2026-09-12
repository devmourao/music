import { Canvas } from '@react-three/fiber';
import './App.css';
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
  return (
    <div className="stage-container" data-testid="blank-stage">
      <Canvas camera={{ position: CAMERA_POSITION }}>
        <color attach="background" args={[STAGE_BACKGROUND]} />
        <ambientLight intensity={1} />
        <StaticCube />
      </Canvas>
    </div>
  );
}

export default App;
