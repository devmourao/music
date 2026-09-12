# Sprint Planning — Sprint 02

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
| Status | Planned |

## 2. Sprint Goal

Prove the browser can read music: local .mp3 upload with a single managed AudioContext, FFT analysis and normalized smoothed bands observable in the console. No 3D reactivity in this sprint.

Expected result: press play on an uploaded track and watch `{ bass, mids, treble }` follow the beat in the console log.

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Data-driven audio engine as pure math |
| Related Scope | Audio engine phase only |
| Success Criteria Impacted | DSP validation before any visual coupling |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M2 — Sound Reactive |
| Milestone Objective | Audio engine validated end to end |
| Expected Completion | ~50% of M2 (engine, no geometry yet) |

## 5. Sprint Capacity

| Item | Value |
| ---- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |
| Notes | Solo development |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-04 — Local .mp3 upload + AudioContext lifecycle | Feature | High | M | Owner |
| VJLAB-05 — Spectrum engine with smoothing | Feature | High | M | Owner |
| VJLAB-06 — Console spectrum validation | Test | High | S | Owner |

Out of sprint (moved to Sprint 03): VJLAB-07 (cube coupling), VJLAB-08 (scene contract + bus).

## 7. Prioritization

### High

* VJLAB-04, VJLAB-05, VJLAB-06

## 8. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| Web Audio autoplay policy | Playback requires user gesture | Owner |
| User-provided .mp3 | Cannot validate without local file | Owner |

## 9. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| AudioContext leak on track change | Medium | Medium | Single context with explicit dispose |
| Noisy FFT without smoothing | High | Medium | Exponential smoothing + lerp, tunable constants |

## 10. Sprint Success Criteria

Sprint 02 succeeds when an uploaded track drives stable console bands, the context lifecycle is clean, and the Definition of Done is applied.

## 11. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions. Console evidence plus unit tests for pure DSP math required.

## 12. Contingency Plan

* If decode fails for a file, fall back to a second local file and record format limits.
* Priority order: VJLAB-04, VJLAB-05, VJLAB-06.

## 13. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-11 |
| Approver | Marcos Ferreira Mourão | 2026-09-11 |

## 14. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-11 | Initial planning | Marcos Ferreira Mourão |
