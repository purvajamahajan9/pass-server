import mongoose, { Schema } from "mongoose";

const accountPasswordSchema = new Schema(
  {
    website: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordType: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    favourite: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
    _id: true,
  }
);

export const AccountPassword = mongoose.model(
  "AccountPasswordSchema",
  accountPasswordSchema
);
