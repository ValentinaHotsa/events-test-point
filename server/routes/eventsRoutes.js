import express from "express";
import { getAllEvents, getEvent } from "../controllers/eventsController.js";
import register from "../controllers/userControllers.js";

const eventsRouter = express.Router();

eventsRouter.get("/", getAllEvents);
eventsRouter.get("/:id", getEvent);
eventsRouter.post("/:id/register", register);

export default eventsRouter;
