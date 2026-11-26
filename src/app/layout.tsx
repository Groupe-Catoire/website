import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.groupe-catoire.fr"),
  title: "Groupe Catoire",
  description:
    "Holding entrepreneuriale : création d'entreprises, reprise à la barre et développement.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
