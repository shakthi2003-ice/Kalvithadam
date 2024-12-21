"use client";

import React from "react";
import contents from "../career.json";

interface ExamDetailCardProps {
  Color: string; // You can pass a default or dynamic color if needed
}

type CareerDetails = {
  id: number;
  mainHeading: string;
  subHeading: string;
  content: Array<string>;
};

export default function ExamDetailCard({ Color }: ExamDetailCardProps) {
  return (
    <div className="flex flex-col justify-center items-center p-2">
      <div className="pl-[15vw] w-screen">
        {contents.map((item: CareerDetails) => (
          <div
            key={item.id}
            className="w-[75vw] p-4 rounded-2xl mb-4"
            style={{ backgroundColor: Color }}
          >
            <div className="text-xl font-Roboto font-bold">
              {item.mainHeading}
            </div>
            <div className="text-lg font-Roboto pl-5 pt-2">
              {item.subHeading}
            </div>
            <div className="text-lg font-Roboto pl-5 pt-2">
              <ul className="list-disc pl-5">
                {item.content.map((e: string, index: number) => (
                  <li key={index}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
