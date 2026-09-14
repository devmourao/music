# Sprint Planning — Sprint 08

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 08 — Zoom and Intensity |
| Milestone | M5 — Live Control v0.2.0 (part 2) |
| Planned Version | 0.2.0-alpha |
| Start Date | 2026-09-14 |
| End Date | 2026-09-21 |
| Owner | Marcos Ferreira Mourão |
| Status | Planned |

## 2. Sprint Goal

Continuous damped zoom plus per-effect dry/wet intensity with master control.

Expected result: `+`/`-` (or held keys) dolly smoothly, bloom/vignette/strobe each expose a 0–1 mix, and a master fader scales all.

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Industry-standard live desk |
| Related Scope | Live Control v0.2.0, items 3–4 of 8 |
| Success Criteria Impacted | Expressive live direction |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M5 — Live Control v0.2.0 |
| Milestone Objective | Full desk plus effects pack |
| Expected Completion | ~50% of M5 |

## 5. Sprint Capacity

| Item | Value |
| ---- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-20 — Continuous zoom control (damped) | Feature | Medium | S | Owner |
| VJLAB-21 — Effect intensity dry/wet per effect + master | Feature | Medium | M | Owner |

Deferred: VJLAB-22 (image), VJLAB-23 (text), VJLAB-24 (strobe speed), VJLAB-25 (effects pack).

## 7. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| CameraRig + PostRig | Ready | Owner |

## 8. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| Zoom fighting camera nudge | Medium | Low | Zoom as radius multiplier in same rig |
| Too many keys to remember | Medium | Low | Shortcut map is the source of truth |

## 9. Sprint Success Criteria

Sprint 08 succeeds when zoom dollies smoothly, each effect has a working mix, master scales all, and the Definition of Done is applied.

## 10. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions.

## 11. Contingency Plan

* If capacity runs out, ship zoom first and move dry/wet to Sprint 09.
* Priority order: VJLAB-20, VJLAB-21.

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-14 |
| Approver | Marcos Ferreira Mourão | 2026-09-14 |

## 13. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-14 | Initial planning | Marcos Ferreira Mourão |
