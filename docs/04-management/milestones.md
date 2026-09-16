# Milestones — VJ Lab

## M1 — Stage Ready

* Objective: toolchain and blank stage validated.
* Expected deliveries: Vite dev server, static 3D stage, Vitest smoke test, ESLint baseline.
* Completion criteria: `npm test`, `npm run build`, `npm run lint` green; 60 FPS blank stage.
* Expected evidence: demo screenshot, test output.
* Approver: Owner.

## M2 — Sound Reactive

* Objective: audio engine validated end to end.
* Expected deliveries: .mp3 upload, FFT bands, console spectrum, first reactive geometry.
* Completion criteria: bass drives scale smoothly; no per-frame re-render; single AudioContext with dispose.
* Expected evidence: screen recording, console log sample.
* Approver: Owner.

## M3 — Playable Instrument

* Objective: live direction validated.
* Expected deliveries: keyboard desk, playlist 1–3, burst trigger, strobe / glitch / blur rig with warning and kill switch.
* Completion criteria: all shortcuts respond instantly; strobe defaults off; docs updated.
* Expected evidence: shortcut map, demo video.
* Approver: Owner.

## M4 — Public MVP 0.1.0

* Objective: portfolio release published.
* Expected deliveries: 3 base scenes + presets, deployed demo, release notes, synced docs.
* Completion criteria: public URL live; `v0.1.0` tag; release gate (tests, build, lint) green; documentation matches code.
* Expected evidence: URL, tag, release notes.
* Approver: Owner.

## M5 — Live Control 0.2.0

* Objective: industry-standard live desk on top of the shipped MVP.
* Expected deliveries: A/B transitions, palette system, continuous zoom, effect dry/wet, image texture on mesh, animated text overlay, strobe speed, global effects pack.
* Completion criteria: preset-driven direction with mix bars; transitions and palettes validated on live audio; release gate green.
* Expected evidence: demo video, keymap reference.
* Approver: Owner.

## M6 — Polish 0.2.1

* Objective: identity and weak-GPU safety closing the portfolio release.
* Expected deliveries: strobe modes, metadata module and version seal, About panel, lite mode with pixel-ratio and effect caps, rename and branding.
* Completion criteria: seal shows real version; About lists author links; lite mode visibly relieves weak GPUs; docs in sync.
* Expected evidence: deployed URL, release notes v0.2.1.
* Approver: Owner.

## M7 — Stage Control 0.3.0

* Objective: performance-ready stage control without breaking the existing keyboard desk.
* Expected deliveries: panel visibility modes (docked / detached popup / hidden), fullscreen output, auto-pilot tour with timed transitions.
* Completion criteria: U cycles panel states without overwriting any shortcut in `useKeyboardDesk.ts`; G/F11 enters fullscreen and coordinates with hidden panel; A toggles auto-pilot and respects post-processing isolation (no UV / convolution conflict); architecture and docs remain in sync.
* Expected evidence: keymap delta, stage control demo.
* Approver: Owner.

## Revision History

| Version | Date | Change |
| ------- | ---- | ------ |
| 0.1.0 | 2026-09-11 | Initial milestones |
| 0.2.1 | 2026-09-16 | Add M5 Live Control, M6 Polish, M7 Stage Control for panel / fullscreen / auto-pilot |
