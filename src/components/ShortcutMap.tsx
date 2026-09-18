import { SHORTCUT_MAP, useDirectorStore } from '../director/directorStore';
import {
  CONTRAST_MAX,
  CONTRAST_MIN,
  SATURATION_MAX,
  STROBE_MAX_HZ,
  STROBE_MIN_HZ,
  ZOOM_MAX,
  ZOOM_MIN,
  type FxSlot,
} from '../director/fx';
import { TRANSITION_DURATIONS } from '../director/transition';

const SLOT_ORDER: FxSlot[] = [
  'saturation',
  'contrast',
  'bloom',
  'vignette',
  'strobe',
  'master',
];

function slotFraction(slot: FxSlot, value: number): number {
  if (slot === 'contrast') {
    return (value - CONTRAST_MIN) / (CONTRAST_MAX - CONTRAST_MIN);
  }
  if (slot === 'saturation') {
    return value / SATURATION_MAX;
  }
  return value;
}

function transportFraction(
  kind: 'strobe' | 'zoom' | 'hue' | 'duration',
  value: number,
): number {
  if (kind === 'strobe')
    return (value - STROBE_MIN_HZ) / (STROBE_MAX_HZ - STROBE_MIN_HZ);
  if (kind === 'zoom') return (value - ZOOM_MIN) / (ZOOM_MAX - ZOOM_MIN);
  if (kind === 'hue') return value % 1;
  const idx = TRANSITION_DURATIONS.indexOf(value);
  if (idx === -1) return 0.5;
  return idx / (TRANSITION_DURATIONS.length - 1);
}

export function ShortcutMap() {
  const strobeOn = useDirectorStore((s) => s.strobeOn);
  const burstCount = useDirectorStore((s) => s.burstCount);
  const transitionDuration = useDirectorStore((s) => s.transitionDuration);
  const hueShift = useDirectorStore((s) => s.hueShift);
  const zoomTarget = useDirectorStore((s) => s.zoomTarget);
  const selectedFx = useDirectorStore((s) => s.selectedFx);
  const mixBloom = useDirectorStore((s) => s.mixBloom);
  const mixVignette = useDirectorStore((s) => s.mixVignette);
  const mixStrobe = useDirectorStore((s) => s.mixStrobe);
  const masterMix = useDirectorStore((s) => s.masterMix);
  const colorSaturation = useDirectorStore((s) => s.colorSaturation);
  const colorContrast = useDirectorStore((s) => s.colorContrast);
  const strobeMode = useDirectorStore((s) => s.strobeMode);
  const strobeRateHz = useDirectorStore((s) => s.strobeRateHz);
  const vhsOn = useDirectorStore((s) => s.vhsOn);
  const rgbOn = useDirectorStore((s) => s.rgbOn);
  const beatFlashOn = useDirectorStore((s) => s.beatFlashOn);
  const fxBypassed = useDirectorStore((s) => s.fxBypassed);
  const liteOn = useDirectorStore((s) => s.liteOn);
  const autoPilotOn = useDirectorStore((s) => s.autoPilotOn);
  const mixes: Record<FxSlot, number> = {
    bloom: mixBloom,
    vignette: mixVignette,
    strobe: mixStrobe,
    master: masterMix,
    saturation: colorSaturation,
    contrast: colorContrast,
  };
  const selectedValue = mixes[selectedFx];

  return (
    <div className="shortcut-map">
      <strong>VJ Desk</strong>
      <ul>
        {SHORTCUT_MAP.map((s) => (
          <li key={s.key}>
            <code>{s.key}</code> — {s.action}
          </li>
        ))}
      </ul>
      <span data-testid="desk-status">
        {selectedFx} {selectedValue.toFixed(1)} · S kills all
      </span>
      <div className="desk-groups" data-testid="desk-groups">
        <div className="desk-group">
          <span className="desk-group-label">STROBE</span>
          <span
            className={`pill pill-strobe pill-${strobeMode} ${strobeOn ? 'on' : 'off'}`}
            title={`Strobe ${strobeMode} ${strobeRateHz}Hz`}
          >
            {strobeMode} {strobeRateHz}Hz {strobeOn ? 'ON' : 'off'}
          </span>
        </div>
        <div className="desk-group">
          <span className="desk-group-label">TRANSPORT</span>
          <div className="transport-bars" data-testid="transport-bars">
            <div className="transport-row">
              <span>Hz</span>
              <div className="mix-track">
                <div
                  className="mix-fill"
                  style={{
                    width: `${Math.round(transportFraction('strobe', strobeRateHz) * 100)}%`,
                  }}
                />
              </div>
              <span>{strobeRateHz}</span>
            </div>
            <div className="transport-row">
              <span>FX</span>
              <div className="mix-track">
                <div
                  className="mix-fill"
                  style={{
                    width: `${Math.round(transportFraction('duration', transitionDuration) * 100)}%`,
                  }}
                />
              </div>
              <span>{transitionDuration.toFixed(1)}s</span>
            </div>
            <div className="transport-row">
              <span>HUE</span>
              <div className="mix-track">
                <div
                  className="mix-fill"
                  style={{
                    width: `${Math.round(transportFraction('hue', hueShift) * 100)}%`,
                    background: `hsl(${Math.round(hueShift * 360)} 100% 50%)`,
                  }}
                />
              </div>
              <span>{Math.round(hueShift * 8)}/8</span>
            </div>
            <div className="transport-row">
              <span>ZOOM</span>
              <div className="mix-track">
                <div
                  className="mix-fill"
                  style={{
                    width: `${Math.round(transportFraction('zoom', zoomTarget) * 100)}%`,
                  }}
                />
              </div>
              <span>{zoomTarget.toFixed(2)}x</span>
            </div>
          </div>
        </div>
        <div className="desk-group">
          <span className="desk-group-label">FLAGS</span>
          <div className="desk-pills" data-testid="desk-pills">
            <span className={`pill pill-burst on`}>BURSTS {burstCount}</span>
            <span className={`pill ${vhsOn ? 'on pill-vhs' : 'off'}`}>VHS</span>
            <span className={`pill ${rgbOn ? 'on pill-rgb' : 'off'}`}>RGB</span>
            <span className={`pill ${beatFlashOn ? 'on pill-beat' : 'off'}`}>BEAT</span>
            <span className={`pill ${fxBypassed ? 'on pill-bypass' : 'off'}`}>BYPASS</span>
            <span className={`pill ${liteOn ? 'on pill-lite' : 'off'}`}>LITE</span>
            <span className={`pill ${autoPilotOn ? 'on pill-auto' : 'off'}`}>AUTO</span>
          </div>
        </div>
      </div>
      <div className="mix-bars" data-testid="mix-bars">
        {SLOT_ORDER.map((slot) => (
          <div
            key={slot}
            role="button"
            tabIndex={0}
            onClick={() => useDirectorStore.getState().selectFxSlot(slot)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                useDirectorStore.getState().selectFxSlot(slot);
              }
            }}
            className={slot === selectedFx ? 'mix-row selected' : 'mix-row'}
          >
            <span>{slot}</span>
            <div className="mix-track">
              <div
                className="mix-fill"
                style={{
                  width: `${Math.round(slotFraction(slot, mixes[slot]) * 100)}%`,
                }}
              />
            </div>
            <span>
              {slot === 'contrast' || slot === 'saturation'
                ? mixes[slot].toFixed(2)
                : mixes[slot].toFixed(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
