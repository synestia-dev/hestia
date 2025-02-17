'use client'

import { useState, useEffect } from 'react'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Loader will be visible for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <h1 className="text-4xl lg:text-6xl font-playfairDisplay text-dun">Maria Events</h1>
    </div>
  )
} 