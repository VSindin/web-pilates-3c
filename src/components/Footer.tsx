"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { BUSINESS } from "@/constants";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Nuestro equipo", href: "#equipo" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      document.documentElement.style.setProperty("--footer-height", `${el.offsetHeight}px`);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    update();
    return () => ro.disconnect();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="fixed bottom-0 left-0 right-0 z-0 bg-slate-800 text-slate-300 min-h-[80vh] md:min-h-0"
      aria-label="Pie de página"
    >
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-8">
        {/* Nav: vertical en móvil, horizontal en desktop */}
        <nav aria-label="Navegación del pie de página">
          <ul className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8 mb-8 md:mb-6">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-slate-400 hover:text-white transition-colors min-h-0 inline-flex items-center"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <div className="flex justify-center gap-3 mb-8 md:mb-6">
          <a
            href="https://www.instagram.com/pilatespowerhouse3c/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-700 hover:bg-[#E1306C] flex items-center justify-center transition-colors text-slate-400 hover:text-white"
            aria-label="Instagram de Pilates 3C Powerhouse"
          >
            <Instagram size={16} aria-hidden="true" />
          </a>
          <a
            href="https://www.facebook.com/pilatespowerhouse3c/?locale=es_ES"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-700 hover:bg-[#1877F2] flex items-center justify-center transition-colors text-slate-400 hover:text-white"
            aria-label="Facebook de Pilates 3C Powerhouse"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {BUSINESS.name}. Todos los derechos reservados.
          </p>
          <p>
            Centro de Pilates y Fisioterapia en{" "}
            <span className="text-slate-400">Tres Cantos, Madrid</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
