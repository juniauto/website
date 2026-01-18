import { defineCollection, z } from 'astro:content';

const services = defineCollection({
    schema: z.object({
        title: z.string(),
        shortTitle: z.string(),
        h1: z.string(),
        description: z.string(),
        icon: z.string(),
        schemaType: z.string(),
        keywords: z.string(),
        benefits: z.array(z.string()).optional(),
        faq: z.array(z.object({
            question: z.string(),
            answer: z.string(),
        })),
    }),
});

const neighborhoods = defineCollection({
    schema: z.object({
        name: z.string(),
        h1: z.string(),
        description: z.string(),
        keywords: z.string(),
        landmark: z.string().optional(),
        top_priority: z.boolean().optional(),
        faq: z.array(z.object({
            question: z.string(),
            answer: z.string(),
        })).optional(),
    }),
});

export const collections = {
    'services': services,
    'neighborhoods': neighborhoods,
};
