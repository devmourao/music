# Sprint Planning — Sprint 13

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 13 — Stage Control Part 1 |
| Milestone | M7 — Stage Control 0.3.0 (part 1) |
| Planned Version | 0.3.0 |
| Start Date | 2026-09-23 |
| End Date | 2026-09-30 |
| Owner | Marcos Ferreira Mourão |
| Status | Planned |

## 2. Sprint Goal

Portfolio stage control for live presentation without regressing the existing keyboard desk. Deliver panel visibility management and fullscreen output as isolated, testable increments that preserve every shortcut in `useKeyboardDesk.ts`.

Expected result: U cycles panel states (docked / detached popup / hidden), G/F11 toggles fullscreen with safe exit, and both features coordinate correctly with the About panel and post-processing isolation introduced for VJLAB-35.

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Browser instrument for VJs: playable, performant, and presentable live |
| Related Scope | Stage Control v0.3.0 — performance-ready control |
| Success Criteria Impacted | Live reliability, presenter experience, keyboard desk integrity |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M7 — Stage Control 0.3.0 |
| Milestone Objective | Panel modes, fullscreen output, auto-pilot tour |
| Expected Completion | 66% of M7 (2 of 3 issues: VJLAB-37 and VJLAB-38) |

## 5. Sprint Capacity

| Item | Value |
| ----- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |
| Observations | Single-track execution; VJLAB-39 deferred to Sprint 14 to keep Quality Gate realistic |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-37 — Panel visibility modes — docked / detached popup / hidden (cycle via U) | Feature | Medium | M | Owner |
| VJLAB-38 — Fullscreen output — native F11 plus G alias with safe exit and hidden-panel coordination | Feature | Medium | M | Owner |

Deferred: VJLAB-39 Auto-pilot tour (moves to Sprint 14).

## 7. Prioritization

### High Priority

* VJLAB-37 — establishes the visibility state machine that VJLAB-38 and VJLAB-39 depend on.

### Medium Priority

* VJLAB-38 — fullscreen must coordinate with the hidden panel state from VJLAB-37.

### Low Priority

* None in this sprint.

## 8. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| `useKeyboardDesk.ts` keymap — U and G must remain free | Without verification, existing desk regresses | Owner |
| `PostRig.tsx` post-processing isolation (VJLAB-35) | Panel/fullscreen toggles must not re-chain composer passes | Owner |
| Browser Fullscreen API permission | User gesture required; F11 is native fallback | Owner |

## 9. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| Popup blocked by browser | Medium | Low | Treat detached mode as `window.open` with fallback to in-page floating panel; no data loss |
| Fullscreen exit via Escape conflicts with About panel | Medium | Low | About close takes precedence on Escape when open; otherwise exit fullscreen |
| Keyboard overlap on international layouts | Low | Medium | Verify against `event.code` map in `useKeyboardDesk.ts` before merge; add layout-independent aliases only if needed |

## 10. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions, plus live keyboard dogfood on ABNT2 and no shortcut overlap verified.

Sprint 13 succeeds when U cycles three panel states, G/F11 toggles fullscreen with correct panel coordination, `npm test`, `npm run build`, `npm run lint` are green, and documentation matches code.

## 11. Contingency Plan

* If capacity runs out, ship VJLAB-37 first and move VJLAB-38 to Sprint 14 alongside VJLAB-39.
* Priority order: VJLAB-37, VJLAB-38.

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-16 |
| Approver | Marcos Ferreira Mourão | 2026-09-16 |

## 13. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial planning for Stage Control Part 1 | Marcos Ferreira Mourão |
