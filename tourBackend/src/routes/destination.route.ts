import express, { Router } from "express";
import { destination } from "../controllers/destination.controller.ts";
import { destinationValidation } from "../middlewares/destination.middleware.ts";

const router = Router();

// add destinations

router.post(
  "/add",
  destinationValidation.addDestinationValidation,
  destination.addDestination
);

export default router;
