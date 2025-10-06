# The Devs - Agency Landing Page

A modern, responsive landing page for a development agency built with Next.js, TypeScript, Tailwind CSS, and Lucide icons.

## Features

- **Server-Side Rendering (SSR)** - Built with Next.js for optimal SEO
- **Static Export** - Generates static HTML/CSS/JS for hosting anywhere
- **Responsive Design** - Beautiful on all devices
- **SEO Optimized** - Complete metadata and Open Graph tags
- **JetBrains Mono Font** - Professional monospace typography
- **Smooth Animations** - Parallax effects and hover transitions
- **Lucide Icons** - Beautiful, consistent iconography

## Tech Stack

- Next.js 15.5
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Google Fonts (JetBrains Mono)

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build static site
npm run build
```

The static files will be generated in the `out/` directory.

## Deployment

The site is pre-configured for static hosting. Simply upload the contents of the `out/` directory to any static hosting provider:

### Popular Hosting Options

- **Netlify**: Drag and drop the `out` folder or connect your git repo
- **Vercel**: `vercel deploy` or connect your git repo
- **GitHub Pages**: Push the `out` folder to gh-pages branch
- **Cloudflare Pages**: Connect repo or upload `out` folder
- **AWS S3 + CloudFront**: Upload `out` folder to S3 bucket
- **Nginx/Apache**: Copy `out` folder to web server directory

### Example: Deploy to Netlify

1. Build the site: `npm run build`
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag and drop the `out` folder
4. Done!

### Example: Deploy to Vercel

```bash
npm install -g vercel
vercel deploy
```

## Customization

### Update Content

Edit `app/page.tsx` to modify:
- Services list
- Portfolio items
- Community links
- Contact information

### Update Metadata

Edit `app/layout.tsx` to modify:
- Page title
- Meta description
- Keywords
- Open Graph tags

### Update Styles

Edit `app/globals.css` to modify:
- Colors
- Animations
- Custom styles

### Change Font

Replace the Google Fonts import in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap');
```

## Performance

- First Load JS: ~117 kB
- Static generation
- Optimized for Core Web Vitals
- Fast page loads
- SEO-friendly

## License

MIT
