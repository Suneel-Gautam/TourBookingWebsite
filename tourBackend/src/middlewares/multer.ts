import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.ts";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: () => ({
    folder: "destinations",
    allowedFormats: ["jpg", "jpeg", "png"],
  }),
});

const upload = multer({ storage });

export default upload;
