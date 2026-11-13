import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// One folder per project, one Markdown file per language:
// src/content/projects/<slug>/fr.md and en.md
const projects = defineCollection({
  loader: glob({
    pattern: "*/{fr,en}.md",
    base: "./src/content/projects",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      summary: z.string().min(1),
      published: z.boolean(),
      status: z.enum(["upcoming", "available"]).default("available"),
      platforms: z.array(z.string().min(1)).default([]),
      facts: z
        .array(z.object({ label: z.string().min(1), value: z.string().min(1) }))
        .default([]),
      images: z.array(
        z.object({
          // Optional for now: without a file, a placeholder frame is shown.
          src: image().optional(),
          alt: z.string().min(1),
          caption: z.string().min(1).optional(),
          device: z.enum(["iphone", "watch"]).default("iphone"),
        }),
      ),
      links: z
        .array(z.object({ label: z.string().min(1), url: z.url() }))
        .default([]),
      appStoreUrl: z.url().optional(),
      // App icon, shown next to the project name.
      icon: image().optional(),
    }),
});

// Privacy policy of an app:
// src/content/projects/<slug>/privacy/fr.md and en.md
const privacy = defineCollection({
  loader: glob({
    pattern: "*/privacy/{fr,en}.md",
    base: "./src/content/projects",
  }),
  schema: z.object({
    // In short: what data, where it stays, who can access it.
    summary: z.array(z.string().min(1)).default([]),
    updated: z.coerce.date().optional(),
    // While false, the page only exists in `npm run dev`.
    published: z.boolean(),
  }),
});

export const collections = { projects, privacy };
