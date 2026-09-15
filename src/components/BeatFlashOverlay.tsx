import { useEffect, useRef } from 'react';
import { readBands } from '../audio/audioBus';
import { useDirectorStore } from '../director/directorStore';
import { clampMix } from '../director/fx';

const BEAT_PEAK = 0.45;

export function BeatFlashOverlay() {
  const beatFlashOn = useDirectorStore((s) => s.beatFlashOn);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = divRef.current;
    if (!beatFlashOn) {
      if (node) node.style.opacity = '0';
      return;
    }
    let raf = 0;
    const tick = () => {
      const { masterMix } = useDirectorStore.getState();
      const { bass } = readBands();
      if (node) {
        node.style.opacity = String(
          bass * BEAT_PEAK * clampMix(masterMix),
        );
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (node) node.style.opacity = '0';
    };
  }, [beatFlashOn]);

  if (!beatFlashOn) return null;

  return <div className="beat-flash" ref={divRef} />;
}
