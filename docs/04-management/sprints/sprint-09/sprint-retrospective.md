# Sprint Retrospective — Sprint 09

## 1. Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 09 — Image, Text and Keymap |
| Date | 2026-09-14 |
| Facilitator | Marcos Ferreira Mourão |
| Participants | Owner (solo) |

## 2. Sprint Summary

### Sprint Objective

Media layers plus keymap repair.

### Overall Result

Goal achieved; PR #16 merged to correct base. Two extra texture-fidelity fixes emerged from live screenshot analysis and shipped in the same increment.

## 3. Observed Evidence

| Evidence | Source |
| -------- | ------ |
| 34 tests passed, build success, lint clean | Terminal logs |
| Screenshots showing tint, then gray, then true colors | Owner testing |
| PR #16 `base=main`, merged | PR list |

## 4. Strengths

* Screenshot-driven debugging beat guessing twice in a row.
* Silent failures eliminated with load status feedback.

## 5. Improvement Opportunities

| Situation | Impact |
| --------- | ------ |
| Texture fidelity needed two rounds | Low — resolved same sprint |

## 6. Identified Cause

| Problem | Possible Cause |
| ------- | -------------- |
| Washed colors | Lit material + tone mapping on photographic content |

## 7. Improvement Actions

| Action | Owner | Due |
| ------ | ----- | --- |
| Screenshot-check every visual change before PR | Owner | Ongoing |

## 8. Derived Artifacts

[x] New Issue (VJLAB-27 stronger color controls, future)

## 9. Lessons Learned

Unlit materials preserve uploaded artwork; lit materials suit generated geometry.

## 10. Plan for Next Sprint

* Sprint 10: strobe speed plus global effects pack, closes M5/v0.2.0.

## 11. Final Decision

[x] Sprint closed

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Facilitator | Marcos Ferreira Mourão | 2026-09-14 |

## 13. Revision History

| Date | Change | Owner |
| ---- | ------ | ----- |
| 2026-09-14 | Retrospective recorded | Owner |
