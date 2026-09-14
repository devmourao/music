import { create } from 'zustand';
import { PRESET_COUNT } from '../scenes/presets';
import { DEFAULT_TRANSITION_DURATION, nextDuration } from './transition';

interface DirectorState {
  strobeOn: boolean;
  burstCount: number;
  activePresetId: number;
  transitionDuration: number;
  hueShift: number;
  toggleStrobe: () => void;
  fireBurst: () => void;
  killAll: () => void;
  setPreset: (id: number) => void;
  nextPreset: () => void;
  prevPreset: () => void;
  requestDissolve: (id: number) => void;
  hardCutNext: () => void;
  cycleDuration: () => void;
  stepHue: () => void;
}

/**
 * Low-frequency director state only (safe for React re-render).
 * Per-frame data (audio bands, camera nudge, burst impulse) lives in
 * mutable refs in `liveRefs` to avoid 60 fps re-renders.
 */
export const useDirectorStore = create<DirectorState>((set) => ({
  strobeOn: false,
  burstCount: 0,
  activePresetId: 0,
  transitionDuration: DEFAULT_TRANSITION_DURATION,
  hueShift: 0,
  toggleStrobe: () => set((s) => ({ strobeOn: !s.strobeOn })),
  fireBurst: () => {
    liveRefs.burstId += 1;
    set((s) => ({ burstCount: s.burstCount + 1 }));
  },
  killAll: () => {
    liveRefs.burstId = 0;
    liveRefs.boost = 0;
    set({ strobeOn: false, burstCount: 0 });
  },
  setPreset: (id: number) =>
    set({
      activePresetId:
        ((Math.floor(id) % PRESET_COUNT) + PRESET_COUNT) % PRESET_COUNT,
    }),
  nextPreset: () =>
    set((s) => ({ activePresetId: (s.activePresetId + 1) % PRESET_COUNT })),
  prevPreset: () =>
    set((s) => ({
      activePresetId:
        (s.activePresetId - 1 + PRESET_COUNT) % PRESET_COUNT,
    })),
  requestDissolve: (id: number) => {
    const { activePresetId } = useDirectorStore.getState();
    const target =
      ((Math.floor(id) % PRESET_COUNT) + PRESET_COUNT) % PRESET_COUNT;
    if (target === activePresetId || transitionRef.active) return;
    transitionRef.active = true;
    transitionRef.swapped = false;
    transitionRef.start = performance.now();
    transitionRef.to = target;
  },
  hardCutNext: () => {
    const { activePresetId } = useDirectorStore.getState();
    transitionRef.active = false;
    transitionRef.swapped = false;
    useDirectorStore
      .getState()
      .setPreset(activePresetId + 1);
  },
  cycleDuration: () =>
    set((s) => ({ transitionDuration: nextDuration(s.transitionDuration) })),
  stepHue: () => set((s) => ({ hueShift: (s.hueShift + 1 / 8) % 1 })),
}));

export const liveRefs = {
  burstId: 0,
  boost: 0,
  azimuth: 0,
  elevation: 0,
};

export const transitionRef = {
  active: false,
  swapped: false,
  start: 0,
  to: 0,
};

export const SHORTCUT_MAP: Array<{ key: string; action: string }> = [
  { key: '1–6', action: 'Dissolve to preset' },
  { key: 'N / P', action: 'Dissolve next / previous in playlist' },
  { key: 'X', action: 'Hard cut to next preset' },
  { key: 'T', action: 'Cycle transition duration' },
  { key: 'H', action: 'Step global hue shift' },
  { key: 'Space', action: 'Toggle strobe (default off)' },
  { key: 'B', action: 'Fire burst impulse' },
  { key: 'Arrows', action: 'Nudge camera' },
  { key: 'S', action: 'Kill all effects' },
];
