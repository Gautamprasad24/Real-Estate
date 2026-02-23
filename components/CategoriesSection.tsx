"use client";

import data from "@/data/categories.json";
import CategoryCard from "./CategoryCard";

export default function CategoriesSection() {

  const left = data.categories[0];
  const top = data.categories[1];
  const bottom = data.categories[2];
  const right = data.categories[3];

  return (
    <section className="bg-gray-200 py-16">

      {/* TITLE */}
      <div className="text-center mb-12">

        <h2 className="inline-block text-white bg-[#0B263A] px-6 py-2 text-xl md:text-2xl font-semibold">
          BROWSE PROPERTIES BY CATEGORY
        </h2>

      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">

        {/* LEFT TALL */}
        <CategoryCard item={left} className="h-[420px]" />

        {/* MIDDLE STACK */}
        <div className="grid gap-4">

          <CategoryCard item={top} className="h-[200px]" />
          <CategoryCard item={bottom} className="h-[200px]" />

        </div>

        {/* RIGHT TALL */}
        <CategoryCard item={right} className="h-[420px]" />

      </div>
      <div className="max-w-5xl mx-auto mt-8">
        <hr className="border-t border-gray-400" />
      </div>

    </section>
  );
}
