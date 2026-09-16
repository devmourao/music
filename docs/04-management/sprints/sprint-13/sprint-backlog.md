# Sprint Backlog — Sprint 13

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 13 — Stage Control Part 1 |
| Milestone | M7 — Stage Control 0.3.0 (part 1) |
| Planned Version | 0.3.0 |
| Start Date | 2026-09-23 |
| End Date | 2026-09-30 |
| Owner | Marcos Ferreira Mourão |

## 2. Sprint Goal

Portfolio stage control for live presentation without regressing the existing keyboard desk.

## 3. Sprint Backlog Items

| Issue | Title | Type | Priority | Status |
| ----- | ----- | ---- | -------- | ------ |
| VJLAB-37 | Panel visibility modes — docked / detached popup / hidden (cycle via U) | Feature | Medium | New |
| VJLAB-38 | Fullscreen output — native F11 plus G alias with safe exit and hidden-panel coordination | Feature | Medium | New |

Deferred: VJLAB-39 Auto-pilot tour → Sprint 14.

## 4. Acceptance Criteria

### VJLAB-37

* U cycles `docked -> detached -> hidden -> docked` using `event.code === 'KeyU'`.
* No existing shortcut in `useKeyboardDesk.ts` is overwritten.
* Docked is the default on load and on refresh.
* Detached opens controls in a separate popup via `window.open` + `BroadcastChannel`; blocked popup falls back to a floating in-page panel.
* Hidden hides all control chrome while keeping keyboard desk active.

### VJLAB-38

* F11 (native) and G (`event.code === 'KeyG'`) toggle fullscreen via Fullscreen API with user gesture.
* Escape exits fullscreen; if About is open, About close takes precedence.
* Entering fullscreen coordinates with hidden panel (no layout shift on the stage).
* Exit restores previous panel state.

## 5. Dependencies

| Dependency | Impact | Status |
| ---------- | ------ | ------ |
| Keyboard map in `useKeyboardDesk.ts` | Must stay intact | Verified — U and G are free |
| Post-processing isolation in `PostRig.tsx` | Panel/fullscreen must not re-chain passes | Ready |
| Browser Fullscreen API | Requires gesture | Ready |

## 6. Risks and Mitigations

| Risk | Mitigation |
| ---- | ---------- |
| Popup blocked | Fallback to floating panel |
| Escape ambiguity with About | About takes precedence when open |
| Layout-dependent key overlap | Verify `event.code` only; no `event.key` shortcuts |

## 7. Definition of Done

* Code and docs updated (Living Docs).
* `npm test`, `npm run build`, `npm run lint` green.
* Live dogfood on ABNT2 with no shortcut overlap.
* Release gate per project standards.

## 8. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial backlog for Sprint 13 | Marcos Ferreira Mourão |
