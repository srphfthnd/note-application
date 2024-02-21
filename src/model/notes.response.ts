import { z } from "zod";

export const noteSchema = z.object({
  id: z.number(),
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(50, { message: "Title should have less than 50 characters" }),
  body: z
    .string()
    .max(255, { message: "Body should have less than 255 characters" }),
});

export const responseSchema = z.array(noteSchema);

export type Note = z.infer<typeof noteSchema>;
export type ResponseInterface = z.infer<typeof responseSchema>;
export type WithoutId<T> = Omit<T, "id">;
