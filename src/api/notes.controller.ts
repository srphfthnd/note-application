import express, { NextFunction } from "express";
import {
  createNote,
  deleteNote,
  getNote,
  getNotes,
  updateNote,
} from "../services/notes.service";
import { Note, ResponseInterface, WithoutId } from "../model/notes.response";

const router = express.Router();

router.get<{}, ResponseInterface>("/", (request, response, next) => {
  try {
    return response.json(getNotes());
  } catch (error) {
    next(error);
  }
});

router.get<{ id: string }, { note?: Note; message?: string }>(
  "/:id",
  (request, response, next) => {
    const { message, note } = getNote(request.params.id);
    try {
      if (!note) {
        return response.json({ message });
      }
      return response.json({ note });
    } catch (error) {
      next(error);
    }
  }
);

router.post<{}, { message: string }, WithoutId<Note>>(
  "/",
  (request, response, next) => {
    try {
      return response.json(createNote(request.body));
    } catch (error: any) {
      next(error);
    }
  }
);

router.put<{ id: string }, { message: string }, WithoutId<Note>>(
  "/:id",
  (request, response, next) => {
    try {
      const { id } = request.params;
      const message = updateNote({ id: +id, ...request.body });
      return response.json(message);
    } catch (error: any) {
      next(error);
    }
  }
);

router.delete<{ id: string }, { message: string }>(
  "/:id",
  (request, response, next) => {
    try {
      return response.json(deleteNote(+request.params.id));
    } catch (error) {
      next(error);
    }
  }
);

export default router;
