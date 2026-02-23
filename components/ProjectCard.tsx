"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faRulerCombined,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
       w-full max-w-[340px] mx-auto
        bg-white rounded-2xl overflow-hidden
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        group
      "
    >

      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">

        <img
          src={project.image}
          className="
            w-full h-full object-cover
            transition duration-700
            
          "
          alt=""
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />

      </div>

      {/* CONTENT */}
      <div className="bg-[#0B263A] text-[#F26730] p-5">

        <h3 className="font-bold text-lg mb-1">
          {project.title}
        </h3>

        <p className="text-sm text-gray-300 mb-2">
          By {project.developer}
        </p>

        <p className="text-yellow-400 font-semibold mb-3">
          {project.price}
        </p>

        {/* DETAILS */}
        <div className="text-sm space-y-1 mb-5">

          <p>
            <FontAwesomeIcon icon={faRulerCombined} /> {project.size}
          </p>

          <p>
            <FontAwesomeIcon icon={faBed} /> {project.bhk}
          </p>

          <p>
            <FontAwesomeIcon icon={faLocationDot} /> {project.location}
          </p>

        </div>

        {/* BUTTONS */}
        <div className="flex justify-between items-center">

          <button className="
            bg-white text-[#001D4A]
            px-4 py-1 rounded-full text-sm
            hover:bg-yellow-400 hover:text-black
            transition
          ">
            View details
          </button>

          <button className="
            bg-yellow-400 text-black
            px-3 py-1 rounded-full text-xs font-semibold
            hover:bg-white hover:text-[#001D4A]
            transition
          ">
            Instant Call Back
          </button>

        </div>
      </div>

    </motion.div>
  );
}
