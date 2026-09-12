export interface SpectrumBands {
  bass: number;
  mids: number;
  treble: number;
}

export const FFT_SIZE = 2048;

export const SMOOTHING_TIME_CONSTANT = 0.8;

export const LERP_FACTOR = 0.25;

export const BASS_MAX_HZ = 250;

export const MIDS_MAX_HZ = 2000;

export function clamp01(value: number): number {
  if (Number.isNaN(value)) return 0;
  if (value < 0) return 0;
  if (value > 1) return 1;
  return value;
}

export function bandAverages(
  frequencyData: ArrayLike<number>,
  sampleRate: number,
  fftSize: number = FFT_SIZE,
): SpectrumBands {
  const binCount = frequencyData.length;
  if (binCount === 0 || sampleRate <= 0) {
    return { bass: 0, mids: 0, treble: 0 };
  }

  const nyquist = sampleRate / 2;
  const binHz = nyquist / binCount;

  let bassSum = 0;
  let midsSum = 0;
  let trebleSum = 0;
  let bassN = 0;
  let midsN = 0;
  let trebleN = 0;

  void fftSize;

  for (let i = 0; i < binCount; i += 1) {
    const magnitude = (frequencyData[i] ?? 0) / 255;
    const freq = i * binHz;
    if (freq < BASS_MAX_HZ) {
      bassSum += magnitude;
      bassN += 1;
    } else if (freq < MIDS_MAX_HZ) {
      midsSum += magnitude;
      midsN += 1;
    } else {
      trebleSum += magnitude;
      trebleN += 1;
    }
  }

  return {
    bass: clamp01(bassN === 0 ? 0 : bassSum / bassN),
    mids: clamp01(midsN === 0 ? 0 : midsSum / midsN),
    treble: clamp01(trebleN === 0 ? 0 : trebleSum / trebleN),
  };
}

export function smoothBands(
  previous: SpectrumBands,
  target: SpectrumBands,
  factor: number = LERP_FACTOR,
): SpectrumBands {
  const f = clamp01(factor);
  return {
    bass: clamp01(previous.bass + (target.bass - previous.bass) * f),
    mids: clamp01(previous.mids + (target.mids - previous.mids) * f),
    treble: clamp01(previous.treble + (target.treble - previous.treble) * f),
  };
}

export const IDLE_BANDS: SpectrumBands = { bass: 0, mids: 0, treble: 0 };
