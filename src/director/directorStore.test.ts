import { describe, expect, it } from 'vitest';
import { liveRefs, transitionRef, useDirectorStore } from './directorStore';

describe('directorStore', () => {
  it('starts with safe defaults (strobe off)', () => {
    const state = useDirectorStore.getState();
    expect(state.strobeOn).toBe(false);
  });

  it('toggles strobe and kills all effects', () => {
    const { toggleStrobe, fireBurst, killAll } = useDirectorStore.getState();
    toggleStrobe();
    expect(useDirectorStore.getState().strobeOn).toBe(true);
    fireBurst();
    expect(liveRefs.burstId).toBeGreaterThan(0);
    killAll();
    expect(useDirectorStore.getState().strobeOn).toBe(false);
    expect(useDirectorStore.getState().burstCount).toBe(0);
    expect(liveRefs.burstId).toBe(0);
  });

  it('requests dissolves and hard cuts without touching the preset early', () => {
    const store = useDirectorStore.getState();
    store.setPreset(0);
    store.requestDissolve(3);
    expect(transitionRef.active).toBe(true);
    expect(transitionRef.to).toBe(3);
    expect(useDirectorStore.getState().activePresetId).toBe(0);
    store.hardCutNext();
    expect(transitionRef.active).toBe(false);
    expect(useDirectorStore.getState().activePresetId).toBe(1);
  });

  it('cycles duration and steps hue', () => {
    const store = useDirectorStore.getState();
    const first = store.transitionDuration;
    store.cycleDuration();
    expect(useDirectorStore.getState().transitionDuration).not.toBe(first);
    store.stepHue();
    expect(useDirectorStore.getState().hueShift).toBeGreaterThan(0);
  });

  it('zooms within limits and adjusts the selected mix', () => {    const store = useDirectorStore.getState();
    store.zoomIn();
    expect(useDirectorStore.getState().zoomTarget).toBeGreaterThan(1);
    store.zoomOut();
    store.zoomOut();
    expect(useDirectorStore.getState().zoomTarget).toBeLessThanOrEqual(1);
    store.cycleFxSlot();
    expect(useDirectorStore.getState().selectedFx).toBe('vignette');
    store.fxDown();
    expect(useDirectorStore.getState().mixVignette).toBeLessThan(1);
    store.fxUp();
    expect(useDirectorStore.getState().mixVignette).toBeCloseTo(1);
  });

  it('fires and hides the text overlay', () => {
    const store = useDirectorStore.getState();
    store.setOverlayText('Hello VJ');
    expect(useDirectorStore.getState().overlayText).toBe('Hello VJ');
    store.fireText();
    expect(useDirectorStore.getState().overlayVisible).toBe(true);
    const key = useDirectorStore.getState().overlayKey;
    store.fireText();
    expect(useDirectorStore.getState().overlayKey).toBe(key + 1);
    store.hideText();
    expect(useDirectorStore.getState().overlayVisible).toBe(false);
  });

  it('sets and clears the mesh texture', () => {
    const store = useDirectorStore.getState();
    store.setMeshTexture('blob:fake-url');
    expect(useDirectorStore.getState().meshTextureUrl).toBe('blob:fake-url');
    expect(useDirectorStore.getState().meshTextureStatus).toBe('loading');
    store.setMeshTextureStatus('ready');
    expect(useDirectorStore.getState().meshTextureStatus).toBe('ready');
    store.setMeshTextureStatus('error');
    expect(useDirectorStore.getState().meshTextureStatus).toBe('error');
    store.setMeshTexture(null);
    expect(useDirectorStore.getState().meshTextureUrl).toBeNull();
    expect(useDirectorStore.getState().meshTextureStatus).toBe('idle');
  });
});
