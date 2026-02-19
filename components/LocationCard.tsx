"use client";

export default function LocationCard({ item }: any) {
  return (
    <div
      className="
        group
        min-w-[260px] h-[300px]
        relative rounded-3xl overflow-hidden
        shadow-lg
        transition duration-300
        hover:shadow-2xl
      "
    >

      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.name}
        className="
          w-full h-full object-cover
          transition duration-700
          group-hover:scale-110
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-black/70 to-transparent
          transition duration-300
          group-hover:from-black/80 group-hover:to-black/40
        "
      />

      {/* TEXT */}
      <div
        className="
          absolute left-0 right-0
          text-center text-white
          transition-all duration-500
          
          bottom-5 group-hover:top-1/2 group-hover:bottom-auto
          group-hover:-translate-y-1/2
        "
      >
        <h3 className="font-semibold tracking-wider text-lg">
          {item.name}
        </h3>
      </div>

    </div>
  );
}
