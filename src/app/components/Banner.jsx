'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <section className="relative flex items-center justify-center h-[95vh] bg-[#eaeaea]">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                loop
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <div className="w-11/12 mx-auto flex items-center justify-start h-full text-[#3d4750]">
                        <div className="space-y-6">
                            <p className="text-sm text-gray-500 uppercase">Flat 30% off</p>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl leading-normal md:text-6xl font-bold"
                            >
                                Explore <span className="text-[#eda957]">Healthy</span> <br /> & Fresh Fruits
                            </motion.h2>
                            <button className="mt-6 px-6 py-3 text-lg font-semibold border border-gray-800 rounded-xl hover:bg-gray-800 hover:text-white transition">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-11/12 mx-auto flex items-center justify-start h-full text-[#3d4750]">
                        <div className="space-y-6">
                            <p className="text-sm text-gray-500 uppercase">Limited Offer</p>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl leading-normal md:text-6xl font-bold"
                            >
                                Grab <span className="text-[#eda957]">Fresh</span> <br /> Organic Products
                            </motion.h2>
                            <button className="mt-6 px-6 py-3 text-lg font-semibold border border-gray-800 rounded-xl hover:bg-gray-800 hover:text-white transition">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;
