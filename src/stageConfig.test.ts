import { describe, expect, it } from 'vitest';
import { CAMERA_POSITION, CUBE_SIZE, STAGE_BACKGROUND } from './stageConfig';

describe('stageConfig', () => {
  it('uses a black background for the blank stage', () => {
    expect(STAGE_BACKGROUND).toBe('#000000');
  });

  it('defines a unit cube', () => {
    expect(CUBE_SIZE).toEqual([1, 1, 1]);
  });

  it('places the camera in front of the stage', () => {
    expect(CAMERA_POSITION[2]).toBeGreaterThan(0);
  });
});
