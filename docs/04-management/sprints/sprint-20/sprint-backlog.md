# Sprint Backlog — Sprint 20

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 20 — Fractal Full-Screen |
| Milestone | M10 — Builder & Media 0.5.0 (part 3) |
| Planned Version | 0.5.0 |
| Start Date | 2026-11-18 |
| End Date | 2026-11-25 |
| Owner | Marcos Ferreira Mourão |

## 2. Sprint Goal

Deliver Fractal full-screen base.

## 3. Sprint Backlog Items

| Issue | Title | Type | Priority | Status |
| ----- | ----- | ---- | -------- | ------ |
| VJLAB-55 | Fractal full-screen — Mandelbrot/Julia shader with zoom/rotation reactive to bass/mids | Feature | Medium | New |

## 4. Acceptance Criteria

* New `FractalScene.tsx` with full-screen Plane + ShaderMaterial (Mandelbrot/Julia, 64 iterations) and uniforms time, zoom, palette.
* Preset `Fractal Bloom` added to PRESETS (id 5, key 6), scene 5 or via instances, palette reactive.
* Zoom reacts to bass, rotation to mids, palette to treble/hueShift.
* No new shortcut overwrite (uses 6).

## 5. Dependencies

| Dependency | Impact | Status |
| ---------- | ------ | ------ |
| Base catalog | Spec | Ready |
| Preset system | Data | Ready |

## 6. Risks and Mitigations

| Risk | Mitigation |
| ---- | ---------- |
| GPU load | Lite fallback |

## 7. Definition of Done

* Code and docs updated (Living Docs).
* `npm test`, `npm run build`, `npm run lint` green.
* Live dogfood.
* Release gate per standards.

## 8. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial backlog for Sprint 20 | Marcos Ferreira Mourão |
