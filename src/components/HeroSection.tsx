"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Clock } from "lucide-react";
import { BUSINESS } from "@/constants";

const STATS = [
  { icon: Star, value: "5★", label: "Valoración media" },
  { icon: Users, value: "Máx. 4", label: "Personas por clase" },
  { icon: Clock, value: "+15 años", label: "De experiencia" },
];

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent(
    BUSINESS.whatsapp.message
  )}`;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
        aria-hidden="true"
      />
      {/* Gradient overlay: transparent top → dark bottom */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.82) 100%)" }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-6xl mx-auto px-4 pb-20 pt-32 md:pb-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium rounded-full border border-white/20 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6dd5c0] animate-pulse" aria-hidden="true" />
            Tres Cantos · Madrid
          </span>
        </motion.div>

        {/* Brand super-label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#6dd5c0] text-base md:text-lg tracking-[0.3em] uppercase mb-2 font-medium"
        >
          Pilates 3C
        </motion.p>

        {/* Main brand word — Playfair serif, huge */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-6 tracking-tight"
        >
          Power<span className="italic text-[#6dd5c0]">house</span>
        </motion.h1>

        {/* Divider + subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center gap-5 mb-10"
        >
          <div className="w-12 h-0.5 bg-[#6dd5c0] flex-shrink-0" aria-hidden="true" />
          <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
            Pilates máquinas y fisioterapia personalizada. Grupos de máximo&nbsp;4&nbsp;personas
            para una atención completamente individualizada.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#3A7CA5] text-white font-semibold rounded-2xl hover:bg-[#2d6389] transition-all shadow-lg shadow-black/40 text-base hover:scale-[1.02]"
          >
            Reservar mi primera clase
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/20 transition-all text-base"
          >
            Consultar por WhatsApp
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap gap-x-8 gap-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <div key={label} className="flex items-center gap-3 min-h-0">
              {i > 0 && <div className="w-px h-8 bg-white/20 mr-2 hidden sm:block" aria-hidden="true" />}
              <Icon size={16} className="text-[#6dd5c0] flex-shrink-0" aria-hidden="true" />
              <div>
                <div className="font-bold text-white text-sm leading-tight font-display">{value}</div>
                <div className="text-white/50 text-xs leading-tight">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
