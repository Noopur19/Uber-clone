"use client";
import React from "react";

const EatsScreen = () => {
  return (
    <div className="bg-white">
      <section className="w-full">
        <div className="relative">
          <img
            src="/img/Uber-eats.webp"
            alt="Your Image"
            className="w-full"
          />
          <p className="absolute max-w-3xl top-36 py-16 px-16 left-0 text-7xl text-black font-bold p-2">
            Order your favourite food here...
          </p>
        </div>
      </section>
    </div>
  );
};

export default EatsScreen;
