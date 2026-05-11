"use client";

import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/constants";

export default function MobileBottomBar() {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent(
    BUSINESS.whatsapp.message
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2 gap-3 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <a
          href={`tel:${BUSINESS.phone.raw}`}
          className="flex items-center justify-center gap-2 h-12 rounded-2xl border-2 border-[#3A7CA5] text-[#3A7CA5] font-semibold text-sm hover:bg-[#E7F5F2] transition-colors"
          aria-label={`Llamar a ${BUSINESS.name}: ${BUSINESS.phone.display}`}
        >
          <Phone size={18} strokeWidth={2.5} />
          <span>Llamar</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 h-12 rounded-2xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1fb855] transition-colors"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={18} strokeWidth={2.5} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
