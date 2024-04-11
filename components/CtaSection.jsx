"use client";
import React from "react";
import { motion } from "framer-motion";
import { desVariants, titleVariants } from "@/utils/animation";
import { Button } from "./ui/button";
import { TbArrowUpRight } from "react-icons/tb";

const CtaSection = () => {
  return (
    <div className="pt-12 pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 border-b border-gray-200 pb-8">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="mt-2 text-lg leading-8 text-muted-foreground border-b pb-4"
        >
          Learn how to grow your business with our expert advice.
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-[url('/assets/cta-bg.jpeg')] bg-center bg-cover opacity-50"></div>
        <div className="relative z-10 mx-auto py-32 flex flex-col items-center tracking-wider">
          <p className="container text-3xl font-semibold text-black tracking-widest text-center ">
            Have a project in mind?
          </p>
          <p className="container text-xl font-semibold text-black tracking-widest text-center pb-8">
            Do not hesitate to say Hello
          </p>
          <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            Get a Free Code <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
