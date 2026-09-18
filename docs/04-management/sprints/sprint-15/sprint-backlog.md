# Sprint Backlog — Sprint 15

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 15 — Stage Control HUD Polish |
| Milestone | M7 — Stage Control 0.3.0 (polish) |
| Planned Version | 0.3.0 |
| Start Date | 2026-10-09 |
| End Date | 2026-10-16 |
| Owner | Marcos Ferreira Mourão |

## 2. Sprint Goal

Make the desk HUD instantly scannable with mini-bars and grouped telemetry.

## 3. Sprint Backlog Items

| Issue | Title | Type | Priority | Status |
| ----- | ----- | ---- | -------- | ------ |
| VJLAB-41 | Desk mini-bars for continuous params — strobe Hz, zoom, hue and transition duration as bars reusing mix-track | Enhancement | Medium | New |
| VJLAB-42 | Desk grouping and burst badge — grouped sections, burst counter badge, remove master duplication | Enhancement | Medium | New |

Deferred: VJLAB-43 Keyboard ergonomics review (research).

## 4. Acceptance Criteria

### VJLAB-41

* `strobeRateHz` (1–12), `zoomTarget` (0.5–2.5), `hueShift` (0–1, 8 steps) and `transitionDuration` show as `mix-track/mix-fill` bars with numeric labels, fractions computed via `clampStrobeHz`, `clampZoom`, and `slotFraction` logic.
* Bars reuse existing styling from `App.css` and update live on key presses.

### VJLAB-42

* Desk status is visually grouped: STROBE / TRANSPORT (FX/HUE/ZOOM) / FLAGS (VHS/RGB/BEAT/BYPASS/LITE/AUTO) with separators.
* `burstCount` shows as a badge `BURSTS n` with icon, not plain text.
* `master` duplication removed from the status span (master remains only in `mix-bars`).

## 5. Dependencies

| Dependency | Impact | Status |
| ---------- | ------ | ------ |
| VJLAB-40 pills | Bars must not overlap pills | Done in Sprint 14 |
| `fx.ts` clamps | Correct bar fractions | Ready |
| `data-testid="desk-status"` | Tests must still pass | Ready |

## 6. Risks and Mitigations

| Risk | Mitigation |
| ---- | ---------- |
| Visual density | Keep numeric labels on bars; no new colors |
| Layout shift | Bars use existing flex column with gap 4px |

## 7. Definition of Done

* Code and docs updated (Living Docs).
* `npm test`, `npm run build`, `npm run lint` green.
* Live dogfood on ABNT2 with no shortcut overlap.
* Release gate per project standards.

## 8. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial backlog for Sprint 15 | Marcos Ferreira Mourão |
