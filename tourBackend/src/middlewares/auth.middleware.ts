import type { Request, Response, NextFunction } from "express";

export const authenticationValidation = {
  userRegistrationValidation(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, phonenumber, email, password } = req.body;

      if (!name) {
        return res.status(400).json({ message: "Name field is required" });
      }
      if (!phonenumber) {
        return res
          .status(400)
          .json({ message: "PhoneNumber field is required" });
      }
      if (!email) {
        return res.status(400).json({ message: "Email field is required" });
      }
      if (!password) {
        return res.status(400).json({ message: "Password field is required" });
      }

      if (name.length < 3) {
        return res
          .status(400)
          .json({ message: "Name must be greater than 3 characters" });
      }

      if (password.length < 6) {
        return res
          .status(400)
          .json({ message: "Password must be greater than 6 characters" });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }

      const phoneRegex = /^9\d{9}$/; // Nepal: 10 digits starting with 9
      if (!phoneRegex.test(phonenumber)) {
        return res
          .status(400)
          .json({ message: "Invalid phone number format (Nepalese only)" });
      }

      next();
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },
};
