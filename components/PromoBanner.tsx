"use client";

export default function PromoBanner() {
  return (
    <section className="bg-gray-200 py-12">

      {/* CENTERED CONTAINER */}
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-md">

        {/* BANNER IMAGE */}
        <img
          src="/building_view.jpg"
          alt="Interior Offer"
          className="w-full h-[220px] md:h-[260px] object-cover"
        />

        {/* RIGHT DARK PANEL */}
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 "></div>

        {/* ENQUIRE BUTTON */}
        <div className="absolute right-6 md:right-12 bottom-8">

          <button
            className="
              border border-white text-white
              px-6 py-2 rounded-full
              font-medium
              hover:bg-yellow-400 hover:text-[#001D4A]
              transition duration-300
              bg-[#001D4A]/95
            "
          >
            ENQUIRE NOW
          </button>

        </div>

      </div>
      {/* BOTTOM HR LINE */}
      <div className="max-w-5xl mx-auto mt-8">
        <hr className="border-t border-gray-400" />
      </div>

    </section>
  );
}
