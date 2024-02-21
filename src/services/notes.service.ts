import { SafeParseError, ZodSchema, z } from "zod";
import db from "./db";
import { Note, WithoutId, noteSchema } from "../model/notes.response";

const validate = <T>(schema: ZodSchema, data: T) => {
  const result = schema.safeParse(data);

  if (!result.success) {
    const r = result as SafeParseError<typeof schema>;
    const message = r.error.format();
    throw new Error(JSON.stringify(message).replace(/\\/g, ""));
  }
};

const getNextId = () => {
  const notes = db.getTable("notes");
  return Math.max(...notes.map(({ id }) => id)) + 1;
};

export function getNotes() {
  return db.getTable("notes");
}

export function getNote(id: string | number) {
  let message = "Note not found";
  const notes = db.getTable("notes");
  const note = notes.find((values) => values.id === +id);

  // return note as Note;
  return { message, note };
}

export function createNote(note: WithoutId<Note>) {
  validate(noteSchema.omit({ id: true }), note);
  const { ...rest } = note;

  const newNote: Note = {
    id: getNextId(),
    ...rest,
  };

  const success = db.updateTable("notes", (current) => current.concat(newNote));

  let message = "Error creating note";
  if (success) {
    message = "Note created successfully";
  }

  return { message, user: newNote };
}

export function updateNote(note: Note) {
  let message = "Error updating note";
  validate(noteSchema, note);
  const { message: fetchedError, note: fetchedNote } = getNote(note.id);

  if (!Boolean(fetchedNote)) {
    message = fetchedError;
    return { message };
  }

  const { id, ...rest } = { ...fetchedNote, ...note };

  const success = db.updateTable("notes", (current) =>
    current.map((values) => {
      if (values.id === id) {
        return { ...values, ...rest };
      }
      return values;
    })
  );

  if (success) {
    message = "Note updated successfully";
  }

  return { message };
}

export function deleteNote(id: string | number) {
  let message = "Error deleting note";
  validate(z.number(), id);
  const { message: fetchedError, note: fetchedNote } = getNote(id);

  if (!Boolean(fetchedNote)) {
    message = fetchedError;
    return { message };
  }

  const success = db.updateTable("notes", (current) =>
    current.filter((values) => values.id !== +id)
  );

  if (success) {
    message = "Note deleted successfully";
  }

  return { message };
}
