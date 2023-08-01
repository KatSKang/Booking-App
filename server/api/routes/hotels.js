import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel } from "../controllers/hotelcontroller.js";
import { updateHotel } from "../controllers/hotelcontroller.js";
import { deleteHotel } from "../controllers/hotelcontroller.js";
import { getHotel } from "../controllers/hotelcontroller.js";
import { getAllHotels } from "../controllers/hotelcontroller.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);

//GET
router.get("/:id", getHotel);

//GET ALL
router.get("/", getAllHotels);

export default router;
