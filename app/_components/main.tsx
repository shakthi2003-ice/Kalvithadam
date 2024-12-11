"use client";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

export default function Main() {
  return (
    <div className="my-16 flex flex-col-reverse justify-center items-center md:flex-row md:justify-around md:items-start md:mb-40">
      <div className="my-4 flex flex-row md:flex-col md:my-0">
        <div>
          <div className="text-xl md:text-5xl font-Poppins font-extrabold text-headingBrown">
            Empowering Your
          </div>
          <p>
            <span className="relative inline-block my-2">
              <span className="absolute inset-0 bg-red-500 rounded-xl"></span>
              <span className="relative text-white px-2 text-xl md:text-5xl font-Poppins font-extrabold">
                Career
              </span>
            </span>
            <span className="text-xl md:text-5xl mx-2 font-Poppins font-extrabold text-headingBrown">
              Journey
            </span>
          </p>
          <div className="text-xl md:text-5xl font-Poppins font-extrabold text-headingBrown">
            Forward
          </div>
        </div>
        <div className="bg-mainBlue md:p-4 md:my-5 rounded-full transform transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer md:w-[200px]">
          <Link to="careerSection" smooth={true} duration={500}>
            <div className="text-md md:text-xl font-Poppins text-white font-semibold">
              Find Your Career
            </div>
          </Link>
        </div>
      </div>
      <Image src="/image.png" alt="image" height={500} width={500} />
    </div>
  );
}
