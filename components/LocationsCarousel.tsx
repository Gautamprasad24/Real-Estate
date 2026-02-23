"use client";

import { useRef } from "react";
import data from "@/data/locations.json";
import LocationCard from "./LocationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function LocationsCarousel() {

  const containerRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;

    const card = el.querySelector(".card") as HTMLElement;
    if (!card) return;

    const style = window.getComputedStyle(el);
    const gap = parseInt(style.columnGap || style.gap || "24");

    const amount = card.offsetWidth + gap;

    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };


  return (
    <section className="bg-gray-200 py-16">

      {/* TITLE */}
      <div className="text-center mb-12">

        <h2 className="inline-block text-white bg-[#0B263A] px-6 py-2 text-xl md:text-2xl font-semibold">
          EXPLORE POPULAR LOCATIONS
        </h2>

      </div>

      {/* CAROUSEL */}
      <div className="relative max-w-6xl mx-auto">

        {/* LEFT BUTTON */}
        <button
          onClick={() => scroll("left")}
          className="
    absolute left-2 md:-left-5
    top-1/2 -translate-y-1/2 z-10
    bg-[#F26730]/80 hover:bg-[#F26730]
    text-white w-10 h-10 md:w-11 md:h-11
    rounded-full shadow
    transition
  "
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>


        {/* CARDS */}
        <div
          ref={containerRef}
          className="
    flex gap-6 overflow-x-auto
    scroll-smooth scrollbar-hide
    snap-x snap-mandatory
    px-0 scroll-px-[5vw] sm:scroll-px-[calc(50%-180px)] lg:scroll-px-[calc(50%-160px)]

  "
        >
          {data.locations.map((item) => (
            <div
              key={item.id}
              className="
        card snap-center flex-shrink-0
        w-[90vw] sm:w-[360px] lg:w-[320px]
      "
            >
              <LocationCard item={item} />
            </div>
          ))}
        </div>



        {/* RIGHT BUTTON */}
        <button
          onClick={() => scroll("right")}
          className="
    absolute right-2 md:-right-5
    top-1/2 -translate-y-1/2 z-10
    bg-[#F26730]/80 hover:bg-[#F26730]
    text-white w-10 h-10 md:w-11 md:h-11
    rounded-full shadow-lg
    transition
  "
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>


      </div>
      {/* BOTTOM HR LINE */}
      <div className="max-w-5xl mx-auto mt-8">
        <hr className="border-t border-gray-400" />
      </div>

    </section>
  );
}
