export interface ScenePalette {
  primary: string;
  emissive: string;
}

export interface ScenePreset {
  id: number;
  name: string;
  scene: 0 | 1 | 2;
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
    name: 'Magma Swarm',
    scene: 0,
    palette: { primary: '#fdba74', emissive: '#ea580c' },
    background: '#0d0503',
    gain: 1.6,
    speed: 1.8,
  },
  {
    id: 2,
    name: 'Neon Bloom',
    scene: 1,
    palette: { primary: '#f0abfc', emissive: '#a21caf' },
    background: '#0a0310',
    gain: 1,
    speed: 1,
  },
  {
    id: 3,
    name: 'Deep Pulse',
    scene: 1,
    palette: { primary: '#6ee7b7', emissive: '#047857' },
    background: '#02100b',
    gain: 0.6,
    speed: 0.7,
  },
  {
    id: 4,
    name: 'Hyper Tunnel',
    scene: 2,
    palette: { primary: '#22d3ee', emissive: '#0e7490' },
    background: '#01090d',
    gain: 1,
    speed: 1,
  },
  {
    id: 5,
    name: 'Ultraviolet Run',
    scene: 2,
    palette: { primary: '#c4b5fd', emissive: '#6d28d9' },
    background: '#0a0618',
    gain: 1.4,
    speed: 1.6,
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
