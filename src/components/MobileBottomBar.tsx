"use client";

import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/constants";

export default function MobileBottomBar() {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent(
    BUSINESS.whatsapp.message
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-[#0c2233]/90 backdrop-blur-md border-t border-white/10">
        <div className="grid grid-cols-2 gap-2.5 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <a
            href={`tel:${BUSINESS.phone.raw}`}
            className="flex items-center justify-center gap-2 h-12 rounded-xl border border-[#6dd5c0]/50 text-[#6dd5c0] font-semibold text-sm hover:bg-[#6dd5c0]/10 transition-colors"
            aria-label={`Llamar a ${BUSINESS.name}: ${BUSINESS.phone.display}`}
          >
            <Phone size={17} strokeWidth={2.5} />
            <span>Llamar</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-12 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1fb855] transition-colors shadow-lg shadow-[#25D366]/30"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle size={17} strokeWidth={2.5} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
