# Sprint Backlog — Sprint 12

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 12 — Identity and Lite Mode |
| Milestone | M6 — Polish v0.2.1 (part 2, close) |
| Planned Version | 0.2.1 |
| Start Date | 2026-09-15 |
| End Date | 2026-09-22 |
| Owner | Marcos Ferreira Mourão |

## 2. Sprint Summary

### Sprint Goal

Identity seal plus lite mode, v0.2.1 release.

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
| VJLAB-30 | Site metadata + seal + About panel | Owner | Small | Done |
| VJLAB-29 | Lite performance mode | Owner | Medium | Done |

## 4. Dependencies

| Dependency | Impact | Status |
| ---------- | ------ | ------ |
| package.json | Ready | Done |

## 5. Blockers

| Date | Description | Impact | Action |
| ---- | ------ | ------ | ------ |
|  | None yet |  |  |

## 6. Operational Decisions

* Metadata first (smallest, unlocks seal accuracy).

## 7. Tracking

### Current Situation

Executed on branch `feature/VJLAB-30-identity-lite`. Metadata module with package version, seal, About panel, lite mode with capped pixel ratio. Gate green: 45 tests passed, build success, lint clean. Release notes + tag follow after merge.

## 8. Active Risks

| Risk | Status | Mitigation |
| ---- | ------ | ---------- |
| Uncalibrated caps | Open | Conservative values |

## 9. Exit Criteria

Sprint 12 can move to review when seal, About and lite mode work with v0.2.1 notes and tag.

## 10. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Sprint Owner | Marcos Ferreira Mourão | 2026-09-15 |

## 11. Update History

| Date | Change | Owner |
| ---- | ------ | ----- |
| 2026-09-15 | Sprint created | Owner |
