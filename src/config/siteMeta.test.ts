import { describe, expect, it } from 'vitest';
import { OWNER_META, SITE_META } from './siteMeta';

describe('siteMeta', () => {
  it('exposes project identity with a semver version', () => {
    expect(SITE_META.name).toBe('VJ Lab');
    expect(SITE_META.version).toMatch(/^\d+\.\d+\.\d+$/);
    expect(SITE_META.repoUrl).toContain('github.com/devmourao/vjlab');
    expect(SITE_META.demoUrl).toBe('https://vjlab.mourao.info');
  });

  it('exposes owner contact links', () => {
    expect(OWNER_META.github).toContain('github.com/devmourao');
    expect(OWNER_META.email).toContain('@');
    expect(OWNER_META.portfolio).toContain('mourao.info');
  });
});
