"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/constants";

function FaqItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left gap-4 min-h-[48px]"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-800 text-base pr-4">{question}</span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E7F5F2] flex items-center justify-center text-[#3A7CA5] transition-colors">
          {isOpen ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-500 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-0 bg-white overflow-hidden"
      aria-label="Preguntas frecuentes"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Left: colored panel */}
        <motion.div
          className="lg:col-span-2 bg-[#3A7CA5] px-8 py-16 md:px-12 md:py-20 flex flex-col justify-center"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-white/60 font-medium text-xs uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Tus dudas,<br />
            <span className="italic">resueltas</span>
          </h2>
          <p className="text-white/70 leading-relaxed text-sm mb-10">
            Si no encuentras tu respuesta aquí, llámanos o escríbenos por WhatsApp.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "Máx. 4", label: "Personas por clase" },
              { value: "1ª clase", label: "Valoración gratuita" },
              { value: "Flexible", label: "Recuperación de clases" },
              { value: "Todos", label: "Los niveles aceptados" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15"
              >
                <div className="font-display font-bold text-white text-2xl mb-0.5">{value}</div>
                <div className="text-white/55 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: accordion */}
        <motion.div
          className="lg:col-span-3 px-8 py-16 md:px-12 md:py-20"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="max-w-xl">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
