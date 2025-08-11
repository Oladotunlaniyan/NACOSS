"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Blogbg from "../../assets/blog.jpg";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="relative font-Inter overflow-hidden mx-10 rounded-3xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={Blogbg}
          alt="Healthcare professional with elderly patient"
          className="object-cover object-center w-full h-full"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20 min-h-[60vh] flex flex-col justify-end items-center text-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-gray-200 leading-tight max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto mb-6 sm:mb-8"
        >
          We have a wellness blog
        </motion.h1>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex gap-3 sm:gap-4 justify-center items-center text-white w-full max-w-2xl py-3"
        >
          <Link 
            href="./blog"
            className="font-bold py-4 px-6 flex gap-2 justify-center rounded-full w-full sm:w-auto sm:min-w-[280px] bg-[#0202024D] border-[#23375F] hover:bg-white/50 cursor-pointer transition-colors duration-200"
          >
            Read our blog
            <SquareArrowOutUpRight className="p-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
