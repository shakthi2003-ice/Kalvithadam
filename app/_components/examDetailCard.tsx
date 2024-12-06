"use client";
import React from "react";

export default function ExamDetailCard() {
  return (
    <div className="flex flex-col justify-center items-center p-2">
      <div className="pl-[15vw] w-screen">
        <div className="bg-redColor w-[75vw] p-4 rounded-2xl">
          <div className="text-xl font-Roboto font-bold">Eligibility</div>
          <div className="text-lg font-Roboto pl-5 pt-2">
            Candidates must have secured a minimum percentage in 10+2 or
            equivalent from a recognised board as given below.
          </div>
          <div className="text-lg font-Roboto pl-5 pt-2">
            <ul className="list-disc pl-5">
              <li>
                Open Competition (OC): 55% aggregate in all the four required
                subjects
              </li>
              <li>BC, BCM: 50% aggregate in all the four required subjects</li>
              <li>
                MBC & DNC: 45% aggregate in all the four required subjects
              </li>
              <li>
                SC, SCA, ST: A pass in the qualifying examination in all the
                four required subjects
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
