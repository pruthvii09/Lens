const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    short_name: {
      type: String,
    },
    desc: {
      type: String,
      required: true,
    },
    size: {
      type: Array,
      required: true,
    },
    imgArr: {
      type: Array,
      required: true,
    },
    color: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
