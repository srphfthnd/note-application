import express from "express";
import notes from "./notes.controller";

const router = express.Router();

router.use("/notes", notes);

export default router;
