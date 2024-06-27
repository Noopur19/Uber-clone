import mongoose, { Schema, models } from "mongoose";

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    categoryImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Category = models.Category || mongoose.model("Category", categorySchema);
