"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { REVIEWS } from "@/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={16} className="fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % REVIEWS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const review = REVIEWS[current];

  return (
    <section
      id="resenas"
      className="py-24 bg-white"
      aria-label="Reseñas de clientes"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left: heading + controls */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-[#3A7CA5] font-medium text-xs uppercase tracking-widest">
              Reseñas verificadas · Google
            </span>
            <h2 className="font-display mt-3 text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
              Más de 15 años<br />
              <span className="italic text-[#3A7CA5]">cuidando</span> de ti
            </h2>

            {/* Big star rating */}
            <div className="flex items-center gap-3 mt-6 mb-8">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={22} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <span className="font-display text-3xl font-bold text-slate-800">5,0</span>
              <span className="text-slate-400 text-sm">en Google Maps</span>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-2xl border-2 border-slate-200 flex items-center justify-center hover:border-[#3A7CA5] hover:text-[#3A7CA5] transition-colors text-slate-500"
                aria-label="Reseña anterior"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Navegación de reseñas">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Reseña ${i + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      i === current
                        ? "w-6 h-2.5 bg-[#3A7CA5]"
                        : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 rounded-2xl border-2 border-slate-200 flex items-center justify-center hover:border-[#3A7CA5] hover:text-[#3A7CA5] transition-colors text-slate-500"
                aria-label="Reseña siguiente"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Trust badges vertical */}
            <div className="mt-10 flex flex-col gap-2">
              {[
                "Especialistas en hernias discales",
                "Grupos de máximo 4 personas",
                "+15 años de experiencia",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-slate-500 min-h-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3A7CA5] flex-shrink-0" aria-hidden="true" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: review card */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="relative bg-[#0c2233] rounded-3xl p-8 md:p-12 overflow-hidden min-h-[320px] flex flex-col justify-between">
              {/* Giant decorative quote */}
              <Quote
                size={120}
                className="absolute -top-4 -right-4 text-white/5"
                aria-hidden="true"
              />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <StarRating rating={review.rating} />
                  <blockquote className="mt-5">
                    <p className="font-display text-xl md:text-2xl text-white leading-relaxed italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </blockquote>
                  <footer className="flex items-center gap-4 mt-8">
                    <div
                      className="w-12 h-12 rounded-full bg-[#3A7CA5] flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <span className="text-white font-bold font-display text-lg">
                        {review.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <cite className="not-italic font-semibold text-white text-sm block">
                        {review.author}
                      </cite>
                      <span className="text-white/40 text-xs">{review.date} · Tres Cantos</span>
                    </div>
                  </footer>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
