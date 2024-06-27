import { connectToDataBase } from "@/lib/db";
import { NextResponse } from "next/server";
import { Product } from "@/models/product";

export async function POST(req: any) {
  try {
    const { name, description, image, category, price, rating } =
      await req.json();
    await connectToDataBase();
    await Product.create({ name, description, image, category, price, rating });
    return NextResponse.json({
      message: "Product added",
      status: 201,
    });
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json({
      message: "An error occured while trying to add new product.",
      status: 500,
    });
  }
}

const removeEmptyKeys = (obj: any) => {
  for (const key in obj) {
    if (
      obj[key] === null ||
      obj[key] === undefined ||
      obj[key] === "" ||
      obj[key] == 0
    ) {
      delete obj[key];
    }
  }
  return obj;
};

export async function GET(req: any) {
  await connectToDataBase();
  const searchParams = req?.nextUrl.searchParams;
  const category = searchParams.get("category");
  const rating = searchParams.get("rating");
  const sortBy = searchParams.get("sortBy");
  let products;
  try {
    let query = {
      category: "",
      rating: 0,
    };
    if (category) {
      query.category = category?.toUpperCase();
    }
    if (rating) {
      query.rating = rating;
    }
    const finalQuery = removeEmptyKeys(query);
    if (sortBy === "low") {
      products = await Product.find(finalQuery).sort({ price: 1 });
    } else if (sortBy === "high") {
      products = await Product.find(finalQuery).sort({ price: -1 });
    } else {
      products = await Product.find(finalQuery);
    }
    return NextResponse.json({ products });
  } catch (error) {
    console.error("Error occurred while fetching products:", error);
    return NextResponse.error();
  }
}
