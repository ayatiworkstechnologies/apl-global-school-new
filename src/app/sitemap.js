import { absoluteUrl, seoRoutes } from "./seo";

export const dynamic = "force-static";

const lastModified = new Date("2026-06-01");

export default function sitemap() {
  return seoRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency || "monthly",
    priority: route.priority || 0.7,
  }));
}
