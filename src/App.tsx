import { Canvas } from '@react-three/fiber';
import './App.css';
import { useAudioEngine } from './audio/useAudioEngine';
import { AudioPanel } from './components/AudioPanel';
import { ShortcutMap } from './components/ShortcutMap';
import { StrobeOverlay } from './components/StrobeOverlay';
import { useKeyboardDesk } from './director/useKeyboardDesk';
import { CameraRig } from './scenes/CameraRig';
import { PostRig } from './scenes/PostRig';
import { ReactiveCube } from './scenes/ReactiveCube';
import { CAMERA_POSITION, STAGE_BACKGROUND } from './stageConfig';

function App() {
  const engine = useAudioEngine();
  useKeyboardDesk();

  return (
    <div className="stage-container" data-testid="blank-stage">
      <AudioPanel engine={engine} />
      <ShortcutMap />
      <StrobeOverlay />
      <Canvas camera={{ position: CAMERA_POSITION }}>
        <color attach="background" args={[STAGE_BACKGROUND]} />
        <ambientLight intensity={1} />
        <CameraRig />
        <ReactiveCube />
        <PostRig />
      </Canvas>
    </div>
  );
}

export default App;
