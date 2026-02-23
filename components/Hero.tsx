"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Hero() {
  return (
    <section className="relative bg-white">

      <div className="grid md:grid-cols-2">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="h-[520px] md:h-[520px] overflow-hidden"
        >
          <img
            src="/hero.png"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* RIGHT PANEL */}

        {/* RIGHT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#F26730] flex items-center justify-center px-6 py-16"
        >
          {/* MAIN CARD */}
          <div className="border-2 border-yellow-400 rounded-3xl overflow-hidden max-w-md w-full text-center">

            {/* TOP YELLOW STRIP */}
            <div className="bg-yellow-400 text-black text-sm font-semibold py-2">
              Your Trusted Real Estate Partner
            </div>

            {/* CONTENT */}
            <div className="bg-[#0B263A] text-white px-8 py-10">

              <h1 className="text-2xl md:text-2xl font-bold leading-snug">
                <span className="text-[#F26730]">WHERE DREAMS</span> MEET <br />
                THE <span className="text-[#F26730]">BEST DEALS</span>
              </h1>

              {/* BUTTON */}
              <button className="mt-8 bg-yellow-400 text-black font-semibold px-7 py-3 rounded-full hover:bg-yellow-300 transition">
                Explore Properties
              </button>

            </div>

          </div>
        </motion.div>

      </div>

      {/* SEARCH BAR */}
      <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 w-[90%] md:w-[70%] bg-white shadow-lg rounded-full flex overflow-hidden">

        <div className="bg-[#F26730] text-white px-6 py-4 font-medium">
          Mumbai
        </div>

        <input
          type="text"
          placeholder="Enter Location, Project"
          className="flex-1 px-6 outline-none"
        />

        <button className="bg-yellow-400 px-6 text-black font-bold">
          {/* <FontAwesomeIcon icon={faSearch} /> */}
          <FontAwesomeIcon icon={faSearch} />

        </button>
      </div>

    </section>
  );
}
