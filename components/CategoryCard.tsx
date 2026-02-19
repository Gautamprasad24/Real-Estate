export default function CategoryCard({ item, className }: any) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>

      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* TITLE */}
      <div className="absolute bottom-4 left-0 right-0 text-center">

        <h3 className="text-white font-semibold tracking-wide text-sm md:text-base">
          {item.title}
        </h3>

      </div>

    </div>
  );
}
