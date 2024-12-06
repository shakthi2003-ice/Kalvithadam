"use client";
import Image from "next/image";
import React from "react";

export default function HeroNavbar() {
  return (
    //!!Have to complete the responsiveness
    <div className="relative h-[200px] md:h-[500px]">
      {/* Large screen image */}
      <div className="m-0 p-0 hidden lg:block">
        <Image
          alt="bluecurve-large"
          src="/bluecurve-large.png"
          height={368}
          width={1400}
          className="w-full h-auto"
        />
      </div>

      {/* Small screen image */}
      <div className="lg:hidden">
        <Image
          alt="bluecurve-small"
          src="/bluecurve-small.png"
          height={368}
          width={800}
          className="w-full h-auto"
        />
      </div>

      {/* Navbar */}
      <nav className="bg-mainBlue text-white rounded-full flex flex-row items-center my-3 px-6 py-3 w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto md:px-4 md:py-2 absolute top-[10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex gap-5 sm:gap-12 md:gap-20">
          <span className="text-xs md:text-sm font-semibold">IGNITTE</span>
          <a href="#home" className="hover:text-gray-300 text-xs md:text-sm">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300 text-xs md:text-sm">
            About Us
          </a>
          <a href="#contact" className="hover:text-gray-300 text-xs md:text-sm">
            Contact Us
          </a>
        </div>
      </nav>

      {/* Responsive text */}
      <div className="flex flex-col justify-center items-center absolute top-[80px] md:top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="text-xs sm:text-xs md:text-[24px] font-Poppins font-normal text-white">
          Explore the Flourishing World of
        </div>
        <div className="text-xl sm:text-2xl md:p-2 md:text-[32px] font-Poppins font-extrabold text-orangeColor">
          Agriculture
        </div>
      </div>
      <div className="absolute top-[100px] md:top-[140px] left-1/2 transform -translate-x-1/2 z-10">
        <Image src="/image.png" alt="image" height={500} width={500} />
      </div>
      <div className="absolute top-[180px] md:top-[400px] left-1/2 transform -translate-x-1/2 z-10">
        <div className="mb-2 flex justify-center mt-8 ">
          <button className="flex items-center justify-center bg-orangeColor p-3 rounded-full transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            <div className="text-md md:text-xl font-Poppins text-white font-semibold">
              Learn More
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
