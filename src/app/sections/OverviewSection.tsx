"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Building2,
  Droplets,
  Sun,
  Zap,
} from "lucide-react";

const activities = [
  { icon: Factory, label: "Produção integrada", desc: "Cooperativa Aurora via Cooperalfa" },
  { icon: Building2, label: "Infraestrutura completa", desc: "Máquinas, internet Starlink e mais" },
  { icon: Droplets, label: "Abundância de água", desc: "3 fontes naturais e reservatórios" },
  { icon: Sun, label: "Energia solar on-grid", desc: "57 módulos · Créditos na concessionária" },
  { icon: Zap, label: "Gerador de backup", desc: "Bambozzi 80 kVA" },
];

export default function OverviewSection() {
  return (
    <section id="propriedade" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
              Sobre a propriedade
            </span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Visão Geral
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              A propriedade da família Ivo e Lucilene Pertussatti, localizada na
              Linha Formosa, Coronel Martins, SC, reúne 14,5 hectares de terra
              produtiva.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Com produção avícola integrada à Aurora via Cooperalfa,
              infraestrutura completa, excelente disponibilidade de água, energia
              solar on-grid, gerador e internet Starlink.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {activities.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{item.label}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
