import { useTranslations } from "next-intl";
import React from "react";

const HomeScreen = () => {
  const t = useTranslations("Home");

  return (
    <div className="py-16 bg-black">
      <section
        id="home"
        className="flex justify-center items-center flex-col-reverse lg:flex-row bg-black"
      >
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start h-full lg:pl-8 pt-10 lg:pt-0 pb-14">
          <div className="w-full px-4 text-center lg:text-left">
            <span
              className="font-bold block my-2 text-white"
              style={{ fontSize: "52px" }}
            >
              {t("title")}
            </span>
            <span className="block my-2 text-white tetx-base">
              {t("subtitle")}
            </span>
          </div>
        </div>
        <div className="w-8/12 lg:w-1/2 flex justify-center items-center pt-5 lg:pt-0 md:h-full">
          <picture>
            <source srcSet="/img/Ride-with-Uber.webp" type="image/webp" />
            <source srcSet="/img/Ride-with-Uber.png" type="image/png" />
            <img src="/img/Ride-with-Uber.png" className="w-72 lg:w-5/6" />
          </picture>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
