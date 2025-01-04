"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import faq from '@/images/faq.png'

const questions = [
    {
        question: "Lorem ipsum dolor sit amet?",
        answer: "Lorem ipsum dolor sit amet consectetur. Pellentesque magna arcu vel vel magna. Urna mauris urna nibh integer morbi enim vitae tellus. Porttitor sociis sit hendrerit orci sit odio. Ipsum auctor fames porttitor mattis accumsan tempor nibh pharetra nullam."
    },
    {
        question: "Lorem ipsum dolor sit amet?",
        answer: "Lorem ipsum dolor sit amet consectetur. Pellentesque magna arcu vel vel magna. Urna mauris urna nibh integer morbi enim vitae tellus. Porttitor sociis sit hendrerit orci sit odio. Ipsum auctor fames porttitor mattis accumsan tempor nibh pharetra nullam."
    },
    {
        question: "Lorem ipsum dolor sit amet?",
        answer: "Lorem ipsum dolor sit amet consectetur. Pellentesque magna arcu vel vel magna. Urna mauris urna nibh integer morbi enim vitae tellus. Porttitor sociis sit hendrerit orci sit odio. Ipsum auctor fames porttitor mattis accumsan tempor nibh pharetra nullam."
    },
    {
        question: "Lorem ipsum dolor sit amet?",
        answer: "Lorem ipsum dolor sit amet consectetur. Pellentesque magna arcu vel vel magna. Urna mauris urna nibh integer morbi enim vitae tellus. Porttitor sociis sit hendrerit orci sit odio. Ipsum auctor fames porttitor mattis accumsan tempor nibh pharetra nullam."
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section id="faq" className="px-4 xl:px-0 xl:max-w-[1232px] mx-auto py-12 lg:py-20 flex flex-col lg:flex-row justify-between gap-8 lg:gap-[100px]">
            <div className="w-full lg:w-[600px] lg:flex-1">
                <h2 className="text-4xl lg:text-5xl font-playfairDisplay leading-tight text-dun">FAQ</h2>
                <div className="flex flex-col mt-6 lg:mt-10">
                    {questions.map((question, index) => (
                        <div key={index} className="flex flex-col border-t border-dun py-4 lg:py-6 cursor-pointer" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="flex justify-between items-center gap-4">
                                <h3 className="text-sm lg:text-base font-poppins font-semibold leading-tight text-[#604B3E]">{question.question}</h3>
                                <ChevronDown className={`min-w-6 size-6 lg:size-8 stroke-2 text-[#604B3E] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </div>
                            <div className={`grid transition-all duration-300 ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-3 lg:mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <p className="text-sm lg:text-base font-poppins font-light text-foreground">{question.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="hidden lg:block relative w-full max-w-[500px] aspect-square lg:size-[500px] bg-foreground rounded-tl-[50%] after:absolute after:inset-0 after:border after:border-[#D6B981] after:rounded-tl-[50%] after:scale-[1.05]">
                <Image src={faq} alt="FAQ" className="w-full h-full rounded-tl-[50%] object-cover" />
            </div>
        </section>
    )
}