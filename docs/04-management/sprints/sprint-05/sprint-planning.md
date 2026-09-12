# Sprint Planning — Sprint 05

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 05 — Scene Factory |
| Milestone | M4 — Public MVP (part 1) |
| Planned Version | 0.0.5 |
| Start Date | 2026-09-12 |
| End Date | 2026-09-19 |
| Owner | Marcos Ferreira Mourão |
| Status | Planned |

## 2. Sprint Goal

Prove the factory model: three distinct base scenes (particles, deformable mesh, tunnel) running on the same scene contract with the reactive cube kept as fallback.

Expected result: three switchable scenes reacting to bass/mids/treble respectively, ready for presets and playlist in Sprint 06.

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Variants as data, fix bugs once in base |
| Related Scope | Factory phase |
| Success Criteria Impacted | M4 content depth |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M4 — Public MVP |
| Milestone Objective | Three scenes plus presets, playlist, deploy |
| Expected Completion | ~50% of M4 (scenes; presets/playlist/deploy in Sprint 06) |

## 5. Sprint Capacity

| Item | Value |
| ---- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-11 — Particle field base scene | Feature | Medium | M | Owner |
| VJLAB-12 — Deformable mesh base scene | Feature | Medium | M | Owner |
| VJLAB-13 — Tunnel field base scene | Feature | Medium | M | Owner |

Deferred: VJLAB-14 (presets), VJLAB-15 (playlist), VJLAB-16/17 (release + docs sync).

## 7. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| Scene contract + bus | Ready | Owner |

## 8. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| Three scenes too much for one sprint | Medium | Medium | Simple geometries first; polish in Sprint 06 |
| FPS drop with particles | Medium | High | Cap particle counts, use instancing |

## 9. Sprint Success Criteria

Sprint 05 succeeds when all three scenes render and react on the shared contract with stable FPS and the Definition of Done applied.

## 10. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions.

## 11. Contingency Plan

* If capacity runs out, ship 2 scenes and move the third to Sprint 06 with presets.
* Priority order: particles, mesh, tunnel.

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-12 |
| Approver | Marcos Ferreira Mourão | 2026-09-12 |

## 13. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-12 | Initial planning | Marcos Ferreira Mourão |
