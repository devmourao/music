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
});
