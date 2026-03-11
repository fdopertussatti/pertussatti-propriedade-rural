import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Propriedade Rural à Venda | Coronel Martins SC | pertussatti.com",
  description:
    "Propriedade rural produtiva à venda em Coronel Martins SC com aviários em produção, açudes, energia solar, área agrícola e infraestrutura completa.",
  keywords: [
    "propriedade rural",
    "fazenda à venda",
    "Coronel Martins",
    "Santa Catarina",
    "aviário",
    "piscicultura",
    "energia solar",
  ],
  authors: [{ name: "Pertussatti" }],
  openGraph: {
    title: "Propriedade Rural Produtiva à Venda | Coronel Martins SC",
    description:
      "Propriedade rural produtiva à venda em Coronel Martins SC com aviários em produção, açudes, energia solar, área agrícola e infraestrutura completa.",
    url: "https://pertussatti.com",
    siteName: "Pertussatti - Propriedade Rural",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Propriedade Rural Produtiva à Venda | Coronel Martins SC",
    description:
      "Propriedade rural produtiva à venda em Coronel Martins SC com aviários em produção, açudes, energia solar e infraestrutura completa.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
