import { connectToDataBase } from "@/lib/db";
import { NextResponse } from "next/server";
import { Order } from "@/models/order";
import { Cart } from "@/models/cart";

export async function GET(req: any, { params }: any) {
  await connectToDataBase();
  try {
    await connectToDataBase();
    const orders = await Order.find({ userId: params.id });
    return NextResponse.json({ orders });
  } catch (error) {
    return NextResponse.json({
      message: "An error occured while trying to fetch orders.",
      status: 500,
    });
  }
}
