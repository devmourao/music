import { useEffect } from 'react';
import { liveRefs, useDirectorStore } from './directorStore';

const CAMERA_STEP = 0.12;

export function useKeyboardDesk() {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const store = useDirectorStore.getState();

      switch (event.code) {
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
