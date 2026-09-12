import { IDLE_BANDS, type SpectrumBands } from './spectrum';

interface AudioBus {
  current: SpectrumBands;
}

export const audioBus: AudioBus = {
  current: { ...IDLE_BANDS },
};

export function publishBands(bands: SpectrumBands): void {
  audioBus.current = bands;
}

export function readBands(): SpectrumBands {
  return audioBus.current;
}
