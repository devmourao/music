import { describe, expect, it } from 'vitest';
import {
  applyMix,
  clampContrast,
  clampMix,
  clampSaturation,
  clampStrobeHz,
  clampZoom,
  nextFxSlot,
  nextStrobeMode,
  strobeIntervalMs,
  zoomRadius,
} from './fx';

describe('fx mixes', () => {
  it('clamps mixes and zoom to safe ranges', () => {
    expect(clampMix(1.5)).toBe(1);
    expect(clampMix(-0.2)).toBe(0);
    expect(clampZoom(10)).toBe(2.5);
    expect(clampZoom(0.1)).toBe(0.5);
  });

  it('scales effects by mix and master', () => {
    expect(applyMix(0.6, 1, 1)).toBeCloseTo(0.6);
    expect(applyMix(0.6, 0.5, 1)).toBeCloseTo(0.3);
    expect(applyMix(0.6, 1, 0)).toBe(0);
  });

  it('moves the camera closer when zoom grows', () => {
    expect(zoomRadius(5, 2)).toBeLessThan(zoomRadius(5, 1));
  });

  it('cycles fx slots', () => {
    expect(nextFxSlot('bloom')).toBe('vignette');
    expect(nextFxSlot('master')).toBe('saturation');
  });

  it('clamps strobe rate and derives the half-cycle interval', () => {
    expect(clampStrobeHz(99)).toBe(12);
    expect(clampStrobeHz(0)).toBe(1);
    expect(strobeIntervalMs(4)).toBeCloseTo(125);
  });

  it('cycles strobe modes and clamps contrast', () => {
    expect(nextStrobeMode('white')).toBe('black');
    expect(nextStrobeMode('black')).toBe('color');
    expect(nextStrobeMode('color')).toBe('white');
    expect(clampContrast(9)).toBe(0.5);
    expect(clampContrast(-9)).toBe(-0.5);
    expect(clampContrast(0)).toBe(0);
  });

  it('clamps saturation to the usable vivid range', () => {
    expect(clampSaturation(0)).toBe(0);
    expect(clampSaturation(9)).toBe(0.6);
    expect(clampSaturation(-1)).toBe(0);
  });

  it('keeps the original four slots cycling in order', () => {
    expect(nextFxSlot('master')).toBe('saturation');
    expect(nextFxSlot('contrast')).toBe('bloom');
  });
});
