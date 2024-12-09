import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    items: [
      {
        itemName: {
          type: String,
          required: true,
        },
        itemDescription: {
          type: String,
          required: true,
        },
        itemPrice: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);
const Menu = mongoose.model("Menu", menuSchema);
export default Menu;
