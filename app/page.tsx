import { HeroBackground } from "@/components/hero/HeroBackground";
import { ImagesSlider } from "@/components/images-slider/ImagesSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CABLE BRASIL, C.A.",
  description: "Servicio por televisión por Cable en la Ciudad de Cumaná.",
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

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroBackground />
      <ImagesSlider />
    </main>
  );
}
