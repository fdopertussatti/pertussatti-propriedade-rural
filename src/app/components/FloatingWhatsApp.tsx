"use client";

import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/app/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600 hover:shadow-xl"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} fill="currentColor" />
    </a>
  );
}
