'use client';

import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <section className="relative flex items-center justify-start h-screen bg-[#eaeaea]">
            <div className='w-11/12 flex justify-start mx-auto text-[#3d4750]'>
                <div className="space-y-6">
                    <p className="text-sm text-gray-500 uppercase">Flat 30% off</p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl leading-normal md:text-6xl font-bold "
                    >
                        Explore <span className="text-[#eda957]">Healthy</span> <br /> & Fresh Fruits
                    </motion.h2>
                    <button className="mt-6 px-6 py-3 text-lg font-semibold  border border-gray-800 rounded-xl hover:bg-gray-800 hover:text-white transition">
                        Shop Now
                    </button>
                </div>





                {/* Bottom Indicator */}
                <div className="absolute bottom-6 flex space-x-2">
                    <span className="w-4 h-2 bg-orange-500 rounded"></span>
                    <span className="w-4 h-2 bg-gray-400 rounded"></span>
                    <span className="w-4 h-2 bg-gray-400 rounded"></span>
                </div>
            </div>
        </section>
    );
};

export default Banner;
