import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(), // ✅ ya da z.coerce.date() kullanabilirsin
    category: z.string().optional(),
    summary: z.string().optional()
  })
});

export const collections = { blog };
