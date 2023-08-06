import express from "express";
import {
  verifyToken,
  verifyUser,
  verifyAdmin,
} from "./../utils/verifyToken.js";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/usercontroller.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello, you are now logged in!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello, you are now logged in and can delete your account!");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello Admin, you are now logged in and can delete all accounts!");
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
