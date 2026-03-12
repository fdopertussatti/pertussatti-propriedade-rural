"use client";

import { MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="localizacao" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
            Onde estamos
          </span>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Localização
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-slate-600">
            <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
            A 3 km do centro e 300 m da rodovia SC-482, Coronel Martins, SC
          </p>
          <p className="mt-2 text-base text-slate-500">
            Apenas 300 m da rodovia SC-482 — fácil acesso. Posição que atenua o impacto de eventos climáticos na produção.
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-xl border border-slate-200 shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=Coronel+Martins+Santa+Catarina&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização - Coronel Martins SC"
            className="min-h-[350px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
