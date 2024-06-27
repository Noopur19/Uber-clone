"use client";
import React, { useState } from "react";
import Input from "../Input/Input";
import { useRouter } from "next/navigation";
import Toast from "../Toast/Toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const t = useTranslations("Signup");
  const locale = useLocale();

  const handleSumit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!username || !email || !password) {
      Toast.warning("All fields are required");
      return;
    }
    try {
      // check if user already exists
      const response = await fetch("http://localhost:3000/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const { user } = await response.json();

      if (user) {
        Toast.error("User already registered...!");
        return;
      }
      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (res?.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };

  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="w-full h-full max-w-sm justify-center items-center">
        <div className="text-2xl justify-center items-center py-4 my-3 ">
          {t("title")}
        </div>
        <Input
          name="fullName"
          type="text"
          placeholder={t("enter_name")}
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
        <Input
          name="email"
          type="email"
          placeholder={t("enter_email")}
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <div className="relative">
          <Input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder={t("enter_password")}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
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
          onClick={handleSumit}
        >
          {t("signup")}
        </button>
        <span className="float-right">
          {t("already_account")}
          <Link
            href="/auth/login"
            locale={locale}
            className="text-base text-right mr-0 underline underline-offset-4"
          >
            {t("login")}
          </Link>
        </span>
      </div>
    </div>
  );
};
