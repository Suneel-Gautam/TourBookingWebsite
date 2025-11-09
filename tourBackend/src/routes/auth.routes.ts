import { Router } from "express";
import { authentication } from "../controllers/auth.controller.ts";
import { authenticationValidation } from "../middlewares/auth.middleware.ts";

const router = Router();

// Define your auth route
router.post(
  "/register",
  authenticationValidation.userRegistrationValidation,
  authentication.userRegistration
);
router.post("/login", authentication.userLogin);

export default router;
