import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";
import "../styles/theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Générateur de Devis Gratuit pour Auto-Entrepreneurs | France 2025",
  description: "Créez des devis professionnels et conformes en quelques clics. Outil gratuit pour indépendants et PME. Export PDF immédiat, pas d'inscription requise.",
  keywords: ["devis", "facture", "générateur de devis", "auto-entrepreneur", "freelance", "artisan", "gratuit", "pdf"],
  authors: [{ name: "DevisFacile" }],
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
