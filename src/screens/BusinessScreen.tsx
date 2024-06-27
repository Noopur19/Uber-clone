"use client";
import React from "react";

const BusinessScreen = () => {
  return (
    <>
      <div className="py-16 bg-black">
        <section
          id="home"
          className="flex justify-center items-center flex-col-reverse lg:flex-row bg-black"
        >
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start h-full lg:pl-8 pt-10 lg:pt-0 pb-14">
            <div className="w-full px-4 text-center justify-between lg:text-left">
              <span
                className="font-bold block my-2 text-white text-left"
                style={{ fontSize: "52px" }}
              >
                The best of Uber for your business
              </span>
              <span className="block my-2 text-white tetx-base  text-left">
                Uber for Business gives your organization more control, deeper
                insights, and features built for enterprise users. Manage and
                track business travel, meal programs, and more on one dashboard.
              </span>
              <button className="md:mr-3 py-3 px-9 font-bold text-base my-2 rounded-xl lg:my-0 text-black bg-white">
                How to get started
              </button>
              <a
                href="https://wa.me/+919465313982"
                target="_blank"
                className="p-3 text-charade-500 text-base underline underline-offset-4  my-2 lg:my-0 text-white bg-black"
              >
                Check out for solutions
              </a>
            </div>
          </div>
          <div className="w-8/12 lg:w-1/2 flex justify-center items-center pt-5 lg:pt-0 md:h-full">
            <picture>
              <source srcSet="/img/uber-business.webp" type="image/webp" />
              <source srcSet="/img/uber-business.png" type="image/png" />
              <img src="/img/uber-business.png" className="w-72 lg:w-5/6" />
            </picture>
          </div>
        </section>
        <section className="py-16 px-16">
          <div className="text-white block font-bold text-4xl w-4/6">
            A global platform built on the world’s largest mobility network
          </div>
          <div className="flex w-full flex-row justify-between text-white py-16">
            <div className="w-1/2 justify-between">
              <img src="/ico/badge-money-64x64.svg" className="mb-5" />
              <div className="font-medium mb-5">
                Reduce costs by up to 10% by improving compliance
              </div>
              <span>
                Our customers agreed they reduced costs on ground transportation
                and meals.¹ Monitor spending and usage and get controls to
                enforce policies.
              </span>
            </div>
            <div className="w-1/2 justify-between">
              <img src="/ico/badge-plant-64x64.svg" className="mb-5" />
              <div className="font-medium mb-5">
                Meet sustainability goals with actionable insights
              </div>
              <span>
                Track CO₂ emissions for every ride on a dashboard exclusive to
                Uber for Business. These insights can help you take action and
                leverage sustainable travel options like Uber Green.²
              </span>
            </div>
          </div>
          <div className="flex w-full flex-row justify-between text-white pb-16">
            <div className="w-1/2 justify-between">
              <img src="/ico/badge-star-64x64.svg" className="mb-5" />
              <div className="font-medium mb-5">
                Provide an exclusive experience for your teams
              </div>
              <span>
                In addition to easy expensing and priority support, employees in
                select cities get access to ride options like Uber Business
                Comfort that allow your team to enjoy a premium travel
                experience.
              </span>
            </div>
            <div className="w-1/2 justify-between">
              <img src="/ico/badge-safety_report-64x64.svg" className="mb-5" />

              <div className="font-medium mb-5">
                Prioritize safety and security for your business
              </div>
              <span>
                We offer additional crash-alert notifications for business
                users. Our latest US Safety Report shows that 99.9% of Uber
                trips are completed without any reported safety incidents.
              </span>
            </div>
          </div>
        </section>
      </div>
      <section className="w-full bg-white py-16 px-16">
        <span className="block text-left text-4xl font-bold">
          How companies leverage Uber for Business
        </span>
        <div className="flex flex-col justify-between items-start md:flex-row w-full">
          <div className="w-full my-12 md:my-16">
            <div className="transform transition-all hover:scale-110">
              <img
                src="img\ilo-business_travel-360x204-expandable.svg"
                className="m-auto"
              />
            </div>
            <span className="block p-6 text-left font-bold text-charade-500 text-2xl">
              Business travel
            </span>
          </div>

          <div className="w-full my-12 md:my-16">
            <div className="transform transition-all hover:scale-110">
              <img
                src="img\ilo-courtesy_rides-360x204-expandable.svg"
                className="m-auto"
              />
            </div>
            <span className="block p-6 text-left font-bold text-charade-500 text-2xl">
              Courtesy rides
            </span>
          </div>

          <div className="w-full my-12 md:my-16">
            <div className="transform transition-all hover:scale-110">
              <img
                src="\img\ilo-meal_programs-360x204-expandable.svg"
                className="m-auto"
              />
            </div>
            <span className="block p-6 text-left font-bold text-charade-500 text-2xl">
              Meal programs
            </span>
          </div>
        </div>
      </section>
      <section
        className="w-full py-16 px-16 flex justify-center items-center"
        style={{ backgroundColor: "#002661" }}
      >
        <div className="text-center">
          <div className="text-center font-bold text-4xl text-white">
            9 out of 10 customers recommend choosing Uber for Business³
          </div>
          <button className="md:mr-3 py-3 px-9 font-bold text-base my-2 rounded-xl lg:my-0 text-black bg-white">
            How to get started
          </button>
        </div>
      </section>
      <section className="w-full bg-white py-16 px-16">
        <span className="block text-left text-4xl font-bold">
          Interested in learning more?
        </span>
        <div className="flex flex-col justify-between items-start md:flex-row w-full">
          <div className="w-full my-12 md:my-16">
            <div>
              <img
                src="img/img-resource-1-360x360_2x.webp"
                className="m-auto"
              />
            </div>
            <span className="block p-6 text-left text-charade-500 text-lg">
              How to reduce the carbon footprint of business travel
            </span>
          </div>

          <div className="w-full my-12 md:my-16">
            <div>
              <img
                src="img/img-resource-2-360x360_2x.webp"
                className="m-auto"
              />
            </div>
            <span className="block p-6 text-left text-charade-500 text-lg">
              The perks and benefits your employees want now
            </span>
          </div>

          <div className="w-full my-12 md:my-16">
            <div>
              <img src="img/img-resource-3-360x360_2x.jpg" className="m-auto" />
            </div>
            <span className="block p-6 text-left text-charade-500 text-lg">
              The road to sustainability: executives discuss their efforts
              toward net zero
            </span>
          </div>
        </div>
        <div className="text-sm">
          <p className="mt-4">
            Product and feature availability may vary by market and location. To
            find out more, get started here.
          </p>
          <p className="mt-4">
            ¹Based on over 275 Uber for Business customers surveyed globally in
            February 2023. Customers agreed that they were able to reduce costs
            on ground transportation and/or meals through better compliance.
          </p>
          <p className="mt-4">
            ²Uber Green is available only in certain cities. In addition,
            availability may be limited outside of downtown areas to start.
          </p>
          <p className="mt-4">
            ³Based on a November 2021 survey commissioned by Uber, in which 323
            Uber for Business customers responded to the question “How likely
            are you to recommend Uber for Business to a colleague or someone in
            your professional network?”
          </p>
        </div>
      </section>
    </>
  );
};

export default BusinessScreen;
