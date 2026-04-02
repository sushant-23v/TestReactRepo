# TestReactRepo

A modern, responsive React landing page for a coffee shop ("Brew & Bean"), built with Vite.
<!-- add comments -->
## Quick Start

```bash
npm install

npm run dev

npm run build

npm run preview
```

Then open the local URL printed by the dev server (typically http://localhost:5173).

## Project Structure

```
TestReactRepo/
├─ .gitignore
├─ index.html
├─ package.json
├─ vite.config.js
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ styles.css
│  ├─ assets/
│  │  └─ coffee-beans.svg
│  └─ components/
│     ├─ Header.jsx
│     ├─ Hero.jsx
│     ├─ Menu.jsx
│     ├─ About.jsx
│     ├─ Testimonials.jsx
│     └─ Contact.jsx
│     └─ Footer.jsx
└─ README.md
```

## What’s Included

- Sticky header with navigation
- Hero section with call-to-action
- Curated menu grid
- About, Testimonials, and Contact sections
- Accessible, semantic HTML and responsive CSS
- Zero external UI frameworks; easy to customize

## Customization Tips

- Update branding in `src/components/Header.jsx` (shop name, logo).
- Replace the hero image URL in `src/components/Hero.jsx` with your own.
- Edit menu items in `src/components/Menu.jsx`.
- Adjust colors in `src/styles.css` under the `:root` variables.

## License

MIT
