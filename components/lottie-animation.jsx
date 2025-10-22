"use client"

import Lottie from "lottie-react"
import { useState, useEffect } from "react"

export default function LottieAnimation({ 
  src,
  animationData, 
  className = "", 
  loop = true, 
  autoplay = true,
  speed = 1,
  ...props 
}) {
  const [animation, setAnimation] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadAnimation = async () => {
      if (src) {
        try {
          setLoading(true)
          setError(null)
          const response = await fetch(src)
          if (!response.ok) {
            throw new Error(`Failed to load animation: ${response.statusText}`)
          }
          
          // Handle both .json and .lottie files
          if (src.endsWith('.lottie')) {
            // For .lottie files, we need to handle them differently
            // This is a placeholder - you might need to convert to JSON first
            console.warn('Lottie files need to be converted to JSON format for web use')
            setError('Lottie files need to be converted to JSON format')
          } else {
            const data = await response.json()
            setAnimation(data)
          }
        } catch (err) {
          setError(err.message)
          console.error('Error loading Lottie animation:', err)
        } finally {
          setLoading(false)
        }
      } else if (animationData) {
        setAnimation(animationData)
        setLoading(false)
      }
    }

    loadAnimation()
  }, [src, animationData])

  if (loading) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="text-muted-foreground text-sm">Animation failed to load</div>
      </div>
    )
  }

  if (!animation) {
    return null
  }

  return (
    <div className={className}>
      <Lottie
        animationData={animation}
        loop={loop}
        autoplay={autoplay}
        speed={speed}
        style={{ width: '100%', height: '100%' }}
        {...props}
      />
    </div>
  )
}
