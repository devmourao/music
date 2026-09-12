import { describe, expect, it } from 'vitest';
import {
  BASS_MAX_HZ,
  bandAverages,
  clamp01,
  smoothBands,
} from './spectrum';

function synthBins(
  length: number,
  sampleRate: number,
  fill: (freqHz: number) => number,
): Uint8Array {
  const data = new Uint8Array(length);
  const nyquist = sampleRate / 2;
  const binHz = nyquist / length;
  for (let i = 0; i < length; i += 1) {
    data[i] = Math.round(Math.max(0, Math.min(255, fill(i * binHz))));
  }
  return data;
}

describe('clamp01', () => {
  it('clamps out-of-range values', () => {
    expect(clamp01(-0.5)).toBe(0);
    expect(clamp01(1.5)).toBe(1);
    expect(clamp01(0.4)).toBeCloseTo(0.4);
  });
});

describe('bandAverages', () => {
  it('returns zeros for empty input', () => {
    expect(bandAverages(new Uint8Array(0), 48000)).toEqual({
      bass: 0,
      mids: 0,
      treble: 0,
    });
  });

  it('detects bass energy below 250 Hz', () => {
    const sampleRate = 48000;
    const bins = synthBins(1024, sampleRate, (freq) =>
      freq < BASS_MAX_HZ ? 255 : 0,
    );
    const bands = bandAverages(bins, sampleRate);
    expect(bands.bass).toBeCloseTo(1, 2);
    expect(bands.mids).toBeCloseTo(0, 2);
    expect(bands.treble).toBeCloseTo(0, 2);
  });

  it('normalizes magnitudes to 0..1', () => {
    const sampleRate = 48000;
    const bins = synthBins(1024, sampleRate, () => 128);
    const bands = bandAverages(bins, sampleRate);
    expect(bands.bass).toBeGreaterThan(0.4);
    expect(bands.bass).toBeLessThan(0.6);
  });
});

describe('smoothBands', () => {
  it('interpolates toward the target without overshooting', () => {
    const prev = { bass: 0, mids: 0.5, treble: 1 };
    const target = { bass: 1, mids: 0.5, treble: 0 };
    const next = smoothBands(prev, target, 0.5);
    expect(next.bass).toBeCloseTo(0.5);
    expect(next.mids).toBeCloseTo(0.5);
    expect(next.treble).toBeCloseTo(0.5);
  });
});
