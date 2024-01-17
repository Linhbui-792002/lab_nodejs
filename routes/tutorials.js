import express from "express";
import {
  getAllTutorials,
  getTutorialsById,
  createTutorial,
} from "../controllers/tutorials.js";

const tutorialsRouter = express.Router();

tutorialsRouter.get("/", getAllTutorials);

tutorialsRouter.get("/:title", getTutorialsById);

tutorialsRouter.post("/", createTutorial);

export default tutorialsRouter;
