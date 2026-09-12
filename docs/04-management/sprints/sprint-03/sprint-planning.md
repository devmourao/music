# Sprint Planning — Sprint 03

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 03 — Reactive Hello World |
| Milestone | M2 — Sound Reactive (part 2, close) |
| Planned Version | 0.0.3 |
| Start Date | 2026-09-12 |
| End Date | 2026-09-19 |
| Owner | Marcos Ferreira Mourão |
| Status | Planned |

## 2. Sprint Goal

First sound-reactive scene: the static cube pulses with bass via a shared audio bus and scene contract, with fluid motion and zero per-frame React re-render.

Expected result: playing a local track visibly scales the cube on kick drums while mids/treble stay available for future scenes.

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Data-driven coupling without spaghetti |
| Related Scope | Reactive hello world only |
| Success Criteria Impacted | M2 completion |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M2 — Sound Reactive |
| Milestone Objective | Audio engine validated end to end |
| Expected Completion | 100% of M2 |

## 5. Sprint Capacity

| Item | Value |
| ---- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-07 — Couple spectrum to cube with smoothing | Feature | High | M | Owner |
| VJLAB-08 — Scene contract + shared audio bus | Refactor | High | S | Owner |

## 7. Prioritization

### High

* VJLAB-07, VJLAB-08

## 8. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| Sprint 02 audio bus output | Blocks coupling | Owner |

## 9. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| Jitter without proper lerp | Medium | Medium | Frame-delta smoothing in `useFrame` |
| Re-render storm | Medium | High | Read bus via refs only |

## 10. Sprint Success Criteria

Sprint 03 succeeds when kick drums drive smooth cube scale, the contract is documented, and the Definition of Done is applied.

## 11. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions.

## 12. Contingency Plan

* If scale feels rigid, tune lerp factor before touching architecture.
* Priority order: VJLAB-08 contract first, then VJLAB-07 coupling.

## 13. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-12 |
| Approver | Marcos Ferreira Mourão | 2026-09-12 |

## 14. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-12 | Initial planning | Marcos Ferreira Mourão |
