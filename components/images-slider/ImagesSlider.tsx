'use client'
import React, { useEffect, useRef } from 'react'
import style from './imagesSlider.module.css'
import Image from 'next/image'
export const ImagesSlider = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // Este código se ejecutará solo en el cliente
        const slider = sliderRef.current;
        if (!slider) return;
    
        let currentIndex = 0;
        const images = slider.querySelectorAll('img');
        const totalImages = images.length;
        const intervalTime = 10000; // 10 segundos
    
        const interval = setInterval(() => {
          currentIndex = (currentIndex + 1) % totalImages;
          console.log(currentIndex)
          const nextImage = images[currentIndex];
          slider.scrollTo({
            left: nextImage.offsetLeft,
            behavior: 'smooth',
          });
        }, intervalTime);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <section className="p-8">
	<div className= {style['slider-wrapper']} >
		{/* <div className="slider flex aspect-video overflow-x-auto snap-x snap-mandatory rounded-sm scroll"> */}
		<div ref={sliderRef} className={style.slider}>
            <Image id="slide-1" width={800} height={800} alt='509 años' src={'/image1.jpg'}></Image>
            <Image id="slide-2" width={800} height={800} alt='509 años' src={'/image2.jpg'}></Image>
            <Image id="slide-3" width={800} height={800} alt='509 años' src={'/image3.jpg'}></Image>
		</div>
		<div className={`${style['slider-nav']} flex gap-x-4 absolute bottom-5 left-1/2 z-10$`}>
			<a href="#slide-1"></a>
			<a href="#slide-2"></a>
			<a href="#slide-3"></a>
		</div>
	</div>
</section>
  )
}
