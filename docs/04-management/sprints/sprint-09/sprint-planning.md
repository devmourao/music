# Sprint Planning — Sprint 09

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 09 — Image, Text and Keymap |
| Milestone | M5 — Live Control v0.2.0 (part 3) |
| Planned Version | 0.2.0-alpha |
| Start Date | 2026-09-14 |
| End Date | 2026-09-21 |
| Owner | Marcos Ferreira Mourão |
| Status | Planned |

## 2. Sprint Goal

Mesh image textures, animated text overlay, and a layout-independent keymap with visible mix bars.

Expected result: PNG/JPG upload wraps the deformable mesh with blend and reactivity, `T` fires editable animated text, and all shortcuts work by label on ABNT2 with live value bars.

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Industry-standard live desk |
| Related Scope | Live Control v0.2.0, items 5–7 of 8 |
| Success Criteria Impacted | Expressive live direction |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M5 — Live Control v0.2.0 |
| Milestone Objective | Full desk plus effects pack |
| Expected Completion | ~85% of M5 (only strobe speed + effects pack left) |

## 5. Sprint Capacity

| Item | Value |
| ---- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-22 — Image texture layer on mesh | Feature | Medium | M | Owner |
| VJLAB-23 — Text overlay global effect | Feature | Medium | S | Owner |
| VJLAB-26 — Layout-independent keymap + mix bars | UX fix | High | S | Owner |

Deferred: VJLAB-24 (strobe speed), VJLAB-25 (effects pack) → Sprint 10.

## 7. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| Deformable mesh + director store | Ready | Owner |

## 8. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| Texture upload failure modes | Medium | Low | Accept PNG/JPG only, error message |
| Three issues too much | Medium | Medium | Keymap fix first (smallest, unblocks testing) |

## 9. Sprint Success Criteria

Sprint 09 succeeds when an uploaded image wraps the mesh reactively, text fires animated, every shortcut matches its ABNT2 label, mixes show as bars, and the Definition of Done is applied.

## 10. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions, plus live keyboard dogfood on ABNT2.

## 11. Contingency Plan

* If capacity runs out, ship keymap + text first, move image to Sprint 10.
* Priority order: VJLAB-26, VJLAB-23, VJLAB-22.

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-14 |
| Approver | Marcos Ferreira Mourão | 2026-09-14 |

## 13. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-14 | Initial planning | Marcos Ferreira Mourão |
