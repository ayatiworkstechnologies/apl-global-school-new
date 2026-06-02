import { absoluteUrl, siteConfig } from "./seo";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/About/",
        "/Academic/",
        "/Admission/",
        "/Careers/",
        "/Child%20Centered/",
        "/Child Centered/",
        "/Gallery/",
        "/Home/",
        "/others/",
      ],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
