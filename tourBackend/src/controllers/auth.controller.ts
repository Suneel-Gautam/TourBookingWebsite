import { json, type Request, type Response } from "express";
import { User } from "../models/user.model.ts";
import bcrypt from "bcryptjs";
import { jwtTokenGenerator } from "../utils/jwtToken.ts";

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

      const savedUser = await User.findById(newuser._id);

      const { password: _password, ...datawithoutPassword } =
        newuser.toObject();

      const token = jwtTokenGenerator({
        id: String(savedUser?._id),
        name: savedUser?.name as string,
        email: savedUser?.email as string,
        phonenumber: savedUser?.phonenumber as string,
      });

      res.cookie("token", token, {
        httpOnly: true, // JS cannot access it
        secure: process.env.NODE_ENV === "production", // HTTPS only in production
        sameSite: "strict", // protects against CSRF
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(201).json({
        message: "User Created Sucessfullyyyyy!!",
        data: datawithoutPassword,
        token,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: (error as Error).message,
      });
    }
  },

  userLogin: async (req: Request, res: Response) => {
    try {
      const { phonenumber, password } = req.body;

      //check number is logined or not

      const exisitingPhoneNumber = await User.findOne({ phonenumber });

      if (!exisitingPhoneNumber) {
        return res
          .status(400)
          .json({ message: "Invalid PhoneNumber and Password!!" });
      }

      const checkPassword = bcrypt.compareSync(
        password,
        exisitingPhoneNumber.password
      );

      if (!checkPassword) {
        return res
          .status(400)
          .json({ message: "Invalid PhoneNumber and Password!!" });
      }

      const token = jwtTokenGenerator({
        id: String(exisitingPhoneNumber?._id),
        name: exisitingPhoneNumber?.name as string,
        email: exisitingPhoneNumber?.email as string,
        phonenumber: exisitingPhoneNumber?.phonenumber as string,
      });
      res.cookie("token", token, {
        httpOnly: true, // JS cannot access it
        secure: process.env.NODE_ENV === "production", // HTTPS only in production
        sameSite: "strict", // protects against CSRF
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(200).json({ message: "Login sucessfully", token });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: (error as Error).message,
      });
    }
  },

  getme: async (req: Request, res: Response) => {
    try {
      const userData = req.user as { id: string };

      if (!userData || !userData.id) {
        res.status(401).json({ message: "UnAuthorizedd!!!" });
      }
      const user = await User.findById(userData.id).select("-password");

      if (!user) {
        res.status(400).json({ message: "User not Found" });
      }
      return res.status(200).json({
        message: "User fetched successfully",
        user,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: (error as Error).message,
      });
    }
  },

  logout: async (req: Request, res: Response) => {
    try {
      res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      res.status(200).json({ message: "Logout Sucessfully!!!!" });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: (error as Error).message,
      });
    }
  },

  getUser: async (req: Request, res: Response) => {
    const user = await User.find();
    res.status(200).json({ data: user });
  },
};
