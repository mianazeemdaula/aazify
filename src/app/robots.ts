import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/", // Next.js build outputs
          "/api/",   // API routes if any
          "/private/", // Private routes
        ],
      },
    ],
    sitemap: "https://aazify.com/sitemap.xml",
  };
}
