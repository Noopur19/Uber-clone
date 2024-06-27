import React from "react";

const DriveScreen = () => {
  return (
    <>
      <div className="py-16 px-16 bg-black">
        <section
          id="home"
          className="flex justify-center items-center flex-col-reverse lg:flex-row bg-black"
        >
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start h-full lg:pl-8 pt-10 lg:pt-0 pb-14">
            <div className="w-full px-4 text-center lg:text-left">
              <span
                className="font-bold  block my-2 text-white"
                style={{
                  fontSize: "52px",
                  fontWeight: "700",
                  lineHeight: "64px",
                }}
              >
                Drive when you want, make what you need
              </span>
              <span className=" block my-2 text-base text-white pt-10">
                Earn on your own schedule.
              </span>
              <button className="md:mr-3 py-3 px-9 font-bold text-base pt-3 rounded-xl my-2 lg:my-0 text-black bg-white">
                Get Started
              </button>
              <a
                href="https://wa.me/+919465313982"
                target="_blank"
                className="p-3  text-base underline underline-offset-4  my-2 lg:my-0 text-white bg-black"
              >
                Already have an account? Sign in
              </a>
            </div>
          </div>
          <div className="w-8/12 lg:w-1/2 flex justify-center items-center pt-5 lg:pt-0 md:h-full">
            <picture>
              <source srcSet="/img/drive-image-1.webp" type="image/webp" />
              <source srcSet="/img/drive-image-1.png" type="image/png" />
              <img src="/img/Ride-with-Uber.png" className="w-72 lg:w-5/6" />
            </picture>
          </div>
        </section>
      </div>
      <div className="py-16 px-16 bg-white">
        <section
          id="home"
          className="flex justify-center items-center flex-col-reverse lg:flex-row bg-white"
        >
          <div className="w-full flex items-center justify-center lg:justify-start h-full lg:pl-8 pt-10 lg:pt-0 pb-14">
            <div className="w-full flex-row justify-center items-center pt-5 pb-5 lg:pt-0 md:h-full">
              <span className="font-bold block my-2 text-4xl text-black">
                Why drive with us
              </span>
              <div className="w-full h-full">
                <picture>
                  <source
                    srcSet="/img/whyDriveWithUs_desktop.svg"
                    type="image/svg"
                  />
                  <source
                    srcSet="/img/whyDriveWithUs_desktop.svg"
                    type="image/svg"
                  />
                  <img
                    src="/img/whyDriveWithUs_desktop.svg"
                    className="w-72 lg:w-full"
                  />
                </picture>
                <div className="flex flex-col justify-between items-start md:flex-row w-full">
                  <div className="w-full my-12 md:my-16">
                    <img src="/ico/Safety-Center.svg" width="50px" />
                    <span className="block font-medium my-4 text-lg">
                      Set your own hours
                    </span>
                    <div className="max-w-xs">
                      <p className="text-base">
                        You decide when and how often you drive.
                      </p>
                    </div>
                  </div>

                  <div className="w-full my-12 md:my-16">
                    <img src="/ico/24_7-Support.svg" width="50px" />
                    <span className="block font-medium my-4 text-lg">
                      Get paid fast
                    </span>
                    <div className="max-w-xs">
                      <p className="text-base">
                        Weekly payments in your bank account.
                      </p>
                    </div>
                  </div>

                  <div className="w-full my-12 md:my-16">
                    <img src="/ico/Community-Guidelines.svg" width="50px" />
                    <span className="block font-medium my-4 text-lg">
                      Get support at every turn
                    </span>
                    <div className="max-w-xs">
                      <p className="text-base">
                        If there’s anything that you need, you can reach us
                        anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="w-full bg-white py-16">
          <span className="block text-3xl font-bold">Safety on the road</span>
          <span className="text-charade-400">
            Your safety drives us to continuously raise the bar.
          </span>
          <div className="flex flex-col justify-between items-start md:flex-row w-full">
            <div className="w-full my-12 md:my-16">
              <img src="/ico/Safety-Center.svg" width="50px" />
              <span className="block font-medium my-4 text-lg">
                Protection on every trip
              </span>
              <div className="max-w-xs">
                <p className="text-base">
                  Each trip you take with the Uber app is insured to protect you
                  and your rider.
                </p>
              </div>
            </div>

            <div className="w-full my-12 md:my-16">
              <img src="/ico/24_7-Support.svg" width="50px" />
              <span className="block font-medium my-4 text-lg">
                Help if you need it
              </span>
              <div className="max-w-xs">
                <p className="text-base">
                  The Emergency Button calls 911. The app displays your trip
                  details so you can quickly share them with authorities.
                </p>
              </div>
              <div className="block pt-10">
                <a href="#" className="group transition duration-300">
                  Learn more
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                </a>
              </div>
            </div>

            <div className="w-full my-12 md:my-16">
              <img src="/ico/Community-Guidelines.svg" width="50px" />
              <span className="block font-medium my-4 text-lg">
                Community Guidelines
              </span>
              <div className="max-w-xs">
                <p className="text-base">
                  Our standards help to create safe connections and positive
                  interactions with everyone. Learn how our guidelines apply to
                  you.
                </p>
              </div>
              <div className="block pt-10">
                <a href="#" className="group transition duration-300">
                  Learn more
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Virat Section */}
        <section className="w-full bg-white">
          <div className="flex flex-col justify-between items-start md:flex-row w-full">
            <div className="w-full my-12 md: w-full lg:w-full">
              <span className="block font-bold my-4 text-4xl">
                Meet Virat Kohli's Uber 11 team
              </span>
              <div>
                <p className="text-base">
                  A successful team is the result of great players who, with
                  their enthusiasm and passion, move the team forward. Virat
                  Kohli's Uber 11 team comprises driver partners who are nothing
                  short of champions. Let's take a look at the qualities that
                  make them, and our team, exceptional.
                </p>
              </div>
            </div>

            <div className="w-full px-4 text-center lg:text-left w-full">
              <picture>
                <source
                  srcSet="/img/Virat.webp"
                  type="image/webp"
                  className="w-full"
                />
                <source
                  srcSet="/img/Virat.webp"
                  type="image/webp"
                  className="w-full"
                />
                <img src="/img/Virat.webp" className="lg:w-full" />
              </picture>
            </div>
          </div>
        </section>
      </div>
      {/* Driver App */}
      <section>
        <div
          className="bg-cover bg-no-repeat inline-block py-16 px-16 md:px-16 w-full"
          style={{ backgroundImage: "url('/img/mobile-bg.webp')", minHeight: "440px" }}
        >
          <div className="font-bold text-4xl mb-6">The Driver app</div>
          <span className="text-base text-left">
            Easy to use and reliable, the app was built for drivers, with
            drivers.
          </span>
          <div className="block pt-10">
            <a href="#" className="group transition duration-300">
              Learn more
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
          </div>
        </div>
      </section>
      <section style={{backgroundColor: "#F6F6F6"}}>
        <div className="w-full py-16 px-16">
          <div className="flex font-bold text-4xl py-6">
            Drive your way in the app
          </div>
          <div className="flex flex-row items-start bg-white md:flex-row p-5 max-w-1/2">
            <div className="max-h-36 max-w-36">
              <picture>
                <source srcSet="/img/uber-app-qr-code.webp" type="image/webp" />
                <source srcSet="im/g/Ride-with-Uber.png" type="image/png" />
                <img src="/img/Ride-with-Uber.png" />
              </picture>
            </div>
            <div className="py-6 pr-12 pl-6">
              <div className="font-bold text-2xl">
                Download the Uber app
              </div>
              <span>Scan to download</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DriveScreen;
