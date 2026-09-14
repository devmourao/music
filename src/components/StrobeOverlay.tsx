import { useEffect, useRef } from 'react';
import { useDirectorStore } from '../director/directorStore';
import { clampMix } from '../director/fx';

const FLASH_INTERVAL_MS = 120;
const FLASH_PEAK = 0.85;

export function StrobeOverlay() {
  const strobeOn = useDirectorStore((s) => s.strobeOn);
  const mixStrobe = useDirectorStore((s) => s.mixStrobe);
  const masterMix = useDirectorStore((s) => s.masterMix);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = divRef.current;
    const peak = FLASH_PEAK * clampMix(mixStrobe) * clampMix(masterMix);
    if (!strobeOn) {
      if (node) node.style.opacity = '0';
      return;
    }
    let visible = false;
    const id = window.setInterval(() => {
      visible = !visible;
      if (node) node.style.opacity = visible ? String(peak) : '0';
    }, FLASH_INTERVAL_MS);
    return () => {
      window.clearInterval(id);
      if (node) node.style.opacity = '0';
    };
  }, [strobeOn, mixStrobe, masterMix]);

  if (!strobeOn) return null;

  return (
    <div className="strobe-warning" role="alert">
      Strobe flashing — press S to stop immediately.
      <div ref={divRef} className="strobe-flash" />
    </div>
  );
}
