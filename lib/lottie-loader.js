import { useState, useEffect } from "react"

// Utility to load Lottie animation files
export const loadLottieAnimation = async (path) => {
  try {
    const response = await fetch(path)
    if (!response.ok) {
      throw new Error(`Failed to load Lottie animation: ${response.statusText}`)
    }
    const animationData = await response.json()
    return animationData
  } catch (error) {
    console.error('Error loading Lottie animation:', error)
    return null
  }
}

// Predefined Lottie animations for different use cases
export const lottieAnimations = {
  // Logistics related animations
  forklift: '/animations/Forklift loading truck.lottie',
  truck: '/animations/truck.json',
  warehouse: '/animations/warehouse.json',
  delivery: '/animations/delivery.json',
  shipping: '/animations/shipping.json',
  logistics: '/animations/logistics.json',
  
  // General animations
  loading: '/animations/loading.json',
  success: '/animations/success.json',
  error: '/animations/error.json',
  celebration: '/animations/celebration.json',
  
  // Background animations
  particles: '/animations/particles.json',
  waves: '/animations/waves.json',
  geometric: '/animations/geometric.json'
}

// Hook to load Lottie animation data
export const useLottieAnimation = (animationName) => {
  const [animationData, setAnimationData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const path = lottieAnimations[animationName]
        if (!path) {
          throw new Error(`Animation '${animationName}' not found`)
        }
        
        const data = await loadLottieAnimation(path)
        if (data) {
          setAnimationData(data)
        } else {
          throw new Error('Failed to load animation data')
        }
      } catch (err) {
        setError(err.message)
        console.error('Error loading Lottie animation:', err)
      } finally {
        setLoading(false)
      }
    }

    if (animationName) {
      loadAnimation()
    }
  }, [animationName])

  return { animationData, loading, error }
}
