"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Wheat, LandPlot, Trees } from "lucide-react";

const blocks = [
  {
    value: "14,5 hectares",
    label: "Área total",
    desc: "Extensão total da propriedade",
    icon: LayoutGrid,
  },
  {
    value: "4 ha (pot. 8 ha)",
    label: "Área agrícola",
    desc: "4 ha em uso, expansão para ~8 ha",
    icon: Wheat,
  },
  {
    value: "~3 hectares",
    label: "Área pecuária",
    desc: "Área destinada à pecuária",
    icon: LandPlot,
  },
  {
    value: "3 hectares",
    label: "Eucalipto",
    desc: "2 ha (~3 anos) + 1 ha (+10 anos)",
    icon: Trees,
  },
];

export default function AreaSection() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
              Área produtiva
            </span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Área e Uso da Terra
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Diversificação produtiva com áreas destinadas à agricultura,
              pecuária e silvicultura, com potencial significativo de expansão.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {blocks.map(({ icon: Icon, ...b }, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <p className="mt-4 text-xl font-bold text-primary">{b.value}</p>
                  <p className="font-semibold text-slate-900">{b.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="aspect-square w-full max-w-sm rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
