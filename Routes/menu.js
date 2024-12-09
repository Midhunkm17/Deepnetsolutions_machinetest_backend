import express from "express";
import { addMenu, getMenu } from "../Controllers/menuController.js";
const router = express.Router();

//add menu
router.post("/add-menu", addMenu);

//fetch menu
router.get("/get-menu", getMenu);
export default router;
