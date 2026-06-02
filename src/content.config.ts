import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Services — one entry per service line.
 * Anchored sections on the /services page render from this collection.
 */
const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(), // used as the anchor (#roofing, #siding, ...)
      eyebrow: z.string(),
      summary: z.string(),
      highlights: z.array(z.string()).min(3),
      icon: z.enum(["roof", "siding", "gutter", "skylight", "window"]),
      order: z.number().default(0),
      photo: image().optional(),
    }),
});

/**
 * Projects — visual portfolio entries surfaced on /gallery and /.
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      caption: z.string(),
      category: z.enum(["Roofing", "Siding", "Windows", "Skylights", "Crew at Work"]),
      photo: image(),
      aspect: z.enum(["portrait", "landscape", "square"]).default("landscape"),
      focalPoint: z.string().default("center"),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

/**
 * Testimonials — written reviews from real customers.
 */
const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/testimonials" }),
  schema: z.object({
    author: z.string(),
    location: z.string().optional(),
    rating: z.number().min(1).max(5).default(5),
    service: z.string().optional(),
    source: z.string().optional(),
    date: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { services, projects, testimonials };
