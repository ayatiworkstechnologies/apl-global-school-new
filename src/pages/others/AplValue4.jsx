

export default function APLVAlue4() {
  return (
    <div className="w-full max-w-7xl mx-auto overflow-hidden mt-5">
      {/* Desktop Banner */}
      <div className="hidden md:block">
        <img
          src={"/highlights/apl-highlights-4.webp"}
          alt="Desktop Banner"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden">
        <img
          src={"/highlights/apl-highlights-mob-4.webp"}
          alt="Mobile Banner"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
