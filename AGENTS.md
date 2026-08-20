## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Styling

- Start every new element with semantic HTML and the existing global styles in
  `src/styles/type-system.css` and `src/styles/global.css`.
- Reuse existing typography, spacing, color, and status tokens before adding a
  new value or selector.
- Do not add component-level font sizes for `h1`–`h4` or ordinary paragraphs.
  Headings and paragraphs should inherit the global type system.
- Add component CSS only for layout, visual treatment, or a genuinely distinct
  reusable UI role that the global system does not cover.
- Before creating a new style, check `docs/style-guide.md`. If a new reusable
  role is necessary, define it globally and document it there first.
