'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false) // First trigger the fade-out animation
      
      // Then remove the component from DOM after animation completes
      const removeTimer = setTimeout(() => {
        setIsLoading(false)
      }, 500) // Match this with CSS transition duration
      
      return () => clearTimeout(removeTimer)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className={`fixed inset-0 bg-white z-50 flex items-center justify-center
      transition-opacity duration-500 ease-in-out
      ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Image 
        src="./logo.svg" 
        alt="Maria Events Logo" 
        width={234} 
        height={120} 
        priority
        className={`transition-transform duration-500 ease-in-out
          ${isVisible ? 'translate-y-0' : '-translate-y-8'}`}
      />
    </div>
  )
} 