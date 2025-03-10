"use client";
import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export const ImageSlider = () => {
  return (
    <section className="my-5">
      <div
        className={
          "w-full min-w-[100px] max-w-[300px] md:max-w-[400px] mx-auto"
        }
      >
        <Swiper
          pagination={true}
          modules={[Pagination]}
          autoplay={true}
          loop={true}
          className="mySwiper"
          parallax={true}
        >
          <SwiperSlide>
            <Image src="/image1.jpg" alt="509 años" width={400} height={150} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/image2.jpg" alt="509 años" width={400} height={150} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/image3.jpg" alt="509 años" width={400} height={150} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
