import mongoose, { Schema, models } from "mongoose";

const orderSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
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
        required: true,
      },
      rating: {
        type: Number,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  deliveryDetails: {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    pinCode: {
      type: Number,
    },
    paymentMethod: {
      type: String,
    },
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  orderedAt: { type: Date, default: Date.now }, // Add createdAt field
});

export const Order = models.Order || mongoose.model("Order", orderSchema);
