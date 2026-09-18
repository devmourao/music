# Sprint Backlog — Sprint 19

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 19 — New Bases: Grid LED & Avatar |
| Milestone | M10 — Builder & Media 0.5.0 (part 2) |
| Planned Version | 0.5.0 |
| Start Date | 2026-11-10 |
| End Date | 2026-11-17 |
| Owner | Marcos Ferreira Mourão |

## 2. Sprint Goal

Deliver Grid LED and Avatar bases with reference presets.

## 3. Sprint Backlog Items

| Issue | Title | Type | Priority | Status |
| ----- | ----- | ---- | -------- | ------ |
| VJLAB-51 | Grid LED scene — Punch Club image + LED points reactive to bass/mids (Octagon Pulse) | Feature | Medium | New |
| VJLAB-52 | Avatar low-poly scene — human GLB with edge/fill materials and audio-driven bounce/sway (Chroma Bouncer) | Feature | Medium | New |

## 4. Acceptance Criteria

### VJLAB-51

* New scene component renders Plane with imageTexture + 32 instanced LED points on octagon.
* LEDs pulse on bass, chase on mids, flash on boost.
* One preset Octagon Pulse added to PRESETS (id 3).

### VJLAB-52

* New scene component loads low-poly GLB, renders with edge and fill materials.
* Edge color alternates on treble, fill pulses on bass, bounce/sway on mids.
* One preset Chroma Bouncer added to PRESETS (id 4).

## 5. Dependencies

| Dependency | Impact | Status |
| ---------- | ------ | ------ |
| Scene spec | Contract | Ready |
| Preset system | Data rows | Ready |

## 6. Risks and Mitigations

| Risk | Mitigation |
| ---- | ---------- |
| GLB size | Low-poly only |
| LED alignment | Hardcoded for Punch Club |

## 7. Definition of Done

* Code and docs updated (Living Docs).
* `npm test`, `npm run build`, `npm run lint` green.
* Live dogfood.
* Release gate per standards.

## 8. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial backlog for Sprint 19 | Marcos Ferreira Mourão |
