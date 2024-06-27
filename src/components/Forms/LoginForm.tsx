"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "../Input/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Toast from "../Toast/Toast";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const t = useTranslations("Login");
  const locale= useLocale();

  const handleLogin = async (event: React.FormEvent) => {
    event?.preventDefault();
    try {
      // await fetch("http://localhost:3000/api/products", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     name: "Vegiee Delight Pizza",
      //     description: "A vibrant and flavorful vegetarian pizza bursting with an assortment of colorful garden vegetables. Enjoy the freshness of sliced bell peppers, onions, tomatoes, mushrooms, black olives, and sweetcorn, all generously layered atop a bed of tangy tomato sauce and gooey melted mozzarella cheese on a crispy crust.",
      //     category: "PIZZA",
      //     price: 180,
      //     rating: 5,
      //     image: "https://b.zmtcdn.com/data/dish_photos/190/f14723b756dd355ec3d10c5d60522190.jpg"
      //   }),
      // });
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        Toast.error("Invalid Credentials");
        return;
      }
      router.replace("/");
      Toast.success("Logged in successfully");
    } catch (error) {
      console.log("Error while signing in:", error);
    }
  };

  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="w-full h-full max-w-sm justify-center items-center">
        <div className="text-2xl justify-center items-center py-4 my-3 ">
          {t("title")}
        </div>
        <Input
          name="email"
          type="email"
          placeholder={t("enter_email")}
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e?.target?.value)
          }
        />
        <div className="relative">
          <Input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder={t("enter_password")}
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaEyeSlash className="h-5 w-5 text-gray-400" />
            ) : (
              <FaEye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
        <button
          type="submit"
          className="w-full border inline-block box-content border-gray-300 my-3 bg-black text-white rounded-md py-2"
          onClick={handleLogin}
        >
          {t("login")}
        </button>
        <span className="float-right">
          {t("no_account")}
          <Link
            href="/auth/signup"
            locale={locale}
            className="text-base text-right mr-0 underline underline-offset-4"
          >
            {t("register")}
          </Link>
        </span>
      </div>
    </div>
  );
};
