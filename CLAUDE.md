# The Devs - Project Context for Claude

## Project Overview

**The Devs** is a modern agency landing page showcasing development services with a focus on backend systems, DevOps, and software architecture. The site features a wizard/magic theme with the tagline "We are like wizards, but with code!"

**Live Purpose**: Landing page for a development consultancy that helps companies with complex technical challenges.

## Tech Stack

- **Framework**: Next.js 15.5 with TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React 0.544.0
- **Font**: JetBrains Mono (Google Fonts)
- **Build Mode**: Static export (`output: 'export'`)
- **React**: 19.1.0

## Project Structure

```
/app
  ├── page.tsx          # Main landing page component (client-side)
  ├── layout.tsx        # Root layout with metadata and SEO
  ├── globals.css       # Global styles, Tailwind config, animations
  └── favicon.ico       # Site icon

/public                 # Static assets
next.config.ts         # Next.js config (static export enabled)
package.json           # Dependencies and scripts
tsconfig.json          # TypeScript configuration
eslint.config.mjs      # ESLint configuration
postcss.config.mjs     # PostCSS configuration
```

## Key Features & Implementation Details

### Page Structure (`app/page.tsx`)

The landing page is a **client component** (`'use client'`) with four main sections:

1. **Hero Section**
   - Parallax scrolling effect on scroll (using `useEffect` + `useRef`)
   - Animated gradient text
   - Floating gradient orbs with blur effects
   - Background grid pattern
   - CTA button to contact section

2. **Services Section**
   - 10 service cards in grid layout (responsive: 1/2/3 columns)
   - Each service has: Lucide icon, title, gradient color scheme
   - Services include: Backend systems, CI/CD, DevOps, Observability, AI adoption, etc.
   - Note about open-source contribution

3. **Portfolio Section**
   - List of 9 client projects (pill-style tags)
   - "100% Customer Satisfaction" badge
   - Projects: My Speed Puzzling, StringData, Omnicado, Peon.dev, Sharry.tech, Carvago, GLAMI, Spaceflow, Apploud

4. **Contact & Community Section**
   - Email contact: j.mikes@me.com
   - Community links (external): Pehapkari.cz, AI4Dev.cz, Techmeetup.cz

### SEO & Metadata (`app/layout.tsx`)

- Complete metadata object with title, description, keywords
- Open Graph tags for social sharing
- Twitter card configuration
- Viewport settings
- Theme color: `#020617` (slate-950)
- Preconnects to Google Fonts
- Robots: index and follow enabled

### Styling (`app/globals.css`)

- Tailwind v4 imports
- JetBrains Mono font from Google Fonts (weights: 400, 500, 600, 700)
- Custom `@keyframes gradient` animation
- `.animate-gradient` utility class
- `.bg-grid-pattern` for hero background
- Dark theme: slate-950/900 base colors
- Gradient palette: blue, purple, pink, cyan, teal, orange, etc.

### Build Configuration

- **Static Export**: `output: 'export'` in `next.config.ts`
- **Image Optimization**: Disabled (`unoptimized: true`)
- **Trailing Slash**: Enabled for static hosting compatibility
- **Turbopack**: Used in dev and build scripts

## Development Workflow

### Available Scripts

```bash
npm run dev         # Start dev server with Turbopack
npm run build       # Build static site to /out directory
npm start           # Start production server (rarely used with static export)
npm run lint        # Run ESLint
```

### Build Output

- Static files generated in `/out/` directory
- Ready for deployment to any static host (Netlify, Vercel, GitHub Pages, etc.)

## Content Customization Points

### To Update Services
Edit the `services` array in `app/page.tsx:22-33` - each entry needs:
- `icon`: Lucide React icon component
- `title`: Service name
- `gradient`: Tailwind gradient class (currently unused in rendering but kept for future use)

### To Update Portfolio
Edit the `portfolio` array in `app/page.tsx:35-45` - simple string array of client names

### To Update Community Links
Edit the `communities` array in `app/page.tsx:47-51` - each entry needs:
- `name`: Community name
- `url`: External URL

### To Update Contact
Change email in `app/page.tsx:162-166` and potentially update metadata in `app/layout.tsx`

### To Update SEO/Meta
Edit `metadata` object in `app/layout.tsx:4-44`

### To Change Branding
- Update hero text in `app/page.tsx:65-71`
- Modify color scheme in `app/globals.css` and Tailwind classes
- Replace font in `app/globals.css:4`

## Design System

### Colors
- **Background**: `slate-950`, `slate-900` (dark theme)
- **Accents**: Blue-purple-pink gradient spectrum
- **Text**: White primary, gray-400/500 secondary
- **Borders**: `white/5` to `white/20` (semi-transparent)

### Typography
- **Font**: JetBrains Mono (monospace)
- **Headings**: 4xl to 8xl (responsive)
- **Body**: Base to 2xl
- **Weight**: 400 (normal) to 700 (bold)

### Spacing
- Sections: `py-32` to `py-40`
- Hero: `min-h-screen`
- Max content width: `max-w-6xl` (services/portfolio), `max-w-5xl` (hero)

### Animations
- Gradient text animation (custom keyframes)
- Parallax hero on scroll
- Hover scale/color transitions
- Pulse effects on gradient orbs

## Deployment Notes

- Site is configured for **static hosting only**
- No server-side APIs or dynamic routes
- Images are unoptimized (suitable for static hosts without Next.js server)
- Trailing slashes enabled for better static host compatibility
- First Load JS: ~117 kB (mentioned in README)

## Common Tasks

### Add a New Service
1. Import new Lucide icon in `app/page.tsx:3`
2. Add object to `services` array with icon, title, gradient

### Add a New Portfolio Item
Add string to `portfolio` array in `app/page.tsx:35-45`

### Change Color Scheme
Update gradient classes throughout `app/page.tsx` and potentially add new Tailwind colors in `globals.css`

### Update Contact Email
Change in two places: `app/page.tsx:162` and potentially in `app/layout.tsx` metadata

## Git Status (Current Session)

- Migrating from static HTML site to Next.js
- Deleted: `CNAME`, `index.html`, `style.css`
- Modified: `README.md`
- New Next.js structure (untracked): `app/`, configs, `package.json`
- Branch: `main`

## Dependencies

**Production:**
- `next`: 15.5.4
- `react`: 19.1.0
- `react-dom`: 19.1.0
- `lucide-react`: 0.544.0

**Development:**
- `typescript`: ^5
- `tailwindcss`: ^4
- `@tailwindcss/postcss`: ^4
- `eslint`: ^9
- `eslint-config-next`: 15.5.4
- Type definitions for Node, React, React DOM

## Performance Characteristics

- Static generation (SSG)
- SEO optimized
- Fast page loads
- Minimal JavaScript (only client interactivity for parallax effect)
- Core Web Vitals optimized

## License

MIT
