# Sprint Planning — Sprint 16

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 16 — Keyboard Ergonomics Review |
| Milestone | M8 — Next Stage Research |
| Planned Version | 0.3.1 |
| Start Date | 2026-10-17 |
| End Date | 2026-10-24 |
| Owner | Marcos Ferreira Mourão |
| Status | Planned |

## 2. Sprint Goal

Audit the current keyboard desk against industry standards (Resolume / VDMX / Ableton) and propose a non-breaking optimization plan.

Expected result: a matrix mapping every shortcut in `useKeyboardDesk.ts` to its industry counterpart, a gap analysis, and a prioritized proposal that respects the no-overwrite constraint for existing shortcuts (U/G/A/F11).

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Browser instrument for VJs: playable, performant, and presentable live |
| Related Scope | Desk ergonomics — keep the instrument playable without relearning |
| Success Criteria Impacted | Live reliability, onboarding, presenter confidence |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M8 — Next Stage Research |
| Milestone Objective | Research for post-0.3.0 evolution |
| Expected Completion | 100% of VJLAB-43 (research spike closes with ADR or proposal doc) |

## 5. Sprint Capacity

| Item | Value |
| ----- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~8 |
| Observations | Research spike — no code, only docs and proposal; timeboxed |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-43 — Keyboard ergonomics review — Resolume/VDMX vs VJ Lab shortcut audit and optimization proposal | Research | Medium | M | Owner |

## 7. Prioritization

### High Priority

* VJLAB-43 — blocks any future shortcut changes.

### Medium Priority

* None.

### Low Priority

* None.

## 8. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| `useKeyboardDesk.ts` map (29 shortcuts) | Source of truth for audit | Owner |
| `SHORTCUT_MAP` in `directorStore.ts` | Must stay in sync with proposal | Owner |
| Industry references (Resolume/VDMX docs) | Benchmark for comparison | Owner |

## 9. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| Scope creep into immediate re-mapping | Medium | Medium | Timebox to proposal only; no code in this sprint |
| ABNT2 layout differences | Medium | Low | Verify `event.code` vs `event.key` for all proposals |

## 10. Definition of Done (Sprint)

Research spike DoD: audit matrix completed, proposal reviewed, no code required, documentation updated.

Sprint 16 succeeds when the audit doc is in `docs/03-design/` or `docs/02-architecture/` with industry comparison and a prioritized, non-breaking shortcut evolution plan, and `VJLAB-43` is ready for review.

## 11. Contingency Plan

* If time runs short, deliver the matrix first and defer the prioritized proposal to Sprint 17.

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-16 |
| Approver | Marcos Ferreira Mourão | 2026-09-16 |

## 13. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial planning for keyboard ergonomics review | Marcos Ferreira Mourão |
