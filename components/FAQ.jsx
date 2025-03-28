"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import faq from "@/images/faq.png";

const questions = [
  {
    question: "What types of events do you specialize in?",
    answer:
      "I focus on organizing B2B conferences, corporate gatherings, networking events, and industry summits.",
  },
  {
    question: "What industries have you worked with?",
    answer:
      "I’ve planned events for a range of industries, including tech, finance, pharmaceuticals, and healthcare.",
  },
  {
    question: "What’s the best way to get started?",
    answer:
      "The first step is a consultation where we can discuss your vision and needs. From there, I’ll create a tailored plan for your event.",
  },
  {
    question: "How involved will I need to be during the planning process?",
    answer:
      "It’s up to you! I’ll handle as much (or as little) as you’d like, keeping you informed every step of the way.",
  },
  {
    question: "How far in advance should I book your services?",
    answer:
      "It’s best to get started as early as possible—typically 4–6 months for large conferences.",
  },
  {
    question: "Do you work with a specific budget range?",
    answer:
      "I can work with budgets of all sizes and will help you make the most of your resources.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="px-4 xl:px-0 xl:max-w-[1232px] mx-auto py-12 lg:py-20 flex flex-col lg:flex-row justify-between gap-8 lg:gap-[100px]"
    >
      <div className="w-full lg:w-[600px] lg:flex-1">
        <h2 className="text-4xl lg:text-5xl font-playfairDisplay leading-tight text-dun">
          FAQ
        </h2>
        <div className="flex flex-col mt-6 lg:mt-10">
          {questions.map((question, index) => (
            <div
              key={index}
              className="flex flex-col border-t border-dun py-4 lg:py-6 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-sm lg:text-base font-poppins font-semibold leading-tight text-[#604B3E]">
                  {question.question}
                </h3>
                <ChevronDown
                  className={`min-w-6 size-6 lg:size-8 stroke-2 text-[#604B3E] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-3 lg:mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm lg:text-base font-poppins font-light text-foreground">
                    {question.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block relative w-full max-w-[500px] aspect-square lg:size-[500px] bg-foreground rounded-tl-[50%] after:absolute after:inset-0 after:border after:border-[#D6B981] after:rounded-tl-[50%] after:scale-[1.05]">
        <Image
          src={faq}
          alt="Organization of business conferences in Prague"
          className="w-full h-full rounded-tl-[50%] object-cover"
        />
      </div>
    </section>
  );
}
