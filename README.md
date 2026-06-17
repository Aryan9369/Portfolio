# Aryan Katiyar — Portfolio Website

A single-page portfolio built with plain HTML, CSS, and JavaScript —
no frameworks, no build step.

## File structure

```
portfolio/
├── index.html          → all page content & structure
├── css/
│   └── style.css        → design system + all styling
├── js/
│   └── script.js        → nav, scroll-reveal, contact form, mobile menu
└── assets/
    └── Aryan_Katiyar_Resume.pdf   → downloadable resume (linked from Hero & Resume sections)
```

## Running it locally

No installation or build step is needed. Pick whichever is easiest:

**Option 1 — just open the file**
Double-click `index.html`, or right-click → Open With → your browser.
(Everything works this way except the file paths must stay relative,
so don't move `index.html` out of this folder on its own.)

**Option 2 — VS Code Live Server (recommended while editing)**
1. Install the "Live Server" extension in VS Code.
2. Right-click `index.html` → "Open with Live Server".
3. It reloads automatically every time you save a file.

**Option 3 — a quick local server (if you have Python installed)**
```bash
cd portfolio
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

## Putting it online (free options)

- **GitHub Pages**: push this folder to a GitHub repo, then in
  Settings → Pages, set the source to your main branch. Your site
  will be live at `https://<username>.github.io/<repo-name>/`.
- **Netlify / Vercel**: drag-and-drop the `portfolio` folder onto
  Netlify's deploy page, or connect your GitHub repo — both give you
  a live URL in under a minute, free.

## Design notes

- **Color palette**: deep ink (`#11161D`) and navy (`#1B2735`) for
  contrast sections, a cool paper background (`#F5F7FA`) for content,
  amber (`#E8A23D`) as the primary accent, and teal (`#2BB3A3`) as
  the secondary accent for links and labels.
- **Typography**: Space Grotesk for headings, Inter for body text,
  JetBrains Mono for code-flavored details (the hero's JSON card,
  eyebrows, skill labels, endpoint paths).
- **Signature element**: the Hero is styled as a live API response
  (`GET /developer/aryan-katiyar → 200 OK`) and each project is
  presented like an endpoint in API docs (method badge + path),
  which ties the visual language directly to backend development —
  the role being targeted.
- Animations are intentionally restrained: scroll-reveal on each
  section, hover lifts on cards/chips, a blinking cursor in the JSON
  card, and a subtle tilt on the hero panel (desktop only). Reduced-motion
  preferences are respected throughout.

## Updating content later

- **Resume file**: replace `assets/Aryan_Katiyar_Resume.pdf` with a
  new export (keep the same filename, or update the `href` in
  `index.html` if you rename it).
- **Projects/Skills/Education/Certifications**: each section in
  `index.html` is plain markup with clear comments (`<!-- ============ -->`)
  — copy an existing card/row/chip and edit the text.
- **Colors/fonts**: everything is driven by CSS variables at the top
  of `css/style.css` under `:root`, so a palette or font change only
  needs editing in one place.
