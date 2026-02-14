import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
  }),
});

export const collections = {
  writing,
};