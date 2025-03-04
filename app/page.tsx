import { HeroBackground } from "@/components/hero/HeroBackground";
import { ImagesSlider } from "@/components/images-slider/ImagesSlider";

export default function Home() {
  return (
      <>
      <div className="">
      <HeroBackground/>
      </div>
      <main className="flex flex-col items-center">
          
          <ImagesSlider />
      </main>
      </>
      
    
  );
}
