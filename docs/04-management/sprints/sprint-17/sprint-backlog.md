# Sprint Backlog — Sprint 17

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 17 — Playlists v0.4.0 |
| Milestone | M9 — Playlists 0.4.0 |
| Planned Version | 0.4.0 |
| Start Date | 2026-10-25 |
| End Date | 2026-11-01 |
| Owner | Marcos Ferreira Mourão |

## 2. Sprint Goal

Deliver session-based queues for local music and effect presets.

## 3. Sprint Backlog Items

| Issue | Title | Type | Priority | Status |
| ----- | ----- | ---- | -------- | ------ |
| VJLAB-45 | Local music playlist — queue, reorder and load local tracks (session) | Feature | Medium | New |
| VJLAB-46 | Effects preset playlist — queue, reorder and save effect presets as playlist | Feature | Medium | New |

## 4. Acceptance Criteria

### VJLAB-45

* Add local .mp3 via file picker adds to queue (name + object URL) and shows in list.
* Reorder via up/down, remove with revoke, load via click calls `engine.loadFile`.
* Queue is session-only with hint explaining local-file limitation.

### VJLAB-46

* List of presets (PRESETS) with palette swatch; add current director state as new preset to queue.
* Reorder and remove; click loads via `requestDissolve`.
* No duplication of scene logic; uses existing `directorStore` and `presets.ts`.

## 5. Dependencies

| Dependency | Impact | Status |
| ---------- | ------ | ------ |
| Audio engine | Music load | Ready |
| Preset system | Effects queue | Ready |

## 6. Risks and Mitigations

| Risk | Mitigation |
| ---- | ---------- |
| URL leaks | Revoke on remove |
| DnD complexity | Up/down buttons first |

## 7. Definition of Done

* Code and docs updated (Living Docs).
* `npm test`, `npm run build`, `npm run lint` green.
* Live dogfood on ABNT2.
* Release gate per project standards.

## 8. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial backlog for Sprint 17 | Marcos Ferreira Mourão |
