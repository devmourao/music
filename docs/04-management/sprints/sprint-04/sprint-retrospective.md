# Sprint Retrospective — Sprint 04

## 1. Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 04 — VJ Desk |
| Date | 2026-09-12 |
| Facilitator | Marcos Ferreira Mourão |
| Participants | Owner (solo) |

## 2. Sprint Summary

### Sprint Objective

Playable instrument with safe strobe.

### Overall Result

Goal achieved; PR #7 merged to correct base (`main`) on first try.

## 3. Observed Evidence

| Evidence | Source |
| -------- | ------ |
| 14 tests passed, build success, lint clean | Terminal logs |
| PR #7 `base=main`, merged | PR list |
| Missing `postprocessing` peer broke first build | Build log |

## 4. Strengths

* Correct PR base selected despite stale default branch.
* Safety-first order (kill switch + banner before polish).

## 5. Improvement Opportunities

| Situation | Impact |
| --------- | ------ |
| Peer dependency missing from install list | Low — fixed same sprint |

## 6. Identified Cause

| Problem | Possible Cause |
| ------- | -------------- |
| Missing peer | Install list frozen before postprocessing was chosen |

## 7. Improvement Actions

| Action | Owner | Due |
| ------ | ----- | --- |
| Record full dependency set in architecture notes when adding libs | Owner | Ongoing |
| Still switch default branch to `main` | Owner | Immediately |

## 8. Derived Artifacts

[ ] New Issue
[ ] New ADR

## 9. Lessons Learned

Verify the PR `into main` echo and install peers in the same change that introduces the wrapper.

## 10. Plan for Next Sprint

* Scene factory: three base scenes on the shared contract.

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
