# Sprint Planning — Sprint 07

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 07 — Transitions and Palettes |
| Milestone | M5 — Live Control v0.2.0 (part 1) |
| Planned Version | 0.2.0-alpha |
| Start Date | 2026-09-14 |
| End Date | 2026-09-21 |
| Owner | Marcos Ferreira Mourão |
| Status | Planned |

## 2. Sprint Goal

First Live Control slice: A/B scene transitions with configurable duration plus hard cut, and a palette system separating background from mesh colors with global hue shift.

Expected result: preset switches dissolve through black over a tunable duration (or cut instantly), each preset carries its own background, and hue shift rotates all mesh colors live.

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Industry-standard live desk on shipped MVP |
| Related Scope | Live Control v0.2.0, items 1–2 of 8 |
| Success Criteria Impacted | Expressive live direction |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M5 — Live Control v0.2.0 |
| Milestone Objective | Full desk: transitions, palettes, zoom, mix, image, text, strobe speed, effects pack |
| Expected Completion | ~25% of M5 |

## 5. Sprint Capacity

| Item | Value |
| ---- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-18 — A/B scene transition with duration + hard cut | Feature | High | M | Owner |
| VJLAB-19 — Palette system (background vs mesh + hue shift) | Feature | High | M | Owner |

Deferred: VJLAB-20 (zoom), VJLAB-21 (dry/wet), VJLAB-22 (image), VJLAB-23 (text), VJLAB-24 (strobe speed), VJLAB-25 (effects pack).

## 7. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| Preset system + SceneHost | Ready | Owner |

## 8. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| True A/B blend too heavy for one sprint | High | Medium | Ship dip-to-black dissolve first; true blend later |
| Hue shift fighting preset palettes | Medium | Low | Hue applies as offset on top of palette base |

## 9. Sprint Success Criteria

Sprint 07 succeeds when preset switches dissolve over a tunable duration, hard cut works instantly, backgrounds vary per preset, hue shift rotates live, and the Definition of Done is applied.

## 10. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions.

## 11. Contingency Plan

* If capacity runs out, ship transitions first and move palettes to Sprint 08.
* Priority order: VJLAB-18, VJLAB-19.

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-14 |
| Approver | Marcos Ferreira Mourão | 2026-09-14 |

## 13. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-14 | Initial planning | Marcos Ferreira Mourão |
