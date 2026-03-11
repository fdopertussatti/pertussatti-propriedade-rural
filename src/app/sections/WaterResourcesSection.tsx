"use client";

import { motion } from "framer-motion";
import { Droplets } from "lucide-react";

const waterFeatures = [
  { title: "3 fontes naturais", desc: "Água potável ativa mesmo em estiagem" },
  { title: "Açude 1", desc: "~3.610 m² — piscicultura em produção. Equipado com aerador, aumentando a produtividade. Fonte de renda adicional." },
  { title: "Açude 2", desc: "~1.304 m² — piscicultura em produção. Renda adicional complementar à avicultura." },
  { title: "Sinergia com desidratador", desc: "A ração para os peixes pode ser produzida pelo desidratador da propriedade, reduzindo custos operacionais." },
  { title: "Reservatório para gado", desc: "Abastecimento dedicado" },
  { title: "Cisterna", desc: <><strong>1,6 milhões de litros</strong> (45×10×3 m)</> },
];

export default function WaterResourcesSection() {
  return (
    <section id="infraestrutura" className="bg-slate-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex items-center justify-center">
            <div className="flex h-48 w-48 items-center justify-center rounded-full bg-primary/20">
              <Droplets className="h-24 w-24 text-primary" strokeWidth={1.5} />
            </div>
          </div>
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-blue-400">
              Recursos hídricos
            </span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Abundância de Água
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              A disponibilidade de água é um dos maiores diferenciais, garantindo
              segurança hídrica e diversificação de receita. Os açudes estão em produção
              de peixes — fonte de renda adicional — e o Açude 1 possui aerador para
              maior produtividade. A ração pode ser produzida pelo desidratador da propriedade.
            </p>
            <div className="mt-10 space-y-4">
              {waterFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-5 backdrop-blur-sm transition-colors hover:border-slate-600"
                >
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
