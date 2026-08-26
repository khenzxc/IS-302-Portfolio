export default function LogoMarquee() {
  const logos = [
    { name: "CICT", src: "/cict-logo.png" },
    { name: "BSIS", src: "/bsis-logo.png" },
    { name: "BulSU", src: "/bulsu-logo.png" },
  ];

  const marqueeItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-[#030e21] border-y border-slate-800/80 py-8 overflow-hidden relative z-10">
      {/* Dark Blue Gradient Fade Overlays sa Kaliwa at Kanan */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#030e21] via-[#030e21]/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#030e21] via-[#030e21]/80 to-transparent z-20 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee-loop gap-12 sm:gap-20 items-center">
        {marqueeItems.map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-4 shrink-0"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-12 sm:h-16 w-auto object-contain drop-shadow-md"
            />
            <span className="text-base sm:text-xl font-extrabold text-blue-200 tracking-wider uppercase">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}