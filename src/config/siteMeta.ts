import { version } from '../../package.json';

export const SITE_META = {
  name: 'VJ Lab',
  tagline: 'Browser instrument for audio-reactive visuals',
  repoUrl: 'https://github.com/devmourao/vjlab',
  demoUrl: 'https://vjlab.mourao.info',
  version,
  stack: ['React', 'TypeScript', 'Three.js', 'Web Audio API', 'Zustand'],
} as const;

export const OWNER_META = {
  name: 'Marcos Ferreira Mourão',
  github: 'https://github.com/devmourao',
  portfolio: 'https://dev.mourao.info',
  email: 'dev@mourao.info',
} as const;
