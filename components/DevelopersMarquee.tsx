"use client";

import data from "@/data/developers.json";
import Image from "next/image";

export default function DevelopersMarquee() {
  return (
    <section className="bg-[#F26730] py-16 overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-[#0B263A] text-xl md:text-2xl font-semibold">
          Trusted Developers in Mumbai
        </h2>
      </div>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden">

        <div className="flex animate-marquee gap-12 items-center">

          {[...data.logos, ...data.logos].map((logo, i) => (
            <div
              key={i}
              className="
          bg-white
          px-8 py-6
          flex items-center justify-center
          rounded-lg shadow
          min-w-[220px]
          h-[110px] "
            >
              <Image
                src={logo}
                alt="developer"
                width={180}
                height={70}
                className="object-contain  transition duration-300 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>


    </section>
  );
}
