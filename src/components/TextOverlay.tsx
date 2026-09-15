import { useEffect } from 'react';
import { useDirectorStore } from '../director/directorStore';

const TEXT_VISIBLE_MS = 2600;

export function TextOverlay() {
  const overlayText = useDirectorStore((s) => s.overlayText);
  const overlayVisible = useDirectorStore((s) => s.overlayVisible);
  const overlayKey = useDirectorStore((s) => s.overlayKey);

  useEffect(() => {
    if (!overlayVisible) return;
    const id = window.setTimeout(() => {
      useDirectorStore.getState().hideText();
    }, TEXT_VISIBLE_MS);
    return () => window.clearTimeout(id);
  }, [overlayVisible, overlayKey]);

  if (!overlayVisible) return null;

  return (
    <div className="text-veil" data-testid="text-overlay">
      <span key={overlayKey} className="text-pop">
        {overlayText || 'VJ LAB'}
      </span>
    </div>
  );
}
