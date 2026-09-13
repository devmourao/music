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
import { SceneHost } from './scenes/SceneHost';
import { PLAYLIST, PRESETS, getPreset } from './scenes/presets';
import { CAMERA_POSITION, STAGE_BACKGROUND } from './stageConfig';

function App() {
  const engine = useAudioEngine();
  useKeyboardDesk();
  const activePresetId = useDirectorStore((s) => s.activePresetId);
  const preset = getPreset(activePresetId);

  return (
    <div className="stage-container" data-testid="blank-stage">
      <AudioPanel engine={engine} />
      <ShortcutMap />
      <StrobeOverlay />
      <div className="scene-badge" data-testid="scene-name">
        {preset.name} · {activePresetId + 1}/{PRESETS.length} · playlist {PLAYLIST.length}
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
