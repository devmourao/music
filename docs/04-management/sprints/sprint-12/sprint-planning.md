# Sprint Planning — Sprint 12

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 12 — Identity and Lite Mode |
| Milestone | M6 — Polish v0.2.1 (part 2, close) |
| Planned Version | 0.2.1 |
| Start Date | 2026-09-15 |
| End Date | 2026-09-22 |
| Owner | Marcos Ferreira Mourão |
| Status | Planned |

## 2. Sprint Goal

Portfolio identity plus weak-GPU safety, closing M6 and releasing v0.2.1.

Expected result: version seal and About panel from a single metadata source, lite mode toggle capping pixel ratio and heavy effects, release notes and tag.

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Portfolio-ready identity, safe on any machine |
| Related Scope | Polish v0.2.1 close |
| Success Criteria Impacted | Recruiter first impression, live reliability |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M6 — Polish v0.2.1 |
| Milestone Objective | Colors, modes, metadata, lite mode |
| Expected Completion | 100% of M6 (rename VJLAB-31 runs as infra job) |

## 5. Sprint Capacity

| Item | Value |
| ---- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-30 — Site metadata + seal + About panel | Feature | Small | S | Owner |
| VJLAB-29 — Lite performance mode | Feature | Medium | M | Owner |

Deferred: VJLAB-32 (beat flash color, future), VJLAB-31 (rename, infra job).

## 7. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| package.json version | Ready | Owner |

## 8. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| Lite thresholds uncalibrated | Medium | Low | Conservative caps, owner measures |

## 9. Sprint Success Criteria

Sprint 12 succeeds when the seal shows the release version, About lists author links, lite mode visibly unhitches weak GPUs, and the Definition of Done is applied.

## 10. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions, plus updated deploy.

## 11. Contingency Plan

* If capacity runs out, ship metadata first and move lite mode to v0.2.2.
* Priority order: VJLAB-30, VJLAB-29.

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-15 |
| Approver | Marcos Ferreira Mourão | 2026-09-15 |

## 13. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-15 | Initial planning | Marcos Ferreira Mourão |
