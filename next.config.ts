import type { NextConfig } from "next";

// For static hosting (Cloudflare Pages, GitHub Pages, Netlify, Vercel static export):
// the site can live at the root domain, or under a subpath like /portfolio-book.
// Set NEXT_PUBLIC_BASE_PATH to "/<repo-name>" only if you are deploying under a subpath.
// Locally it is left empty so http://localhost:3000 works as-is.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",       // static HTML export — required for static hosts
  basePath,               // e.g. "/portfolio-book"
  assetPrefix: basePath,  // makes JS/CSS chunks resolve correctly under the subpath
  trailingSlash: true,    // keeps static exports friendly to host routing
  images: {
    unoptimized: true,    // next/image optimisation is unavailable in static export
  },
};

export default nextConfig;
