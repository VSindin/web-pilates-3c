"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
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
