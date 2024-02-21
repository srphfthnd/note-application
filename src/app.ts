import express, { NextFunction } from "express";
import api from "./api";
import cors from "cors";
import morgan from "morgan";
import * as middlewares from "./middlewares";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
