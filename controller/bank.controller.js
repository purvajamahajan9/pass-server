import { asyncHandler } from "../helper.js";
import { BankCard } from "../models/bankCard.js";

export const createCard = asyncHandler(async (req, res) => {
  const alreadyPresent = await BankCard.findOne(req.body);
  if (alreadyPresent) {
    throw new Error("Card already present");
  }
  const newAccPass = await BankCard.create(req.body);

  if (!newAccPass) {
    throw new Error("Something went wrong while saving card");
  }

  return res.status(200).json({ data: "Card saved successfully" });
});

export const getUserCards = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const data = await BankCard.find({
    userId,
  });

  return res.status(200).json({ data: data || [] });
});

export const deleteCard = asyncHandler(async (req, res) => {
  await BankCard.findByIdAndDelete(req.params.id);

  return res.status(200).json({ data: "Data deleted successfully" });
});

export const updateCard = asyncHandler(async (req, res) => {
  const { orgData, updateData } = req.body;

  const alreadyPresent = await BankCard.findOne(updateData);
  if (alreadyPresent) {
    throw new Error("Card already present");
  }

  await BankCard.findOneAndUpdate(orgData, updateData);

  return res.status(200).json({ data: "Data updated successfully" });
});
