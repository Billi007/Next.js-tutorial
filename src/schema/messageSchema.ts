import {z} from 'zod'

export const MessagesSchema = z.object({
    content: z
    .string().min(10, 'content must be at least of 10 characters.')
    .max(300, 'content must be no more than 300 characters.')
})