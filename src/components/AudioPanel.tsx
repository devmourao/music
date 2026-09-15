import type { ChangeEvent } from 'react';
import type { AudioEngineApi } from '../audio/useAudioEngine';
import { useDirectorStore } from '../director/directorStore';

export function AudioPanel({ engine }: { engine: AudioEngineApi }) {
  const overlayText = useDirectorStore((s) => s.overlayText);
  const meshTextureUrl = useDirectorStore((s) => s.meshTextureUrl);
  const meshTextureStatus = useDirectorStore((s) => s.meshTextureStatus);
  const onFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) engine.loadFile(file);
  };
  const onImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    const previous = useDirectorStore.getState().meshTextureUrl;
    if (previous) URL.revokeObjectURL(previous);
    useDirectorStore.getState().setMeshTexture(URL.createObjectURL(file));
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
      <label className="audio-panel-row">
        <span>Mesh image</span>
        <input type="file" accept="image/png,image/jpeg" onChange={onImage} />
        {meshTextureUrl ? (
          <button
            type="button"
            onClick={() => {
              URL.revokeObjectURL(meshTextureUrl);
              useDirectorStore.getState().setMeshTexture(null);
            }}
          >
            Clear
          </button>
        ) : null}
        {meshTextureUrl ? (
          <span data-testid="texture-status">
            {meshTextureStatus === 'ready'
              ? 'Image applied'
              : meshTextureStatus === 'error'
                ? 'Image failed — try PNG/JPG'
                : 'Loading image…'}
          </span>
        ) : null}
      </label>
      <label className="audio-panel-row">
        <span>Overlay (T)</span>
        <input
          type="text"
          maxLength={60}
          value={overlayText}
          placeholder="VJ LAB"
          onChange={(event) =>
            useDirectorStore.getState().setOverlayText(event.target.value)
          }
        />
      </label>
      <p className="audio-hint">Open the console to watch the spectrum follow the beat.</p>
    </div>
  );
}
