"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/constants";

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent(
    BUSINESS.whatsapp.message
  )}`;
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`;

  return (
    <section
      id="contacto"
      className="py-20 bg-[#E7F5F2]"
      aria-label="Contacto y reserva"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#3A7CA5] font-semibold text-sm uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="font-display mt-2 text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Empieza <span className="italic text-[#3A7CA5]">hoy mismo</span>
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            La primera clase de valoración es completamente gratuita y sin compromiso.
            Contacta con nosotros y nos adaptamos a tu horario.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Contact cards */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Call */}
            <a
              href={`tel:${BUSINESS.phone.raw}`}
              className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border border-slate-100 min-h-[80px] group"
              aria-label={`Llamar a ${BUSINESS.name}: ${BUSINESS.phone.display}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#3A7CA5] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone size={24} className="text-white" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Llámanos</div>
                <div className="font-bold text-slate-800 text-xl">{BUSINESS.phone.display}</div>
                <div className="text-slate-400 text-xs">Lun–Vie 9:30–21:30 · Sáb 9:00–13:00</div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border border-slate-100 min-h-[80px] group"
              aria-label="Contactar por WhatsApp"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle size={24} className="text-white" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">WhatsApp</div>
                <div className="font-bold text-slate-800 text-lg">Envíanos un mensaje</div>
                <div className="text-slate-400 text-xs">Te respondemos en menos de 1 hora</div>
              </div>
            </a>

            {/* Address */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border border-slate-100 min-h-[80px] group"
              aria-label="Ver dirección en Google Maps"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MapPin size={24} className="text-[#3A7CA5]" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Dónde estamos</div>
                <div className="font-semibold text-slate-800">{BUSINESS.address.street}</div>
                <div className="text-slate-400 text-sm">{BUSINESS.address.postalCode} {BUSINESS.address.city}</div>
              </div>
            </a>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-[#3A7CA5]" aria-hidden="true" />
                <h3 className="font-semibold text-slate-800">Horario de apertura</h3>
              </div>
              <ul className="space-y-2">
                {BUSINESS.hours.map(({ days, time }) => (
                  <li key={days} className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">{days}</span>
                    <span
                      className={`font-medium ${time === "Cerrado" ? "text-red-400" : "text-slate-800"}`}
                    >
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Map embed placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100 flex-1 min-h-[340px]">
              <iframe
                title="Mapa de Pilates 3C Powerhouse en Tres Cantos"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.6!2d-3.7207!3d40.5954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSector+de+los+Escultores+4%2C+28760+Tres+Cantos%2C+Madrid!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 340 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* CTA box */}
            <div className="bg-[#3A7CA5] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Primera clase gratuita</h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Ven, conócenos y descubre cómo podemos ayudarte. Sin compromiso,
                sin costes. Solo tú y el mejor equipo de Tres Cantos.
              </p>
              <a
                href={`tel:${BUSINESS.phone.raw}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#3A7CA5] font-semibold rounded-xl hover:bg-[#E7F5F2] transition-colors"
              >
                <Phone size={16} aria-hidden="true" />
                Llamar ahora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
