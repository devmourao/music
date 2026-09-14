import { SHORTCUT_MAP, useDirectorStore } from '../director/directorStore';

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
  const selectedValue =
    selectedFx === 'bloom'
      ? mixBloom
      : selectedFx === 'vignette'
        ? mixVignette
        : selectedFx === 'strobe'
          ? mixStrobe
          : masterMix;

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
        zoom {zoomTarget.toFixed(2)}x · {selectedFx} {selectedValue.toFixed(1)} ·
        S kills all
      </span>
    </div>
  );
}
