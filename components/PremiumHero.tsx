"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PremiumHero() {

  // GSAP Scroll Animation
  useEffect(() => {
    gsap.from(".hero-text", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".search-bar", {
      opacity: 0,
      y: 80,
      delay: 0.4,
      duration: 1
    });
  }, []);

  return (
    <section
      className="
        relative h-[85vh] w-full
        bg-cover bg-center
        flex items-center justify-center
        overflow-hidden
      "
      style={{ backgroundImage: "url('/men_standing.webp')" }}
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative text-center text-white px-4">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-text text-4xl md:text-6xl font-bold mb-4"
        >
          Trusted Choice For <br />
          <span className="text-yellow-400">
            Real Estate Investment
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg mb-8"
        >
          Where Dreams Meet The Best Deals
        </motion.p>

        {/* SEARCH BAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="search-bar bg-white rounded-full shadow-xl flex overflow-hidden max-w-2xl mx-auto"
        >

          <div className="bg-[#0b2a4a] text-white px-6 py-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faLocationDot} />
            Mumbai
          </div>

          <input
            placeholder="Enter Location, Project"
            className="flex-1 px-6 outline-none text-black"
          />

          <button className="bg-yellow-400 px-6 text-black">
            <FontAwesomeIcon icon={faSearch} />
          </button>

        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="absolute bottom-6 text-white text-sm"
      >
        Scroll Down ↓
      </motion.div>

    </section>
  );
}
