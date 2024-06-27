import mongoose, { Schema, models } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
        type: String
    },
    image: {
        type: String,
        required: true,
      },
    category: {
      type: String,
      required: true,
    },
    price: {
        type: String,
        required: true
    },
    rating:{
        type: Number,
    }
  },
  {
    timestamps: true,
  }
);

export const Product = models.Product || mongoose.model("Product", productSchema);
