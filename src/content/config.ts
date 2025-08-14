import { defineCollection, z } from "astro:content";

const projects = defineCollection({

    schema: z.object({

        title: z.string(),
        img: z.string(),
        icon: z.string(),
        color: z.string(),
        isNew: z.boolean(),
        isActive: z.boolean(),
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
        description: z.string(),
        cargo: z.string(),
        date: z.string(),
        img: z.string(),
        icon: z.string(),
        color: z.string(),
        page: z.object({
            url: z.string(),
            url_1: z.string(),
        }),
    })
})
const books = defineCollection({
    
    schema: z.object({
        title: z.string(),
        description: z.string(),
        state: z.string(),
        author: z.string(),
        image: z.string(),
        link: z.string(),
    })
})

const certified = defineCollection({
    
    schema: z.object({
        shipper: z.string(),
        title: z.string(),
        description: z.string(),
        habylity: z.array(z.string()),
        image: z.string(),
        color: z.string(),
        link: z.string(),
    })
})


export const collections = { projects, experience, books, certified };
