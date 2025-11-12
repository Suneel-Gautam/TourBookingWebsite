import express, { Router } from "express";
import { destination } from "../controllers/destination.controller.ts";
import { destinationValidation } from "../middlewares/destination.middleware.ts";
import upload from "../middlewares/multer.ts";

const router = Router();

// add destinations

router.post(
  "/add",
  destinationValidation.addDestinationValidation,
  upload.single("image"),
  destination.addDestination
);

export default router;
