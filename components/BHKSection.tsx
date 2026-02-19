"use client";

import data from "@/data/bhk.json";
import BHKCard from "./BHKCard";

export default function BHKSection() {
  return (
    <section className="bg-[#001D4A] py-16">

      {/* TITLE */}
      <div className="text-center mb-12">

        <h2 className="inline-block bg-[#001D4A] border border-white text-white px-6 py-2 text-xl md:text-2xl font-semibold">
          FIND FLATS IN MUMBAI BY BHK
        </h2>

      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 divide-x divide-white/30">

        {data.bhk.map((item) => (
          <BHKCard key={item.id} item={item} />
        ))}

      </div>

    </section>
  );
}
