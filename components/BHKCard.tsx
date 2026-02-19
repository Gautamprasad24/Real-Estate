export default function BHKCard({ item }: any) {
  return (
    <div className="text-center p-6">

      {/* IMAGE */}
      <div className="flex justify-center mb-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-[180px] md:w-[220px] object-contain"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-white font-semibold tracking-wider">
        {item.title}
      </h3>

    </div>
  );
}
