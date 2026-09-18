import { describe, expect, it } from 'vitest';
import { useDirectorStore } from '../director/directorStore';
import {
  RING_COUNT,
  RING_SPACING,
  meshDisplacement,
  particleScale,
  wrapRingZ,
} from './sceneMath';

describe('scene factory helpers', () => {
  it('scales particles with treble', () => {
    expect(particleScale(0)).toBeLessThan(particleScale(1));
  });

  it('displaces mesh vertices with bass', () => {
    const quiet = meshDisplacement(0, 0, 0.5, 0.5, 0.5, 1);
    const loud = meshDisplacement(1, 0.5, 0.5, 0.5, 0.5, 1);
    expect(Math.abs(loud)).toBeGreaterThanOrEqual(Math.abs(quiet));
  });

  it('wraps tunnel rings within the span', () => {
    expect(wrapRingZ(5)).toBeLessThanOrEqual(0);
    expect(wrapRingZ(-100)).toBeGreaterThanOrEqual(
      -RING_COUNT * RING_SPACING - 0.01,
    );
  });

  it('switches presets by id', () => {
    useDirectorStore.getState().setPreset(2);
    expect(useDirectorStore.getState().activePresetId).toBe(2);
    useDirectorStore.getState().setPreset(0);
    expect(useDirectorStore.getState().activePresetId).toBe(0);
    useDirectorStore.getState().nextPreset();
    expect(useDirectorStore.getState().activePresetId).toBe(1);
    useDirectorStore.getState().prevPreset();
    expect(useDirectorStore.getState().activePresetId).toBe(0);
  });
});
