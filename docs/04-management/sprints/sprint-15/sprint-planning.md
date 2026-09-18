# Sprint Planning — Sprint 15

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
| Status | Planned |

## 2. Sprint Goal

Make the desk HUD instantly scannable by turning continuous params into bars and grouping telemetry, without touching the keyboard desk.

Expected result: strobe Hz, zoom, hue and transition duration show as mini-bars reusing the existing mix-track component, and the desk status is grouped into STROBE / TRANSPORT / FLAGS with a burst badge and no master duplication.

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Browser instrument for VJs: playable, performant, and presentable live |
| Related Scope | Stage Control v0.3.0 — HUD readability (industry Resolume/Ableton patterns) |
| Success Criteria Impacted | Stage legibility, live scan time, presenter confidence |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M7 — Stage Control 0.3.0 |
| Milestone Objective | Panel modes, fullscreen, auto-pilot, desk status HUD |
| Expected Completion | 100% of M7 polish (VJLAB-41 and VJLAB-42 close the HUD; VJLAB-43 keyboard ergonomics stays as research) |

## 5. Sprint Capacity

| Item | Value |
| ----- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |
| Observations | Two Medium enhancements; no new shortcuts, only visual reinterpretation of existing state |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-41 — Desk mini-bars for continuous params — strobe Hz, zoom, hue and transition duration as bars reusing mix-track | Enhancement | Medium | M | Owner |
| VJLAB-42 — Desk grouping and burst badge — grouped sections, burst counter badge, remove master duplication | Enhancement | Medium | M | Owner |

Deferred: VJLAB-43 Keyboard ergonomics review (research) → next milestone.

## 7. Prioritization

### High Priority

* VJLAB-41 — mini-bars reuse `fx.ts` clamps and `slotFraction` without new logic.

### Medium Priority

* VJLAB-42 — grouping improves scan but depends on the bars from VJLAB-41 for visual balance.

### Low Priority

* None in this sprint.

## 8. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| `ShortcutMap.tsx` pills from VJLAB-40 | Bars must sit above/below pills without layout shift | Owner |
| `fx.ts` ranges (STROBE_MIN/MAX, ZOOM_MIN/MAX, CONTRAST, SATURATION) | Bar fractions must clamp correctly | Owner |
| Existing desk status span | Must keep `data-testid="desk-status"` for tests | Owner |

## 9. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| Bar overload makes HUD denser | Medium | Low | Reuse existing `mix-track` style (already familiar) and keep numeric labels |
| Color contrast on saturated palettes | Low | Low | Use muted track `rgba(255,255,255,0.15)` already validated |

## 10. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions, plus live keyboard dogfood on ABNT2 and no shortcut overlap.

Sprint 15 succeeds when Hz/zoom/hue/duration show as bars with correct clamping, burst shows as badge, master duplication is removed, `npm test`, `npm run build`, `npm run lint` are green, and documentation matches code.

## 11. Contingency Plan

* If capacity runs out, ship VJLAB-41 first and move VJLAB-42 to next sprint.
* Priority order: VJLAB-41, VJLAB-42.

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-16 |
| Approver | Marcos Ferreira Mourão | 2026-09-16 |

## 13. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial planning for HUD polish | Marcos Ferreira Mourão |
