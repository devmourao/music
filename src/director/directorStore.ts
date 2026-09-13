import { create } from 'zustand';
import { PRESET_COUNT } from '../scenes/presets';

interface DirectorState {
  strobeOn: boolean;
  burstCount: number;
  activePresetId: number;
  toggleStrobe: () => void;
  fireBurst: () => void;
  killAll: () => void;
  setPreset: (id: number) => void;
  nextPreset: () => void;
  prevPreset: () => void;
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
}));

export const liveRefs = {
  burstId: 0,
  boost: 0,
  azimuth: 0,
  elevation: 0,
};

export const SHORTCUT_MAP: Array<{ key: string; action: string }> = [
  { key: '1–6', action: 'Select preset' },
  { key: 'N / P', action: 'Next / previous preset in playlist' },
  { key: 'Space', action: 'Toggle strobe (default off)' },
  { key: 'B', action: 'Fire burst impulse' },
  { key: 'Arrows', action: 'Nudge camera' },
  { key: 'S', action: 'Kill all effects' },
];
