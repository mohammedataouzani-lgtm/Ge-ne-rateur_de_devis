import type { Metadata } from "next";
import Script from "next/script";
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P6S4NPQW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P6S4NPQW');`,
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
