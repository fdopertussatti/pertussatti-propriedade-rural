"use client";

import { motion } from "framer-motion";
import { Sun, Zap, Power } from "lucide-react";

const items = [
  {
    icon: Sun,
    title: "Usina fotovoltaica",
    desc: "57 módulos · 4.600 a 4.900 kWh/mês",
  },
  {
    icon: Zap,
    title: "Energia trifásica",
    desc: "Rede elétrica trifásica disponível",
  },
  {
    icon: Power,
    title: "Gerador de backup",
    desc: "Bambozzi 80 kVA · Motor Mercedes-Benz 1113",
  },
];

export default function EnergySection() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
            Autossuficiência
          </span>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Energia e Infraestrutura
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Autossuficiência energética com usina solar, rede trifásica e
            gerador de backup.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
