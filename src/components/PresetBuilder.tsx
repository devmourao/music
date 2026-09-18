import { useState } from 'react';
import { getPreset, PRESETS, type ScenePreset } from '../scenes/presets';
import { useDirectorStore } from '../director/directorStore';

export function PresetBuilder() {
  const [presets, setPresets] = useState<ScenePreset[]>([...PRESETS]);
  const [selectedId, setSelectedId] = useState<number>(presets[0]?.id ?? 0);
  const [palette, setPalette] = useState(presets[0]?.palette.primary ?? '#7dd3fc');
  const [gain, setGain] = useState(presets[0]?.gain ?? 1);
  const [speed, setSpeed] = useState(presets[0]?.speed ?? 1);

  const selected = presets.find((p) => p.id === selectedId) ?? presets[0];

  const save = () => {
    const newPreset: ScenePreset = {
      id: Math.max(...presets.map((p) => p.id)) + 1,
      name: `Custom ${presets.length + 1}`,
      scene: selected.scene,
      palette: { primary: palette, emissive: palette },
      background: selected.background,
      gain,
      speed,
    };
    setPresets((p) => [...p, newPreset]);
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify({ version: '1.0', presets }, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vjlab-presets-v1.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        const imported: ScenePreset[] = Array.isArray(data) ? data : data.presets;
        if (!Array.isArray(imported)) throw new Error('Invalid');
        const next = imported.map((p, i) => ({
          ...p,
          id: Math.max(...presets.map((x) => x.id)) + 1 + i,
        }));
        setPresets((p) => [...p, ...next]);
      } catch {
        alert('Invalid presets file');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="preset-builder" data-testid="preset-builder">
      <strong>Preset Builder</strong>
      <div className="preset-builder-row">
        <div className="preset-browser">
          <span className="playlist-label">Library</span>
          <ul>
            {presets.map((p) => (
              <li key={p.id} className={p.id === selectedId ? 'selected' : ''}>
                <button type="button" onClick={() => setSelectedId(p.id)}>
                  <span
                    className="strobe-swatch"
                    style={{ background: p.palette.primary }}
                    aria-hidden
                  />
                  {p.name}
                </button>
                <button
                  type="button"
                  onClick={() => useDirectorStore.getState().requestDissolve(p.id)}
                >
                  Load
                </button>
              </li>
            ))}
          </ul>
          <div className="audio-panel-row">
            <button type="button" onClick={exportJson}>
              Export
            </button>
            <label className="audio-panel-row">
              <span>Import</span>
              <input type="file" accept=".json" onChange={importJson} />
            </label>
          </div>
        </div>
        <div className="preset-preview">
          <span className="playlist-label">Preview: {getPreset(selectedId).name}</span>
          <div
            className="preset-preview-box"
            style={{ background: selected.background, borderColor: palette }}
          >
            <span style={{ color: palette }}>● {selected.scene === 0 ? 'Particles' : selected.scene === 1 ? 'Mesh' : 'Tunnel'}</span>
          </div>
        </div>
        <div className="preset-knobs">
          <label>
            Palette <input type="color" value={palette} onChange={(e) => setPalette(e.target.value)} />
          </label>
          <label>
            Gain {gain.toFixed(1)} <input type="range" min={0.4} max={2} step={0.1} value={gain} onChange={(e) => setGain(Number(e.target.value))} />
          </label>
          <label>
            Speed {speed.toFixed(1)} <input type="range" min={0.5} max={2} step={0.1} value={speed} onChange={(e) => setSpeed(Number(e.target.value))} />
          </label>
          <button type="button" onClick={save}>
            Save as new preset
          </button>
        </div>
      </div>
    </div>
  );
}
