import { describe, expect, it } from 'vitest';
import {
  DEFAULT_TRANSITION_DURATION,
  dissolveState,
  nextDuration,
} from './transition';

describe('transition durations', () => {
  it('cycles through available durations', () => {
    expect(nextDuration(0.3)).toBe(0.6);
    expect(nextDuration(0.6)).toBe(1.2);
    expect(nextDuration(1.2)).toBe(0.3);
    expect(nextDuration(DEFAULT_TRANSITION_DURATION)).toBe(1.2);
  });
});

describe('dissolveState', () => {
  it('fades out before the midpoint without swapping', () => {
    const state = dissolveState(0.15, 0.6);
    expect(state.opacity).toBeCloseTo(0.5);
    expect(state.shouldSwap).toBe(false);
    expect(state.finished).toBe(false);
  });

  it('swaps at the midpoint and fades back in', () => {
    const mid = dissolveState(0.3, 0.6);
    expect(mid.shouldSwap).toBe(true);
    expect(mid.opacity).toBeCloseTo(1);
    const end = dissolveState(0.6, 0.6);
    expect(end.finished).toBe(true);
    expect(end.opacity).toBe(0);
  });
});
