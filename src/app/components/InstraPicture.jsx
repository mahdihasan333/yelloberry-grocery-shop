'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import image1 from '../assets/images/card/image1.png'
import image2 from '../assets/images/card/image2.png'
import image3 from '../assets/images/card/image3.png'
import image4 from '../assets/images/card/image4.png'
import image5 from '../assets/images/card/image5.png'
import image6 from '../assets/images/card/image6.png'

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

export default function InstraPicture() {
  return (
    <div className="flex justify-center items-center py-10">
      <Swiper
        slidesPerView={2.5}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full max-w-5xl"
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
