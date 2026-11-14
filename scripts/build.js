// Pre-renders every page to static HTML in dist/, then copies public/ alongside it.
// Output is served by Cloudflare Workers static assets (see wrangler.jsonc).

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const VIEWS = path.join(ROOT, "views");
const PUBLIC = path.join(ROOT, "public");
const DIST = path.join(ROOT, "dist");

// Same JSX transform express-react-views applied at request time.
require("@babel/register").default({
  only: [VIEWS, path.join(ROOT, "extra-goodies")],
  extensions: [".js", ".jsx"],
  presets: [
    "@babel/preset-react",
    ["@babel/preset-env", { targets: { node: "current" }, modules: "commonjs" }],
  ],
  babelrc: false,
  configFile: false,
});

const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

// route -> view (relative to views/, no extension)
const ROUTES = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/projects": "projects/ProjectsDisplay",
  "/projects/the-boys": "projects/TheBoys",
  "/projects/portfolio-design": "projects/PortfolioDesign",
  "/projects/ad-astra-digital": "projects/AdAstra",
  "/projects/react-weather-app": "projects/ReactWeatherApp",
  "/projects/listen-along": "projects/ListenAlong",
  "/projects/the-herbery": "projects/TheHerbery",
  "/projects/100-days-of-code": "projects/HundredDaysOfCode",
};

function render(view) {
  const mod = require(path.join(VIEWS, `${view}.jsx`));
  const Component = mod.default || mod;
  return "<!DOCTYPE html>" + renderToStaticMarkup(React.createElement(Component));
}

function write(relFile, html) {
  const out = path.join(DIST, relFile);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}

fs.rmSync(DIST, { recursive: true, force: true });

fs.cpSync(PUBLIC, DIST, {
  recursive: true,
  filter: (src) => path.basename(src) !== ".DS_Store",
});

// "/about" -> about.html (not about/index.html) so Cloudflare's default
// auto-trailing-slash handling serves /about directly, matching the old URLs.
for (const [route, view] of Object.entries(ROUTES)) {
  write(route === "/" ? "index.html" : `${route}.html`, render(view));
}
write("404.html", render("flex/NotFound"));

console.log(`Built ${Object.keys(ROUTES).length} pages + 404.html into dist/`);
