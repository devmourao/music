# Keyboard Ergonomics Review — VJ Lab vs Industry

## 1. Purpose

Audit the 29 `event.code` shortcuts in `src/director/useKeyboardDesk.ts:22` and `SHORTCUT_MAP` in `src/director/directorStore.ts:309` against Resolume Arena, VDMX and Ableton Live conventions, and propose non-breaking optimizations that respect the no-overwrite constraint and `Esc`-as-close semantics.

## 2. Current Map (29 codes, 24 entries)

| # | Code(s) | Map entry | Category |
|---|---------|-----------|----------|
| 1 | Digit1–6 | 1–6 Dissolve to preset | Transport |
| 2 | KeyN / KeyP | N / P Dissolve next / previous | Transport |
| 3 | KeyX | X Hard cut | Transport |
| 4 | KeyY | Y Cycle transition duration | Transport |
| 5 | KeyT | T Fire text overlay | Content |
| 6 | KeyH | H Step global hue shift | Color |
| 7 | Space | Space Toggle strobe | Strobe |
| 8 | KeyO | O Cycle strobe mode | Strobe |
| 9 | KeyB | B Fire burst impulse | Performance |
| 10 | ArrowLeft/Right/Up/Down | Arrows Nudge camera | Camera |
| 11 | Equal / Minus | + / - Zoom in / out | Camera |
| 12 | Backslash / KeyE | E / ] Select effect slot | FX |
| 13 | BracketLeft / KeyF | R / F Effect mix up / down | FX |
| 14 | Comma / Period | , / . Strobe speed down / up | Strobe |
| 15 | KeyV | V Toggle VHS glitch | FX |
| 16 | KeyC | C Toggle RGB split | FX |
| 17 | KeyJ | J Toggle beat flash | FX |
| 18 | Digit0 | 0 Bypass all post | FX |
| 19 | KeyI | I Toggle About | UI |
| 20 | KeyL | L Toggle lite mode | UI |
| 21 | KeyS | S Kill all effects | Safety |
| 22 | KeyU | U Cycle panel visibility | UI |
| 23 | KeyG / F11 | G / F11 Toggle fullscreen | UI |
| 24 | KeyA | A Toggle auto-pilot tour | Transport |

Free `event.code` verified: KeyA (now used), KeyD, KeyK, KeyM, KeyQ, KeyW, KeyZ remain free. `Esc` reserved for close (`About` → fullscreen exit).

## 3. Industry Benchmark

| Industry | Pattern | VJ Lab alignment |
|----------|---------|------------------|
| Resolume Arena | Tab hides UI, B = blackout, Space = tap tempo, F = fullscreen, 1–7 columns, Arrows navigate deck | VJ Lab: U for UI (Tab kept for a11y), S for kill (Resolume B), Space for strobe (Resolume tap), G/F11 for fullscreen aligns |
| VDMX | Tab UI, Space blackout, Cmd+1–6 layers, E for effects, R for record | VJ Lab: E/R overlap but with slot semantics, similar |
| Ableton Live | Tab toggles Session/Arrangement, Space play, 1–7 scenes, Z/X zoom, B draw | VJ Lab: Space/B/Arrows/ZOOM similar mental model |
| Common safety | Esc = close/cancel, never toggle | VJ Lab: Esc closes About only — correct, proposal to keep |

## 4. Gap Analysis

*   **No overwrite risk:** All new shortcuts since Sprint 13 used verified free codes (U, G, A). No collision with Resolume core (Tab/B/Space) because VJ Lab intentionally remapped: S kill vs Resolume B blackout, U vs Tab.
*   **Ergonomic hot zone (left hand on WASD):** Q/W/E/R/A/S/D/F are reachable. Currently Q/W/A/D free except A (now auto-pilot) and W/Q unused — good reserve.
*   **ABNT2 alias coverage:** `R / F` and `E / ]` already handle `[ / ´` alternatives (`directorStore.ts:322` fixed) — no further alias needed.
*   **Discoverability:** HUD now shows pills/bars but shortcut list is 24 lines — dense for live recall.

## 5. Non-Breaking Proposal (prioritized)

| Priority | Proposal | Rationale | Impact |
|----------|----------|-----------|--------|
| P1 | Keep Esc as close only; do not use for panel cycle (as discussed) — document in `SHORTCUT_MAP` | Preserves browser + a11y semantics | None |
| P1 | Keep U for panel (docked/detached/hidden) — optionally add Shift+Tab as alias only if a11y audit passes | U is free, Tab stays for focus navigation | Low |
| P2 | Reserve Q/W for future mixer desk (per-track mute/solo) — aligns with Resolume layer mute | Left-hand hot zone, free today | None now |
| P2 | Reserve M for future master mute vs S kill (industry M = mute) | Free, mnemonic | None now |
| P3 | Add `?` / `H` help overlay (hold H already hue — add Shift+H for help) to improve discoverability without new key | No new code, leverages existing H | Low |

No immediate re-mapping recommended. The current map is coherent, left-hand reachable, and industry-aligned with intentional deviations documented above.

## 6. Recommendation

Close VJLAB-43 as research spike with this document as evidence. No code change in Sprint 16. Next code change for shortcuts should be behind a feature flag and use free keys Q/W/M/Z only.

## 7. References

*   `src/director/useKeyboardDesk.ts:22` — source of truth
*   `src/director/directorStore.ts:309` — `SHORTCUT_MAP`
*   Resolume Arena 7 shortcuts (Tab, B, Space, F, 1–7) — public docs
*   Sprint 16 planning — timeboxed research

## 8. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial ergonomics review | Marcos Ferreira Mourão |
