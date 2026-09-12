import type { ChangeEvent } from 'react';
import type { AudioEngineApi } from '../audio/useAudioEngine';

export function AudioPanel({ engine }: { engine: AudioEngineApi }) {
  const onFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) engine.loadFile(file);
  };

  return (
    <div className="audio-panel">
      <label className="audio-panel-row">
        <span>Track (.mp3)</span>
        <input type="file" accept=".mp3,audio/*" onChange={onFile} />
      </label>
      <div className="audio-panel-row">
        <button type="button" onClick={() => void engine.toggle()}>
          {engine.isPlaying ? 'Pause' : 'Play'}
        </button>
        <span data-testid="audio-status">
          {engine.fileName ?? 'No file loaded'} — bass {engine.spectrum.bass.toFixed(2)} / mids{' '}
          {engine.spectrum.mids.toFixed(2)} / treble {engine.spectrum.treble.toFixed(2)}
        </span>
      </div>
      {engine.error ? <p className="audio-error">{engine.error}</p> : null}
      <p className="audio-hint">Open the console to watch the spectrum follow the beat.</p>
    </div>
  );
}
