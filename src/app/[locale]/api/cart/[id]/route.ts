import { connectToDataBase } from "@/lib/db";
import { NextResponse } from "next/server";
import { Cart } from "@/models/cart";

export async function GET(req: any, { params }: any) {
  await connectToDataBase();
  try {
    await connectToDataBase();
    const cart = await Cart.findOne({ userId: params.id });
    return NextResponse.json({ cart });
  } catch (error) {
    return NextResponse.json({
      message: "An error occured while trying to fetch items from cart.",
      status: 500,
    });
  }
}