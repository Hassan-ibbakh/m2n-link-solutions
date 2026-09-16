import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap { const base = "https://nexa-intelligence.com"; const pages = ["", "/about", "/services", "/projects", "/blog", "/contact"]; return [...pages, ...blogPosts.map((post) => `/blog/${post.slug}`)].map((path) => ({ url: `${base}${path}`, lastModified: new Date() })); }
