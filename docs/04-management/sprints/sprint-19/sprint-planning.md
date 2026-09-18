# Sprint Planning — Sprint 19

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 19 — New Bases: Grid LED & Avatar |
| Milestone | M10 — Builder & Media 0.5.0 (part 2) |
| Planned Version | 0.5.0 |
| Start Date | 2026-11-10 |
| End Date | 2026-11-17 |
| Owner | Marcos Ferreira Mourão |
| Status | Planned |

## 2. Sprint Goal

Deliver two new bases that feel truly new through element combinations, not just color.

Expected result: Grid LED base (Punch Club image + LED points) and Avatar low-poly base (GLB with edge/fill) both conforming to the 5-piece puzzle and standard audio contract, each with one reference preset (Octagon Pulse, Chroma Bouncer).

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Browser instrument for VJs: playable, performant, and presentable live |
| Related Scope | Builder & Media — new bases via `scene-spec.md` |
| Success Criteria Impacted | Content variety, stage novelty, performer inspiration |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M10 — Builder & Media 0.5.0 |
| Milestone Objective | Preset builder, elemental library, video frame, export/import, new bases |
| Expected Completion | 60% of M10 (VJLAB-51/52; VJLAB-50 builder redesign and VJLAB-54 video frame deferred) |

## 5. Sprint Capacity

| Item | Value |
| ----- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |
| Observations | Two new scene components; reuse audioBus and directorStore contract |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-51 — Grid LED scene — Punch Club image + LED points reactive to bass/mids (Octagon Pulse) | Feature | Medium | M | Owner |
| VJLAB-52 — Avatar low-poly scene — human GLB with edge/fill materials and audio-driven bounce/sway (Chroma Bouncer) | Feature | Medium | M | Owner |

Deferred: VJLAB-50 builder redesign, VJLAB-54 video frame.

## 7. Prioritization

### High Priority

* VJLAB-51 — Grid LED reuses existing Plane + Points, lower risk.

### Medium Priority

* VJLAB-52 — Avatar requires GLB loading and two materials, higher risk.

### Low Priority

* None.

## 8. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| `scene-spec.md` 5-piece puzzle | Both bases must follow contract | Owner |
| `scenes/presets.ts` | Each base adds one ScenePreset row | Owner |
| `audioBus` bass/mids/treble | Both bases read same standardized input | Owner |

## 9. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| GLB load time for Avatar | Medium | Medium | Use low-poly < 5k tris, draco off, preload |
| LED map alignment on image | Medium | Low | Hardcode 32 led positions for Punch Club crop first, make generic later |

## 10. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions, plus live dogfood.

Sprint 19 succeeds when both bases render with one preset each, react to bass/mids/treble, `npm test`, `npm run build`, `npm run lint` are green, and docs match code.

## 11. Contingency Plan

* If capacity runs out, ship VJLAB-51 first and move VJLAB-52 to Sprint 20.
* Priority order: VJLAB-51, VJLAB-52.

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-16 |
| Approver | Marcos Ferreira Mourão | 2026-09-16 |

## 13. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial planning for Grid LED and Avatar | Marcos Ferreira Mourão |
