import { Router } from "express";
import {
  createPassword,
  deleteUserAccPass,
  getUserAccPasswords,
  updateUserPass,
} from "./controller/account.controller.js";
import {
  createAddress,
  getUserAddresses,
  deleteUserAddress,
  updateAddress,
} from "./controller/address.controller.js";

import {
  createCard,
  getUserCards,
  deleteCard,
  updateCard,
} from "./controller/bank.controller.js";
import {
  createNote,
  getUserNotes,
  deleteNote,
  updateNote,
} from "./controller/note.controller.js";

const router = Router();

router.post("/password/create", createPassword);
router.get("/password/get/:userId", getUserAccPasswords);
router.delete("/password/delete/:id", deleteUserAccPass);
router.put("/password/:userId", updateUserPass);

router.post("/address/create", createAddress);
router.get("/address/get/:userId", getUserAddresses);
router.delete("/address/delete/:id", deleteUserAddress);
router.put("/address/:userId", updateAddress);

router.post("/card/create", createCard);
router.get("/card/get/:userId", getUserCards);
router.delete("/card/delete/:id", deleteCard);
router.put("/card/:userId", updateCard);

router.post("/note/create", createNote);
router.get("/note/get/:userId", getUserNotes);
router.delete("/note/delete/:id", deleteNote);
router.put("/note/:userId", updateNote);

export default router;
