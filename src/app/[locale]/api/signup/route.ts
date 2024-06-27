import { connectToDataBase } from "@/lib/db";
import { hashPassword } from "@/lib/utility";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: {
  json: () =>
    | PromiseLike<{ username: any; email: any; password: any }>
    | { username: any; email: any; password: any };
}) {
  try {
    const { username, email, password } = await req.json();
    await connectToDataBase();
    const hashedPassword = await hashPassword(password);
    await User.create({ username, email, password: hashedPassword });
    return NextResponse.json({
      message: "User successfully registered",
      status: 201,
    });
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json({
      message: "An error occured while trying to register new user.",
      status: 500,
    });
  }
}
