# Sprint Backlog — Sprint 18

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

## 2. Sprint Goal

Enable preset authoring and portability.

## 3. Sprint Backlog Items

| Issue | Title | Type | Priority | Status |
| ----- | ----- | ---- | -------- | ------ |
| VJLAB-50 | Preset builder UI — browser, preview and knobs to assemble and save presets | Feature | Medium | New |
| VJLAB-53 | Preset export/import — JSON file without DB, versioned schema | Feature | Medium | New |

Deferred: VJLAB-51 elemental presets and VJLAB-52 video frame.

## 4. Acceptance Criteria

### VJLAB-50

* Browser shows folders/tags from PRESETS with swatch, add by folder/unit to Effects queue or open in builder.
* Preview renders selected preset in mini Canvas.
* Knobs for palette, gain, speed, element update live preview.
* Save as new preset appends to PRESETS with new id and appears in browser.

### VJLAB-53

* Export downloads `vjlab-presets-v1.json` with version field and PRESETS array.
* Import via file picker validates schema, shows error on invalid, merges with id collision handling.
* No backend or DB required.

## 5. Dependencies

| Dependency | Impact | Status |
| ---------- | ------ | ------ |
| Preset system | Builder data | Ready |
| File API | Export/import | Ready |

## 6. Risks and Mitigations

| Risk | Mitigation |
| ---- | ---------- |
| Schema drift | Version field |
| UI overload | 4 knobs only |

## 7. Definition of Done

* Code and docs updated (Living Docs).
* `npm test`, `npm run build`, `npm run lint` green.
* Live dogfood.
* Release gate per standards.

## 8. Revision History

| Version | Date | Change | Author |
| ------- | ---- | ------ | ------ |
| 1.0.0 | 2026-09-16 | Initial backlog for Sprint 18 | Marcos Ferreira Mourão |
