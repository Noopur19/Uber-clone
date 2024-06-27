import { useTranslations } from "next-intl";
import React from "react";

const RouteScreen = () => {
  const t = useTranslations("Route");
  return (
    <>
      <section
        id="home"
        className="flex justify-center items-center flex-col-reverse lg:flex-row pt-32 bg-white"
      >
        <div className="w-full flex items-center justify-center lg:justify-start h-full lg:pl-8 pt-10 lg:pt-0 pb-14">
          <div className="w-full lg:1/2 px-4 text-center lg:text-left">
            <picture>
              <source srcSet="/img/earner-illustra.webp" type="image/webp" />
              <source srcSet="/img/Ride-with-Uber.png" type="image/png" />
              <img src="/img/Ride-with-Uber.png" className="w-72 lg:w-5/6" />
            </picture>
          </div>
          <div className="w-full flex-row justify-center items-center pt-5 pb-5 lg:pt-0 md:h-full">
            <span className="font-bold text-charade-500 block my-2 text-6xl text-black">
              {t("title1")}
            </span>
            <span className="text-charade-500 block my-2 text-base text-black pt-10">
              {t("subtitle1")}
            </span>
            <button className="md:mr-3 py-3 px-9 font-bold text-base pt-3 rounded-xl my-2 lg:my-0 text-white bg-black">
              {t("get_started")}
            </button>
            <a
              href="https://wa.me/+919465313982"
              target="_blank"
              className="p-3 text-charade-500 text-base underline underline-offset-4  my-2 lg:my-0 text-black bg-white"
            >
             {t("already_account")}
            </a>
          </div>
        </div>
      </section>
      <section
        id="home"
        className="flex justify-center items-center flex-col-reverse lg:flex-row pt-32 bg-white"
      >
        <div className="w-full flex items-center justify-center lg:justify-start h-full lg:pl-8 pt-10 lg:pt-0 pb-14">
          <div className="w-full flex-row justify-center items-center pt-5 lg:pt-0 md:h-full">
            <span className="font-bold text-charade-500 block my-2 text-5xl text-black">
              {t("title2")}
            </span>
            <span className="text-charade-500 block my-2 text-base text-black pt-10">
              {t("subtitle2")}
            </span>
            <button className="md:mr-3 py-3 px-9 font-bold text-base my-2 rounded-xl lg:my-0 text-white bg-black">
              {t("get_started")}
            </button>
            <a
              href="https://wa.me/+919465313982"
              target="_blank"
              className="p-3 text-charade-500 text-base underline underline-offset-4  my-2 lg:my-0 text-black bg-white"
            >
              Check out for solutions
            </a>
          </div>
          <div className="w-full lg:1/2 px-4 text-center lg:text-left">
            <picture>
              <source srcSet="/img/u4b-square.webp" type="image/webp" />
              <source srcSet="/img/Ride-with-Uber.png" type="image/png" />
              <img src="/img/Ride-with-Uber.png" className="w-72 lg:w-5/6" />
            </picture>
          </div>
        </div>
      </section>
      <section
        id="home"
        className="flex justify-center items-center flex-col-reverse lg:flex-row pt-32 bg-white"
      >
        <div className="w-full flex items-center justify-center lg:justify-start h-full lg:pl-8 pt-10 lg:pt-0 pb-14">
          <div className="w-full lg:1/2 px-4 text-center lg:text-left">
            <picture>
              <source srcSet="/img/fleet-management.webp" type="image/webp" />
              <source srcSet="/img/Ride-with-Uber.png" type="image/png" />
              <img src="/img/Ride-with-Uber.png" className="w-72 lg:w-5/6" />
            </picture>
          </div>
          <div className="w-full flex-row justify-center items-center pt-5 pb-5 lg:pt-0 md:h-full">
            <span className="font-bold text-charade-500 block my-2 text-4xl text-black">
              {t("title3")}
            </span>
            <span className="text-charade-500 block my-2 text-base text-black pt-10">
              {t("subtitle3")}
            </span>
            <button className="md:mr-3 py-3 px-9 font-bold text-base pt-3 rounded-xl my-2 lg:my-0 text-white bg-black">
              {t("get_started")}
            </button>
          </div>
        </div>
      </section>
      {/* <section
        id="home"
        className="flex justify-center items-center flex-col-reverse lg:flex-row pt-32"
      >
        <div className="w-full flex items-center justify-center lg:justify-start h-full lg:pl-8 pt-10 lg:pt-0 pb-14">
          <div className="w-full flex-row justify-center items-center pt-5 pb-5 lg:pt-0 md:h-full">
            <span className="font-bold text-charade-500 block my-2 text-4xl text-black">
              It’s easier in the apps
            </span>
            <div className="flex w-full">
            <div className="w-full flex">
                <div className="w-1/4">
                  <picture>
                    <source
                      srcSet="/img/uber-app-qr-code.webp"
                      type="image/webp"
                    />
                    <source srcSet="/img/Ride-with-Uber.png" type="image/png" />
                    <img src="/img/Ride-with-Uber.png" className="w-72" />
                  </picture>
                </div>
                <div>
                  <div className="font-bold text-2xl mt-10 ml-10">Download the Uber app</div>
                  <span className="ml-10 mt-10">Scan to download</span>
                </div>
              </div>
              <div className="w-full flex">
                <div className="w-1/4">
                  <picture>
                    <source
                      srcSet="/img/uber-app-qr-code.webp"
                      type="image/webp"
                    />
                    <source srcSet="/img/Ride-with-Uber.png" type="image/png" />
                    <img src="/img/Ride-with-Uber.png" className="w-72" />
                  </picture>
                </div>
                <div>
                <div className="font-bold text-2xl mt-10 ml-10">Download the Uber app</div>
                  <span className="ml-10 mt-10">Scan to download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </section> */}
      <section style={{ backgroundColor: "#F6F6F6" }}>
        <div className="w-full py-16 px-16">
          <div className="flex font-bold text-4xl py-6">
            {t("title4")}
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-row items-start bg-white md:flex-row p-5 max-w-1/2">
              <div className="max-h-36 max-w-36">
                <picture>
                  <source
                    srcSet="/img/uber-app-qr-code.webp"
                    type="image/webp"
                  />
                  <source srcSet="im/g/Ride-with-Uber.png" type="image/png" />
                  <img src="/img/Ride-with-Uber.png" />
                </picture>
              </div>
              <div className="py-6 pr-12 pl-6">
                <div className="font-bold text-2xl">
                  {t("download_app")}
                </div>
                <span>
                  {t("scan_app")}
                  </span>
              </div>
            </div>
            <div className="flex flex-row items-start bg-white md:flex-row p-5 max-w-1/2">
              <div className="max-h-36 max-w-36">
                <picture>
                  <source
                    srcSet="/img/uber-app-qr-code.webp"
                    type="image/webp"
                  />
                  <source srcSet="im/g/Ride-with-Uber.png" type="image/png" />
                  <img src="/img/Ride-with-Uber.png" />
                </picture>
              </div>
              <div className="py-6 pr-12 pl-6">
                <div className="font-bold text-2xl">
                  {t("download_app")}
                  </div>
                <span>
                  {t("scan_app")}
                  </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RouteScreen;
