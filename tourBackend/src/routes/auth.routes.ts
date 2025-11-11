import { Router } from "express";
import { authentication } from "../controllers/auth.controller.ts";
import { authenticationValidation } from "../middlewares/auth.middleware.ts";
import { protectedRoute } from "../middlewares/jwtVerify.ts";

const router = Router();

// Define your auth route
router.post(
  "/registers",
  authenticationValidation.userRegistrationValidation,
  authentication.userRegistration
);
router.post(
  "/login",
  authenticationValidation.userLoginValidation,
  authentication.userLogin
);
router.post("/logout", authentication.logout);
router.get("/me", protectedRoute, authentication.getme);
router.get("/user", protectedRoute, authentication.getUser);

export default router;
