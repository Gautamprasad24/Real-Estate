"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function LocalityCard({ item }: any) {
  return (
    <div className="group min-w-[240px] relative">

      {/* TOP TAB */}
      <div className="bg-[#F26730] text-white text-center py-3 rounded-t-2xl font-semibold">
        {item.title}
      </div>

      {/* CARD BODY */}
      <div
        className="
          bg-[#F26730] text-white
          h-[260px] rounded-b-3xl p-6
          text-center relative overflow-hidden
          shadow-lg
          transition duration-300
          group-hover:shadow-2xl
        "
      >

        {/* PROJECT COUNT */}
        <h3 className="text-3xl font-bold">
          {item.projects}
          <span className="text-sm font-normal ml-1">PROJECTS</span>
        </h3>

        {/* LOCATION ICON */}
        <div
          className="
            text-yellow-400 text-4xl my-6
            transition duration-300
            group-hover:scale-125
            group-hover:-translate-y-1
          "
        >
          <FontAwesomeIcon icon={faLocationDot} />
        </div>

        {/* SKYLINE GRAPHIC */}
        <img
          src="/city-skyline.png"
          alt=""
          className="absolute bottom-0 left-0 w-full opacity-80"
        />

      </div>

    </div>
  );
}
