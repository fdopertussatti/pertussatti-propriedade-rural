"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

const categories = [
  "vista aérea",
  "aviários",
  "açudes",
  "área agrícola",
  "eucaliptos",
  "casa",
  "equipamentos",
];

const images = categories.map((label, i) => ({
  id: i,
  label,
  src: `/images/gallery/${label.replace(/\s/g, "-")}.jpg`,
}));

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selected === null) return;
    setSelected((selected + dir + images.length) % images.length);
  };

  return (
    <section id="galeria" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
            Fotos
          </span>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Galeria
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Conheça cada detalhe da propriedade.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.button
              key={img.id}
              type="button"
              onClick={() => setSelected(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <ImageIcon className="h-12 w-12 text-slate-400 transition-colors group-hover:text-primary" strokeWidth={1.5} />
                <span className="mt-3 text-center text-sm font-medium text-slate-600 group-hover:text-slate-900">
                  {img.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Fechar"
              >
                <X className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(-1);
                }}
                className="absolute left-4 rounded-full bg-white/10 p-2 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Próxima"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex aspect-[4/3] max-h-[80vh] w-full max-w-4xl items-center justify-center rounded-xl bg-slate-800/50 p-8"
              >
                <ImageIcon className="h-24 w-24 text-white/50" strokeWidth={1} />
                <p className="absolute text-lg text-white/80">{images[selected].label}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
