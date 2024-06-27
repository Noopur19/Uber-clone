import { options } from "@/app/api/auth/[...nextauth]/options";
import { SignupForm } from "@/components/Forms/SignupForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  // if user is already logged and try to access signup route, then redirect to landing page
  const session = await getServerSession(options);
  if (session) redirect("/");

  return (
    <>
      <SignupForm />
    </>
  );
}
