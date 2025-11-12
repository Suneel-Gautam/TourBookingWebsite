import { Destination } from "../models/destination.model.ts";
import type { Request, Response } from "express";

export const destination = {
  getAllDestination: async (req: Request, res: Response) => {
    try {
    } catch (error) {
      res.status(500).json({ message: "Internal Server error", error });
    }
  },
  addDestination: async (req: Request, res: Response) => {
    try {
      const { tripname, location, budget, duration, description, capacity } =
        req.body;

      // ✅ Safely cast to include file
      const file = req.file as Express.Multer.File | undefined;
      const image = file?.path;

      if (!image) {
        return res.status(400).json({ message: "Image is Required" });
      }

      const Newdestination = await Destination.create({
        tripname,
        location,
        budget,
        duration,
        description,
        capacity,
        image,
      });

      res.status(200).json({
        message: "Destination Created Successfully!!",
        data: Newdestination,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server error", error });
    }
  },

  deleteDestination : async (req: Request, res: Response) => {

  }
};
