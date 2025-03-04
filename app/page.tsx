import { HeroBackground } from "@/components/home/hero";
import { ImageSlider } from "@/components/home/image-slider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroBackground />
      <ImageSlider />
    </main>
  );
}
