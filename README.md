# Tyler Charles Samuelson

##### Digital Creator | Software Engineer | Problem Solver

## Personal Portfolio Website

### Live Site:

Check it out at [tylercsamuelson.com](https://tylercsamuelson.com/)

### Mobile-First Web Design

##### **Built With:** JavaScript | React | HTML5 | CSS3 | Bootstrap 4 | Cloudflare Workers

Fully-responsive site, built from scratch on top of Bootstrap. Pages are written as React components and pre-rendered to static HTML at build time, then served from Cloudflare's edge.

This site was created with a particular focus on responsiveness — my layouts will work on any device, big or small. My human-centric design approach facilitates intuitive UX. I love to make my pages come to life while still ensuring fast load times and lag-free interactions.

#### Proudest Accomplishments:

- Lighting-quick, fully-responsive site with no client-side framework overhead
- Custom Design, Animations, and Vector Graphics
- Flexible, reusable component-based design

### Development

Requires Node 22+.

```sh
npm install
npm run dev      # build to dist/ and serve locally with wrangler
npm run deploy   # build and deploy to Cloudflare
```

- `views/` holds the React page components; the route → view table lives in `scripts/build.js`.
- `public/` (CSS, images, documents, `_redirects`) is copied into `dist/` as-is.
- `wrangler.jsonc` configures the assets-only Worker; unknown paths fall back to `404.html`.
