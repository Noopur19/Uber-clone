import mongoose, { Schema, models } from "mongoose";

const cartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [
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
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
});

export const Cart = models.Cart || mongoose.model('Cart', cartSchema);
