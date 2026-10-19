# FreshCart

A one-page demo grocery storefront.
Plain HTML and CSS served by Vite, no framework.

## Layout

- `index.html` holds the whole page: header, hero, categories, products, footer.
- `src/styles.css` holds all styles.
  Colors and spacing live as CSS variables in `:root`; reuse them instead of new hex values.

## Running

- `npm install` once, then `npm run dev`.
- Vite hot-reloads the page in the browser on every save.

## Conventions

- Keep changes small and match the existing visual style.
- No new dependencies.
- Use a plain dash "-" in copy, never an em dash.
