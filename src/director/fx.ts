export const ZOOM_MIN = 0.5;

export const ZOOM_MAX = 2.5;

export const ZOOM_STEP = 0.15;

export const MIX_STEP = 0.1;

export type FxSlot = 'bloom' | 'vignette' | 'strobe' | 'master';

export const FX_SLOTS: FxSlot[] = ['bloom', 'vignette', 'strobe', 'master'];

export function clampMix(value: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.max(0, Math.min(1, value));
}

export function clampZoom(value: number): number {
  if (Number.isNaN(value)) return 1;
  return Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, value));
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
