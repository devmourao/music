# Sprint Backlog — Sprint 04

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 04 — VJ Desk |
| Milestone | M3 — Playable Instrument |
| Planned Version | 0.0.4 |
| Start Date | 2026-09-12 |
| End Date | 2026-09-19 |
| Owner | Marcos Ferreira Mourão |

## 2. Sprint Summary

### Sprint Goal

Live keyboard direction with safe global effects.

### Status Overview

| Indicator | Value |
| --------- | ----- |
| Total Issues | 2 |
| Done | 2 |
| In Progress | 0 |
| Blocked | 0 |
| Not Started | 0 |

## 3. Sprint Items

| Issue | Title | Owner | Priority | Status |
| ----- | ----- | ----- | -------- | ------ |
| VJLAB-09 | Keyboard desk (space, B, arrows, S) | Owner | High | Done |
| VJLAB-10 | Global post-processing rig with strobe warning | Owner | High | Done |

## 4. Dependencies

| Dependency | Impact | Status |
| ---------- | ------ | ------ |
| Clean main | Blocks start | Done |

## 5. Blockers

| Date | Description | Impact | Action |
| ---- | ----------- | ------ | ------ |
|  | None yet |  |  |

## 6. Operational Decisions

* Safety first: kill switch before strobe polish.

## 7. Tracking

### Current Situation

Executed on branch `feature/VJLAB-09-vj-desk`. Keyboard desk live with kill switch; post rig (Bloom + Vignette) plus strobe overlay with warning. Gate green: 14 tests passed, build success, lint clean. Missing `postprocessing` peer found and installed during the sprint.

## 8. Active Risks

| Risk | Status | Mitigation |
| ---- | ------ | ---------- |
| Photosensitivity | Open | Warning + default off |
| Key conflicts | Open | Documented map |

## 9. Exit Criteria

Sprint 04 can move to review when live keys work instantly with safe defaults.

## 10. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Sprint Owner | Marcos Ferreira Mourão | 2026-09-12 |

## 11. Update History

| Date | Change | Owner |
| ---- | ------ | ----- |
| 2026-09-12 | Sprint created | Owner |
