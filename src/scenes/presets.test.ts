import { describe, expect, it } from 'vitest';
import {
  PLAYLIST,
  PRESETS,
  getPreset,
  nextPresetId,
  prevPresetId,
} from './presets';

describe('presets', () => {
  it('defines six presets on valid scenes', () => {
    expect(PRESETS).toHaveLength(6);
    for (const preset of PRESETS) {
      expect([0, 1, 2]).toContain(preset.scene);
      expect(preset.gain).toBeGreaterThan(0);
    }
  });

  it('covers every preset exactly once in the playlist', () => {
    expect([...PLAYLIST].sort((a, b) => a - b)).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it('gives every preset a dark background', () => {
    for (const preset of PRESETS) {
      expect(preset.background).toMatch(/^#[0-9a-f]{6}$/i);
    }
  });

  it('wraps preset navigation', () => {
    expect(nextPresetId(5)).toBe(0);
    expect(prevPresetId(0)).toBe(5);
    expect(getPreset(-1).id).toBe(5);
  });
});
