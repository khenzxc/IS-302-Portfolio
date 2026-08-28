import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#", label: "Overview" },
    { href: "#Projects", label: "Project" },
    { href: "#team", label: "Team Portfolio" },
  ];

  return (
    // Mobile: Standard top-dikit full width | Desktop (md): Floating padding sa taas
    <header className="sticky top-0 z-50 w-full md:pt-6 md:px-8 font-['Plus_Jakarta_Sans',-apple-system,sans-serif] pointer-events-none">

      {/* Top Navbar Container - Laging GLASSMORPISM (Hindi nagbabago) */}
      <div className="w-full md:max-w-7xl mx-auto backdrop-blur-xl bg-white/80 md:bg-white/70 border-b md:border border-white/60 shadow-sm md:shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] md:rounded-2xl px-4 sm:px-6 md:px-5 py-3 transition-all pointer-events-auto relative">

        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="font-black text-lg sm:text-xl tracking-tight text-slate-900 flex items-center gap-0.5 hover:opacity-80 transition-opacity"
          >
            <img
              src="/insight-logo.webp"
              alt="InSight"
              className="h-10 w-auto object-contain"
            />
            <span>In<span className="text-blue-600">Sight</span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-600">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-blue-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Badge & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full bg-slate-100/80 backdrop-blur-sm text-slate-700 text-xs font-bold uppercase tracking-wider border border-slate-200/60">
              BSIS Project
            </span>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100/80 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* ================= LINK CONTAINER ONLY: SOLID WHITE ================= */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 w-full bg-white border-b border-slate-200/80 shadow-2xl p-5 md:hidden transition-all duration-200 ease-out z-50">
            <nav className="flex flex-col gap-1.5 mb-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:bg-blue-50/80 hover:text-blue-600 transition-colors flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-colors" />
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-slate-200/50">
              <span className="inline-block w-full text-center py-2 rounded-xl bg-slate-100/80 text-slate-700 text-xs font-bold uppercase tracking-wider border border-slate-200/60">
                BSIS Project
              </span>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}