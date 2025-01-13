"use client"

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { MapPinIcon, ChevronLeft, ChevronRight } from 'lucide-react';

import world from '@/images/world.svg';

const events = [
    {
        id: 0,
        country: 'France',
        name: 'Event name',
        description: 'Lorem ipsum dolor sit amet consectetur. Aliquet massa quis diam diam. Pharetra convallis sed neque diam purus sit ornare quis. Nisl odio at sem at sit.',
        tags: ['Wedding', 'Luxury', 'International']
    },
    {
        id: 1,
        country: 'Spain',
        name: 'Event name',
        description: 'Lorem ipsum dolor sit amet consectetur. Aliquet massa quis diam diam. Pharetra convallis sed neque diam purus sit ornare quis.',
        tags: ['Corporate', 'Conference', 'Team Building']
    },
    {
        id: 2,
        country: 'Italy',
        name: 'Event name',
        description: 'Lorem ipsum dolor sit amet consectetur. Aliquet massa quis diam diam. Pharetra convallis sed neque diam purus sit ornare quis. Nisl odio at sem at sit. Aliquam netus egestas mattis at tortor aliquam dictumst. Consequat fringilla lacus eget egestas enim. Orci rhoncus amet eget metus amet vel ac ac. Dignissim vitae a tempus nibh bibendum tristique sed nisi. Morbi pulvinar nisl turpis malesuada nec eu.',
        tags: ['Wedding', 'Luxury', 'International']
    },
    {
        id: 3,
        country: 'Germany',
        name: 'Event name',
        description: 'Lorem ipsum dolor sit amet consectetur. Aliquet massa quis diam diam. Pharetra convallis sed neque diam purus sit ornare quis. Nisl odio at sem at sit. Aliquam netus egestas mattis at tortor aliquam dictumst. Consequat fringilla lacus eget egestas enim. Orci rhoncus amet eget metus amet vel ac ac. Dignissim vitae a tempus nibh bibendum tristique sed nisi. Morbi pulvinar nisl turpis malesuada nec eu.',
        tags: ['Corporate', 'Conference', 'Team Building']
    },
]

export default function Countries() {
    const [activeCountry, setActiveCountry] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    const handleSlideChange = (direction) => {
        if (direction === 'next') {
            setActiveCountry(prev =>
                prev === events.length - 1 ? 0 : prev + 1
            );
        } else {
            setActiveCountry(prev =>
                prev === 0 ? events.length - 1 : prev - 1
            );
        }
    };

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleSlideChange('next');
        }
        if (isRightSwipe) {
            handleSlideChange('prev');
        }
    };

    return (
        <section id="experience" className='relative my-16 lg:my-32'>
            {/* Desktop View - Globe with pins */}
            <div className='absolute hidden lg:block w-full max-w-[600px] mx-auto lg:mx-0'>
                <Image
                    src={world}
                    alt="world"
                    className='w-full h-auto pointer-events-none'
                    width={600}
                    height={600}
                />
                <MapPinIcon
                    className={`size-10 absolute top-[45%] left-[65%] cursor-pointer text-background stroke-1 
                        ${activeCountry === 0 ? 'fill-[#604B3E]' : 'fill-dun'}`}
                    onClick={() => setActiveCountry(0)}
                />
                <MapPinIcon
                    className={`size-10 absolute top-[50%] left-[45%] cursor-pointer text-background stroke-1 
                        ${activeCountry === 1 ? 'fill-[#604B3E]' : 'fill-dun'}`}
                    onClick={() => setActiveCountry(1)}
                />
                {/* Add other pins... */}
            </div>

            {/* Mobile View - Slider */}
            <div className='lg:hidden px-4'>
                <h2 className='text-3xl sm:text-4xl font-playfairDisplay leading-normal text-center mb-8'>
                    Countries I worked in
                    <br />
                    <span className='text-dun block'>and events I organized</span>
                </h2>

                <div
                    className='relative'
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Country cards */}
                    <div className='flex overflow-hidden'>
                        <div
                            className='flex transition-transform duration-300 ease-out w-full'
                            style={{ transform: `translateX(-${activeCountry * 100}%)` }}
                        >
                            {events.map((event) => (
                                <div
                                    key={event.id}
                                    className='w-full flex-shrink-0 px-2'
                                >
                                    <h3 className='text-2xl font-playfairDisplay text-dun'>
                                        {event.country}
                                    </h3>
                                    <h4 className='font-playfairDisplay text-xl mt-2 mb-4'>
                                        {event.name}
                                    </h4>
                                    <div className='text-sm font-light mb-4'>
                                        {event.description}
                                    </div>
                                    <div className='flex flex-wrap gap-2 mt-4'>
                                        {event.tags.map(tag => (
                                            <span 
                                                key={`${event.id}-${tag}`}
                                                className='px-3 py-1 bg-dun/10 text-dun rounded-full text-sm'
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Add navigation arrows */}
                    <div className='flex justify-between items-center mt-6 px-4'>
                        <button
                            onClick={() => handleSlideChange('prev')}
                            className='p-2 rounded-full hover:bg-gray-100'
                            aria-label='Previous slide'
                        >
                            <ChevronLeft className='w-6 h-6 text-dun' />
                        </button>

                        {/* Navigation dots */}
                        <div className='flex justify-center items-center gap-2'>
                            {events.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveCountry(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${activeCountry === index ? 'bg-[#D6B981]' : 'bg-dun'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => handleSlideChange('next')}
                            className='p-2 rounded-full hover:bg-gray-100'
                            aria-label='Next slide'
                        >
                            <ChevronRight className='w-6 h-6 text-dun' />
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Content Section */}
            <div className='px-4 xl:px-0 xl:max-w-[1232px] mx-auto lg:flex lg:justify-end'>
                <div className='w-full lg:w-[700px] mt-12 lg:mt-0'>
                    <h2 className='hidden lg:block text-3xl sm:text-4xl lg:text-5xl font-playfairDisplay leading-normal text-center lg:text-left'>
                        <span className="relative after:block after:absolute after:content-[''] after:w-[140px] after:h-[1px] after:bg-[#D6B981] after:left-0 after:bottom-[-20px]">Countries I worked in</span>
                        <br />
                        <span className='text-dun block lg:inline lg:relative lg:left-40'>and events I organized</span>
                    </h2>
                    <div className='hidden lg:block mt-8 lg:mt-20 border-b border-dun'>
                        <h3 className='text-3xl sm:text-4xl lg:text-5xl font-playfairDisplay mt-4 text-dun'>
                            {events[activeCountry].country} - {events[activeCountry].name}
                        </h3>
                        <p className='text-base font-poppins font-light mt-8 mb-8'>
                            {events[activeCountry].description}
                        </p>
                        <div className='flex flex-wrap gap-3 mb-8'>
                            {events[activeCountry].tags.map(tag => (
                                <span 
                                    key={`${events[activeCountry].id}-${tag}`}
                                    className='px-4 py-2 bg-dun/10 text-dun rounded-full'
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}