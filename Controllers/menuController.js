import { sendResponse } from "../Helpers/ResponseHandler.js";
import { TryCatch } from "../Helpers/TryCatch.js";
import Menu from "../Schema/menuSchema.js";

export const addMenu = TryCatch(async (req, res) => {
  const { name, description, items } = req.body;
  const menu = await Menu.findOne({ name });
  if (menu) {
    sendResponse(res, 400, false, "Menu already exists!");
  } else {
    const newMenu = new Menu({
      name,
      description,
      items,
    });
    await newMenu.save();
    sendResponse(res, 200, true, "Menu added succesfully!", newMenu);
  }
});

export const getMenu = TryCatch(async (req, res) => {
  const menu = await Menu.find({});
  if (menu) {
    sendResponse(res, 200, true, "Menu fetched successfully", menu);
  } else {
    sendResponse(res, 404, false, "Menu not availbale!");
  }
});
