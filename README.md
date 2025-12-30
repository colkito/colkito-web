# colkito's web

A simple, static personal website and blog built with pure HTML, CSS, and JavaScript. No build tools, no frameworks, no dependencies.

## Features

- Pure static HTML/CSS/JS
- Dark/Light/System theme toggle
- Responsive design
- Clean URLs (using directory structure)
- RSS feed
- SEO-friendly (sitemap, meta tags, Open Graph)

## Structure

```
colkito-web/
├── index.html              # Home page
├── now/index.html          # Now page
├── about/index.html        # About page
├── projects/index.html     # Projects page
├── blog/
│   ├── index.html          # Blog listing
│   └── [post]/index.html   # Individual posts
├── tags/
│   ├── index.html          # All tags
│   └── [tag]/index.html    # Posts by tag
├── css/
│   ├── main.css            # Main styles
│   ├── prose.css           # Typography
│   └── prism.css           # Code highlighting
├── js/
│   ├── theme.js            # Theme toggle
│   └── mobile-nav.js       # Mobile navigation
├── images/                 # Images and assets
├── feed.xml                # RSS feed
├── sitemap.xml             # Sitemap
├── robots.txt              # Robots file
└── 404.html                # 404 page
```

## Development

Simply open any HTML file in a browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

Then visit http://localhost:8000

## Adding Content

### New Blog Post

1. Create a directory: `blog/my-new-post/`
2. Copy an existing `index.html` from another post
3. Update the content, title, meta tags, and dates
4. Add the post to `blog/index.html`, `index.html` (home), and relevant tag pages
5. Update `feed.xml` and `sitemap.xml`

### New Tag

1. Create a directory: `tags/my-tag/`
2. Copy an existing tag `index.html`
3. Update the tag name and add relevant posts
4. Add the tag to `tags/index.html`

## Hosting

This site can be hosted on any static file server:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any web server (nginx, Apache, etc.)

## License

MIT
