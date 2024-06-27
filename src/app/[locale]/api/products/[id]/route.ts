import { connectToDataBase } from "@/lib/db";
import { NextResponse } from "next/server";
import { Product } from "@/models/product";

export async function GET(req: any, { params }: any) {
  await connectToDataBase();
  const products = await Product.findOne({ _id: params.id });
  return NextResponse.json(products);
}
