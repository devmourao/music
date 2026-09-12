import type { SpectrumBands } from '../audio/spectrum';

export interface TriggerState {
  burstId: number;
}

export interface SceneParams {
  baseScale?: number;
  gain?: number;
  responsiveness?: number;
}

export interface SceneContract {
  audio: SpectrumBands;
  triggers: TriggerState;
  params: SceneParams;
  delta: number;
}

export const IDLE_TRIGGERS: TriggerState = { burstId: 0 };

export const DEFAULT_SCENE_PARAMS: Required<SceneParams> = {
  baseScale: 1,
  gain: 1.5,
  responsiveness: 8,
};

export function bassTargetScale(
  bass: number,
  baseScale: number = DEFAULT_SCENE_PARAMS.baseScale,
  gain: number = DEFAULT_SCENE_PARAMS.gain,
): number {
  return baseScale * (1 + Math.max(0, Math.min(1, bass)) * gain);
}

export function reactiveScale(
  current: number,
  target: number,
  delta: number,
  responsiveness: number = DEFAULT_SCENE_PARAMS.responsiveness,
): number {
  const safeDelta = Math.max(0, Math.min(0.1, delta));
  const t = 1 - Math.exp(-Math.max(0, responsiveness) * safeDelta);
  return current + (target - current) * t;
}
