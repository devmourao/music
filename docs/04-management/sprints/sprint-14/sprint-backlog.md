# Sprint Backlog — Sprint 14

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 14 — Stage Control Part 2 |
| Milestone | M7 — Stage Control 0.3.0 (part 2, close) |
| Planned Version | 0.3.0 |
| Start Date | 2026-10-01 |
| End Date | 2026-10-08 |
| Owner | Marcos Ferreira Mourão |

## 2. Sprint Goal

Close Stage Control with an automated tour and a readable desk HUD.

## 3. Sprint Backlog Items

| Issue | Title | Type | Priority | Status |
| ----- | ----- | ---- | -------- | ------ |
| VJLAB-39 | Auto-pilot tour — timed palette / camera / zoom / scene tour with pause and audio-reactive guardrails | Feature | Medium | New |
| VJLAB-40 | Desk status pills and mode color — VHS/RGB/BEAT/BYPASS/LITE and strobe mode as color-coded pills | Enhancement | Medium | New |

Deferred: VJLAB-41 mini-bars and VJLAB-42 grouping → next sprint.

## 4. Acceptance Criteria

### VJLAB-39

* A (`event.code === 'KeyA'`) toggles auto-pilot ON/OFF.
* When ON, cycles `stepHue`, `zoomIn/Out` (damped), and `requestDissolve` on a timed interval (default 5s) with pause on second A press.
* Respects hidden panel coordination and does not re-chain `PostRig` passes (UV / convolution guardrail from VJLAB-35).
* Uses `performance.now()` and remains stable under audio load.

### VJLAB-40

* Desk status toggles (VHS/RGB/BEAT/BYPASS/LITE, strobe ON/OFF) render as color-coded pills (ON illuminated, OFF muted) instead of appended text.
* `strobeMode` pill shows white/black/gradient for white/black/color.
* No existing shortcut overwritten; `U/G` untouched; `KeyA` verified free.

## 5. Dependencies

| Dependency | Impact | Status |
| ---------- | ------ | ------ |
| VJLAB-37 panel modes | Auto-pilot must not shift layout | Done in Sprint 13 |
| Post-processing isolation | No UV / convolution conflict | Ready |
| Shortcut map | Pills reuse existing state | Ready |

## 6. Risks and Mitigations

| Risk | Mitigation |
| ---- | ---------- |
| Timer drift | `performance.now()` + RAF |
| Color wash on saturated palettes | Use luminance check from `beatFlashColor` |
| Key overlap | `KeyA` free — verified in `useKeyboardDesk.ts` |

## 7. Definition of Done

* Code and docs updated (Living Docs).
* `npm test`, `npm run build`, `npm run lint` green.
* Live dogfood on ABNT2 with no shortcut overlap.
* Release gate per project standards.

## 8. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial backlog for Sprint 14 | Marcos Ferreira Mourão |
