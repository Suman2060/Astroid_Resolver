import {z} from "zod";

export const resourceSchema = z.object({
    title: z
        .string()
        .min(3, "Title must be at least 3 characters"),

    description: z
        .string()
        .min(10, "Description must be at least 10 characters"),

    type: z.enum(["book", "article", "video"]),

    visibility: z.enum(["public", "private"]),
});

export type ResourceFormData = z.infer<typeof resourceSchema>;