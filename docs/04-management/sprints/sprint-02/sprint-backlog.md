# Sprint Backlog — Sprint 02

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 02 — Audio Engine |
| Milestone | M2 — Sound Reactive (part 1) |
| Planned Version | 0.0.2 |
| Start Date | 2026-09-11 |
| End Date | 2026-09-18 |
| Owner | Marcos Ferreira Mourão |

## 2. Sprint Summary

### Sprint Goal

Local .mp3 FFT validated via console spectrum. No 3D coupling.

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
| VJLAB-04 | Local .mp3 upload + AudioContext lifecycle | Owner | High | Done |
| VJLAB-05 | Spectrum engine with smoothing | Owner | High | Done |
| VJLAB-06 | Console spectrum validation | Owner | High | Done |

## 4. Dependencies

| Dependency | Impact | Status |
| ---------- | ------ | ------ |
| User gesture for playback | Blocks autoplay | Open |
| Local test file | Blocks validation | Open |

## 5. Blockers

| Date | Description | Impact | Action |
| ---- | ----------- | ------ | ------ |
|  | None yet |  |  |

## 6. Operational Decisions

* Keep 3D coupling (VJLAB-07/08) in Sprint 03 to protect scope.

## 7. Tracking

### Current Situation

Executed on branch `feature/VJLAB-04-audio-engine`. Upload panel overlays the blank stage. Gate green: 8 tests passed, build success, lint clean. Awaiting manual console validation with a local .mp3.

### Main Advances

* None yet.

### Attention Points

* Single AudioContext discipline from the first commit.

## 8. Active Risks

| Risk | Status | Mitigation |
| ---- | ------ | ---------- |
| Context leak | Open | Explicit lifecycle + tests |
| Noisy bands | Open | Smoothing constants tunable |

## 9. Exit Criteria

Sprint 02 can move to review when console bands follow the beat, done issues meet the Definition of Done, and review can start.

## 10. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Sprint Owner | Marcos Ferreira Mourão | 2026-09-11 |

## 11. Update History

| Date | Change | Owner |
| ---- | ------ | ----- |
| 2026-09-11 | Sprint created | Owner |
