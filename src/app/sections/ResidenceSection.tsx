"use client";

import { motion } from "framer-motion";
import { Home, BedDouble, Bath } from "lucide-react";

const features = [
  { icon: Home, value: "120 m²", label: "2 pisos" },
  { icon: BedDouble, value: "3", label: "Quartos" },
  { icon: Bath, value: "2", label: "Banheiros" },
];

export default function ResidenceSection() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex items-center justify-center">
            <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-primary/10">
              <Home className="h-24 w-24 text-primary" strokeWidth={1.5} />
            </div>
          </div>
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
              Moradia
            </span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Residência
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Casa unifamiliar mista em ótimo estado, com aproximadamente 120 m²,
              dois pisos e amplo pomar com diversas frutas.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {features.map(({ icon: Icon, ...item }, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <p className="mt-4 text-2xl font-bold text-primary">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-600">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
