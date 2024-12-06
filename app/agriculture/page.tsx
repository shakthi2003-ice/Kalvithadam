"use client";
import React from "react";
import HeroNavbar from "../_components/heronavbar";
import ExamDetails from "../_components/examdetails";
import ExamDetailCard from "../_components/examDetailCard";
import { Footer } from "../_components/footer";

export default function Agriculture() {
  return (
    <div>
      <HeroNavbar />
      <ExamDetails />
      <ExamDetailCard />
      <ExamDetailCard />
      <ExamDetailCard />
      <Footer />
    </div>
  );
}
