"use client";

import { useRef, useEffect } from "react";
import data from "@/data/localities.json";
import LocalityCard from "./LocalityCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function TrendingLocalities() {
  const containerRef = useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 260; // card width + gap

  // 🔥 Duplicate for seamless infinite loop
  const loopCards = [...data.cards, ...data.cards, ...data.cards];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Start from middle set
    el.scrollLeft = el.scrollWidth / 3;
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;

    // 🔥 Get actual card width dynamically
    const firstCard = el.querySelector("div") as HTMLElement;
    const cardWidth = firstCard?.offsetWidth + 24; // + gap (gap-6 = 24px)

    el.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });

    setTimeout(() => {
      // Infinite reset
      if (el.scrollLeft < cardWidth) {
        el.scrollLeft = el.scrollWidth / 3;
      }

      if (el.scrollLeft > el.scrollWidth * (2 / 3)) {
        el.scrollLeft = el.scrollWidth / 3;
      }
    }, 400);
  };


  return (
    <section className="bg-gray-200 py-16">

      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="inline-block bg-[#001D4A] text-white px-6 py-2 text-xl md:text-2xl font-semibold">
          TOP PROJECTS IN TRENDING LOCALITIES
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* LEFT BUTTON */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10
          bg-[#D19C3B] hover:bg-yellow-400 text-white
          w-10 h-10 md:w-11 md:h-11 rounded-full shadow"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* SLIDER */}
        <div
          ref={containerRef}
          className="
    flex gap-6 overflow-hidden scroll-smooth
    px-0 scroll-px-[5vw] sm:scroll-px-[calc(50%-180px)] lg:scroll-px-[calc(50%-160px)]

  "
        >
          {loopCards.map((item, index) => (
            <div
              key={index}
              className="
        min-w-[90vw] sm:min-w-[320px] md:min-w-[260px]
      "
            >
              <LocalityCard item={item} />
            </div>
          ))}
        </div>


        {/* RIGHT BUTTON */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10
          bg-[#D19C3B] hover:bg-yellow-400 text-white
          w-10 h-10 md:w-11 md:h-11 rounded-full shadow"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

      </div>
    </section>
  );
}
