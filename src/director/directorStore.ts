import { create } from 'zustand';

interface DirectorState {
  strobeOn: boolean;
  burstCount: number;
  activeSceneId: 0 | 1 | 2;
  toggleStrobe: () => void;
  fireBurst: () => void;
  killAll: () => void;
  setScene: (id: number) => void;
}

/**
 * Low-frequency director state only (safe for React re-render).
 * Per-frame data (audio bands, camera nudge, burst impulse) lives in
 * mutable refs in `liveRefs` to avoid 60 fps re-renders.
 */
export const useDirectorStore = create<DirectorState>((set) => ({
  strobeOn: false,
  burstCount: 0,
  activeSceneId: 0,
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
  setScene: (id: number) =>
    set({ activeSceneId: (Math.max(0, Math.min(2, Math.floor(id))) % 3) as 0 | 1 | 2 }),
}));

export const liveRefs = {
  burstId: 0,
  boost: 0,
  azimuth: 0,
  elevation: 0,
};

export const SHORTCUT_MAP: Array<{ key: string; action: string }> = [
  { key: '1 / 2 / 3', action: 'Switch scene' },
  { key: 'Space', action: 'Toggle strobe (default off)' },
  { key: 'B', action: 'Fire burst impulse' },
  { key: 'Arrows', action: 'Nudge camera' },
  { key: 'S', action: 'Kill all effects' },
];
