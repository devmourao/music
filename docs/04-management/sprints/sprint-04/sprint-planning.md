# Sprint Planning — Sprint 04

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 04 — VJ Desk |
| Milestone | M3 — Playable Instrument |
| Planned Version | 0.0.4 |
| Start Date | 2026-09-12 |
| End Date | 2026-09-19 |
| Owner | Marcos Ferreira Mourão |
| Status | Planned |

## 2. Sprint Goal

Turn the passive visualizer into a playable instrument: keyboard scene switching preparation, burst trigger hook, and a global post-processing rig with strobe warning and kill switch.

Expected result: spacebar strobe, B burst hook, and arrows camera nudge working live over the reactive cube.

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Live direction with global effects |
| Related Scope | VJ desk phase |
| Success Criteria Impacted | M3 playable instrument |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M3 — Playable Instrument |
| Milestone Objective | Full keyboard desk with global effects |
| Expected Completion | ~60% of M3 (desk + strobe; playlist in Sprint 05) |

## 5. Sprint Capacity

| Item | Value |
| ---- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-09 — Keyboard desk (space, B, arrows, S) | Feature | High | M | Owner |
| VJLAB-10 — Global post-processing rig with strobe warning | Feature | High | M | Owner |

Deferred: VJLAB-11 to VJLAB-13 (new base scenes), VJLAB-14/15 (presets, playlist).

## 7. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| Postprocessing package installed | Ready | Owner |

## 8. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| Strobe accessibility | High | High | Default off, banner, single-key kill |
| Shortcut conflicts with browser | Medium | Low | Avoid reserved keys, document map |

## 9. Sprint Success Criteria

Sprint 04 succeeds when live keys drive strobe/burst/camera instantly with safe defaults and the Definition of Done is applied.

## 10. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions.

## 11. Contingency Plan

* If postprocessing hurts FPS, gate effects behind a quality toggle.
* Priority order: kill switch first, strobe second, burst third.

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-12 |
| Approver | Marcos Ferreira Mourão | 2026-09-12 |

## 13. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-12 | Initial planning | Marcos Ferreira Mourão |
