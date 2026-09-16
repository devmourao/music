export const ZOOM_MIN = 0.5;

export const ZOOM_MAX = 2.5;

export const ZOOM_STEP = 0.15;

export const MIX_STEP = 0.1;

export type FxSlot =
  | 'bloom'
  | 'vignette'
  | 'strobe'
  | 'master'
  | 'saturation'
  | 'contrast';

export const FX_SLOTS: FxSlot[] = [
  'saturation',
  'contrast',
  'bloom',
  'vignette',
  'strobe',
  'master',
];

export function clampMix(value: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.max(0, Math.min(1, value));
}

export function clampZoom(value: number): number {
  if (Number.isNaN(value)) return 1;
  return Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, value));
}

export const CONTRAST_MIN = -0.5;

export const CONTRAST_MAX = 0.5;

export const CONTRAST_DEFAULT = 0;

export const SATURATION_MAX = 0.6;

export const SATURATION_DEFAULT = 0;

export function clampSaturation(value: number): number {
  if (Number.isNaN(value)) return SATURATION_DEFAULT;
  return Math.max(0, Math.min(SATURATION_MAX, value));
}

export function clampContrast(value: number): number {
  if (Number.isNaN(value)) return CONTRAST_DEFAULT;
  return Math.max(CONTRAST_MIN, Math.min(CONTRAST_MAX, value));
}

export type StrobeMode = 'white' | 'black' | 'color';

export const STROBE_MODES: StrobeMode[] = ['white', 'black', 'color'];

export function nextStrobeMode(current: StrobeMode): StrobeMode {
  return STROBE_MODES[(STROBE_MODES.indexOf(current) + 1) % STROBE_MODES.length];
}

/** Effective amount of an effect after its own mix and the master fader. */
export function applyMix(base: number, mix: number, master: number): number {
  return base * clampMix(mix) * clampMix(master);
}

/** Camera distance for a zoom factor (zoom > 1 moves closer). */
export function zoomRadius(baseRadius: number, zoom: number): number {
  return baseRadius / clampZoom(zoom);
}

export function nextFxSlot(current: FxSlot): FxSlot {
  return FX_SLOTS[(FX_SLOTS.indexOf(current) + 1) % FX_SLOTS.length];
}

export const STROBE_MIN_HZ = 1;

export const STROBE_MAX_HZ = 12;

export const STROBE_DEFAULT_HZ = 4;

export function clampStrobeHz(value: number): number {
  if (Number.isNaN(value)) return STROBE_DEFAULT_HZ;
  return Math.max(STROBE_MIN_HZ, Math.min(STROBE_MAX_HZ, Math.round(value)));
}

/** Half-cycle interval for a toggle-based strobe at the given rate. */
export function strobeIntervalMs(rateHz: number): number {
  return 1000 / (clampStrobeHz(rateHz) * 2);
}
