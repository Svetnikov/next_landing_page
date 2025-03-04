import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./swiper.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || ""),
  title: {
    default: "Home",
    template: "%s | CABLE BRASIL, C.A.",
  },
  description:
    "Servicio por televisión por Cable en la Ciudad de Cumaná. By Antonio De Santis",
  keywords: [
    "TV",
    "Televisión",
    "TV por Cable",
    "Televisión por Cable",
    "Cumana",
    "Venezuela",
    "Cable Brasil",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
