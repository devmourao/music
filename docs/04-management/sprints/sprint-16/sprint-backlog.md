# Sprint Backlog — Sprint 16

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 16 — Keyboard Ergonomics Review |
| Milestone | M8 — Next Stage Research |
| Planned Version | 0.3.1 |
| Start Date | 2026-10-17 |
| End Date | 2026-10-24 |
| Owner | Marcos Ferreira Mourão |

## 2. Sprint Goal

Audit keyboard desk against industry standards and propose optimizations without overwriting existing shortcuts.

## 3. Sprint Backlog Items

| Issue | Title | Type | Priority | Status |
| ----- | ----- | ---- | -------- | ------ |
| VJLAB-43 | Keyboard ergonomics review — Resolume/VDMX vs VJ Lab shortcut audit and optimization proposal | Research | Medium | New |

## 4. Acceptance Criteria

* Matrix of all 29 shortcuts in `useKeyboardDesk.ts` vs Resolume/VDMX/Ableton equivalents.
* Gap analysis: free keys (A/D/K/M/Q/W/Z etc.) vs occupied (1-6/N/P/X/Y/T/H/Space/O/B/Arrows/+/-/E/F/R/,/./V/C/J/0/I/L/S/U/G/A).
* Proposal prioritized by impact vs risk, respecting no-overwrite constraint and Esc-as-close semantics.
* Document stored in `docs/` and linked from backlog.

## 5. Dependencies

| Dependency | Impact | Status |
| ---------- | ------ | ------ |
| Current keymap | Source for audit | Ready |
| Industry docs | Benchmark | Ready |

## 6. Risks and Mitigations

| Risk | Mitigation |
| ---- | ---------- |
| Re-mapping temptation | Proposal only, no code |

## 7. Definition of Done

* Audit and proposal docs completed and reviewed.
* No code change in this sprint.

## 8. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial backlog for Sprint 16 | Marcos Ferreira Mourão |
