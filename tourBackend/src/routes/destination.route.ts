import express, { Router } from "express";
import { destination } from "../controllers/destination.controller.ts";
import { destinationValidation } from "../middlewares/destination.middleware.ts";
import upload from "../middlewares/multer.ts";

const router = Router();

// add destinations

router.get("/", destination.getAllDestination);

router.post(
  "/add",
  destinationValidation.addDestinationValidation,
  upload.single("image"),
  destination.addDestination
);

router.delete("/delete/:id", destination.deleteDestination);

export default router;
