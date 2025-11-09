import type { Request, Response } from "express";
import { User } from "../models/user.model.ts";
import bcrypt from "bcryptjs";

export const authentication = {
  userRegistration: async (req: Request, res: Response) => {
    try {
      const { name, email, phonenumber, password } = req.body;

      // check exisiting user
      const exisitingemail = await User.findOne({ email });

      if (exisitingemail) {
        return res
          .status(400)
          .json({ message: "User with this email already exist" });
      }

      //check phoneNumber
      const exisitingNumber = await User.findOne({ phonenumber });
      if (exisitingNumber) {
        return res
          .status(400)
          .json({ message: "User with this phonenumber already exist " });
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const newuser = await User.create({
        name,
        email,
        phonenumber,
        password: hashPassword,
      });

      res
        .status(201)
        .json({ message: "User Created Sucessfully!!", data: newuser });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },
  
  userLogin : async(req : Request , res : Response) => {

  }
};
