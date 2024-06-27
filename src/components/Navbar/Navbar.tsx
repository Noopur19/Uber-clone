"use client";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import Link from "next/link";
import MenuButton from "../MenuButton/MenuButton";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  const { data: session } = useSession();
  const { cartData } = useSelector((state: RootState) => state.cart);
  const cartItemsCount = cartData?.cart?.products?.length || 0;

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isLangDropdownVisible, setIsLangDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleLangDropdown = () => {
    setIsLangDropdownVisible(!isLangDropdownVisible);
  };
  
  return (
    <div className="w-full flex justify-between items-center bg-black z-50 py-3 h-16">
      <MenuButton toggleMenu={toggleMenuHandler} />
      <div
        className={`transition-all origin-top transform absolute flex ${
          isOpen
            ? `scale-y-100 flex flex-col bg-black text-white px-4 top-16 md:top-0 z-50`
            : `scale-y-0 top-16 md:top-0`
        } md:scale-y-100 md:relative md:bg-black md:text-white`}
        style={{ width: `${isOpen ? `100%` : `auto`}` }}
      >
        <ul className="flex flex-col md:flex-row">
          <li className="p-2.5 hover:bg-slate-900 rounded-2xl mb-2 md:mb-0 md:mr-4">
            <Link href="/" locale={locale} className="text-lg px-3.5">
              Uber
            </Link>
          </li>
          <li className="p-2.5 hover:bg-slate-900 rounded-2xl mb-2 md:mb-0 md:mr-4">
            <Link href="/ride" locale={locale} className="text-sm px-3.5">
              {t("ride")}
            </Link>
          </li>
          <li className="p-2.5 hover:bg-slate-900 rounded-2xl mb-2 md:mb-0 md:mr-2">
            <Link href="/drive" locale={locale} className="text-sm px-3.5">
              {t("drive")}
            </Link>
          </li>
          <li className="p-2.5 hover:bg-slate-900 rounded-2xl mb-2 md:mb-0 md:mr-2">
            <Link href="/business" locale={locale} className="text-sm px-3.5">
              {t("business")}
            </Link>
          </li>
          <li className="p-2.5 hover:bg-slate-900 rounded-2xl mb-2 md:mb-0 md:mr-2">
            <Link href="/eats" locale={locale} className="text-sm px-3.5">
              Uber Eats
            </Link>
          </li>
          <li className="p-2.5 hover:bg-slate-900 rounded-2xl mb-2 md:mb-0 md:mr-2">
            <Link href="/recipes" locale={locale} className="text-sm px-3.5">
              {t("recipes")}
            </Link>
          </li>
          <li className="p-2.5 hover:bg-slate-900 rounded-2xl mb-2 md:mb-0 md:mr-2">
            <Link href="/about" locale={locale} className="text-sm px-3.5">
              {t("about")}
            </Link>
          </li>
          <li className="p-2.5 hover:bg-slate-900 rounded-2xl mb-2 md:mb-0 md:mr-2">
            <Link
              href="/"
              className="text-sm px-3.5"
              onClick={() => toggleLangDropdown()}
            >
              EN
            </Link>
            {isLangDropdownVisible && (
              <div
                id="userDropdown"
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute mt-2"
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div
                    className="font-medium truncate cursor-pointer"
                  >
                    ENGLISH
                  </div>
                  <div
                    className="font-medium truncate cursor-pointer"
                  >
                    HINDI
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
        <ul className="flex flex-col md:flex-row">
          {!session ? (
            <>
              <li className="p-2.5 hover:bg-slate-900 rounded-2xl mb-2 md:mb-0 md:mr-2">
                <Link
                  href="/auth/login"
                  locale={locale}
                  className="text-sm px-3.5"
                >
                  {t("login")}
                </Link>
              </li>
              <li className="p-2.5 hover:bg-slate-900 rounded-2xl mb-2 md:mb-0 md:mr-2">
                <Link
                  href="/auth/signup"
                  locale={locale}
                  className="text-sm px-3.5"
                >
                  {t("signup")}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="p-2.5 hover:bg-slate-900 rounded-2xl mb-2 md:mb-0 md:mr-2">
                <Link
                  href="/eats/orders"
                  locale={locale}
                  className="text-sm px-3.5"
                >
                  {t("orders")}
                </Link>
              </li>
              <li className="p-2.5 hover:bg-slate-900 rounded-2xl mb-2 md:mb-0 md:mr-2 relative">
                <Link
                  href="/eats/cart"
                  locale={locale}
                  className="text-sm px-3.5"
                >
                  {t("cart")}
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                    {cartItemsCount}
                  </div>
                </Link>
              </li>
              <li className="hover:bg-slate-900 rounded-2xl mb-2 md:mb-0 md:mr-2">
                <div className="relative z-10 inline-block text-left">
                  <img
                    id="avatarButton"
                    onClick={toggleDropdown}
                    className="w-10 h-10 rounded-full cursor-pointer"
                    src="/img/profile-picture-4.jpg"
                    alt="User dropdown"
                  />

                  {isDropdownVisible && (
                    <div
                      id="userDropdown"
                      className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute mt-2"
                    >
                      <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>{session?.user?.name}</div>
                        <div className="font-medium truncate">
                          {session?.user?.email}
                        </div>
                      </div>
                      <div className="py-1">
                        <button
                          onClick={() => signOut()}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          {t("signout")}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
