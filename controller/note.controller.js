import { asyncHandler } from "../helper.js";
import { Note } from "../models/note.js";

export const createNote = asyncHandler(async (req, res) => {
  const newNote = await Note.create(req.body);
  if (!newNote) {
    throw new Error("Something went wrong while saving note");
  }

  return res.status(200).json({ data: "Note saved successfully" });
});

export const getUserNotes = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const data = await Note.find({
    userId,
  });

  return res.status(200).json({ data: data || [] });
});

export const deleteNote = asyncHandler(async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);

  return res.status(200).json({ data: "Data deleted successfully" });
});

export const updateNote = asyncHandler(async (req, res) => {
  const { orgData, updateData } = req.body;

  const alreadyPresent = await Note.findOne(updateData);
  if (alreadyPresent) {
    throw new Error("Card already present");
  }

  await Note.findOneAndUpdate(orgData, updateData);

  return res.status(200).json({ data: "Data updated successfully" });
});
