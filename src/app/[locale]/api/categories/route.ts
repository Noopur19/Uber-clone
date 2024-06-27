import { connectToDataBase } from "@/lib/db";
import { NextResponse } from "next/server";
import { Category } from "@/models/category";

export async function POST(req: any) {
  try {
    const { categoryName, categoryImage } = await req.json();
    await connectToDataBase();
    await Category.create({ categoryName, categoryImage });
    return NextResponse.json({
      message: "Category created",
      status: 201,
    });
  } catch (error) {
    console.log(error,'error')
    return NextResponse.json({
      message: "An error occured while trying to create new category.",
      status: 500,
    });
  }
}

export async function GET() {
  console.log("get")
    await connectToDataBase();
    const categories = await Category.find();
    return NextResponse.json({
        categories,
    })

}
