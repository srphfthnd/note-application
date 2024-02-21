import ErrorResponse from "./model/notes.error";
import { Response, Request, NextFunction } from "express";

export function notFound(
  request: Request,
  response: Response<ErrorResponse>,
  next: NextFunction
) {
  response.status(404);
  const error = new Error(`Not Found - ${request.originalUrl}`);
  next(error);
}

export function errorHandler(
  error: any,
  request: Request,
  response: Response<ErrorResponse>,
  next: NextFunction
) {
  const statusCode =
    response.statusCode !== 200 ? response.statusCode : error.status ?? 500;
  response.status(statusCode);
  response.json({
    message: error.message?.replace(/\\|"/g, ""),
  });
}
