

export default function ContentBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto overflow-hidden mt-14">
      {/* Desktop Banner */}
      <div className="hidden md:block">
        <img
          src="/highlights/apl-highlights-web-6.webp"
          alt="Desktop Banner"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden">
        <img
          src="/highlights/apl-highlights-mob-6.webp"
          alt="Mobile Banner"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
