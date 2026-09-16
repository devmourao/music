# VJ Lab

Interactive web-based Video Jockeying instrument and audio-reactive generative art. Drop a local `.mp3` and play three live 3D scenes from the keyboard.

Live demo:  https://vjlab.netlify.app/

## Features

* Local `.mp3` upload with real-time FFT analysis (bass, mids, treble).
* Three base scenes on a shared contract: particle field, deformable mesh, light tunnel.
* Six presets as pure data (palette, gain, speed) with playlist navigation.
* Keyboard desk with global post-processing, strobe warning and instant kill switch.
* Zero-cost static build; no backend, no accounts.

## Controls

| Key | Action |
| --- | ------ |
| 1–6 | Select preset |
| N / P | Next / previous preset in playlist |
| Space | Toggle strobe (default off) |
| B | Fire burst impulse |
| Arrows | Nudge camera |
| S | Kill all effects |

## Stack

React 19, TypeScript, Three.js (React Three Fiber), Web Audio API, Zustand, Vitest.

## Local Development

```bash
npm install
npm run dev
npm test
npm run build
npm run lint
```

## Documentation

Project docs live in `docs/` (business, architecture, design, management). Preview locally with `npm run docs:dev`.

## Author

Marcos Ferreira Mourão — https://dev.mourao.info — dev@mourao.info
