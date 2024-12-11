"use client";
import React from "react";
import HeroNavbar from "../_components/heronavbar";
import ExamDetails from "../_components/examdetails";
import ExamDetailCard from "../_components/examDetailCard";
import Carousel from "../_components/Carousel";
import Footer from "../_components/footer";

export default function Agriculture() {
  return (
    <div className="bg-white">
      <HeroNavbar />
      <ExamDetails />
      <ExamDetailCard Color="#FFB1B1" />
      <ExamDetailCard Color="#DAFBC2" />
      <ExamDetailCard Color="#68A9FF" />
      <Carousel />
      <Footer />
    </div>
  );
}
