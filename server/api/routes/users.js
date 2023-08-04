import express from "express";
import { verifyToken } from "./../utils/verifyToken.js";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/usercontroller.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello, you are now logged in!");
});

router.get("/checkuser/:id", verifyToken, (req, res, next) => {
  res.send("Hello, you are now logged in!");
});

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);

export default router;
