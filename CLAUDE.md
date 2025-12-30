# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal blog website. Pure HTML/CSS/JS with no build tools or dependencies. Dark/light theme support with system preference detection.

## Structure

```
/
├── index.html              # Home page
├── 404.html                # Error page
├── robots.txt              # SEO
├── sitemap.xml             # SEO
├── feed.xml                # RSS feed
├── css/
│   ├── main.css            # Core styles + CSS variables
│   ├── prose.css           # Typography for content
│   └── prism.css           # Code syntax highlighting
├── js/
│   ├── theme.js            # Dark/light/system toggle
│   └── mobile-nav.js       # Mobile hamburger menu
├── images/                 # All static images
├── now/index.html          # /now page
├── about/index.html        # /about page
├── blog/
│   ├── index.html          # Blog listing
│   └── [slug]/index.html   # Individual posts
└── tags/
    ├── index.html          # All tags
    └── [tag]/index.html    # Posts by tag
```

## URLs

Clean URLs via directory structure (each page is `folder/index.html`):
- `/blog/my-post` → `blog/my-post/index.html`

## Theme System

- CSS variables in `:root` and `.dark` selector
- JavaScript toggles `.dark` class on `<html>`
- localStorage persists preference
- Anti-flash inline script in `<head>` prevents FOUC

## Key CSS Variables

```css
/* Primary: Emerald */
--primary-400: #34d399;
--primary-500: #10b981;
--primary-600: #059669;

/* Gray: Slate */
--gray-100 to --gray-900

/* Font */
--font-sans: 'Noto Sans', system-ui, sans-serif;
```

## Adding New Content

### New Blog Post
1. Create `blog/[slug]/index.html`
2. Copy structure from existing post
3. Update title, date, content, tags, prev/next nav
4. Add entry to `blog/index.html` listing
5. Update tag pages if needed
6. Update `sitemap.xml` and `feed.xml`

### New Page
1. Create `[page]/index.html`
2. Copy header/footer from existing page
3. Add navigation link to all pages' header

## Deployment

Works on any static hosting:
- GitHub Pages
- Netlify
- Vercel
- S3/CloudFront
- Any web server

No build step required. Just upload files.
