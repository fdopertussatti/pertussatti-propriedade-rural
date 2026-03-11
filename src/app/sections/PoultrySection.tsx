"use client";

import { motion } from "framer-motion";
import { Bird } from "lucide-react";

const aviarios = [
  { value: "1.200 m²", title: "Aviário 1", desc: "12 × 100 metros" },
  { value: "1.500 m²", title: "Aviário 2", desc: "12 × 125 m · Reformado" },
];

export default function PoultrySection() {
  return (
    <section id="producao" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
            Avicultura
          </span>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Infraestrutura Avícola
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Produção integrada à Aurora através da Cooperalfa, com capacidade
            para até 7 lotes por ano.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {aviarios.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Bird className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <p className="mt-6 text-2xl font-bold text-primary">{item.value}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl bg-primary px-10 py-8 text-center"
            >
              <p className="text-2xl font-bold text-white">7 lotes/ano</p>
              <p className="mt-1 font-medium text-blue-100">
                Produção Média — Com os dois aviários em operação
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
