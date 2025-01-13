"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Reviews() {
    const reviews = [
        {
            text: "Lorem ipsum dolor sit amet consectetur. Lobortis leo molestie mattis a pulvinar cras habitant pulvinar ut. Dui odio cursus tristique vestibulum turpis. Pharetra quam accumsan blandit proin id eget congue.",
            author: "John Doe",
            role: "CEO",
            stars: 5
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur. Lobortis leo molestie mattis a pulvinar cras habitant pulvinar ut. Dui odio cursus tristique vestibulum turpis. Pharetra quam accumsan blandit proin id eget congue.",
            author: "Jane Smith",
            role: "Marketing Director",
            stars: 5
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur. Lobortis leo molestie mattis a pulvinar cras habitant pulvinar ut. Dui odio cursus tristique vestibulum turpis. Pharetra quam accumsan blandit proin id eget congue.",
            author: "Mike Johnson",
            role: "Project Manager",
            stars: 5
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur. Lobortis leo molestie mattis a pulvinar cras habitant pulvinar ut. Dui odio cursus tristique vestibulum turpis. Pharetra quam accumsan blandit proin id eget congue.",
            author: "Sarah Williams",
            role: "Designer",
            stars: 5
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur. Lobortis leo molestie mattis a pulvinar cras habitant pulvinar ut. Dui odio cursus tristique vestibulum turpis. Pharetra quam accumsan blandit proin id eget congue.",
            author: "Sarah Williams",
            role: "Designer",
            stars: 5
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur. Lobortis leo molestie mattis a pulvinar cras habitant pulvinar ut. Dui odio cursus tristique vestibulum turpis. Pharetra quam accumsan blandit proin id eget congue.",
            author: "Sarah Williams",
            role: "Designer",
            stars: 5
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    React.useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getItemsPerSlide = () => {
        if (windowWidth < 768) return 1;        // Mobile
        if (windowWidth < 1024) return 2;       // Tablet
        return 3;                               // Desktop
    };

    const itemsPerSlide = getItemsPerSlide();
    const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="px-4 xl:px-0 xl:max-w-[1232px] mx-auto py-14 lg:py-[104px]">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-playfairDisplay leading-tight relative mb-8 lg:mb-12">
                Client <span className="text-[#D6B981]">reviews</span>
            </h2>

            <div className="relative">
                <div className="overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: `calc(-${currentIndex * 100}%)` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className="min-w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
                                {reviews
                                    .slice(
                                        slideIndex * itemsPerSlide,
                                        (slideIndex + 1) * itemsPerSlide
                                    )
                                    .map((review, index) => (
                                        <div
                                            key={index}
                                            className="flex-1 bg-white p-4 md:p-6 lg:p-8 border border-[#D6B981] shadow-md"
                                        >
                                            <div className="flex items-center mb-8">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className={`w-5 h-5 ${i < review.stars ? 'text-[#D6B981]' : 'text-gray-300'}`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <p className="font-poppins font-light text-[#131313]/60 mb-4">{review.text}</p>
                                            <div className='flex items-center gap-4'>
                                                <div className='size-14 rounded-full bg-gray-100'></div>
                                                <div>
                                                    <p className="font-poppins font-semibold text-lg text-[#D6B981] leading-tight">{review.author}</p>
                                                    <p className="font-poppins font-light text-lg text-[#D6B981] leading-tight">{review.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 lg:mt-8">
                    <div className="flex gap-2 order-2 md:order-1">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-[#D6B981]' : 'bg-gray-300'
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>

                    <div className="flex gap-4 order-1 md:order-2">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full border border-gray-300 hover:border-[#D6B981] transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full border border-gray-300 hover:border-[#D6B981] transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}