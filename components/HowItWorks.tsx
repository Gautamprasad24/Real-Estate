"use client";

import data from "@/data/process.json";
import ProcessStep from "./ProcessStep";

export default function HowItWorks() {
  return (
    <section className="bg-[#F26730] py-16">

      {/* TITLE */}
      <div className="text-center mb-12">

        <h2 className="text-[#0B263A] text-xl font-semibold">
          How it Works
        </h2>

        <p className="text-[#0B263A] text-lg">
          Your Hassle-Free Property Buying Process
        </p>

      </div>

      {/* STEPS */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">

        {data.steps.map((step) => (
          <ProcessStep key={step.id} step={step} />
        ))}

      </div>

    </section>
  );
}
