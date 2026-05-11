"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, ExternalLink, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/constants";

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

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent(
    BUSINESS.whatsapp.message
  )}`;

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="fixed bottom-0 left-0 right-0 z-0 bg-slate-800 text-slate-300 min-h-[80vh] md:min-h-0"
      aria-label="Pie de página"
    >
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#3A7CA5] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">3C</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Pilates 3C</div>
                <div className="text-[#3A7CA5] text-xs">Powerhouse</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Centro de Pilates máquinas y fisioterapia en Tres Cantos, Madrid.
              Más de 15 años cuidando de tu salud.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-700 hover:bg-[#3A7CA5] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <ExternalLink size={18} aria-hidden="true" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-700 hover:bg-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navegación</h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Especialidades", href: "#especialidades" },
                { label: "Nuestro equipo", href: "#equipo" },
                { label: "Reseñas", href: "#resenas" },
                { label: "Preguntas frecuentes", href: "#faq" },
                { label: "Contacto", href: "#contacto" },
              ].map(({ label, href }) => (
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
          </div>

          {/* Horario */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <Clock size={15} className="text-[#3A7CA5]" aria-hidden="true" />
              Horario
            </h3>
            <ul className="flex flex-col gap-2">
              {BUSINESS.hours.map(({ days, time }) => (
                <li key={days} className="flex flex-col">
                  <span className="text-sm text-slate-400">{days}</span>
                  <span className="text-sm text-white font-medium">{time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contacto</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phone.raw}`}
                  className="flex items-start gap-2 text-sm text-slate-400 hover:text-white transition-colors min-h-0"
                  aria-label={`Llamar al ${BUSINESS.phone.display}`}
                >
                  <Phone size={15} className="text-[#3A7CA5] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  {BUSINESS.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-slate-400 hover:text-white transition-colors min-h-0"
                  aria-label="Ver en Google Maps"
                >
                  <MapPin size={15} className="text-[#3A7CA5] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{BUSINESS.address.full}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
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
