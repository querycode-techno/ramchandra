"use client"

import LottieAnimation from "@/components/lottie-animation"
import { useLottieAnimation } from "@/lib/lottie-loader"

export default function LottieDemo() {
  const { animationData, loading, error } = useLottieAnimation('forklift')

  return (
    <div className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Lottie Animation Demo</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-lg text-muted-foreground">
              Your forklift animation will appear here once converted to JSON format
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Method 1: Direct path */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-4">Direct Path Method</h3>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <LottieAnimation
                  src="/animations/Forklift loading truck.lottie"
                  className="w-full h-full"
                  loop={true}
                  autoplay={true}
                />
              </div>
            </div>

            {/* Method 2: Using hook */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-4">Hook Method</h3>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                {loading && <div className="text-sm text-muted-foreground">Loading...</div>}
                {error && <div className="text-sm text-red-500">{error}</div>}
                {animationData && (
                  <LottieAnimation
                    animationData={animationData}
                    className="w-full h-full"
                    loop={true}
                    autoplay={true}
                  />
                )}
              </div>
            </div>

            {/* Method 3: Placeholder for converted JSON */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-4">After JSON Conversion</h3>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-sm text-muted-foreground">
                  <p>Convert your .lottie file to .json</p>
                  <p className="mt-2">Then use:</p>
                  <code className="text-xs bg-gray-200 px-2 py-1 rounded">
                    src="/animations/forklift.json"
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4 text-blue-900">How to Convert Your .lottie File:</h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-800">
              <li>Go to <a href="https://lottiefiles.com/tools/convert" target="_blank" rel="noopener noreferrer" className="underline">LottieFiles Converter</a></li>
              <li>Upload your "Forklift loading truck.lottie" file</li>
              <li>Download the converted .json file</li>
              <li>Rename it to "forklift.json" and place in public/animations/</li>
              <li>Update the lottieAnimations object in lib/lottie-loader.js</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
