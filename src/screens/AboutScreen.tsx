"use client";
import React from "react";

const AboutScreen = () => {
  return (
    <div className="bg-white">
      <section className="w-full">
        <div className="relative">
          <img
            src="/img/About_us_600.webp"
            alt="Your Image"
            className="w-full"
          />
          <p className="absolute bottom-0 py-16 px-16 left-0 text-5xl text-white font-bold p-2">
            About us
          </p>
        </div>
      </section>
      <section className="w-full py-16 px-16">
        <div className="grid grid-cols-12 gap-x-9 gap-y-9">
          <div className="col-span-8">
            <div className="font-bold text-4xl mb-6">
              We reimagine the way the world moves for the better
            </div>
            <span className="text-base">
              Movement is what we power. It’s our lifeblood. It runs through our
              veins. It’s what gets us out of bed each morning. It pushes us to
              constantly reimagine how we can move better. For you. For all the
              places you want to go. For all the things you want to get. For all
              the ways you want to earn. Across the entire world. In real time.
              At the incredible speed of now. Read our full mission statement
            </span>
          </div>
          <div className="col-span-full text-base font-medium">
            Read our full mission statement
          </div>
        </div>
      </section>

      <section className="px-16 py-16">
        <div className="grid grid-cols-12 justify-between gap-x-9 gap-y-9">
          <div className="col-span-6">
            <div className="font-bold block my-2 text-3xl text-black mb-5">
              Your safety drives us
            </div>
            <span className="text-base">
              Whether you’re in the back seat or behind the wheel, your safety
              is essential. We are committed to doing our part, and technology
              is at the heart of our approach. We partner with safety advocates
              and develop new technologies and systems to help improve safety
              and help make it easier for everyone to get around.
            </span>
          </div>

          <div className="col-span-6">
            <img src="/img/globe_background-01.svg" />
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-16">
        <div className="grid grid-cols-3 gap-x-9 gap-y-9">
          <span className="col-span-full font-bold block my-2 text-4xl text-black">
            Company info
          </span>
          <div>
            <img src="/img/Company-1.webp" />
            <span className="block font-medium my-4 text-lg">
              Who's driving Uber
            </span>
            <div className="max-w-xs">
              <p className="text-base">
                We’re building a culture within Uber that emphasizes doing the
                right thing, period, for riders, drivers, and employees. Find
                out more about the team that’s leading the way.
              </p>
            </div>
          </div>

          <div>
            <img src="/img/Company-2.webp" />
            <span className="block font-medium my-4 text-lg">
              Getting diversity right
            </span>
            <div className="max-w-xs">
              <p className="text-base">
                It’s our goal to create a workplace that is inclusive and
                reflects the diversity of the cities we serve—where everyone can
                be their authentic self, and where that authenticity is
                celebrated as a strength. By creating an environment where
                people from every background can thrive, we'll make Uber a
                better company—for our employees and our customers.
              </p>
            </div>
          </div>

          <div>
            <img src="/img/Company-3.webp" />
            <span className="block font-medium my-4 text-lg">
              Acting with integrity
            </span>
            <div className="max-w-xs">
              <p className="text-base">
                Uber's Ethics & Compliance Program Charter outlines our
                commitment to integrity at the highest levels within the
                company. Transparency is critical to an ethical culture; we
                achieve this through our Integrity Helpline and suite of
                scalable and effective compliance initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-16">
        <div className="grid grid-cols-12 gap-x-9 gap-y-9">
          <div className="col-span-6">
            <div className="font-bold text-4xl mb-10">
              Make your brand go where people go
            </div>
            <span>
              Promote it to millions on the move by advertising your brand
              through Uber.
            </span>
          </div>
          <div className="col-span-6 block w-full h-full">
            <img src="/img/virat-car.webp" />
          </div>
        </div>
      </section>

      <section className="px-16 py-16">
        <div className="grid grid-cols-3 gap-x-9 gap-y-9">
          <span className="col-span-full font-bold block my-2 text-3xl text-black">
            Keep up with the latest
          </span>
          <div>
            <img src="/ico/megaphone-outlined.svg" />
            <span className="block font-medium my-4 text-lg">Newsroom</span>
            <div className="max-w-xs">
              <p className="text-base">
                Get announcements about partnerships, app updates, initiatives,
                and more near you and around the world.
              </p>
            </div>
          </div>

          <div>
            <img src="/ico/person_group-filled.svg" />
            <span className="block font-medium my-4 text-lg">Blog</span>
            <div className="max-w-xs">
              <p className="text-base">
                Find new places to explore and learn about Uber products,
                partnerships, and more.
              </p>
            </div>
          </div>

          <div>
            <img src="/ico/network-filled.svg" />
            <span className="block font-medium my-4 text-lg">
              Investor relations
            </span>
            <div className="max-w-xs">
              <p className="text-base">
                If there’s anything that you need, you can reach us
                anytime.Download financial reports, see next-quarter plans, and
                read about our corporate responsibility initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-16 py-16" style={{ backgroundColor: "#F6F6F6" }}>
        <div className="grid grid-cols-12 gap-x-9 gap-y-9">
          <div className="col-span-5 pt-10">
            <span className="font-bold block my-2 text-5xl text-black mb-5">
              Come reimagine with us
            </span>
            <button className="py-3 px-9 font-bold text-base my-2 rounded-xl text-white bg-black">
              Search open roles
            </button>
          </div>
          <div className="col-span-7">
            <img src="/img/globe_background-01.svg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutScreen;
