# Sprint Retrospective — Sprint 05

## 1. Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 05 — Scene Factory |
| Date | 2026-09-12 |
| Facilitator | Marcos Ferreira Mourão |
| Participants | Owner (solo) |

## 2. Sprint Summary

### Sprint Objective

Factory model with three bases.

### Overall Result

Goal achieved; PR #8 merged to correct base on first try.

## 3. Observed Evidence

| Evidence | Source |
| -------- | ------ |
| 18 tests passed, build success, lint clean | Terminal logs |
| PR #8 `base=main`, merged | PR list |

## 4. Strengths

* Helpers isolated before components; lint passed first time after refactor.
* Correct PR base became routine.

## 5. Improvement Opportunities

| Situation | Impact |
| --------- | ------ |
| Initial lint errors on mixed exports | Low — fixed same sprint via `sceneMath` |

## 6. Identified Cause

| Problem | Possible Cause |
| ------- | -------------- |
| Mixed exports | Helpers colocated with components |

## 7. Improvement Actions

| Action | Owner | Due |
| ------ | ----- | --- |
| Pure logic in dedicated modules from the start | Owner | Ongoing |

## 8. Derived Artifacts

[ ] New Issue
[ ] New ADR

## 9. Lessons Learned

The factory holds: variants can now be pure data on proven bases.

## 10. Plan for Next Sprint

* Presets as data, playlist queue, public deploy and release notes.

## 11. Final Decision

[x] Sprint closed

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Facilitator | Marcos Ferreira Mourão | 2026-09-12 |

## 13. Revision History

| Date | Change | Owner |
| ---- | ------ | ----- |
| 2026-09-12 | Retrospective recorded | Owner |
