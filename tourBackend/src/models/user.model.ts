import mongoose, { Schema, Document } from "mongoose";

interface Iuser extends Document {
  name: string;
  email: string;
  phonenumber: string;
  password: string;
  profilePic?: string;
  createdAt?: Date;
}

const userSchema = new Schema<Iuser>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    phonenumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    profilePic: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<Iuser>("User", userSchema);
