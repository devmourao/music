# Sprint Retrospective — Sprint 03

## 1. Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 03 — Reactive Hello World |
| Date | 2026-09-12 |
| Facilitator | Marcos Ferreira Mourão |
| Participants | Owner (solo) |

## 2. Sprint Summary

### Sprint Objective

Reactive coupling without re-render storms.

### Overall Result

Goal achieved; M2 closed. PR routing issue (base on stale default branch) corrected via redirect PR #6.

## 3. Observed Evidence

| Evidence | Source |
| -------- | ------ |
| 12 tests passed, build success, lint clean | Terminal logs |
| PR #5 merged to wrong base, PR #6 to `main` | PR list |
| Default branch still on feature | Remote refs |

## 4. Strengths

* Contract-first order worked; coupling stayed small.
* Frame-rate-safe smoothing verified by tests.

## 5. Improvement Opportunities

| Situation | Impact |
| --------- | ------ |
| PR opened against stale default branch | Medium — required redirect PR |
| Default branch not yet `main` | Medium — recurring risk |

## 6. Identified Cause

| Problem | Possible Cause |
| ------- | -------------- |
| Wrong PR base | Repository default still points at feature branch |

## 7. Improvement Actions

| Action | Owner | Due |
| ------ | ----- | --- |
| Switch default branch to `main`; delete stale remote feature | Owner | Immediately |
| Always verify `--base main` in create command output | Owner | Ongoing |

## 8. Derived Artifacts

[ ] New Issue
[ ] New ADR

## 9. Lessons Learned

The create-command echo (`into main`) is the last cheap check before a misrouted merge.

## 10. Plan for Next Sprint

* VJ desk on clean `main` with correct default.

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
