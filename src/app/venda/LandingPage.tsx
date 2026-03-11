"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  MessageCircle,
  Droplets,
  Sun,
  Bird,
  Zap,
  ChevronDown,
  Check,
  Phone,
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  Trees,
} from "lucide-react";
import { SITE_CONFIG } from "@/app/lib/constants";

const VALUE_PROPS = [
  {
    icon: Bird,
    title: "Aviários em produção",
    text: "7 lotes de frango por ano",
    desc: "Produção integrada à Aurora via Cooperalfa. Receita previsível, mercado garantido. Dois aviários (1.200 m² + 1.500 m²) em operação, um deles reformado recentemente.",
    images: [
      { src: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80", alt: "Aviário em produção", carouselDesc: "Aviário 1 com 1.200 m² (12×100 m). Estrutura em operação integrada à Aurora." },
      { src: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80", alt: "Aviário 2", carouselDesc: "Aviário 2 com 1.500 m² (12×125 m), reformado e modernizado. Capacidade para até 7 lotes por ano." },
    ],
  },
  {
    icon: Droplets,
    title: "Abundância de água",
    text: "3 fontes + 2 açudes em produção + cisterna 1,6 milhões de litros",
    desc: <>Três fontes naturais ativas mesmo em estiagem. Dois açudes (3.610 m² e 1.304 m²) em produção de peixes — fonte de renda adicional. O Açude 1 conta com aerador, aumentando a produtividade. A ração pode ser produzida pelo desidratador da propriedade, reduzindo custos. Cisterna de <strong>1,6 milhões de litros</strong>. Segurança hídrica e diversificação de receita.</>,
    images: [
      { src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80", alt: "Açudes", carouselDesc: "Açude 1 (3.610 m²) com aerador — piscicultura em produção, maior produtividade. Açude 2 (1.304 m²) também em produção de peixes. Renda adicional na propriedade." },
      { src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80", alt: "Fontes e cisterna", carouselDesc: "Três fontes naturais ativas em estiagem. Cisterna de 45×10×3 m (1,6 milhões de litros). Ração do desidratador pode abastecer a piscicultura." },
    ],
  },
  {
    icon: Sun,
    title: "Energia solar",
    text: "Autossuficiência energética",
    desc: "Usina fotovoltaica com 57 módulos, geração de 4.600 a 4.900 kWh/mês. Reduza ou elimine a conta de luz. Energia trifásica disponível em toda a propriedade.",
    images: [
      { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", alt: "Usina solar", carouselDesc: "57 módulos de alta potência. Geração de 4.600 a 4.900 kWh/mês." },
      { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", alt: "Rede trifásica", carouselDesc: "Energia trifásica em toda a propriedade. Autossuficiência energética." },
    ],
  },
  {
    icon: Trees,
    title: "Uso do solo diversificado",
    text: "Reserva legal, eucaliptos e áreas para gado",
    desc: "Reserva legal em conformidade com a legislação. Cerca de 3 hectares de eucaliptos (silvicultura) com potencial de renda de madeira. Áreas já preparadas para criação de gado, com reservatório dedicado e pastagem. Diversificação e aproveitamento integral da propriedade.",
    images: [
      { src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80", alt: "Eucaliptos", carouselDesc: "Cerca de 3 hectares de eucaliptos. Silvicultura com potencial de renda complementar." },
      { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80", alt: "Área para gado", carouselDesc: "Áreas preparadas para criação de gado, com pastagem e reservatório dedicado. Pronta para pecuária." },
    ],
  },
  {
    icon: Zap,
    title: "Infraestrutura completa",
    text: "Gerador + máquinas + equipamentos",
    desc: "Gerador Bambozzi 80 kVA com motor Mercedes-Benz. Trator Valmet, picador, desidratador (que produz ração para a piscicultura dos açudes), espalhador de cal. Tudo incluso — chegue e opere.",
    images: [
      { src: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&q=80", alt: "Gerador", carouselDesc: "Gerador Bambozzi 80 kVA com motor Mercedes-Benz 1113. Backup garantido." },
      { src: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&q=80", alt: "Máquinas", carouselDesc: "Trator Valmet 62 ID, picador hidráulico, desidratador (produz ração para a piscicultura dos açudes), espalhador de cal. Tudo incluso." },
    ],
  },
];

const STAT_ICONS = [MapPin, Bird, Bird, Droplets, Home] as const;
const STATS = [
  {
    value: "14,5",
    label: "hectares produtivos",
    detail: "14,5 hectares de terra produtiva, integrando avicultura, piscicultura, agricultura, pecuária e silvicultura. Uma propriedade de escala ideal para quem busca diversificação e retorno consistente.",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    ],
  },
  {
    value: "2.700",
    label: "m² de aviários",
    detail: "Dois aviários em operação: 1.200 m² (12×100 m) e 1.500 m² (12×125 m), o segundo reformado recentemente. Estrutura pronta para produção integrada à Aurora via Cooperalfa — receita previsível e mercado garantido.",
    images: ["https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80"],
  },
  {
    value: "7",
    label: "lotes de frango/ano",
    detail: "Capacidade de até 7 lotes por ano com os dois aviários operando. Geração de receita recorrente e previsível. A integração com a Aurora elimina a preocupação com comercialização.",
    images: ["https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80"],
  },
  {
    value: "3",
    label: "fontes de água",
    detail: <>Três fontes naturais ativas mesmo em estiagem, dois açudes (3.610 m² e 1.304 m²) em produção de peixes — fonte de renda adicional. O Açude 1 possui aerador, aumentando a produtividade. A ração pode ser produzida pelo desidratador da propriedade, reduzindo custos operacionais. Cisterna de <strong>1,6 milhões de litros</strong>. Segurança hídrica e diversificação de receita.</>,
    images: [
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    ],
  },
  {
    value: "120",
    label: "m² residência",
    detail: "Casa mista de dois pisos, 3 quartos, 2 banheiros, salas e varandas. Em ótimo estado, pronta para morar. Inclui pomar com diversidade de frutas. Ideal para quem quer viver na propriedade.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
  },
];

// Imagens placeholder - substitua por fotos reais em /public/images/
const HERO_IMAGE = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80";
const CTA_IMAGE_1 = "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80";
const CTA_IMAGE_2 = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80";

// Foto aérea com labels — substitua AERIAL_IMAGE e ajuste posições (x, y em %)
const AERIAL_IMAGE = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80";
const AERIAL_LABELS = [
  { id: "aviarios", x: 35, y: 45, text: "Aviários 1 e 2", subtext: "2.700 m²", side: "right" as const },
  { id: "acudes", x: 55, y: 60, text: "Açudes", subtext: "~4.900 m² · Piscicultura em produção", side: "left" as const },
  { id: "residencia", x: 25, y: 70, text: "Residência", subtext: "120 m²", side: "right" as const },
  { id: "agrícola", x: 70, y: 35, text: "Área agrícola", subtext: "4–8 ha", side: "left" as const },
  { id: "eucalipto", x: 15, y: 30, text: "Eucaliptos", subtext: "3 ha", side: "right" as const },
  { id: "cisterna", x: 50, y: 55, text: "Cisterna", subtext: "1,6 milhões de litros", side: "right" as const },
  { id: "solar", x: 80, y: 75, text: "Energia solar", subtext: "57 módulos", side: "left" as const },
];
// Limite da propriedade — pontos do polígono em % (0-100). Ajuste conforme foto real.
const BOUNDARY_POINTS = "8,12 92,8 95,88 12,92 8,12";

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80", label: "Vista aérea" },
  { src: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80", label: "Aviários" },
  { src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80", label: "Açudes" },
  { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80", label: "Área agrícola" },
  { src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80", label: "Eucaliptos e área" },
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", label: "Residência" },
  { src: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&q=80", label: "Equipamentos" },
  { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", label: "Energia solar" },
];


function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-lg font-bold transition-all hover:scale-105";
  const styles =
    variant === "primary"
      ? "bg-green-500 text-white shadow-xl shadow-green-500/30 hover:bg-green-600 hover:shadow-2xl"
      : "border-2 border-white text-white hover:bg-white hover:text-slate-900";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} fill="currentColor" />
      {children}
    </a>
  );
}

export default function LandingPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [diferenciaisCarouselIndex, setDiferenciaisCarouselIndex] = useState<Record<number, number>>({});
  const [statsModalIndex, setStatsModalIndex] = useState<number | null>(null);
  const [statsModalImageIndex, setStatsModalImageIndex] = useState(0);

  const getCarouselIndex = (blockIndex: number) =>
    diferenciaisCarouselIndex[blockIndex] ?? 0;
  const setCarouselIndex = (blockIndex: number, slideIndex: number) =>
    setDiferenciaisCarouselIndex((prev) => ({ ...prev, [blockIndex]: slideIndex }));

  // Auto-avanço dos carrosséis — cada um com atraso inicial diferente para não sincronizar
  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const intervalIds: ReturnType<typeof setInterval>[] = [];
    VALUE_PROPS.forEach((prop, i) => {
      if (prop.images.length <= 1) return;
      timeouts.push(
        setTimeout(() => {
          const id = setInterval(() => {
            setDiferenciaisCarouselIndex((prev) => {
              const current = prev[i] ?? 0;
              const next = (current + 1) % prop.images.length;
              return { ...prev, [i]: next };
            });
          }, 6000);
          intervalIds.push(id);
        }, i * 1500)
      );
    });
    return () => {
      timeouts.forEach(clearTimeout);
      intervalIds.forEach(clearInterval);
    };
  }, []);
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    "Olá! Tenho interesse na propriedade rural em Coronel Martins. Gostaria de agendar uma visita e receber mais informações."
  )}`;

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };
  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
  };

  return (
    <>
      {/* Sticky CTA bar */}
      <div className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-lg backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="font-bold text-slate-900">
            {SITE_CONFIG.name}
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-green-600 hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2} fill="currentColor" />
            Falar no WhatsApp agora
          </a>
        </div>
      </div>

      {/* Hero com imagem de fundo */}
      <section className="relative min-h-screen pt-20">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Vista da propriedade rural"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-900/75" />
        </div>
        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block rounded-full bg-amber-500/20 px-5 py-2 text-base font-bold text-amber-400 ring-2 ring-amber-400/30"
          >
            Oportunidade única — Não perca
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl"
          >
            A propriedade rural que você
            <br />
            <span className="text-green-400">estava procurando</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-xl text-slate-200"
          >
            14,5 hectares produtivos com aviários em operação, água abundante e
            energia solar. Tudo pronto para você assumir e gerar resultados.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <CtaButton href={whatsappUrl}>
              Quero falar com o proprietário — WhatsApp
            </CtaButton>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center justify-center gap-2 text-base font-medium text-slate-400"
          >
            <Check className="h-5 w-5 text-green-500" />
            Responderemos o mais breve possível, estamos cuidando da propriedade ;) · Sem compromisso · Falar direto com o dono
          </motion.p>
          <motion.a
            href="#diferenciais"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 flex flex-col items-center gap-1 text-slate-400 transition-colors hover:text-white"
          >
            <span className="text-base font-medium">Ver o que torna esta propriedade especial</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </motion.a>
        </div>
      </section>

      {/* CTA Block 1 — Imagem + texto forte */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px]">
              <Image
                src={CTA_IMAGE_1}
                alt="Infraestrutura da propriedade"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center px-8 py-16 md:px-12 md:py-24">
              <span className="mb-3 text-sm font-bold uppercase tracking-wider text-green-600">
                Infraestrutura pronta
              </span>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Chegue e comece a produzir. Tudo está pronto.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Aviários reformados, trator Valmet, máquinas, gerador e energia
                solar. Não é preciso investir em estrutura — apenas assumir a
                operação e gerar receita com a produção integrada à Aurora.
              </p>
              <CtaButton href={whatsappUrl} className="mt-10 w-full max-w-md">
                Quero ver a propriedade
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* O que torna esta propriedade diferente — layout original com carrossel em cada bloco */}
      <section id="diferenciais" className="bg-slate-950 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-wider text-green-400">
              Diferenciais
            </span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              O que torna esta propriedade diferente
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Benefícios concretos que reduzem riscos e aumentam o retorno do seu investimento
            </p>
          </div>

          <div className="mt-20 space-y-24">
            {VALUE_PROPS.map(({ icon: Icon, title, text, desc, images }, i) => {
              const currentSlide = getCarouselIndex(i);
              const slide = images[currentSlide];
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className={`grid gap-8 md:grid-cols-2 md:gap-16 ${
                    i % 2 === 1 ? "[&>div:first-child]:md:order-2 [&>div:last-child]:md:order-1" : ""
                  }`}
                >
                  {/* Carrossel de imagens (cada bloco com seu próprio) */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 32 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -32 }}
                        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative aspect-[16/10] overflow-hidden rounded-2xl md:aspect-[4/3]"
                      >
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-white/10" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white">
                              <Icon className="h-6 w-6" strokeWidth={1.5} />
                            </div>
                            <p className="text-xl font-bold text-white">{title}</p>
                          </div>
                          {images.length > 1 && (
                            <div className="mt-4 flex gap-2">
                              {images.map((_, j) => (
                                <button
                                  key={j}
                                  type="button"
                                  onClick={() => setCarouselIndex(i, j)}
                                  className={`h-1.5 rounded-full transition-all ${
                                    j === currentSlide
                                      ? "w-6 bg-green-500"
                                      : "w-1.5 bg-white/50 hover:bg-white/70"
                                  }`}
                                  aria-label={`Slide ${j + 1}`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                    {images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setCarouselIndex(
                              i,
                              (currentSlide - 1 + images.length) % images.length
                            )
                          }
                          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                          aria-label="Anterior"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setCarouselIndex(
                              i,
                              (currentSlide + 1) % images.length
                            )
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                          aria-label="Próximo"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Texto ao lado — sempre visível + descrição do slide atual */}
                  <div className="flex flex-col justify-center">
                    <p className="text-2xl font-bold text-green-400">{text}</p>
                    <p className="mt-5 text-lg leading-relaxed text-slate-300">
                      {desc}
                    </p>
                    <div className="mt-6 rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
                      <p className="text-base font-semibold text-slate-300">
                        Esta imagem:
                      </p>
                      <p className="mt-2 text-base leading-relaxed text-slate-400">{slide.carouselDesc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-lg text-slate-400">
              Quer conhecer cada detalhe?
            </p>
            <CtaButton href={whatsappUrl} className="mt-4">
              Falar no WhatsApp
            </CtaButton>
          </motion.div>
        </div>
      </section>

      {/* Stats — números com modal de detalhes e imagens */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Números que fazem a diferença na sua decisão
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Clique em cada número para ver detalhes e fotos
            </p>
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STATS.map(({ value, label }, i) => {
              const Icon = STAT_ICONS[i];
              return (
                <motion.button
                  key={label}
                  type="button"
                  onClick={() => {
                    setStatsModalIndex(i);
                    setStatsModalImageIndex(0);
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group flex flex-col rounded-2xl border-2 border-slate-200 bg-slate-50/50 text-left transition-all hover:border-green-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <div className="flex flex-1 items-center gap-4 px-5 py-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-colors group-hover:bg-green-500 group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-3xl font-extrabold text-green-600 md:text-4xl">
                        {value}
                      </p>
                      <p className="text-sm font-semibold text-slate-700">{label}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 border-t border-slate-200 bg-slate-100/80 px-4 py-3 transition-colors group-hover:bg-green-50 group-hover:border-green-200">
                    <span className="text-sm font-medium text-slate-500 group-hover:text-green-600">
                      Clique para expandir
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-slate-600 transition-colors group-hover:bg-green-500 group-hover:text-white">
                      <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Modal de detalhes */}
          <AnimatePresence>
            {statsModalIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setStatsModalIndex(null)}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: "spring", damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
                >
                  <button
                    type="button"
                    onClick={() => setStatsModalIndex(null)}
                    className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-slate-700 shadow-md transition-colors hover:bg-white"
                    aria-label="Fechar"
                  >
                    <X className="h-6 w-6" />
                  </button>

                  {(() => {
                    const stat = STATS[statsModalIndex];
                    const imgs = stat.images ?? [];
                    const imgIdx = statsModalImageIndex % Math.max(1, imgs.length);
                    const currentImg = imgs[imgIdx];

                    return (
                      <>
                        {/* Imagem principal */}
                        {currentImg && (
                          <div className="relative aspect-video w-full bg-slate-200">
                            <Image
                              src={currentImg}
                              alt={stat.label}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 672px"
                            />
                            {imgs.length > 1 && (
                              <>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setStatsModalImageIndex((imgIdx - 1 + imgs.length) % imgs.length);
                                  }}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-800 shadow-md hover:bg-white"
                                  aria-label="Imagem anterior"
                                >
                                  <ChevronLeft className="h-6 w-6" />
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setStatsModalImageIndex((imgIdx + 1) % imgs.length);
                                  }}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-800 shadow-md hover:bg-white"
                                  aria-label="Próxima imagem"
                                >
                                  <ChevronRight className="h-6 w-6" />
                                </button>
                              </>
                            )}
                          </div>
                        )}

                        {/* Conteúdo */}
                        <div className="overflow-y-auto px-6 py-6">
                          <p className="text-4xl font-extrabold text-green-600">
                            {stat.value}
                          </p>
                          <p className="mt-1 text-xl font-semibold text-slate-800">
                            {stat.label}
                          </p>
                          <p className="mt-4 text-base leading-relaxed text-slate-600">
                            {stat.detail}
                          </p>
                          <CtaButton href={whatsappUrl} className="mt-6">
                            Quero saber mais
                          </CtaButton>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-base text-slate-600">
              Cada número reforça o potencial desta propriedade.
            </p>
            <CtaButton href={whatsappUrl} className="mt-4">
              Quero saber mais
            </CtaButton>
          </motion.div>
        </div>
      </section>

      {/* Galeria de imagens */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-wider text-green-600">
              Fotos
            </span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Conheça a propriedade em imagens
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Vista aérea, aviários, açudes, residência e mais
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.button
                key={img.label}
                type="button"
                onClick={() => setLightboxIndex(i)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="absolute bottom-0 left-0 right-0 p-4 text-left text-base font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {img.label}
                </p>
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {lightboxIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(null)}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                  aria-label="Fechar"
                >
                  <X className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                  aria-label="Próxima"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-h-[85vh] w-full max-w-5xl"
                >
                  <Image
                    src={GALLERY_IMAGES[lightboxIndex].src}
                    alt={GALLERY_IMAGES[lightboxIndex].label}
                    width={1200}
                    height={800}
                    className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
                  />
                  <p className="mt-4 text-center text-lg font-medium text-white">
                    {GALLERY_IMAGES[lightboxIndex].label}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Vista aérea com labels e divisas */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-wider text-green-600">
              Planta
            </span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Vista aérea com áreas e recursos
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Identifique cada área, recurso e as delimitações da propriedade
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mt-16 overflow-hidden rounded-2xl border-2 border-slate-200 shadow-2xl"
          >
            <div className="relative aspect-[16/10] w-full bg-slate-100 md:aspect-video">
              <Image
                src={AERIAL_IMAGE}
                alt="Vista aérea da propriedade com áreas identificadas"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              {/* Limite da propriedade (divisas) */}
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <polygon
                  points={BOUNDARY_POINTS}
                  fill="rgba(34, 197, 94, 0.08)"
                  stroke="rgba(34, 197, 94, 0.9)"
                  strokeWidth="0.8"
                  strokeDasharray="4 3"
                  className="transition-colors"
                />
                <text
                  x="50"
                  y="4"
                  textAnchor="middle"
                  style={{ fontSize: "10px" }}
                  className="fill-green-700 font-bold"
                >
                  LIMITE DA PROPRIEDADE
                </text>
              </svg>
              {/* Labels com pin e card — posições em %; ajuste conforme foto real */}
              {AERIAL_LABELS.map((label) => (
                <div
                  key={label.id}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${label.x}%`, top: `${label.y}%` }}
                >
                  <div className="h-4 w-4 rounded-full border-2 border-white bg-green-500 shadow-lg ring-2 ring-green-500/50" />
                  <div
                    className={`absolute top-full z-10 mt-2 min-w-[130px] rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-xl ${
                      label.side === "left" ? "right-1/2 mr-4" : "left-1/2 ml-4"
                    }`}
                  >
                    <p className="text-base font-bold text-slate-900">{label.text}</p>
                    <p className="text-base text-slate-600">{label.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 border-t border-slate-200 bg-slate-50 px-6 py-4 text-base text-slate-600">
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-500" />
                Áreas e recursos
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-0.5 w-8 border-t-2 border-dashed border-green-600" />
                Limite da propriedade (divisas)
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mapa de localização */}
      <section id="mapa" className="bg-slate-100 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-wider text-green-600">
              Onde fica
            </span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Localização
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Linha Formosa, Coronel Martins — 3 km do centro · Localização com vantagens frente a eventos climáticos
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 overflow-hidden rounded-2xl border-2 border-slate-200 shadow-xl"
          >
            <iframe
              src="https://maps.google.com/maps?q=Coronel+Martins+Santa+Catarina&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização - Coronel Martins SC"
              className="h-[400px] w-full md:h-[500px]"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Block 2 — Imagem + urgência */}
      <section className="overflow-hidden bg-slate-950">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2">
            <div className="order-2 flex flex-col justify-center px-8 py-16 md:order-1 md:px-12 md:py-24">
              <span className="mb-3 text-sm font-bold uppercase tracking-wider text-amber-400">
                Oportunidade limitada
              </span>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Propriedades como esta não aparecem todo dia
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-400">
                Com aviários em produção, água garantida e infraestrutura
                completa, o interesse costuma ser alto. Entre em contato agora,
                agende sua visita e tire suas dúvidas diretamente com o
                proprietário.
              </p>
              <CtaButton href={whatsappUrl} variant="secondary" className="mt-10 w-full max-w-md">
                Agendar minha visita
              </CtaButton>
            </div>
            <div className="relative order-1 aspect-[4/3] md:order-2 md:aspect-auto md:min-h-[500px]">
              <Image
                src={CTA_IMAGE_2}
                alt="Área rural da propriedade"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-slate-900/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Por que esta propriedade — copy mais forte */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl font-bold text-slate-900 md:text-3xl">
            Por que investir nesta propriedade
          </h2>
          <p className="mt-4 text-center text-slate-600">
            Motivos objetivos que reduzem o risco e aumentam a atratividade do negócio
          </p>
          <ul className="mt-16 space-y-6">
            {[
              "Produção avícola integrada à Aurora via Cooperalfa — receita previsível e mercado garantido, sem preocupação com comercialização.",
              "Piscicultura nos açudes — os dois açudes estão em produção de peixes e representam fonte de renda adicional. O Açude 1 possui aerador, aumentando a produtividade. A ração pode ser produzida pelo desidratador da propriedade, reduzindo custos e criando sinergia entre as atividades.",
              <>Abundância de água — 3 fontes naturais ativas mesmo em estiagem, 2 açudes em produção, reservatório para gado e cisterna de <strong>1,6 milhões de litros</strong>. Segurança hídrica total.</>,
              "Uso do solo em conformidade — reserva legal regularizada, cerca de 3 ha de eucaliptos (silvicultura) e áreas preparadas para criação de gado, com reservatório dedicado. Diversificação e aproveitamento integral.",
              "Infraestrutura completa incluída — trator Valmet, picador, desidratador (produz ração para a piscicultura), espalhador de cal e demais máquinas. Chegue e opere.",
              "Autossuficiência energética — usina solar com 57 módulos (4.600 a 4.900 kWh/mês) e gerador Bambozzi 80 kVA. Reduza ou elimine a conta de luz.",
              "Residência pronta para morar — casa de 120 m², 3 quartos, 2 banheiros, varandas e pomar. Ideal para quem quer viver na propriedade.",
              "Localização privilegiada — Linha Formosa, Coronel Martins, a apenas 3 km do centro. Fácil acesso e proximidade com comércio e serviços. Posição favorável em relação a eventos climáticos, reduzindo riscos de geadas e extremos para a produção.",
            ].map((item, i) => (
              <motion.li
                key={`investir-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <span className="text-slate-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Location + CTA forte */}
      <section className="relative overflow-hidden bg-slate-900 py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-slate-900/90" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <MapPin className="mx-auto h-14 w-14 text-green-400" strokeWidth={1.5} />
          <h2 className="mt-8 text-3xl font-bold text-white md:text-4xl">
            Linha Formosa, Coronel Martins — Santa Catarina
          </h2>
          <p className="mt-4 text-xl text-slate-300">
            A apenas 3 km do centro · Acesso fácil · Região de produção consolidada
          </p>
          <p className="mt-3 text-base text-slate-400">
            Localização com vantagens climáticas — posição que atenua o impacto de eventos extremos na produção.
          </p>
          <p className="mt-8 text-lg font-medium text-white">
            Agende sua visita e conheça a propriedade de perto
          </p>
          <CtaButton href={whatsappUrl} className="mt-10">
            Agendar visita agora
          </CtaButton>
        </div>
      </section>

      {/* Final CTA — ultra forte */}
      <section className="border-t border-slate-800 bg-slate-950 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Pronto para o próximo passo?
          </h2>
          <p className="mt-6 text-xl text-slate-400">
            Fale diretamente com o proprietário. Sem intermediários, sem burocracia.
            Responderemos o mais breve possível, estamos cuidando da propriedade ;)
          </p>
          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full max-w-sm items-center justify-center gap-3 rounded-2xl bg-green-500 px-10 py-5 text-xl font-bold text-white shadow-xl shadow-green-500/30 transition-all hover:scale-105 hover:bg-green-600 sm:w-auto"
            >
              <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={2} />
              Falar no WhatsApp
            </a>
            <a
              href={`tel:+${SITE_CONFIG.whatsapp}`}
              className="flex w-full max-w-sm items-center justify-center gap-3 rounded-2xl border-2 border-slate-600 px-10 py-5 text-xl font-bold text-white transition-colors hover:border-slate-500 hover:bg-slate-800/50 sm:w-auto"
            >
              <Phone className="h-7 w-7" strokeWidth={2} />
              Ligar agora
            </a>
          </div>
          <p className="mt-8 text-base text-slate-500">
            Perguntas sobre área, documentação, preço ou visita? Fale conosco.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <Link href="/" className="text-base text-slate-500 hover:text-slate-400">
            ← Site completo com mais detalhes
          </Link>
          <p className="text-base text-slate-600">
            {SITE_CONFIG.domain} · Coronel Martins, SC
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp — maior e mais visível */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-500/40 transition-all hover:scale-110 hover:bg-green-600 hover:shadow-2xl md:h-20 md:w-20"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-9 w-9 md:h-10 md:w-10" strokeWidth={2} fill="currentColor" />
      </a>
    </>
  );
}
