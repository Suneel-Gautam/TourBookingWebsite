import type { Request, Response, NextFunction } from "express";

export const destinationValidation = {
  addDestinationValidation: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
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

      if(!tripname){
        return res.status(400).json({
            message : "Trip Name field is required "
        })
      }
      if(!location){
        return res.status(400).json({
            message : "Location field is required "
        })
      }
      if(!budget){
        return res.status(400).json({
            message : "Budget field is required "
        })
      }
      if(!duration){
        return res.status(400).json({
            message : "Duration field is required "
        })
      }
      if(!image){
        return res.status(400).json({
            message : "Image field is required "
        })
      }
      if(!description){
        return res.status(400).json({
            message : "Description field is required "
        })
      }
      if(!capacity){
        return res.status(400).json({
            message : "Capacity field is required "
        })
      }

      next();
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },
};
