import { useEffect } from 'react';
import { liveRefs, useDirectorStore } from './directorStore';
import { PRESET_COUNT } from '../scenes/presets';

const CAMERA_STEP = 0.12;

export function useKeyboardDesk() {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const store = useDirectorStore.getState();

      switch (event.code) {
        case 'Digit1':
          store.requestDissolve(0);
          break;
        case 'Digit2':
          store.requestDissolve(1);
          break;
        case 'Digit3':
          store.requestDissolve(2);
          break;
        case 'Digit4':
          store.requestDissolve(3);
          break;
        case 'Digit5':
          store.requestDissolve(4);
          break;
        case 'Digit6':
          store.requestDissolve(5);
          break;
        case 'KeyN':
          store.requestDissolve(
            (store.activePresetId + 1) % PRESET_COUNT,
          );
          break;
        case 'KeyP':
          store.requestDissolve(
            (store.activePresetId - 1 + PRESET_COUNT) % PRESET_COUNT,
          );
          break;
        case 'KeyX':
          store.hardCutNext();
          break;
        case 'KeyY':
          store.cycleDuration();
          break;
        case 'KeyT':
          store.fireText();
          break;
        case 'KeyH':
          store.stepHue();
          break;
        case 'Equal':
        case 'NumpadAdd':
          event.preventDefault();
          store.zoomIn();
          break;
        case 'Minus':
        case 'NumpadSubtract':
          event.preventDefault();
          store.zoomOut();
          break;
        case 'Backslash':
        case 'KeyE':
          store.cycleFxSlot();
          break;
        case 'BracketLeft':
        case 'KeyF':
          store.fxDown();
          break;
        case 'BracketRight':
        case 'KeyR':
          store.fxUp();
          break;
        case 'Space':
          event.preventDefault();
          store.toggleStrobe();
          break;
        case 'KeyB':
          store.fireBurst();
          break;
        case 'KeyS':
          store.killAll();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          liveRefs.azimuth -= CAMERA_STEP;
          break;
        case 'ArrowRight':
          event.preventDefault();
          liveRefs.azimuth += CAMERA_STEP;
          break;
        case 'ArrowUp':
          event.preventDefault();
          liveRefs.elevation = Math.min(1.2, liveRefs.elevation + CAMERA_STEP);
          break;
        case 'ArrowDown':
          event.preventDefault();
          liveRefs.elevation = Math.max(-1.2, liveRefs.elevation - CAMERA_STEP);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
}
