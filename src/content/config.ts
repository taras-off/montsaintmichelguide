import { defineCollection, z } from 'astro:content';
const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    primaryKeyword: z.string().optional(),
    wave: z.string().optional(),
    updated: z.string().optional(),
  }),
});
export const collections = { articles };
