import { describe, expect, it } from 'vitest';
import {
  DEFAULT_SCENE_PARAMS,
  bassTargetScale,
  reactiveScale,
} from './sceneContract';

describe('bassTargetScale', () => {
  it('returns base scale on silence', () => {
    expect(bassTargetScale(0)).toBeCloseTo(DEFAULT_SCENE_PARAMS.baseScale);
  });

  it('grows with bass energy', () => {
    const quiet = bassTargetScale(0.2);
    const loud = bassTargetScale(0.9);
    expect(loud).toBeGreaterThan(quiet);
  });
});

describe('reactiveScale', () => {
  it('moves toward the target without overshooting', () => {
    const next = reactiveScale(1, 2, 1 / 60, 8);
    expect(next).toBeGreaterThan(1);
    expect(next).toBeLessThan(2);
  });

  it('is frame-rate independent in direction', () => {
    const small = reactiveScale(1, 2, 1 / 120, 8);
    const large = reactiveScale(1, 2, 1 / 30, 8);
    expect(large).toBeGreaterThan(small);
  });
});
