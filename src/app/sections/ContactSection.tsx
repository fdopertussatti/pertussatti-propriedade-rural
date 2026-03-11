"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/app/lib/constants";
import { Button } from "@/app/components/Button";

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: SITE_CONFIG.phone,
    href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
  },
  {
    icon: Phone,
    title: "Telefone",
    desc: SITE_CONFIG.phone,
    href: `tel:+${SITE_CONFIG.whatsapp}`,
  },
  {
    icon: Mail,
    title: "Email",
    desc: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
];

const formFields = [
  { name: "nome", type: "text", placeholder: "Nome", max: 100 },
  { name: "telefone", type: "tel", placeholder: "Telefone", max: 20 },
  { name: "email", type: "email", placeholder: "Email", max: 255 },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${form.nome}. Gostaria de mais informações sobre a propriedade Pertussatti.\n\nTelefone: ${form.telefone}\nEmail: ${form.email}\n\n${form.mensagem}`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <section id="contato" className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
            Fale conosco
          </span>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Entre em Contato
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Solicite mais informações ou agende uma visita à propriedade.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          <div className="space-y-6">
            {contactCards.map(({ icon: Icon, ...item }) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2"
          >
            {formFields.map((field) => (
              <input
                key={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                maxLength={field.max}
                value={form[field.name as keyof typeof form]}
                onChange={(e) =>
                  setForm({ ...form, [field.name]: e.target.value })
                }
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            ))}
            <textarea
              name="mensagem"
              rows={4}
              placeholder="Mensagem"
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              required
              className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button type="submit" size="lg">
              Solicitar Informações
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
