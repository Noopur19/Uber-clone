import { connectToDataBase } from "@/lib/db";
import { Cart } from "@/models/cart";
import { Order } from "@/models/order";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const { userId, products, totalPrice, deliveryDetails, timestamp } =
      await req.json();
    await connectToDataBase();
    await Order.create({
      userId,
      products,
      totalPrice,
      deliveryDetails,
      timestamp,
    });
    const cartClear = await Cart.deleteOne({ userId });
    return NextResponse.json({
      message: "Ordered successfully",
      status: 201,
    });
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json({
      message: "An error occured while trying to order.",
      status: 500,
    });
  }
}
