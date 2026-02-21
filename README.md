# PulseByte Daily

Catchy, simple, and 100% free tech blog starter.

## What you get
- Mobile-friendly homepage with daily article cards
- Full article page for each post
- Writing template focused on social impact and easy language
- SEO essentials: Open Graph, Twitter tags, RSS, sitemap, robots, favicon
- Free deployment using GitHub Pages

## Project structure
- `index.html`: homepage
- `post.html`: full article page
- `posts-data.js`: article data
- `script.js`: homepage rendering
- `post.js`: article page rendering
- `styles.css`: global styles
- `feed.xml`: RSS feed
- `sitemap.xml`: search engine index file
- `robots.txt`: crawler rules
- `favicon.svg`: site icon
- `content/posts/POST_TEMPLATE.md`: article writing template
- `.github/workflows/deploy-pages.yml`: GitHub Pages deploy pipeline

## Important before going live
Replace `rohitgarg` in these files:
- `index.html`
- `post.html`
- `post.js`
- `feed.xml`
- `sitemap.xml`
- `robots.txt`

Use your real GitHub username so canonical links and SEO files are valid.

## Local preview (free)
From this folder, run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Host for free on GitHub Pages
1. Create a GitHub repo named `pulsebyte-daily`.
2. Push this project to the `main` branch.
3. In GitHub, open `Settings > Pages`.
4. Under "Build and deployment", choose `GitHub Actions`.
5. Push any new commit to `main`.
6. Your site will be live at:
   `https://rohitgarg.github.io/pulsebyte-daily/`

## Daily publishing process (free)
1. Add 2 new articles daily by appending objects in `posts-data.js`.
2. Keep language simple and practical.
3. Include clear "How can this help society?" value in each article.
4. Commit and push; deployment happens automatically.

## Notes
- No paid hosting required.
- No paid CMS required.
- Static files only.
