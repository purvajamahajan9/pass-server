import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
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
  }
);

export const Note = mongoose.model("NoteSchema", noteSchema);
