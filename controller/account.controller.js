import { asyncHandler } from "../helper.js";
import { AccountPassword } from "../models/accountPassword.js";

export const createPassword = asyncHandler(async (req, res) => {
  const { website, email, password, passwordType, userId } = req.body;

  const emailAlreadyPresent = await AccountPassword.findOne({
    email,
    userId,
    website,
  });
  if (emailAlreadyPresent) {
    throw new Error("Email and password for website already present");
  }

  const newAccPass = await AccountPassword.create({
    email,
    password,
    passwordType,
    userId,
    website,
  });

  if (!newAccPass) {
    throw new Error("Something went wrong while saving password");
  }

  return res.status(200).json({ data: "Password saved successfully" });
});

export const getUserAccPasswords = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const userPass = await AccountPassword.find({
    userId,
  });

  return res.status(200).json({ data: userPass || [] });
});

export const deleteUserAccPass = asyncHandler(async (req, res) => {
  await AccountPassword.findByIdAndDelete(req.params.id);
  return res.status(200).json({ data: "Data deleted successfully" });
});
export const updateUserPass = asyncHandler(async (req, res) => {
  const { orgData, updateData } = req.body;

  const emailAlreadyPresent = await AccountPassword.findOne(updateData);
  if (emailAlreadyPresent) {
    throw new Error("Email and password for website already present");
  }

  await AccountPassword.findOneAndUpdate(orgData, updateData);

  return res.status(200).json({ data: "Data updated successfully" });
});
