import { z } from 'zod';

export const noteSchema = z.object({
    id: z.number(),
    content: z.string()
})

export const responseSchema = z.array(noteSchema);

export type Note = z.infer<typeof noteSchema>;
export type ResponseInterface = z.infer<typeof responseSchema>;
export type WithoutId<T> = Omit<T, 'id'>;
