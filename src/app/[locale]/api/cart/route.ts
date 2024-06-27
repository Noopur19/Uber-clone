import { connectToDataBase } from "@/lib/db";
import { NextResponse } from "next/server";
import { Cart } from "@/models/cart";

export async function POST(req: any) {
  try {
    const { products, userId, action } = await req.json();

    await connectToDataBase();
    let cartItem = await Cart.findOne({
      userId,
    });
    if (!cartItem) {
      // If the item doesn't exist in the cart, create a new cart item
      await Cart.create({ userId, products: { ...products, quantity: 1 } });
      return NextResponse.json({
        message: "Item added to cart successfully",
        status: 201,
      });
    } else {
      // Check if the product already exists in the cart
      const existingProductIndex = cartItem.products.findIndex(
        (p: any) => p._id.toString() === products?._id
      );

      if (existingProductIndex !== -1) {
        // Case 2: If the product already exists, increase or decrease its quantity
        if (action === "increase") {
          cartItem.products[existingProductIndex].quantity++;
        } else if (action === "decrease") {
          // Ensure the quantity does not go below 0
          if (cartItem.products[existingProductIndex].quantity > 1) {
            cartItem.products[existingProductIndex].quantity--;
          } else {
            cartItem.products.splice(existingProductIndex, 1);
          }
        } else if (action === "remove") {
          cartItem.products.splice(existingProductIndex, 1); // Remove the product entry from the array
        }
      } else {
        // Case 3: If the product doesn't exist, append it to the product list
        cartItem.products.push({ ...products, quantity: 1 });
      }

      await cartItem.save();
      return NextResponse.json({
        message: "Item added to cart successfully.",
        status: 200,
      });
    }
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json({
      message: "An error occured while trying to add item to cart.",
      status: 500,
    });
  }
}
