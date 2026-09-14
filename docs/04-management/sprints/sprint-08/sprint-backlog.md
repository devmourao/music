# Sprint Backlog — Sprint 08

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 08 — Zoom and Intensity |
| Milestone | M5 — Live Control v0.2.0 (part 2) |
| Planned Version | 0.2.0-alpha |
| Start Date | 2026-09-14 |
| End Date | 2026-09-21 |
| Owner | Marcos Ferreira Mourão |

## 2. Sprint Summary

### Sprint Goal

Damped zoom plus dry/wet mixes with master.

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
| VJLAB-20 | Continuous zoom control (damped) | Owner | Medium | Done |
| VJLAB-21 | Effect intensity dry/wet per effect + master | Owner | Medium | Done |

## 4. Dependencies

| Dependency | Impact | Status |
| ---------- | ------ | ------ |
| CameraRig, PostRig | Ready | Done |

## 5. Blockers

| Date | Description | Impact | Action |
| ---- | ----------- | ------ | ------ |
|  | None yet |  |  |

## 6. Operational Decisions

* Proposed keys: `+`/`-` zoom, `Z`/`X` selected-effect mix, `M` master cycle (final map in execution).

## 7. Tracking

### Current Situation

Executed on branch `feature/VJLAB-20-zoom-intensity`. Damped zoom in the shared camera rig plus bloom/vignette/strobe mixes with master fader. Gate green: 32 tests passed, build success, lint clean.

## 8. Active Risks

| Risk | Status | Mitigation |
| ---- | ------ | ---------- |
| Key overload | Open | Shortcut map updated |

## 9. Exit Criteria

Sprint 08 can move to review when zoom and mixes work live with safe defaults.

## 10. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Sprint Owner | Marcos Ferreira Mourão | 2026-09-14 |

## 11. Update History

| Date | Change | Owner |
| ---- | ------ | ----- |
| 2026-09-14 | Sprint created | Owner |
