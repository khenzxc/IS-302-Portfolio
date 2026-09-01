export default function LogoMarquee() {
  const logos = [
    { name: "CICT", src: "/cict-logo.webp" },
    { name: "BulSU", src: "/bulsu-logo.webp" },
    { name: "BSIS", src: "/bsis-logo.webp" },
  ];

  return (
    <div className="w-full bg-[#030e21] border-y border-slate-800/80 py-6 sm:py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-6 sm:gap-20 overflow-x-auto no-scrollbar flex-nowrap">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 sm:gap-4 shrink-0"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-9 sm:h-16 w-auto object-contain drop-shadow-md"
            />
            <span className="text-sm sm:text-xl font-extrabold text-blue-200 tracking-wider uppercase">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}