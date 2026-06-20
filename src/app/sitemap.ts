import type { MetadataRoute } from "next";
import { POSTS } from "./blog/postsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aazify.com";
  
  const routes = [
    "",
    "/about",
    "/blog",
    "/careers",
    "/contact",
    "/cookies",
    "/faqs",
    "/portfolio",
    "/pricing",
    "/privacy-policy",
    "/products",
    "/reviews",
    "/services",
    "/team",
    "/terms",
  ];

  const staticSitemap = routes.map((route) => {
    // Determine the priority and change frequency based on the importance of the route
    let priority = 0.5;
    let changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "monthly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily"; // Home page updates often
    } else if (route === "/services" || route === "/products") {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (route === "/portfolio" || route === "/blog") {
      priority = 0.8;
      changeFrequency = "weekly";
    } else if (route === "/about" || route === "/team" || route === "/contact") {
      priority = 0.7;
      changeFrequency = "monthly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });

  const dynamicBlogSitemap = POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticSitemap, ...dynamicBlogSitemap];
}
