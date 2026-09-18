# Sprint Planning — Sprint 17

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 17 — Playlists v0.4.0 |
| Milestone | M9 — Playlists 0.4.0 |
| Planned Version | 0.4.0 |
| Start Date | 2026-10-25 |
| End Date | 2026-11-01 |
| Owner | Marcos Ferreira Mourão |
| Status | Planned |

## 2. Sprint Goal

Deliver session-based queues for local music and effect presets without breaking the existing desk.

Expected result: a local music queue (add / reorder / load) and an effects preset queue (add / reorder / save current state), both with simple list UI and keyboard-friendly controls.

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Browser instrument for VJs: playable, performant, and presentable live |
| Related Scope | Playlists v0.4.0 — dual queue system (music + effects) |
| Success Criteria Impacted | Live flow, set preparation, presenter autonomy |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M9 — Playlists 0.4.0 |
| Milestone Objective | Local music queue and effects preset queue |
| Expected Completion | 100% of M9 (VJLAB-45 and VJLAB-46) |

## 5. Sprint Capacity

| Item | Value |
| ----- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |
| Observations | Two Medium features; UI reuses existing panel patterns |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-45 — Local music playlist — queue, reorder and load local tracks (session) | Feature | Medium | M | Owner |
| VJLAB-46 — Effects preset playlist — queue, reorder and save effect presets as playlist | Feature | Medium | M | Owner |

## 7. Prioritization

### High Priority

* VJLAB-45 — music queue is the live backbone; must work with `useAudioEngine` and object URLs.

### Medium Priority

* VJLAB-46 — effects queue reuses `PRESETS` / `PLAYLIST` and `directorStore` state.

### Low Priority

* None.

## 8. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| `useAudioEngine` and `AudioPanel` | Music queue must use `loadFile` and object URL lifecycle | Owner |
| `scenes/presets.ts` and `directorStore` | Effects queue must read/write preset data without duplicating scene logic | Owner |
| `panelMode` (U) | Queues live inside AudioPanel area; must respect docked/detached/hidden | Owner |

## 9. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| Object URL leaks on reorder/remove | Medium | Medium | Revoke on remove and on queue clear; keep single active URL |
| Playlist persistence confusion (local files can't persist across reloads) | High | Low | Document session-only behavior in UI hint |
| Drag-and-drop complexity | Medium | Low | Use simple up/down buttons first, replace with drag later if time allows |

## 10. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions, plus live keyboard dogfood on ABNT2.

Sprint 17 succeeds when both queues support add / reorder / remove / load, `npm test`, `npm run build`, `npm run lint` are green, and documentation matches code.

## 11. Contingency Plan

* If capacity runs out, ship VJLAB-45 first and move VJLAB-46 to Sprint 18.
* Priority order: VJLAB-45, VJLAB-46.

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-16 |
| Approver | Marcos Ferreira Mourão | 2026-09-16 |

## 13. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial planning for playlists | Marcos Ferreira Mourão |
