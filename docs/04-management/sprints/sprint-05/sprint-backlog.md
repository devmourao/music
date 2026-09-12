# Sprint Backlog — Sprint 05

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 05 — Scene Factory |
| Milestone | M4 — Public MVP (part 1) |
| Planned Version | 0.0.5 |
| Start Date | 2026-09-12 |
| End Date | 2026-09-19 |
| Owner | Marcos Ferreira Mourão |

## 2. Sprint Summary

### Sprint Goal

Three base scenes on one contract.

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
| VJLAB-11 | Particle field base scene | Owner | Medium | Done |
| VJLAB-12 | Deformable mesh base scene | Owner | Medium | Done |
| VJLAB-13 | Tunnel field base scene | Owner | Medium | Done |

## 4. Dependencies

| Dependency | Impact | Status |
| ---------- | ------ | ------ |
| Shared contract | Ready | Done |

## 5. Blockers

| Date | Description | Impact | Action |
| ---- | ----------- | ------ | ------ |
|  | None yet |  |  |

## 6. Operational Decisions

* Simple geometries first; presets later.

## 7. Tracking

### Current Situation

Executed on branch `feature/VJLAB-11-scene-factory`. Three base scenes share the contract with pure math isolated in `sceneMath`. Gate green: 18 tests passed, build success, lint clean.

## 8. Active Risks

| Risk | Status | Mitigation |
| ---- | ------ | ---------- |
| Scope (3 scenes) | Open | Contingency: 2 + 1 moved |
| Particle FPS | Open | Capped counts |

## 9. Exit Criteria

Sprint 05 can move to review when three scenes react on the contract with stable FPS.

## 10. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Sprint Owner | Marcos Ferreira Mourão | 2026-09-12 |

## 11. Update History

| Date | Change | Owner |
| ---- | ------ | ----- |
| 2026-09-12 | Sprint created | Owner |
