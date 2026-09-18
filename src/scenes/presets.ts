export interface ScenePalette {
  primary: string;
  emissive: string;
}

export type BaseId = 'particles' | 'mesh' | 'tunnel';

export interface BaseInstance {
  base: BaseId;
  params?: Record<string, unknown>;
}

export interface ScenePreset {
  id: number;
  name: string;
  scene: 0 | 1 | 2;
  palette: ScenePalette;
  background: string;
  gain: number;
  speed: number;
  instances?: BaseInstance[];
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
    name: 'Neon Tri Tunnel',
    scene: 2,
    palette: { primary: '#ff8a8a', emissive: '#ffffff' },
    background: '#050000',
    gain: 1.3,
    speed: 1.6,
  },
  {
    id: 4,
    name: 'Tunnel + Dust',
    scene: 0,
    palette: { primary: '#f0abfc', emissive: '#a21caf' },
    background: '#080412',
    gain: 1,
    speed: 1,
    instances: [
      { base: 'tunnel', params: { cameraMode: 'centered', shape: 'mixed' } },
      { base: 'particles', params: { count: 120 } },
    ],
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
