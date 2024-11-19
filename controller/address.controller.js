import { asyncHandler } from "../helper.js";
import { Address } from "../models/address.js";

export const createAddress = asyncHandler(async (req, res) => {
  const newAccPass = await Address.create(req.body);

  if (!newAccPass) {
    throw new Error("Something went wrong while saving address");
  }

  return res.status(200).json({ data: "Address saved successfully" });
});

export const getUserAddresses = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const userAddress = await Address.find({
    userId,
  });

  return res.status(200).json({ data: userAddress || [] });
});

export const deleteUserAddress = asyncHandler(async (req, res) => {
  await Address.findByIdAndDelete(req.params.id);

  return res.status(200).json({ data: "Data deleted successfully" });
});

export const updateAddress = asyncHandler(async (req, res) => {
  const { orgData, updateData } = req.body;

  const addressAlreadyPresent = await Address.findOne(updateData);
  if (addressAlreadyPresent) {
    throw new Error("Email and password for website already present");
  }

  await Address.findOneAndUpdate(orgData, updateData);

  return res.status(200).json({ data: "Data updated successfully" });
});
