# colkito's web

A clean, static personal website and blog built with pure HTML, CSS, and JavaScript. No build tools, no frameworks, no dependencies. 

Designed to be both human-readable and **AI-Agent friendly**.

## ✨ Features

- **Pure Static Stack:** HTML5, CSS3, Vanilla JS
- **Theme System:** Dark/Light/System theme toggle with preference persistence (localStorage)
- **Responsive & Fast:** Mobile-first design, 0 build time, instant loads
- **SEO & Syndication:** Clean URLs, `sitemap.xml`, `robots.txt`, RSS (`feed.xml`), Open Graph tags
- **AI/LLM Ready:** Includes `llms.txt` and parallel Markdown (`.md`) versions of all pages for easy consumption by AI agents and web scrapers.
- **Agent Instructions:** Contains an `AGENTS.md` file with explicit instructions for AI coding assistants (Opencode, Cursor, Claude Code) working on the repository.

## 📂 Structure

```text
colkito-web/
├── AGENTS.md               # Instructions for AI coding agents
├── llms.txt                # LLM entrypoint for web crawlers
├── *.md                    # Markdown versions of all HTML pages (for LLMs)
├── index.html              # Home page
├── about/index.html        # About page
├── now/index.html          # Now page
├── blog/
│   ├── index.html          # Blog listing
│   └── [post]/index.html   # Individual posts
├── tags/
│   ├── index.html          # All tags
│   └── [tag]/index.html    # Posts filtered by tag
├── css/
│   ├── main.css            # Main styles + CSS variables
│   ├── prose.css           # Typography
│   └── prism.css           # Code highlighting
├── js/
│   ├── theme.js            # Theme toggle + footer year
│   └── mobile-nav.js       # Mobile navigation
├── images/
│   ├── favicon.png         # Site favicon (transparent circle)
│   ├── twitter-card.png    # Open Graph image
│   ├── authors/
│   │   ├── default.png     # Author avatar (header logo, circular)
│   │   └── default.jpg     # Author avatar (about page, square)
│   └── [post-slug]/        # Post cover images
├── feed.xml                # RSS feed
├── sitemap.xml             # Sitemap
└── 404.html                # Error page
```

## 🚀 Development

Simply open any HTML file in a browser, or run a local static server from the root directory:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .
```

Then visit `http://localhost:8000`.

## ✍️ Adding Content

Because there is no build step, adding content involves copying an existing template and updating the links. **If you use an AI agent (like Cursor or Opencode), point it to `AGENTS.md` so it knows exactly what to do.**

### Creating a New Blog Post

1. Create a new directory: `blog/my-new-post/`
2. Copy an existing `index.html` from another post.
3. Create the parallel Markdown file: `blog/my-new-post.md` (for LLMs).
4. Update the metadata (title, meta tags, dates, cover image) and the content in both files.
5. Add cover images to `images/my-new-post/`.
6. Add the new post link to: `blog/index.html`, `index.html` (home), and relevant tag pages.
7. Update `feed.xml` and `sitemap.xml`.

### Creating a New Tag

1. Create directory: `tags/my-tag/`
2. Copy an existing tag `index.html` and create the `my-tag.md` file.
3. Update the tag name and add relevant posts.
4. Add the new tag to `tags/index.html`.
5. Update `sitemap.xml`.

## 🤖 AI Agent Workflow

This repository is optimized for autonomous AI agents. If you are an AI assistant reading this:
1. Always refer to `AGENTS.md` before making structural or content changes.
2. Remember to update both `.html` and `.md` files when modifying textual content.
3. Do not introduce npm packages, build tools, or preprocessors unless explicitly requested by the user. Keep it simple.

## ☁️ Hosting

Works natively on any static file server: GitHub Pages, Netlify, Vercel, Cloudflare Pages, Amazon S3, nginx, Apache, etc. Just upload the files—no build step required.

## 📜 License

MIT