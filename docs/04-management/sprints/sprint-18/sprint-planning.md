# Sprint Planning — Sprint 18

## 1. Sprint Identification

| Field | Information |
| ----- | ----------- |
| Project | VJ Lab |
| Sprint | Sprint 18 — Builder & Export |
| Milestone | M10 — Builder & Media 0.5.0 (part 1) |
| Planned Version | 0.5.0 |
| Start Date | 2026-11-02 |
| End Date | 2026-11-09 |
| Owner | Marcos Ferreira Mourão |
| Status | Planned |

## 2. Sprint Goal

Enable preset authoring and portability without a database.

Expected result: a preset builder (browser with folders, preview, knobs for palette/gain/speed/element, save as new preset) and JSON export/import for presets (versioned schema, file download/upload) with validation.

## 3. Relation to Project Brief

| Item | Reference |
| ---- | --------- |
| Project Objective | Browser instrument for VJs: playable, performant, and presentable live |
| Related Scope | Builder & Media v0.5.0 — preset creation and sharing |
| Success Criteria Impacted | Content autonomy, shareability, presenter workflow |

## 4. Relation to Milestone

| Field | Information |
| ----- | ----------- |
| Current Milestone | M10 — Builder & Media 0.5.0 |
| Milestone Objective | Preset builder, elemental library, video frame, export/import |
| Expected Completion | 50% of M10 (VJLAB-50 and VJLAB-53; VJLAB-51 elemental data and VJLAB-52 video frame deferred) |

## 5. Sprint Capacity

| Item | Value |
| ----- | ----- |
| Developers | 1 |
| Working Days | 5 |
| Available Hours | ~10 |
| Observations | Two Medium features; builder reuses existing directorStore and presets.ts |

## 6. Selected Issues

| Issue | Type | Priority | Estimate | Owner |
| ----- | ---- | -------- | -------- | ----- |
| VJLAB-50 — Preset builder UI — browser, preview and knobs to assemble and save presets | Feature | Medium | M | Owner |
| VJLAB-53 — Preset export/import — JSON file without DB, versioned schema | Feature | Medium | M | Owner |

Deferred: VJLAB-51 elemental presets and VJLAB-52 video frame → Sprint 19.

## 7. Prioritization

### High Priority

* VJLAB-50 — builder is the authoring surface for all future 50–100 presets.

### Medium Priority

* VJLAB-53 — export/import makes the 50 presets portable without backend.

### Low Priority

* None.

## 8. Dependencies

| Dependency | Impact | Owner |
| ---------- | ------ | ----- |
| `scenes/presets.ts` PRESETS and `directorStore` | Builder reads/writes preset data | Owner |
| `SHORTCUT_MAP` | Builder must not introduce new shortcuts | Owner |
| File API (Blob, FileReader) | Export/import uses local files only | Owner |

## 9. Sprint Risks

| Risk | Probability | Impact | Mitigation |
| ---- | ----------- | ------ | ---------- |
| Preset schema drift | Medium | Medium | Version field `1.0` and validation on import |
| Builder UI complexity | Medium | Low | Start with 4 knobs (palette/gain/speed/element) and folder list only |
| File name collisions on import | Low | Low | Generate new id on collision |

## 10. Definition of Done (Sprint)

Standard project Definition of Done applies with no exceptions, plus live dogfood.

Sprint 18 succeeds when builder shows folder browser, preview, knobs and save, export downloads valid JSON and import merges correctly, `npm test`, `npm run build`, `npm run lint` are green, and docs match code.

## 11. Contingency Plan

* If capacity runs out, ship VJLAB-50 first and move VJLAB-53 to Sprint 19.
* Priority order: VJLAB-50, VJLAB-53.

## 12. Approval

| Role | Name | Date |
| ---- | ---- | ---- |
| Author | Marcos Ferreira Mourão | 2026-09-16 |
| Approver | Marcos Ferreira Mourão | 2026-09-16 |

## 13. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial planning for builder & export | Marcos Ferreira Mourão |
