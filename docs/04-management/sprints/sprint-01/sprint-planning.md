# Sprint Planning — Sprint 01

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 01 — Stage Ready |
| Milestone | M1 — Stage Ready |
| Planned Version | 0.0.1 |
| Start Date | 2026-09-11 |
| End Date | 2026-09-18 |
| Owner | Marcos Ferreira Mourão |
| Status | Planned |

## 2. Sprint Goal

Establish a blank 3D stage running at a stable 60 FPS with a green quality gate (tests, build, lint). No audio or keyboard features in this sprint.

Expected result: `npm run dev` shows a black canvas with a static cube; `npm test`, `npm run build` and `npm run lint` all pass.

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Public portfolio MVP, playable and portable |
| Related Scope | Foundation phase only |
| Success Criteria Impacted | Stable stage, automated baseline |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M1 — Stage Ready |
| Milestone Objective | Toolchain and blank stage validated |
| Expected Completion | 100% of M1 |

## 5. Sprint Capacity

| Item | Value |
| ---- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |
| Notes | Solo development, time-boxed evenings |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-01 — Scaffold blank 3D stage at 60 FPS | Infrastructure | High | S | Owner |
| VJLAB-02 — Install 3D and state stack | Chore | High | S | Owner |
| VJLAB-03 — Add smoke test + lint baseline | Test | High | S | Owner |

## 7. Prioritization

### High

* VJLAB-01, VJLAB-02, VJLAB-03

### Medium

* None in this sprint.

### Low

* None in this sprint.

## 8. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| React 19 + Fiber compatibility | Blocks stage render | Owner |
| Node toolchain | Blocks install | Owner |

## 9. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| Version drift (Fiber vs React 19) | Medium | High | Pin versions, validate minimal canvas first |
| Low evening capacity | Medium | Medium | Keep scope to 3 issues; defer audio to Sprint 02 |

## 10. Sprint Success Criteria

Sprint 01 is successful when the goal is met, all critical issues are done, acceptance criteria are met, the Definition of Done is applied, and a potentially shippable increment (runnable stage) exists.

## 11. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions.

## 12. Contingency Plan

* If blocked on Fiber versions, fall back to pinned known-good combination and record an Architecture Decision.
* Highest priority order: VJLAB-02, VJLAB-01, VJLAB-03.

## 13. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-11 |
| Approver | Marcos Ferreira Mourão | 2026-09-11 |

## 14. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-11 | Initial planning | Marcos Ferreira Mourão |
