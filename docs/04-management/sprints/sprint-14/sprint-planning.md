# Sprint Planning — Sprint 14

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 14 — Stage Control Part 2 |
| Milestone | M7 — Stage Control 0.3.0 (part 2, close) |
| Planned Version | 0.3.0 |
| Start Date | 2026-10-01 |
| End Date | 2026-10-08 |
| Owner | Marcos Ferreira Mourão |
| Status | Planned |

## 2. Sprint Goal

Close Stage Control with an automated tour and a readable desk HUD, without regressing the keyboard desk.

Expected result: A toggles a timed auto-pilot tour (palette / camera / zoom / scene with audio-reactive guardrails) and the desk status line shows color-coded pills for strobe mode and toggles (VHS/RGB/BEAT/BYPASS/LITE).

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Browser instrument for VJs: playable, performant, and presentable live |
| Related Scope | Stage Control v0.3.0 — auto-pilot and HUD readability |
| Success Criteria Impacted | Live reliability, stage legibility, presenter experience |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M7 — Stage Control 0.3.0 |
| Milestone Objective | Panel modes, fullscreen output, auto-pilot tour, desk status HUD |
| Expected Completion | 100% of M7 (VJLAB-37/38 done in Sprint 13, VJLAB-39/40 close it; VJLAB-41/42 deferred to M7 polish or next milestone) |

## 5. Sprint Capacity

| Item | Value |
| ----- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |
| Observations | Two Medium issues only; VJLAB-41/42 kept out to protect Quality Gate |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-39 — Auto-pilot tour — timed palette / camera / zoom / scene tour with pause and audio-reactive guardrails | Feature | Medium | M | Owner |
| VJLAB-40 — Desk status pills and mode color — VHS/RGB/BEAT/BYPASS/LITE and strobe mode as color-coded pills | Enhancement | Medium | M | Owner |

Deferred: VJLAB-41 mini-bars and VJLAB-42 grouping → next sprint.

## 7. Prioritization

### High Priority

* VJLAB-39 — delivers the headline Stage Control value (auto-pilot).

### Medium Priority

* VJLAB-40 — quick win for HUD readability with no logic risk.

### Low Priority

* None in this sprint.

## 8. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| VJLAB-37 panel modes (U) | Auto-pilot must coordinate with hidden panel (no layout shift) | Owner |
| `PostRig.tsx` isolation (VJLAB-35) | Auto-pilot must not re-chain passes (UV / convolution guardrail) | Owner |
| `ShortcutMap.tsx` and `fx.ts` clamps | Pills reuse existing `StrobeMode` and toggle state | Owner |

## 9. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| Auto-pilot timer drifts with audio load | Medium | Medium | Use `performance.now()` and `requestAnimationFrame`; pause on `A` instantly |
| HUD color contrast on saturated palettes | Low | Low | Use WCAG-checked pill backgrounds (reuse `beatFlashColor` logic) |
| Keyboard overlap if A collides | Low | High | Verified — `KeyA` is free in `useKeyboardDesk.ts`; `U/G` untouched |

## 10. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions, plus live keyboard dogfood on ABNT2 and no shortcut overlap.

Sprint 14 succeeds when A toggles auto-pilot with safe pause, pills show correct colors for strobe mode and toggles, `npm test`, `npm run build`, `npm run lint` are green, and documentation matches code.

## 11. Contingency Plan

* If capacity runs out, ship VJLAB-40 first and move VJLAB-39 to Sprint 15.
* Priority order: VJLAB-40, VJLAB-39 (inverse if auto-pilot is headline for demo).

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-16 |
| Approver | Marcos Ferreira Mourão | 2026-09-16 |

## 13. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial planning for Stage Control Part 2 | Marcos Ferreira Mourão |
