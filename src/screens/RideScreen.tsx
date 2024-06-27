"use client";
import React from "react";
import Input from "../components/Input/Input";
import Map from "@/app/[locale]/ride/Map";

const RideScreen = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-10 gap-4">
        <section className="col-span-3 p-4">
          <div className="border border-solid border-2 rounded-xl box-border border-gray-200">
            <span className="font-bold text-xl inline-block px-4 my-1">
              Get a ride
            </span>
            <div className="w-5/6">
              <Input
                name="pickup"
                type="text"
                placeholder="Pickup location"
                value={""}
                // onChange={null}
              />
              <Input
                name="dropoff"
                type="text"
                placeholder="Dropoff location"
                value={""}
                // onChange={null}
              />
              <Input
                name="pickup now"
                type="text"
                placeholder="Pickup now"
                value={""}
                // onChange={null}
              />
              <button
                style={{ backgroundColor: "#F3F3F3" }}
                className="w-full border inline-block box-content border-gray-300 mx-3 my-3 text-gray-400 rounded-md px-4 py-2"
              >
                Search
              </button>
            </div>
          </div>
        </section>
        <section className="col-span-7 p-4">
          <Map />
        </section>
      </div>
    </div>
  );
};

export default RideScreen;
