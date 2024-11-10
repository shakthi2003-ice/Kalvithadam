"use client";

import Image from "next/image";
import React from "react";

interface CardsProps {
  Profile: string;
  ExamName: string;
  Color: string;
  img: string;
}
export default function Cards({ Profile, ExamName, Color, img }: CardsProps) {
  return (
    <div
      className="mt-16 mb-2 w-64 h-[330px] flex flex-col justify-center cursor-pointer items-center rounded-3xl transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
      style={{ backgroundColor: Color }}
    >
      <Image src={`/${img}`} alt="eng" height={100} width={100} />
      <div className="text-4xl mt-6 font-Poppins font-extrabold text-black mb-0">
        {Profile}
      </div>
      <div className="mt-3 h-0.5 bg-black" style={{ width: "201px" }}></div>
      <div className="mt-6 flex flex-col justify-center items-center">
        <div className="text-xl font-Roboto font-black">
          About {ExamName} Exam
        </div>
        <div className="text-xl font-Roboto font-black">and Many More</div>
      </div>
    </div>
  );
}
