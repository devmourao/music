# Sprint Review — Sprint 08

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 08 — Zoom and Intensity |
| Milestone | M5 — Live Control v0.2.0 (part 2) |
| Review Date | 2026-09-14 |
| Owner | Marcos Ferreira Mourão |

## 2. Sprint Goal

### Planned Objective

Damped zoom plus per-effect dry/wet with master fader.

### Obtained Result

Zoom dollies with inertia, bloom/vignette/strobe mixes plus master scale live, slot selection cycles the four channels. Owner testing exposed an ABNT2 layout mismatch on symbol keys.

### Evaluation

[x] Achieved
[ ] Partially achieved
[ ] Not achieved

## 3. Deliveries

| Delivery | Status | Notes |
| -------- | ------ | ----- |
| Damped zoom in camera rig | Done | Target + inertia, 0.5–2.5x |
| Four mix slots + master | Done | Slot cycle, up/down, status readout |
| Strobe peak follows mix | Done | Recalculated on mix change |

## 4. Completed Issues

| Issue | Title | Notes |
| ----- | ----- | ----- |
| VJLAB-20 | Continuous zoom | Done |
| VJLAB-21 | Dry/wet + master | Done, refinement filed as VJLAB-26 |

## 5. Increment Demo

* Hold `+`/`-` for inertia zoom; `\` + `[`/`]` drive mixes.
* Evidence: PR #15 merged to `main`.

## 6. Feedback

| Source | Feedback | Recommended Action |
| ------ | -------- | ------------------ |
| Owner | Symbol keys undiscoverable on ABNT2 | Letter aliases + visible mix bars (VJLAB-26) |

## 7. Pending Items

| Item | Reason | Next Action |
| ---- | ------ | ----------- |
| Keymap refinement | UX fix from live testing | Sprint 09 |

## 8. Acceptance Criteria

| Criterion | Status | Notes |
| --------- | ------ | ----- |
| Zoom + mixes work live | Met | With US-position keys |

## 9. Definition of Done

[x] Fully applied

## 10. Review Decision

[x] Sprint approved

## 11. Next Actions

* Retrospective, then Sprint 09 (image, text, keymap fix).

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Sprint Owner | Marcos Ferreira Mourão | 2026-09-14 |

## 13. Revision History

| Date | Change | Owner |
| ---- | ------ | ----- |
| 2026-09-14 | Review recorded | Owner |
