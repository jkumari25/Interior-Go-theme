"use client";
import React from "react";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { desVariants, titleVariants } from "@/utils/animation";

const BlogSection = () => {
  return (
    <div className="py-8 lg:py-28">
      <div className="container grid pb-8 lg:grid-cols-1">
        <div className="text-left">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="py-4 text-4xl font-medium lg:text-6xl lg:py-0"
          >
            Latest Blogs
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="pb-6 text-xl font-bold tracking-wider mt-5"
          >
            Discover the Latest in Interior Design
          </motion.h2>
        </div>
      </div>
      {/* Swiper Section */}
      <Swiper
        sliderPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-[90%]"
      >
        <SwiperSlide>
          <Image
            src="/assets/swiper1.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
          <p>
            Biophilic Design: Connecting Nature and Interiors for Well-being
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/swiper2.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
          <p>
            Multifunctional Furniture: Space-Saving Solutions for Compact Homes
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/swiper3.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
          <p>Artistic Expressions: Incorporating Art into Interior Design</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/swiper4.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
          <p>Open Concept Living: Embracing Airy Interior Layouts</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/swiper5.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
          <p>
            Global Design Inspirations: Exploring Cultural Influences in
            Interiors
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/swiper6.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
          <p>Emerging Trends: Exploring the Latest in Interior Design</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/swiper7.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
          <p>
            Biophilic Design: Connecting Nature and Interiors for Well-being
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogSection;
