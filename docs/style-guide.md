# Site style guide

The source of truth for typography and content rhythm is
`src/styles/type-system.css`. New pages and components should use semantic HTML
and inherit from that file before adding component CSS.

## Type roles

| Content role | Element or token | Intended use |
| --- | --- | --- |
| Page title | `h1` / `--type-display` | One primary title per page |
| Section title | `h2` / `--type-section` | Major homepage sections |
| Content heading | `--type-content-heading` | `h2` inside articles and experiment narratives |
| Subsection title | `h3` / `--type-subsection` | Cards and substantial subsections |
| Minor heading | `h4` / `--type-minor-heading` | A stage or group within a component |
| Body | `--type-body` | General interface and marketing copy |
| Reading body | `--type-body-large` | Articles and experiment narratives |
| Label | `--type-label` | Eyebrows and short uppercase labels only |

## Rhythm rules

- Every `<p>` uses `--type-body`. Reusable `.callout` components are the sole
  deliberate exception and use `--type-callout`; do not add further
  paragraph-size overrides without updating the shared system.
- Eyebrows are block-level `<span class="eyebrow">` labels and use
  `--type-label`; do not mark them up as paragraphs.
- Do not set heading margins in page or component CSS. Use
  `--space-heading-copy` and `--space-subsection` when a layout genuinely needs
  an explicit gap.
- Paragraphs and lists share `--space-copy`; adjacent content-list items use
  `--space-list-item`, which is intentionally tighter than paragraph spacing.
- Long-form paragraphs and lists should stay within `--measure-copy`.
- Avoid body copy below `--type-small`. Smaller text is reserved for metadata,
  labels, metrics, navigation, and other compact interface text.
- Use `--leading-body` for copy and lists, `--leading-heading` for headings, and
  `--leading-compact` for short UI text.

## Component CSS

Component styles should define layout, color, borders, and deliberate compact UI
exceptions. They should reference the shared tokens for semantic headings,
paragraphs, and lists instead of introducing a new pixel or rem value.

Before adding a new type size or spacing value, check the tokens first. Add a new
token only when the same role will be reused in more than one place.
