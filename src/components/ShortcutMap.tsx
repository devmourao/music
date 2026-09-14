import { SHORTCUT_MAP, useDirectorStore } from '../director/directorStore';

export function ShortcutMap() {
  const strobeOn = useDirectorStore((s) => s.strobeOn);
  const burstCount = useDirectorStore((s) => s.burstCount);
  const transitionDuration = useDirectorStore((s) => s.transitionDuration);
  const hueShift = useDirectorStore((s) => s.hueShift);

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
        {transitionDuration.toFixed(1)}s · hue {Math.round(hueShift * 8)}/8 · S
        kills all
      </span>
    </div>
  );
}
