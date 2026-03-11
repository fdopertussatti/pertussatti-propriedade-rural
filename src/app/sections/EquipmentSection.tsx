"use client";

import { motion } from "framer-motion";
import { Wrench, Check } from "lucide-react";

const mainEquip = [
  "Trator Valmet 62 ID com concha traseira",
  "Picador hidráulico de lenha de alta performance",
  "Desidratador para produção de ração",
  "Removedor e triturador de cama de aviário",
  "Batedor de cama",
  "Queimador de penas",
  "Espalhador de cal",
];

const tools = ["Roçadeira", "Motosserra", "Aparelho de solda", "Atomizador motorizado"];

export default function EquipmentSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
            Inclusos na negociação
          </span>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Máquinas e Equipamentos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Prontos para uso imediato.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-slate-200 bg-slate-50/50 p-10 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Wrench className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-slate-900">
                Equipamentos Principais
              </h3>
            </div>
            <ul className="mt-6 space-y-3">
              {mainEquip.map((e) => (
                <li key={e} className="flex items-center gap-3">
                  <Check className="h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                  <span className="text-slate-600">{e}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-slate-200 bg-slate-50/50 p-10 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Wrench className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-slate-900">
                Ferramentas de Apoio
              </h3>
            </div>
            <ul className="mt-6 space-y-3">
              {tools.map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <Check className="h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                  <span className="text-slate-600">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
