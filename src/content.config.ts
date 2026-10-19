import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const textos = z.object({
    title: z.string(),
    kind: z.string(),
    role: z.string(),
    status: z.string(),
    desc: z.string(),
})

const projects = defineCollection({
    loader: file("src/content/projects.json"),
    schema: z.object({
        id: z.string(),
        year: z.string(),
        stack: z.array(z.string()),
        demo: z.string(),
        code: z.string(),
        es: textos,
        en: textos,
    }),
})

export const collections = {projects};