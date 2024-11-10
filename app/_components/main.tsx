"use client";
import Image from "next/image";
import React from "react";

export default function Main() {
  return (
    <div className="my-16 flex flex-col-reverse justify-center items-center md:flex-row md:justify-around md:items-start md:mb-40">
      <div className="my-4 flex flex-row md:my-0 md:block">
        <div>
          <div className="text-2xl md:text-5xl font-Poppins font-extrabold text-headingBrown">
            Empowering Your
          </div>
          <p>
            <span className="relative inline-block my-2">
              <span className="absolute inset-0 bg-red-500 rounded-xl"></span>
              <span className="relative text-white px-2 text-2xl md:text-5xl font-Poppins font-extrabold">
                Career
              </span>
            </span>
            <span className="text-2xl md:text-5xl mx-2 font-Poppins font-extrabold text-headingBrown">
              Journey
            </span>
          </p>
          <div className="text-2xl md:text-5xl font-Poppins font-extrabold text-headingBrown">
            Forward
          </div>
        </div>
        <button className="bg-mainBlue md:my-6 pl-2 pr-10 md:py-2 md:pl-4 rounded-full md:flex md:flex-end md:flex-col transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <div className="text-md md:text-xl font-Poppins text-white font-semibold">
            Find Your
          </div>
          <div className="text-md md:text-xl font-Poppins text-white font-semibold">
            Career
          </div>
        </button>
      </div>
      <Image src="/image.png" alt="image" height={500} width={500} />
    </div>
  );
}
