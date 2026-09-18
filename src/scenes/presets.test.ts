import { describe, expect, it } from 'vitest';
import {
  PLAYLIST,
  PRESETS,
  getPreset,
  nextPresetId,
  prevPresetId,
} from './presets';

describe('presets', () => {
  it('defines four presets on valid scenes', () => {
    expect(PRESETS).toHaveLength(4);
    for (const preset of PRESETS) {
      expect([0, 1, 2]).toContain(preset.scene);
      expect(preset.gain).toBeGreaterThan(0);
    }
  });

  it('covers every preset exactly once in the playlist', () => {
    expect([...PLAYLIST].sort((a, b) => a - b)).toEqual([0, 1, 2, 3]);
  });

  it('gives every preset a dark background', () => {
    for (const preset of PRESETS) {
      expect(preset.background).toMatch(/^#[0-9a-f]{6}$/i);
    }
  });

  it('wraps preset navigation', () => {
    expect(nextPresetId(3)).toBe(0);
    expect(prevPresetId(0)).toBe(3);
    expect(getPreset(-1).id).toBe(3);
  });
});
