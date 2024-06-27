import { connectToDataBase } from "@/lib/db";
import { NextResponse } from "next/server";
import { User } from "@/models/user";

export async function POST(req: {
  json: () => PromiseLike<{ email: any }> | { email: any };
}) {
  try {
    const { email } = await req.json();
    await connectToDataBase();
    const user = await User.findOne({ email }).select("_id");
    return NextResponse.json({
      user,
    });
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json({
      message: "An error occured while trying to check if user exists or not",
      status: 500,
    });
  }
}
