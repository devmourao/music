# Sprint Planning — Sprint 20

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 20 — Fractal Full-Screen |
| Milestone | M10 — Builder & Media 0.5.0 (part 3) |
| Planned Version | 0.5.0 |
| Start Date | 2026-11-18 |
| End Date | 2026-11-25 |
| Owner | Marcos Ferreira Mourão |
| Status | Planned |

## 2. Sprint Goal

Deliver a full-screen fractal base that completes the screen and reacts to music without new geometry.

Expected result: FractalScene with Mandelbrot/Julia shader on a full-screen Plane, zoom pulsing on bass, palette rotation on treble/mids, and rotation on its own z-axis, as a new preset Fractal Bloom (key 6) at the same level as the 3 original bases.

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Browser instrument for VJs: playable, performant, and presentable live |
| Related Scope | Builder & Media — fractal base via scene-spec.md |
| Success Criteria Impacted | Portfolio quality, visual variety, shader proof |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M10 — Builder & Media 0.5.0 |
| Milestone Objective | Preset builder, elemental library, video frame, export/import, new bases |
| Expected Completion | 80% of M10 (VJLAB-55; VJLAB-50 builder redesign and VJLAB-54 video frame deferred) |

## 5. Sprint Capacity

| Item | Value |
| ----- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |
| Observations | One shader base + one preset; reuses standard audio contract |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-55 — Fractal full-screen — Mandelbrot/Julia shader with zoom/rotation reactive to bass/mids | Feature | Medium | M | Owner |

## 7. Prioritization

### High Priority

* VJLAB-55 — only issue, delivers portfolio-level screen fill.

### Medium Priority

* None.

### Low Priority

* None.

## 8. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| `scene-spec.md` Base catalog | Fractal follows 5-piece puzzle and rotation standard | Owner |
| `presets.ts` and `SceneHost` | New base must be composable via instances[] | Owner |
| ShaderMaterial | Requires GLSL fragment shader | Owner |

## 9. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| Shader complexity on weak GPUs | Medium | Medium | Keep iterations 64, fallback to lite mode (lower iterations) |
| Not distinct from Tunnel | Low | Low | Full-screen plane vs rings — visually distinct by design |

## 10. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions, plus live dogfood.

Sprint 20 succeeds when Fractal Bloom renders full-screen, zoom reacts to bass, palette to treble, `npm test`, `npm run build`, `npm run lint` are green, and docs match code.

## 11. Contingency Plan

* If shader is too heavy, reduce iterations 64→32 and document lite fallback.

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-16 |
| Approver | Marcos Ferreira Mourão | 2026-09-16 |

## 13. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial planning for Fractal | Marcos Ferreira Mourão |
