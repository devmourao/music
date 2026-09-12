# Architecture Review — VJ Lab

## 1. Solution Overview

VJ Lab is a client-side web instrument that transforms a local .mp3 into real-time 3D visuals. The Web Audio API analyser node produces FFT data each frame. A pure audio engine normalizes and smooths three bands (bass, mids, treble). A director layer holds low-frequency UI state (active scene, playlist, global effects). Three base 3D scenes consume the same scene contract and render with React Three Fiber at 60 FPS. Keyboard input switches scenes and fires global effects.

Flow:

Local .mp3 -> Audio Engine (FFT, normalize, smooth) -> Shared Audio Bus -> Director (scene + effects) + Stage (3 scenes) -> Canvas + Playlist UI

## 2. Proposed Architecture

Data-driven, three-pillar separation:

* **Audio Engine (Brain):** pure math, no rendering, no input. Single `AudioContext`, analyser node, FFT -> normalized bands. Output published to a mutable bus (refs), never triggering React re-render per frame.
* **Director:** low-frequency state only (`activeSceneId`, `playlist`, `strobeOn`, `glitchOn`). Implemented with a lightweight store. Subscribes to keyboard events.
* **Stage (View):** obedient 3D components. Each frame reads the audio bus via `useFrame`, applies local smoothing, maps bands to scale, color, light intensity and camera motion.

This separation allows a future engine port (audio subsystem, game mode / controller, actors) and a future hardware lighting subscriber (LED controller) without changing the DSP.

## 3. Technology Stack

| Category | Technology | Notes |
| -------- | ---------- | ----- |
| Language | TypeScript (strict) | All logic, contracts, tests |
| UI | React 19 + Vite + Tailwind CSS | Shell, upload, playlist, warnings |
| 3D | Three.js via React Three Fiber + Drei | Canvas, helpers, controls |
| Post-processing | @react-three/postprocessing | Strobe, VHS glitch, blur |
| State | Zustand (director) + mutable refs (audio bus) | No per-frame re-render |
| Audio | Web Audio API (AnalyserNode) | FFT 2048, smoothingTimeConstant ~0.8 + exponential lerp |
| Tests | Vitest, colocated `*.test.ts` | Pure logic first |
| Quality | ESLint, `tsc -b`, `vite build` | Release gate |
| Docs preview | Docsify (dev only) | Serves `docs/` locally |

## 4. Main Components

* `useAudioEngine`: owns `AudioContext`, decodes .mp3, exposes `getSpectrum()` returning `{ bass, mids, treble }` in 0.0–1.0 plus raw bins for advanced scenes.
* `audioBus`: mutable singleton (ref) updated each animation tick; LED integration point in the future.
* `directorStore`: `activeSceneId: 0 | 1 | 2`, `strobeOn`, `burstTriggerId`, `playlist: ScenePreset[]`.
* `SceneContract`: `{ audio: Spectrum, triggers: TriggerState, params: SceneParams, delta: number }`.
* `ParticleFieldScene`, `DeformableMeshScene`, `TunnelFieldScene`: the three base scenes.
* `ScenePreset`: pure data `{ scene: 'particles' | 'mesh' | 'tunnel', palette, reactivityTarget, speed, density }` — variants are data, not new components.
* `KeyboardDesk`: space (strobe), 1–3 (scene), B (burst), arrows (camera nudge), S (kill all effects).
* `PostRig`: global effects chain.

## 5. Dependencies

| Dependency | Purpose | Criticality | Update Strategy |
| ---------- | ------- | ----------- | --------------- |
| three | 3D engine | High | Pin minor, test on upgrade |
| @react-three/fiber | React renderer | High | Follow React 19 support |
| @react-three/drei | Helpers | Medium | Optional, replaceable |
| @react-three/postprocessing | Global effects | Medium | Isolate behind `PostRig` |
| zustand | Director store | Medium | Thin wrapper for swap-out |
| vitest | Test runner | Medium | Dev only |

No backend, no media server, no hosted audio.

## 6. Architectural Decisions

| ID | Decision | Rationale | Expected Impact |
| -- | -------- | --------- | --------------- |
| AD-01 | Audio data via refs, UI state via store | Avoid 60 fps React re-render; keep render loop clean | Stable 60 FPS, simple port to engine tick |
| AD-02 | Shared scene contract for all scenes | Enforce factory model; fix bugs once in base | 3 bases support unlimited presets |
| AD-03 | Presets as data, not components | Industry practice (master material -> instances) | No duplication, easy playlist |
| AD-04 | Single AudioContext with explicit lifecycle | Prevent leaks on track change | Reliable upload / replay |
| AD-05 | Audio bus as future hardware bus | Same normalized bands can drive LED controller later | Zero DSP change for lighting |
| AD-06 | Post-processing isolated in `PostRig` | Global effects toggle without touching scenes | Safe strobe kill switch |

## 7. Architectural Risks

| Risk | Mitigation |
| ---- | ---------- |
| React 19 + Fiber version drift | Pin versions, validate blank stage at 60 FPS first |
| Jitter without smoothing | Exponential smoothing + lerp in engine, validated by console spectrum first |
| Strobe photosensitivity | Default off, warning banner, single-key kill, documented limit |
| Scope creep into routes / capture / photorealism | Frozen out of MVP; tracked as future evolution only |
| LED latency if added too early | Deferred; bus already reserves subscriber slot |

## 8. Architectural Criteria (for all future decisions)

* Prefer simplicity and low coupling.
* Preserve testability of pure logic.
* Keep documentation in sync with code.
* Review code before merge.
* Minimize per-frame allocations.

## 9. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Owner | Marcos Ferreira Mourão | 2026-09-11 |
| Tech Lead | Marcos Ferreira Mourão | 2026-09-11 |

## 10. Revision History

| Version | Date | Change |
| ------- | ---- | ------ |
| 0.1.0 | 2026-09-11 | Initial architecture validation |
