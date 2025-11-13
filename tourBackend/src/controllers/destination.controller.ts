import cloudinary from "../config/cloudinary.ts";
import { Destination } from "../models/destination.model.ts";
import type { Request, Response } from "express";

export const destination = {
  getAllDestination: async (req: Request, res: Response) => {
    try {
      const destination = await Destination.find();

      res.status(200).json({
        message: "Destination Fetched Sucessfully!!",
        data: destination,
      });
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
      const result = await cloudinary.uploader.upload(file.path, {
        folder : "destinations"
      })

      const Newdestination = await Destination.create({
        tripname,
        location,
        budget,
        duration,
        description,
        capacity,
        image: result.secure_url,
        public_id : result.public_id
      });

      res.status(200).json({
        message: "Destination Created Successfully!!",
        data: Newdestination,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server error", error });
    }
  },

  deleteDestination: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const destination = await Destination.findById(id);
      if (!destination) {
       return res.status(404).json({ message: "Destination not Found!!!" });
      }

      if (destination?.image) {
        const publicId = destination.image.split("/").pop()?.split(".")[0];
        if (publicId) {
          await cloudinary.uploader.destroy(`destinations/${publicId}`);
        }
      }

      await Destination.findByIdAndDelete(id);

      res.status(200).json({ message: "Destination deleted Sucessfully!!!" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server error", error });
    }
  },
};
