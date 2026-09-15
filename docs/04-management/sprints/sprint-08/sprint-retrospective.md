# Sprint Retrospective — Sprint 08

## 1. Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 08 — Zoom and Intensity |
| Date | 2026-09-14 |
| Facilitator | Marcos Ferreira Mourão |
| Participants | Owner (solo) |

## 2. Sprint Summary

### Sprint Objective

Zoom plus intensity mixes.

### Overall Result

Goal achieved; PR #15 merged to correct base. Live owner testing caught a real UX defect: symbol-key shortcuts assume a US layout.

## 3. Observed Evidence

| Evidence | Source |
| -------- | ------ |
| 32 tests passed, build success, lint clean | Terminal logs |
| Owner confusion on `\` / `[` / `]` | Live testing report |
| ABNT2 labels mismatch US positions | Keyboard analysis |

## 4. Strengths

* Pure fx math tested before wiring.
* Owner testing the merged increment caught what automated tests cannot.

## 5. Improvement Opportunities

| Situation | Impact |
| --------- | ------ |
| Shortcuts bound to symbol key codes | High — unusable labels on ABNT2 |

## 6. Identified Cause

| Problem | Possible Cause |
| ------- | -------------- |
| Layout-dependent shortcuts | Codes chosen from US positions without checking ABNT2 |

## 7. Improvement Actions

| Action | Owner | Due |
| ------ | ----- | --- |
| Prefer letter/digit shortcuts; add visible mix bars | Owner | Sprint 09 (VJLAB-26) |
| Dogfood every merged increment on the real keyboard | Owner | Ongoing |

## 8. Derived Artifacts

[x] New Issue (VJLAB-26 keymap and mix bars)

## 9. Lessons Learned

Invisible state plus layout-dependent keys equals undiscoverable features; live testing is part of Done.

## 10. Plan for Next Sprint

* Sprint 09: image texture on mesh, text overlay, keymap fix.

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
