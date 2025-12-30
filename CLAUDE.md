# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal blog website. Pure HTML/CSS/JS with no build tools or dependencies. Dark/light theme support with system preference detection.

## Structure

```
/
├── index.html              # Home page (latest posts)
├── 404.html                # Error page
├── robots.txt              # SEO
├── sitemap.xml             # SEO (17 URLs)
├── feed.xml                # RSS feed (3 posts)
├── css/
│   ├── main.css            # Core styles + CSS variables
│   ├── prose.css           # Typography for content
│   └── prism.css           # Code syntax highlighting
├── js/
│   ├── theme.js            # Dark/light/system toggle + footer year
│   └── mobile-nav.js       # Mobile hamburger menu
├── images/
│   ├── favicon.png         # Site favicon (copy of authors/default.png)
│   ├── twitter-card.png    # Open Graph image for home
│   ├── ai.png              # AI assisted badge icon
│   ├── authors/
│   │   ├── default.png     # Author avatar (header logo)
│   │   └── default.jpg     # Author avatar (alternate)
│   └── [post-slug]/        # Post cover images
│       └── cover-*.png/jpg
├── now/index.html          # /now page
├── about/index.html        # /about page
├── blog/
│   ├── index.html          # Blog listing (all posts)
│   └── [slug]/index.html   # Individual posts (3 posts)
└── tags/
    ├── index.html          # All tags listing
    └── [tag]/index.html    # Posts filtered by tag (9 tags)
```

## Current Content

### Blog Posts (3)
- `good-bye-ui-hello-chatbots` (2016-02-08) - tags: chatbots, messaging, slack
- `using-ng-repeat-in-a-range` (2015-05-30) - tags: javascript, angularjs, ng-repeat - **AI assisted**
- `renuncie-a-mi-trabajo-ahora-solo-cobro-en-bitcoin` (2014-02-06) - tags: bitcoin, crypto, open-source

### Tags (9)
chatbots, messaging, slack, javascript, angularjs, ng-repeat, bitcoin, crypto, open-source

## URLs

Clean URLs via directory structure (each page is `folder/index.html`):
- `/blog/my-post` → `blog/my-post/index.html`
- `/tags/bitcoin` → `tags/bitcoin/index.html`

**Important:** Use absolute paths in all HTML files (`/css/`, `/js/`, `/images/`) for consistency across nested directories.

## Theme System

- CSS variables in `:root` and `.dark` selector
- JavaScript toggles `.dark` class on `<html>`
- localStorage persists preference
- Anti-flash inline script in `<head>` prevents FOUC

## Footer Year

The footer year updates automatically via `js/theme.js`:
```html
<div>&copy; 2014 - <span class="current-year">2025</span></div>
```

## AI Assisted Badge

For posts with AI-assisted content, add the badge after the subtitle:
```html
<header class="post-page-header">
  <time datetime="YYYY-MM-DD" class="post-page-date">Month DD, YYYY</time>
  <h1 class="post-page-title">Post Title</h1>
  <p class="post-page-subtitle">Post summary</p>
  <div class="ai-badge-wrapper">
    <span class="ai-badge">
      <img src="/images/ai.png" alt="AI" width="14" height="14">
      AI assisted
    </span>
  </div>
</header>
```

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

## Checklists

### New Blog Post

1. [ ] Create `blog/[slug]/index.html` (copy from existing post)
2. [ ] Update in HTML:
   - `<title>` and `<meta name="description">`
   - Open Graph tags (`og:title`, `og:description`, `og:url`, `og:image`)
   - Post title, date, author, reading time
   - Content
   - Tags links
   - Prev/Next navigation
3. [ ] Add cover image to `images/[slug]/cover-*.png`
4. [ ] Add to `blog/index.html` listing (newest first)
5. [ ] Add to `index.html` home page (if recent)
6. [ ] Add to relevant `tags/[tag]/index.html` pages
7. [ ] Create new tag pages if needed (see below)
8. [ ] Add to `feed.xml` (newest first)
9. [ ] Add to `sitemap.xml`

### New Tag

1. [ ] Create `tags/[tag]/index.html` (copy from existing tag)
2. [ ] Update tag name in `<title>`, `<h1>`, and `<meta>`
3. [ ] Add relevant posts to the listing
4. [ ] Add to `tags/index.html`
5. [ ] Add to `sitemap.xml`

### New Page

1. [ ] Create `[page]/index.html` (copy header/footer from existing)
2. [ ] Add navigation link to ALL pages:
   - Desktop nav: `<nav class="header-nav">`
   - Mobile nav: `<nav class="mobile-nav-links">`
3. [ ] Add to `sitemap.xml`

## Files to Update When Adding Content

| Action | Files to Update |
|--------|-----------------|
| New post | post HTML, blog/index.html, index.html, tag pages, feed.xml, sitemap.xml |
| New tag | tag HTML, tags/index.html, sitemap.xml |
| New page | page HTML, ALL nav menus (18 files), sitemap.xml |

## Deployment

Works on any static hosting: GitHub Pages, Netlify, Vercel, S3/CloudFront, any web server.

No build step required. Just upload files.
