"use client";

import { motion } from "framer-motion";
import { Dumbbell, HandHeart, Flower2, Activity, ArrowRight } from "lucide-react";
import { SERVICES } from "@/constants";

const ICON_MAP = {
  Dumbbell,
  HandHeart,
  Flower2,
  Activity,
} as const;

const ACCENT_COLORS = [
  "#3A7CA5",
  "#2d8c7a",
  "#6b5fa8",
  "#c06b45",
] as const;

const NUMS = ["01", "02", "03", "04"];

export default function ServicesSection() {
  return (
    <section
      id="especialidades"
      className="py-24 bg-[#0c2233]"
      aria-label="Nuestras especialidades"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="text-[#6dd5c0] font-medium text-sm uppercase tracking-widest">
              Especialidades
            </span>
            <h2 className="font-display mt-2 text-4xl md:text-5xl font-bold text-white leading-tight">
              Lo que hacemos<br className="hidden md:block" />
              <span className="italic text-[#6dd5c0]"> por ti</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-xs text-sm leading-relaxed md:text-right">
            Cada servicio, adaptado a tu cuerpo y patología con seguimiento continuo.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP];
            const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-400 overflow-hidden cursor-default"
                aria-label={service.title}
              >
                {/* Ghost number */}
                <span
                  className="absolute top-3 right-4 font-display text-6xl font-bold leading-none select-none pointer-events-none"
                  style={{ color: `${accent}18` }}
                  aria-hidden="true"
                >
                  {NUMS[i]}
                </span>

                {/* Accent top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: accent }}
                  aria-hidden="true"
                />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${accent}25` }}
                  aria-hidden="true"
                >
                  <Icon size={22} style={{ color: accent }} />
                </div>

                <h3 className="font-display font-semibold text-white text-lg mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-all min-h-0 group-hover:gap-2.5"
                  style={{ color: accent }}
                  aria-label={`Reservar ${service.title}`}
                >
                  Reservar
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-14 pt-10 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-white/40 text-sm">Sin compromiso · Primera clase de valoración gratuita</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#3A7CA5] text-white font-semibold rounded-2xl hover:bg-[#2d6389] transition-all shadow-lg shadow-black/40 hover:scale-[1.02]"
          >
            Empezar ahora
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
