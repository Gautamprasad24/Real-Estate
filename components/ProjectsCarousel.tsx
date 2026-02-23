"use client";

import { useRef } from "react";
import projectsData from "@/data/projects.json";
import ProjectCard from "./ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function ProjectsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;

    const card = el.querySelector(".card") as HTMLElement;
    if (!card) return;

    const style = window.getComputedStyle(el);
    const gap = parseInt(style.columnGap || style.gap || "24");

    const amount = card.offsetWidth + gap;

    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-gray-100">

      {/* TITLE */}
      <div className="text-center mb-16">

        <h2 className="inline-block text-white bg-[#0B263A] px-6 py-2 text-xl md:text-2xl font-semibold">
          TOP SELLING PROJECTS IN MUMBAI
        </h2>

        <p className="text-[#F26730] mt-3">
          Exclusive deals on Residential Projects
        </p>

      </div>

      {/* CAROUSEL */}
      <div className="relative max-w-6xl mx-auto">

        {/* LEFT BUTTON */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          onClick={() => scroll("left")}
          className="
  absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10
  bg-[#F26730]/80 text-white
  w-10 h-10 md:w-11 md:h-11 rounded-full shadow-lg
  hover:bg-[#F26730] hover:text-black
  transition
"

        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </motion.button>

        {/* CARDS */}
        <div
          ref={containerRef}
          className="
    flex gap-6 overflow-x-auto
    scroll-smooth scrollbar-hide
    snap-x snap-mandatory
   px-4 scroll-px-[5vw] sm:scroll-px-[calc(50%-190px)] lg:scroll-px-[calc(50%-170px)]

  "
        >
          {projectsData.projects.map((project) => (
            <div
              key={project.id}
              className="
        card snap-center flex-shrink-0
        w-[90vw] sm:w-[380px] lg:w-[340px]
      "
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>


        {/* RIGHT BUTTON */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          onClick={() => scroll("right")}
          className="
  absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10
  bg-[#F26730]/80 text-white
  w-10 h-10 md:w-11 md:h-11 rounded-full shadow-lg
  hover:bg-[#F26730] hover:text-black
  transition
"

        >

          <FontAwesomeIcon icon={faChevronRight} />
        </motion.button>

      </div>

      {/* BOTTOM HR */}
      <div className="max-w-5xl mx-auto mt-12">
        <hr className="border-t border-gray-400" />
      </div>

    </section>
  );
}
