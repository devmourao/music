import { useEffect, useRef } from 'react';
import { readBands } from '../audio/audioBus';
import { useDirectorStore } from '../director/directorStore';
import { beatFlashColor, clampMix } from '../director/fx';
import { getPreset } from '../scenes/presets';

const BEAT_PEAK = 0.7;

export function BeatFlashOverlay() {
  const beatFlashOn = useDirectorStore((s) => s.beatFlashOn);
  const activePresetId = useDirectorStore((s) => s.activePresetId);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = divRef.current;
    if (!beatFlashOn) {
      if (node) node.style.opacity = '0';
      return;
    }
    node?.style.setProperty(
      'background',
      beatFlashColor(getPreset(useDirectorStore.getState().activePresetId).palette),
    );
    let raf = 0;
    const tick = () => {
      const { masterMix } = useDirectorStore.getState();
      const { bass } = readBands();
      if (node) {
        // Quadratic response: only real kicks punch through.
        node.style.opacity = String(
          bass * bass * BEAT_PEAK * clampMix(masterMix),
        );
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (node) node.style.opacity = '0';
    };
  }, [beatFlashOn, activePresetId]);

  if (!beatFlashOn) return null;

  return <div className="beat-flash" ref={divRef} />;
}
