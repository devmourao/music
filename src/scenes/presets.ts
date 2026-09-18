export interface ScenePalette {
  primary: string;
  emissive: string;
}

export interface ScenePreset {
  id: number;
  name: string;
  scene: 0 | 1 | 2 | 3 | 4;
  palette: ScenePalette;
  background: string;
  gain: number;
  speed: number;
}

export const PRESETS: ScenePreset[] = [
  {
    id: 0,
    name: 'Nebula Drift',
    scene: 0,
    palette: { primary: '#7dd3fc', emissive: '#0ea5e9' },
    background: '#010409',
    gain: 1,
    speed: 1,
  },
  {
    id: 1,
    name: 'Neon Bloom',
    scene: 1,
    palette: { primary: '#f0abfc', emissive: '#a21caf' },
    background: '#0a0310',
    gain: 1,
    speed: 1,
  },
  {
    id: 2,
    name: 'Hyper Tunnel',
    scene: 2,
    palette: { primary: '#22d3ee', emissive: '#0e7490' },
    background: '#01090d',
    gain: 1,
    speed: 1,
  },
  {
    id: 3,
    name: 'Octagon Pulse',
    scene: 3,
    palette: { primary: '#ffba6a', emissive: '#ff3b00' },
    background: '#0a0603',
    gain: 1.5,
    speed: 1.2,
  },
  {
    id: 4,
    name: 'Chroma Bouncer',
    scene: 4,
    palette: { primary: '#4ade80', emissive: '#00d4ff' },
    background: '#061018',
    gain: 1.2,
    speed: 1,
  },
];

export const PRESET_COUNT = PRESETS.length;

export const PLAYLIST: number[] = PRESETS.map((p) => p.id);

export function getPreset(id: number): ScenePreset {
  const normalized = ((Math.floor(id) % PRESETS.length) + PRESETS.length) % PRESETS.length;
  return PRESETS[normalized];
}

export function nextPresetId(currentId: number): number {
  return (currentId + 1) % PRESETS.length;
}

export function prevPresetId(currentId: number): number {
  return (currentId - 1 + PRESETS.length) % PRESETS.length;
}
