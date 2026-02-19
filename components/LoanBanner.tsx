"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCheckCircle, faClock } from "@fortawesome/free-solid-svg-icons";

export default function LoanBanner() {
  return (
    <section className="bg-gray-200 py-12">

      <div className="max-w-6xl mx-auto overflow-hidden rounded-md shadow-lg">

        <div className="grid md:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="h-[260px] md:h-[300px]">
            <img
              src="/building_view.jpg"
              alt="Home Loan"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT PANEL */}
          <div className="bg-[#001D4A] text-white p-8 flex flex-col justify-center">

            {/* HEADING */}
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="text-yellow-400">HOME LOANS</span> MADE EASY
            </h2>

            {/* HIGHLIGHT STRIP */}
            <p className="bg-yellow-400 text-black inline-block px-3 py-1 text-sm font-medium mb-6">
              Affordable Home Loans Tailored To Your Needs !
            </p>

            {/* ICON FEATURES */}
            <div className="flex justify-between text-center mb-8 text-sm">

              <div>
                <FontAwesomeIcon icon={faThumbsUp} className="text-yellow-400 text-xl mb-1" />
                <p>Best Rates</p>
              </div>

              <div>
                <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 text-xl mb-1" />
                <p>Quick & Easy Process</p>
              </div>

              <div>
                <FontAwesomeIcon icon={faClock} className="text-yellow-400 text-xl mb-1" />
                <p>Fast Approval</p>
              </div>

            </div>

            {/* CENTERED BUTTON */}
            <div className="flex justify-center">

              <button
                className="
                  border border-yellow-400 text-yellow-400
                  px-6 py-2 rounded-full font-semibold
                  hover:bg-yellow-400 hover:text-[#001D4A]
                  transition duration-300
                "
              >
                Contact Us Now
              </button>

            </div>

          </div>

        </div>

      </div>
      {/* BOTTOM HR LINE */}
      <div className="max-w-5xl mx-auto mt-8">
        <hr className="border-t border-gray-400" />
      </div>
    </section>
  );
}
