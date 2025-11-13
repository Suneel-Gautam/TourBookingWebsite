import mongoose, { Schema, Document } from "mongoose";

// ✅ Interface should extend Document for Mongoose
interface IDestination extends Document {
  tripname: string;
  location: string;
  budget: string;
  duration: string;
  image: string; // Cloudinary URL
  public_id?: string; // Cloudinary public_id
  description: string;
  capacity: string;
  createdDate: Date;
}

// ✅ Define Schema
const destinationSchema = new Schema<IDestination>({
  tripname: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  public_id: {
    type: String, // store Cloudinary public_id
  },
  description: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

// ✅ Export model
export const Destination = mongoose.model<IDestination>(
  "Destination",
  destinationSchema
);
