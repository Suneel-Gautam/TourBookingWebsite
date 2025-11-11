import jwt from "jsonwebtoken";
import { config } from "dotenv";
import type { Request, Response, NextFunction } from "express";

config();

const secretKey = process.env.jwtSecretKey;

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const protectedRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const authheader = req.headers.authorization;

    // if (!authheader || !authheader.startsWith("Bearer ")) {
    //   return res.status(401).json({ message: "Authorization token missing" });
    // }
    // const token = authheader.split(" ")[1];

    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Authorization token missing" });
    }
    if (!secretKey) {
      return res.status(401).json({ message: "Secret Key missing " });
    }

    const decoded = jwt.verify(token, secretKey);

    req.user = decoded;

    return next();
  } catch (error) {
    res.status(500).json({ message: "Internal Server error", error });
  }
};
