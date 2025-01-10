"use client";

import Card from "./card";

export default function Faqs() {
  // State to keep track of FAQ open/closed status

  return (
    <div className="mt-4 pt-6 bg-white">
      <div className="flex flex-col justify-center items-center pb-6">
        <div className="text-5xl font-extrabold font-Roboto">FAQs</div>
        <Card
          title="What is Kalvithadam"
          answer="Career guidance provides personalized advice, helping individuals understand their strengths and explore educational and professional pathways effectively."
        />
        <Card
          title="Why do we need Career Guidance"
          answer="Career guidance provides personalized advice, helping individuals understand their strengths and explore educational and professional pathways effectively."
        />
        <Card
          title="How can we get in touch with you"
          answer="Career guidance provides personalized advice, helping individuals understand their strengths and explore educational and professional pathways effectively."
        />
        <Card
          title="How can we benefit from it"
          answer="Career guidance provides personalized advice, helping individuals understand their strengths and explore educational and professional pathways effectively."
        />
        <Card
          title="What's new about this?"
          answer="Career guidance provides personalized advice, helping individuals understand their strengths and explore educational and professional pathways effectively."
        />
      </div>
    </div>
  );
}
