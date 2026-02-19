"use client";

import data from "@/data/home.json";
import CountUp from "@/components/CountUp";

export default function Stats() {
  return (
    <section className="bg-[#001D4A] py-16">

      {/* TOP HR */}
      <div className="max-w-5xl mx-auto mb-8">
        <hr className="border-t border-gray-400" />
      </div>

      {/* STATS BOX */}
      <div className="max-w-5xl mx-auto bg-[#001D4A] text-white py-10 px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 text-center divide-x divide-white/30">

          {data.stats.map((item, i) => (
            <div key={i} className="px-4">

              {/* NUMBER */}
              <h3 className="text-yellow-400 text-3xl md:text-4xl font-bold">
                <CountUp value={item.value} />
              </h3>

              {/* LABEL */}
              <p className="text-xs uppercase mt-2 tracking-wider">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* BOTTOM HR */}
      <div className="max-w-5xl mx-auto mt-8">
        <hr className="border-t border-gray-400" />
      </div>

    </section>
  );
}
