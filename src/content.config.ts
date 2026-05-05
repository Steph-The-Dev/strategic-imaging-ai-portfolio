import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    importance: z.number().default(0),
    tags: z.array(z.string()),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })),
    codeSnippet: z.object({
      filename: z.string(),
      code: z.string(),
    }),
    githubUrl: z.string().url(),
    imageUrl: z.string().optional(),
    reportId: z.string(), // e.g. "TEST_REPORT_084"
  }),
});

export const collections = { projects };
