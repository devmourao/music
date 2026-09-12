import { Canvas } from '@react-three/fiber';
import './App.css';
import { useAudioEngine } from './audio/useAudioEngine';
import { AudioPanel } from './components/AudioPanel';
import { ShortcutMap } from './components/ShortcutMap';
import { StrobeOverlay } from './components/StrobeOverlay';
import { useDirectorStore } from './director/directorStore';
import { useKeyboardDesk } from './director/useKeyboardDesk';
import { CameraRig } from './scenes/CameraRig';
import { PostRig } from './scenes/PostRig';
import { SCENE_NAMES } from './scenes/sceneMath';
import { SceneHost } from './scenes/SceneHost';
import { CAMERA_POSITION, STAGE_BACKGROUND } from './stageConfig';

function App() {
  const engine = useAudioEngine();
  useKeyboardDesk();
  const activeSceneId = useDirectorStore((s) => s.activeSceneId);

  return (
    <div className="stage-container" data-testid="blank-stage">
      <AudioPanel engine={engine} />
      <ShortcutMap />
      <StrobeOverlay />
      <div className="scene-badge" data-testid="scene-name">
        {SCENE_NAMES[activeSceneId]} · keys 1–3
      </div>
      <Canvas camera={{ position: CAMERA_POSITION }}>
        <color attach="background" args={[STAGE_BACKGROUND]} />
        <ambientLight intensity={1} />
        <CameraRig />
        <SceneHost />
        <PostRig />
      </Canvas>
    </div>
  );
}

export default App;
