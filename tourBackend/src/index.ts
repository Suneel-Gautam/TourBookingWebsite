import express from "express";
import authRouter from "./routes/auth.routes.ts";
import { dbConnection } from "./utils/dbConnect.ts";
import destinationRouter from "./routes/destination.route.ts";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;

// Use JSON middleware if your routes need to parse JSON
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Correct way to mount the router
app.use("/api/auth", authRouter);
app.use("/api/destination", destinationRouter);
app.get("/", (req, res) => {
  res.send("TourBackend is runningggg!!!!");
});

app.listen(PORT, () => {
  dbConnection();
  console.log(`Server is running on http://localhost:${PORT}`);
});
