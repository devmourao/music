# Sprint Retrospective — Sprint 11

## 1. Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 11 — Flash and Color |
| Date | 2026-09-15 |
| Facilitator | Marcos Ferreira Mourão |
| Participants | Owner (solo) |

## 2. Sprint Summary

### Sprint Objective

Flash modes plus honest color knobs.

### Overall Result

Goal achieved; PR #20 merged to correct base. Shader-level audit corrected two wrong neutral assumptions before release.

## 3. Observed Evidence

| Evidence | Source |
| -------- | ------ |
| 42 tests passed, build success, lint clean | Terminal logs |
| Divide-by-zero in contrast shader, saturation scale | Library source |
| ABNT2 label truth table from owner testing | Live report |

## 4. Strengths

* Reading library sources beat guessing effect semantics.
* Owner screenshots carried two diagnoses.

## 5. Improvement Opportunities

| Situation | Impact |
| --------- | ------ |
| Assumed neutral values without checking shaders | High — black screen shipped to branch |

## 6. Identified Cause

| Problem | Possible Cause |
| ------- | -------------- |
| Wrong neutrals | Trusted wrapper prop names over effect math |

## 7. Improvement Actions

| Action | Owner | Due |
| ------ | ----- | --- |
| Verify neutral behavior of every new effect against lib sources | Owner | Ongoing |
| Dogfood on ABNT2 before every PR | Owner | Ongoing |

## 8. Derived Artifacts

[x] New Issue (VJLAB-32 beat flash color)

## 9. Lessons Learned

Effect prop names lie; the shader is the contract.

## 10. Plan for Next Sprint

* Sprint 12: site metadata, lite mode; rename as infra job.

## 11. Final Decision

[x] Sprint closed

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Facilitator | Marcos Ferreira Mourão | 2026-09-15 |

## 13. Revision History

| Date | Change | Owner |
| ---- | ------ | ----- |
| 2026-09-15 | Retrospective recorded | Owner |
