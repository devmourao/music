# Initial Backlog — VJ Lab

> Consolidated view. Operational detail lives in the issue tracker. Status: `New` unless noted.

## Epics

* E01 — Foundation and tooling
* E02 — Audio engine
* E03 — Reactive stage
* E04 — VJ desk and effects
* E05 — Factory, playlist and release

## Items

| ID | Title | Category | Priority | Epic | Milestone | Status |
| -- | ----- | -------- | -------- | ---- | --------- | ------ |
| VJLAB-01 | Scaffold blank 3D stage at 60 FPS | Infrastructure | High | E01 | M1 | New |
| VJLAB-02 | Install 3D and state stack (three, fiber, drei, zustand, postprocessing) | Chore | High | E01 | M1 | New |
| VJLAB-03 | Add Vitest smoke test + lint baseline | Test | High | E01 | M1 | New |
| VJLAB-04 | Implement local .mp3 upload + AudioContext lifecycle | Feature | High | E02 | M2 | New |
| VJLAB-05 | Implement spectrum engine with smoothing (bass/mids/treble 0–1) | Feature | High | E02 | M2 | New |
| VJLAB-06 | Validate spectrum via console log | Test | High | E02 | M2 | New |
| VJLAB-07 | Connect spectrum to static cube with lerp | Feature | High | E03 | M2 | New |
| VJLAB-08 | Define shared scene contract + audio bus | Refactor | High | E03 | M2 | New |
| VJLAB-09 | Implement keyboard desk (1–3, space, B, arrows, S) | Feature | High | E04 | M3 | New |
| VJLAB-10 | Implement global post-processing rig with strobe warning | Feature | High | E04 | M3 | New |
| VJLAB-11 | Implement particle field base scene | Feature | Medium | E05 | M4 | New |
| VJLAB-12 | Implement deformable mesh base scene | Feature | Medium | E05 | M4 | New |
| VJLAB-13 | Implement tunnel field base scene | Feature | Medium | E05 | M4 | New |
| VJLAB-14 | Implement preset system (variants as data) | Feature | Medium | E05 | M4 | New |
| VJLAB-15 | Implement playlist queue | Feature | Medium | E05 | M4 | New |
| VJLAB-16 | Publish demo + release notes v0.1.0 | Documentation | Medium | E05 | M4 | New |
| VJLAB-17 | Sync docs with shipped code | Documentation | Medium | E05 | M4 | New |

## Dependencies

* VJLAB-05 blocks VJLAB-07.
* VJLAB-08 blocks VJLAB-11 to VJLAB-15.
* VJLAB-07 blocks VJLAB-09.
* VJLAB-11 to VJLAB-13 block VJLAB-14.

## Notes for Sprint 1 Candidates

* VJLAB-01 to VJLAB-03 (foundation) plus VJLAB-04 start if capacity allows.

## Revision History

| Version | Date | Change |
| ------- | ---- | ------ |
| 0.1.0 | 2026-09-11 | Initial backlog |
