# Sprint Backlog — Sprint 09

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

## 2. Sprint Summary

### Sprint Goal

Image on mesh, animated text, ABNT2-safe keymap with bars.

### Status Overview

| Indicator | Value |
| --------- | ----- |
| Total Issues | 3 |
| Done | 3 |
| In Progress | 0 |
| Blocked | 0 |
| Not Started | 0 |

## 3. Sprint Items

| Issue | Title | Owner | Priority | Status |
| ----- | ----- | ----- | -------- | ------ |
| VJLAB-22 | Image texture layer on mesh | Owner | Medium | Done |
| VJLAB-23 | Text overlay global effect | Owner | Medium | Done |
| VJLAB-26 | Layout-independent keymap + mix bars | Owner | High | Done |

## 4. Dependencies

| Dependency | Impact | Status |
| ---------- | ------ | ------ |
| Mesh scene, director store | Ready | Done |

## 5. Blockers

| Date | Description | Impact | Action |
| ---- | ----------- | ------ | ------ |
|  | None yet |  |  |

## 6. Operational Decisions

* Keymap fix first to unblock live testing of the other two.
* Proposed map: `E` slot, `R`/`F` mix up/down (aliases kept).

## 7. Tracking

### Current Situation

Executed on branch `feature/VJLAB-26-keymap-media`. Letter aliases with visible mix bars, animated text overlay and mesh image textures live. Gate green: 34 tests passed, build success, lint clean.

## 8. Active Risks

| Risk | Status | Mitigation |
| ---- | ------ | ---------- |
| Scope (3 issues) | Open | Keymap + text first |

## 9. Exit Criteria

Sprint 09 can move to review when image, text and keymap all work by label on ABNT2.

## 10. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Sprint Owner | Marcos Ferreira Mourão | 2026-09-14 |

## 11. Update History

| Date | Change | Owner |
| ---- | ------ | ----- |
| 2026-09-14 | Sprint created | Owner |
