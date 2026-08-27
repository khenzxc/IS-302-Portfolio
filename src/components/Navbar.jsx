import { useState } from "react";
import { Menu, X, Zap, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#", label: "Overview" },
    { href: "#process", label: "Process Framework" },
    { href: "#team", label: "Team Portfolio" },
  ];

  return (
    // Full width header, nakadikit sa pinakataas
    <header className="sticky top-0 left-0 right-0 z-50 w-full font-['Plus_Jakarta_Sans',-apple-system,sans-serif]">
      
      {/* Katamtamang top at bottom padding (py-4 sm:py-5) */}
      <div className="w-full backdrop-blur-xl bg-white/70 border-b border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] px-4 sm:px-8 py-4 sm:py-5 transition-all relative">
        
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#" 
            className="font-black text-lg sm:text-xl tracking-tight text-slate-900 flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600/90 backdrop-blur-md flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Zap className="w-4 h-4 fill-white" />
            </div>
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

        {/* ================= MOBILE MENU OVERLAY ================= */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-200/60 shadow-xl p-5 md:hidden transition-all duration-200 ease-out z-50">
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