"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/app/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link
              href="#home"
              className="text-xl font-bold text-slate-900"
            >
              Pertussatti
            </Link>
            <p className="mt-2 text-slate-600">{SITE_CONFIG.domain}</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Localização</h3>
            <p className="mt-2 flex items-center gap-2 text-slate-600">
              <MapPin className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
              Linha Formosa, Coronel Martins, SC
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Contato</h3>
            <a
              href={`tel:+55${SITE_CONFIG.whatsapp}`}
              className="mt-2 flex items-center gap-2 text-slate-600 hover:text-primary"
            >
              <Phone className="h-5 w-5 shrink-0" strokeWidth={1.5} />
              {SITE_CONFIG.phone}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="mt-2 flex items-center gap-2 text-slate-600 hover:text-primary"
            >
              <Mail className="h-5 w-5 shrink-0" strokeWidth={1.5} />
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 text-center">
          <Link
            href="/venda"
            className="text-sm font-medium text-primary hover:underline"
          >
            Versão landing page (otimizada para conversão)
          </Link>
          <p className="mt-2 text-sm text-slate-500">
            © {new Date().getFullYear()} Pertussatti. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
