# Sprint Review — Sprint 06

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 06 — Public MVP Release |
| Milestone | M4 — Public MVP (close) |
| Review Date | 2026-09-13 |
| Owner | Marcos Ferreira Mourão |

## 2. Sprint Goal

### Planned Objective

Presets, playlist, deployed demo, release notes and tag `v0.1.0`.

### Obtained Result

Six presets as data with keys 1–6 and N/P playlist, Netlify config, rewritten README, release notes and tag `v0.1.0` pushed. Deploy to `music.mourao.info` wired to `main`.

### Evaluation

[x] Achieved
[ ] Partially achieved
[ ] Not achieved

## 3. Deliveries

| Delivery | Status | Notes |
| -------- | ------ | ----- |
| Preset system (6 presets) | Done | Palette, gain, speed per preset |
| Playlist queue (1–6, N/P) | Done | Wrapping navigation, badge counter |
| Netlify config | Done | `netlify.toml`, build `dist/` |
| Release notes + README | Done | v0.1.0 notes, controls table, demo URL |
| Version tag | Done | `v0.1.0` on remote |

## 4. Completed Issues

| Issue | Title | Notes |
| ----- | ----- | ----- |
| VJLAB-14 | Preset system | Done |
| VJLAB-15 | Playlist queue | Done |
| VJLAB-16 | Deploy + release notes | Done |
| VJLAB-17 | Docs sync | Done |

## 5. Increment Demo

* Local: `npm run dev` → presets switch live with badge.
* Public: `https://music.mourao.info` after Netlify build.
* Evidence: PR #9 and #10 merged, tag `v0.1.0`.

## 6. Feedback

| Source | Feedback | Recommended Action |
| ------ | -------- | ------------------ |
| Owner | MVP scope complete | Close M4, open Live Control v0.2.0 |

## 7. Pending Items

| Item | Reason | Next Action |
| ---- | ------ | ----------- |
| Live Control (E06) | By design v0.2.0 | Sprint 07 planning |

## 8. Acceptance Criteria

| Criterion | Status | Notes |
| --------- | ------ | ----- |
| Public demo with presets/playlist | Met | Post-deploy check |
| Docs match shipped code | Met | README, notes, sprints |

## 9. Definition of Done

[x] Fully applied

## 10. Review Decision

[x] Sprint approved — M4 and MVP closed

## 11. Next Actions

* Retrospective, then Sprint 07 (Live Control transitions + palettes first).

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Sprint Owner | Marcos Ferreira Mourão | 2026-09-13 |

## 13. Revision History

| Date | Change | Owner |
| ---- | ------ | ----- |
| 2026-09-13 | Review recorded | Owner |
