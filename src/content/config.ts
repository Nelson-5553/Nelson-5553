import { defineCollection, z } from "astro:content";

const projects = defineCollection({

    schema: z.object({

        title: z.string(),
        img: z.string(),
        icon: z.string(),
        color: z.string(),
        technologies: z.array(z.string()),
        page: z.object({
            url: z.string(),
            url_1: z.string(),
        }),
    })
})

const experience = defineCollection({
    
    schema: z.object({

        title: z.string(),
        img: z.string(),
        icon: z.string(),
        color: z.string(),
        page: z.object({
            url: z.string(),
            url_1: z.string(),
        }),
    })
})


export const collections = { projects, experience };
