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
      const {
        tripname,
        location,
        budget,
        duration,
        image,
        description,
        capacity,
      } = req.body;


      





    } catch (error) {
      res.status(500).json({ message: "Internal Server error", error });
    }
  },
};
