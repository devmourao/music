import { useEffect, useRef } from 'react';
import { useDirectorStore } from '../director/directorStore';

const FLASH_INTERVAL_MS = 120;

export function StrobeOverlay() {
  const strobeOn = useDirectorStore((s) => s.strobeOn);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = divRef.current;
    if (!strobeOn) {
      if (node) node.style.opacity = '0';
      return;
    }
    let visible = false;
    const id = window.setInterval(() => {
      visible = !visible;
      if (node) node.style.opacity = visible ? '0.85' : '0';
    }, FLASH_INTERVAL_MS);
    return () => {
      window.clearInterval(id);
      if (node) node.style.opacity = '0';
    };
  }, [strobeOn]);

  if (!strobeOn) return null;

  return (
    <div className="strobe-warning" role="alert">
      Strobe flashing — press S to stop immediately.
      <div ref={divRef} className="strobe-flash" />
    </div>
  );
}
