import { options } from "@/app/api/auth/[...nextauth]/options";
import { LoginForm } from "@/components/Forms/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
   // if user is already logged and try to access login route, then redirect to landing page
   const session = await getServerSession(options);
   if (session) redirect("/");
  return (
    <>
      <LoginForm />
    </>
  );
}
