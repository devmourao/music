import { useState, type ChangeEvent } from 'react';
import type { AudioEngineApi } from '../audio/useAudioEngine';
import { useDirectorStore } from '../director/directorStore';

interface QueueItem {
  id: string;
  file: File;
}

export function AudioPanel({ engine }: { engine: AudioEngineApi }) {
  const overlayText = useDirectorStore((s) => s.overlayText);
  const meshTextureUrl = useDirectorStore((s) => s.meshTextureUrl);
  const meshTextureStatus = useDirectorStore((s) => s.meshTextureStatus);
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const onFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    engine.loadFile(file);
    setQueue((q) => [...q, { id: `${Date.now()}-${file.name}`, file }]);
    event.target.value = '';
  };
  const move = (idx: number, dir: -1 | 1) => {
    setQueue((q) => {
      const next = [...q];
      const target = idx + dir;
      if (target < 0 || target >= next.length) return q;
      [next[idx], next[target]] = [next[target], next[idx]];
      return next;
    });
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
      {queue.length > 0 && (
        <div className="playlist" data-testid="music-playlist">
          <span className="playlist-label">Queue (session only)</span>
          <ul>
            {queue.map((item, idx) => (
              <li key={item.id} className="playlist-row">
                <button type="button" onClick={() => engine.loadFile(item.file)}>
                  Load
                </button>
                <span className="playlist-name">{item.file.name}</span>
                <button type="button" onClick={() => move(idx, -1)} disabled={idx === 0}>
                  ▲
                </button>
                <button
                  type="button"
                  onClick={() => move(idx, 1)}
                  disabled={idx === queue.length - 1}
                >
                  ▼
                </button>
                <button
                  type="button"
                  onClick={() => setQueue((q) => q.filter((x) => x.id !== item.id))}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => setQueue([])}>
            Clear queue
          </button>
        </div>
      )}
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
      <div className="spectrum-bars" data-testid="spectrum-bars">
        <div className="spectrum-row">
          <span>BASS</span>
          <div className="mix-track">
            <div
              className="mix-fill"
              style={{ width: `${Math.round(engine.spectrum.bass * 100)}%` }}
            />
          </div>
        </div>
        <div className="spectrum-row">
          <span>MIDS</span>
          <div className="mix-track">
            <div
              className="mix-fill"
              style={{ width: `${Math.round(engine.spectrum.mids * 100)}%` }}
            />
          </div>
        </div>
        <div className="spectrum-row">
          <span>TREBLE</span>
          <div className="mix-track">
            <div
              className="mix-fill"
              style={{ width: `${Math.round(engine.spectrum.treble * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
