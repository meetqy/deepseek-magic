import { navs } from "~/lib/navs";

export default function sitemap() {
  return navs.map((item) => ({
    url: `https://deepseekmagic.com${item.href}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 1,
  }));
}
