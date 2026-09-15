import { SHORTCUT_MAP, useDirectorStore } from '../director/directorStore';
import type { FxSlot } from '../director/fx';

const SLOT_ORDER: FxSlot[] = ['bloom', 'vignette', 'strobe', 'master'];

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
  const mixes: Record<FxSlot, number> = {
    bloom: mixBloom,
    vignette: mixVignette,
    strobe: mixStrobe,
    master: masterMix,
  };

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
        strobe {strobeOn ? 'ON' : 'off'} · bursts {burstCount} · fx{' '}
        {transitionDuration.toFixed(1)}s · hue {Math.round(hueShift * 8)}/8 ·
        zoom {zoomTarget.toFixed(2)}x · S kills all
      </span>
      <div className="mix-bars" data-testid="mix-bars">
        {SLOT_ORDER.map((slot) => (
          <div
            key={slot}
            className={slot === selectedFx ? 'mix-row selected' : 'mix-row'}
          >
            <span>{slot}</span>
            <div className="mix-track">
              <div
                className="mix-fill"
                style={{ width: `${Math.round(mixes[slot] * 100)}%` }}
              />
            </div>
            <span>{mixes[slot].toFixed(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
