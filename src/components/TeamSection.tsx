"use client";

import { motion } from "framer-motion";
import { TEAM } from "@/constants";

const ACCENT_COLORS = ["#3A7CA5", "#2d8c7a", "#6b5fa8", "#c06b45"] as const;
const INITIALS_BG = [
  "from-[#3A7CA5] to-[#1d4f6e]",
  "from-[#2d8c7a] to-[#185c50]",
  "from-[#6b5fa8] to-[#3d3570]",
  "from-[#c06b45] to-[#8a3d20]",
] as const;

export default function TeamSection() {
  return (
    <section
      id="equipo"
      className="py-24 bg-slate-50"
      aria-label="Nuestro equipo"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#3A7CA5] font-medium text-xs uppercase tracking-widest">
            Nuestro equipo
          </span>
          <h2 className="font-display mt-3 text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Quiénes te van a
            <br />
            <span className="italic text-[#3A7CA5]">cuidar</span>
          </h2>
        </motion.div>

        {/* Team grid — horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TEAM.map((member, i) => {
            const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];
            return (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group flex gap-5 bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
                aria-label={`${member.name} - ${member.role}`}
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${INITIALS_BG[i % INITIALS_BG.length]} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    <span className="text-white font-display font-bold text-2xl">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-display font-bold text-slate-800 text-xl">{member.name}</h3>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${accent}18`, color: accent }}
                    >
                      {member.role}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.description}</p>
                  {/* Thin accent line */}
                  <div
                    className="mt-4 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-14"
                    style={{ backgroundColor: accent }}
                    aria-hidden="true"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          className="mt-12 bg-[#0c2233] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-1">
              ¿Quieres conocernos antes de empezar?
            </h3>
            <p className="text-white/50 text-sm">
              Primera clase de valoración gratuita · Sin compromiso
            </p>
          </div>
          <a
            href="#contacto"
            className="flex-shrink-0 inline-flex items-center justify-center px-7 py-3.5 bg-[#3A7CA5] text-white font-semibold rounded-2xl hover:bg-[#2d6389] transition-all hover:scale-[1.02] shadow-lg shadow-black/30 whitespace-nowrap"
          >
            Reservar visita gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}
