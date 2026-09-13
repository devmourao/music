# Sprint Retrospective — Sprint 06

## 1. Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 06 — Public MVP Release |
| Date | 2026-09-13 |
| Facilitator | Marcos Ferreira Mourão |
| Participants | Owner (solo) |

## 2. Sprint Summary

### Sprint Objective

Ship the public MVP.

### Overall Result

Goal achieved: code merged (#9, #10), tag pushed, release notes and README in place. Deploy wiring to Netlify in progress.

## 3. Observed Evidence

| Evidence | Source |
| -------- | ------ |
| 21 tests passed, build success, lint clean | Terminal logs |
| PR #9 + #10 merged, `v0.1.0` on remote | Remote refs |
| 8 PRs total, all merged and branches pruned | PR list |

## 4. Strengths

* Release discipline held: notes, README, tag and docs with the code.
* Full cycle Kickoff → M4 closed without scope creep (Live Control deferred cleanly to v0.2.0).

## 5. Improvement Opportunities

| Situation | Impact |
| --------- | ------ |
| Default branch stayed on feature too long | Medium — caused two misrouted PRs |
| Deploy connected only at the very end | Low — fine for v0.1.0, earlier preview would help v0.2.0 |

## 6. Identified Cause

| Problem | Possible Cause |
| ------- | -------------- |
| Late default-branch fix | Hygiene postponed during delivery pace |

## 7. Improvement Actions

| Action | Owner | Due |
| ------ | ----- | --- |
| Keep `main` as default; prune branches per sprint | Owner | Ongoing |
| Connect Netlify preview deploys for v0.2.0 PRs | Owner | Sprint 07 |

## 8. Derived Artifacts

[ ] New Issue
[ ] New ADR

## 9. Lessons Learned

Small PRs with green gates made the 8-merge history portfolio-ready by itself.

## 10. Plan for Next Sprint

* Sprint 07 Live Control: A/B transitions first, then palettes.

## 11. Final Decision

[x] Sprint closed — MVP released

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Facilitator | Marcos Ferreira Mourão | 2026-09-13 |

## 13. Revision History

| Date | Change | Owner |
| ---- | ------ | ----- |
| 2026-09-13 | Retrospective recorded | Owner |
