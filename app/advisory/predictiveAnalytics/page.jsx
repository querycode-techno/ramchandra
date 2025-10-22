"use client"
import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { FaChartLine, FaTruck, FaShieldAlt, FaBuilding, FaBox, FaArrowRight, FaPhone, FaEnvelope, FaAt } from "react-icons/fa"
import { HiOutlineArrowRight } from "react-icons/hi"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'


export default function PredictiveAnalytics() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
          <img
              src="/logistics-warehouse-trucks.png"
              alt="Supply Chain Advisory Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-white">
                  Predictive Analytics
                </h1>
                
              </div>
            </div>
          </div>
        </section>

        {/* Predictive Analytics Content Section */}
        <section className="py-20 md:py-32 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="lg:order-2">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?key=data-analysis-workspace"
                      alt="Data Analysis Workspace"
                      className="rounded-xl object-cover w-full h-[450px] lg:h-[500px] shadow-lg"
                    />
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-blue-600">
                      Predictive Analytics
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <p className="text-pretty">
                      Predictive analytics uses advanced statistical models and algorithms to analyze historical and real-time data, 
                      enabling businesses to forecast supply chain trends, risks, and opportunities. This powerful approach helps 
                      organizations make informed decisions and stay ahead of market changes.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      By leveraging predictive analytics, we help optimize inventory levels, production schedules, and distribution 
                      strategies. Our solutions provide actionable insights that drive efficiency, reduce costs, and enhance overall 
                      supply chain performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transportation Predictive Optimization Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-blue-600">
                      Transportation Predictive Optimization
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <p className="text-pretty">
                      Transportation predictive optimization uses advanced algorithms and predictive analytics to optimize 
                      transportation operations. This innovative approach helps predict future demand, optimize routes, and 
                      improve overall logistics efficiency.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      Our solutions help reduce costs, enhance supply chain performance, and ensure timely delivery of goods. 
                      By analyzing patterns and trends, we provide strategic insights that drive operational excellence and 
                      customer satisfaction.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="relative">
                      <div className="rounded-lg w-full h-[400px] bg-gray-100 flex items-center justify-center">
                        <DotLottieReact
                          src="https://lottie.host/8cec1e34-84db-426e-8b19-0d4fae52aa39/plqu5tAGLz.lottie"
                          loop
                          autoplay
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                      
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <FaShieldAlt className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm font-medium">Secured Transactions</p>
                      </div>
                      <div className="text-center">
                        <FaBuilding className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm font-medium">Trusted Commercial Space</p>
                      </div>
                      <div className="text-center">
                        <FaBox className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm font-medium">Superior Efficiency</p>
                      </div>
                      <div className="text-center">
                        <FaChartLine className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm font-medium">Elimination of Duplicity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

         
      </main>
      <SiteFooter />
    </div>
  )
}
