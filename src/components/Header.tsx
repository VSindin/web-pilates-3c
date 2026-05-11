"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS } from "@/constants";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Equipo", href: "#equipo" },
  { label: "Reseñas", href: "#resenas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const isTransparent = !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-2.5 min-h-0"
            onClick={closeMenu}
            aria-label="Pilates 3C Powerhouse - Inicio"
          >
            <div className="w-9 h-9 rounded-xl bg-[#3A7CA5] flex items-center justify-center flex-shrink-0 shadow-md">
              <span className="text-white font-bold text-sm leading-none font-display">3C</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-display font-semibold text-sm leading-tight block transition-colors duration-300 ${isTransparent ? "text-white" : "text-slate-800"}`}>
                Pilates 3C
              </span>
              <span className={`text-xs leading-tight block tracking-wider transition-colors duration-300 ${isTransparent ? "text-[#6dd5c0]" : "text-[#3A7CA5]"}`}>
                POWERHOUSE
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-lg transition-colors min-h-0 font-medium ${
                  isTransparent
                    ? "text-white/85 hover:text-white hover:bg-white/10"
                    : "text-slate-600 hover:text-[#3A7CA5] hover:bg-[#E7F5F2]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone.raw}`}
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-xl transition-colors min-h-0 border font-medium ${
                isTransparent
                  ? "text-white border-white/40 hover:bg-white/10"
                  : "text-[#3A7CA5] border-[#3A7CA5] hover:bg-[#E7F5F2]"
              }`}
              aria-label={`Llamar al ${BUSINESS.phone.display}`}
            >
              <Phone size={15} />
              {BUSINESS.phone.display}
            </a>
            <a
              href="#contacto"
              className="px-4 py-2 text-sm text-white bg-[#3A7CA5] rounded-xl hover:bg-[#2d6389] transition-colors min-h-0 font-semibold shadow-md"
            >
              Reservar clase
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex items-center justify-center w-12 h-12 rounded-xl transition-colors min-h-0 ${
              isTransparent ? "text-white hover:bg-white/10" : "text-slate-700 hover:bg-[#E7F5F2]"
            }`}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Menú móvil">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center px-4 py-3 text-base text-slate-700 hover:text-[#3A7CA5] hover:bg-[#E7F5F2] rounded-xl transition-colors min-h-[48px] font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <a
                href="#contacto"
                onClick={closeMenu}
                className="flex items-center justify-center w-full px-4 py-3 text-white bg-[#3A7CA5] rounded-xl font-semibold hover:bg-[#2d6389] transition-colors min-h-[48px]"
              >
                Reservar primera clase gratis
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
