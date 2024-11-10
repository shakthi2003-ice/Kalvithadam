"use client";

import React from "react";
import Cards from "./cards";

export default function Career() {
  return (
    <div className="bg-careerBg pb-5">
      <div className=" pt-16 pl-18px">
        <div>
          <div className="text-3xl font-Poppins font-bold text-black mb-0">
            Find Your Career
          </div>
          <div className="leading-none -mt-3">
            <span className="text-3xl font-Poppins font-bold text-black">
              Start Your
            </span>
            <span className="text-4xl font-Rochester text-black"> journey</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-center gap-24">
        <Cards
          Profile="Engineering"
          ExamName="JEE"
          Color="#F5D365"
          img="engineering.png"
        />
        <Cards
          Profile="Doctor"
          ExamName="NEET"
          Color="#EF523C"
          img="doctor.png"
        />
        <Cards Profile="Law" ExamName="CLAT" Color="#FEAFE1" img="lawyer.png" />
      </div>
      <div className="mb-2 flex justify-center mt-8 ">
        <button className="flex items-center justify-center bg-mainBlue p-4 rounded-full transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <div className="text-md md:text-xl font-Poppins text-white font-semibold">
            See More
          </div>
        </button>
      </div>
    </div>
  );
}
