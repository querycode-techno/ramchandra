"use client"
import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { FaChartLine, FaNetworkWired, FaRoute, FaBoxes, FaLightbulb, FaCogs, FaShieldAlt, FaTruck } from "react-icons/fa"
import { HiOutlineArrowRight } from "react-icons/hi"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function PrescriptiveAnalytics() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?key=prescriptive-analytics-hero"
              alt="Prescriptive Analytics Dashboard"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-white">
                  Prescriptive Analytics
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Prescriptive Analytics Content Section */}
        <section className="py-20 md:py-32 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="lg:order-2">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?key=analytics-workspace"
                      alt="Analytics Workspace"
                      className="rounded-xl object-cover w-full h-[450px] lg:h-[500px] shadow-lg"
                    />
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-blue-600">
                      Prescriptive Analytics
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <p className="text-pretty">
                      Prescriptive analytics is a cutting-edge approach in supply chain advisory that uses advanced data analysis 
                      to recommend actionable strategies for enhancing supply chain operations. This powerful methodology goes 
                      beyond predicting what will happen to suggest what should be done to achieve optimal outcomes.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      Our expert team leverages sophisticated algorithms and machine learning techniques to uncover hidden patterns 
                      and correlations in your supply chain data. We provide strategic recommendations that help optimize inventory 
                      levels, streamline processes, and improve overall operational efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supply Chain Network Design Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-blue-600">
                      Supply Chain Network Design
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <p className="text-pretty">
                      Supply chain network design is the strategic process of optimizing the structure and configuration of a 
                      supply chain to achieve specific business objectives. This comprehensive approach considers factors such 
                      as facility locations, transportation modes, inventory placement, and demand variability to create an 
                      efficient and cost-effective network.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      Our network design solutions help organizations reduce costs, improve service levels, and enhance agility 
                      and flexibility. We analyze your current network structure and develop optimized configurations that 
                      align with your strategic goals and market requirements.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="space-y-6">
                      <div className="flex items-center justify-center space-x-4">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                            <FaNetworkWired className="w-8 h-8 text-blue-600" />
                          </div>
                          <p className="text-sm font-medium">Suppliers</p>
                        </div>
                        <HiOutlineArrowRight className="w-6 h-6 text-blue-600" />
                        <div className="text-center">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                            <FaCogs className="w-8 h-8 text-green-600" />
                          </div>
                          <p className="text-sm font-medium">Manufacturers</p>
                        </div>
                        <HiOutlineArrowRight className="w-6 h-6 text-blue-600" />
                        <div className="text-center">
                          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                            <FaBoxes className="w-8 h-8 text-purple-600" />
                          </div>
                          <p className="text-sm font-medium">Distribution</p>
                        </div>
                        <HiOutlineArrowRight className="w-6 h-6 text-blue-600" />
                        <div className="text-center">
                          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                            <FaTruck className="w-8 h-8 text-orange-600" />
                          </div>
                          <p className="text-sm font-medium">Customers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Last Mile Route Optimization Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="lg:order-2">
                  <div className="relative">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <div className="rounded-lg w-full h-[450px] lg:h-[500px] bg-gray-100 flex items-center justify-center">
                        <DotLottieReact
                          src="https://lottie.host/99d7cd20-e7bf-42a9-ba3d-4ce540d51f7d/x1RNXMiMJS.lottie"
                          loop
                          autoplay
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-blue-600">
                      Last Mile Route Optimization
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <p className="text-pretty">
                      Last mile route optimization is the process of optimizing the final leg of delivery from distribution 
                      centers to end customers. This critical component of supply chain management focuses on minimizing 
                      costs, reducing delivery times, and improving overall delivery performance.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      Our advanced route optimization solutions leverage cutting-edge technologies including GPS tracking, 
                      real-time traffic data, and sophisticated algorithms to create the most efficient delivery routes. 
                      We help businesses achieve significant cost savings while enhancing customer satisfaction through 
                      faster and more reliable deliveries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consolidation Load Optimization Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-blue-600">
                      Consolidation Load Optimization
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <p className="text-pretty">
                      Consolidation load optimization is the strategic process of grouping multiple shipments into a single 
                      load to maximize transportation efficiency and reduce costs. This approach minimizes empty space, 
                      improves route efficiency, and achieves economies of scale in transportation operations.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      Our consolidation solutions help businesses optimize their shipping operations by intelligently 
                      combining shipments based on destination, timing, and capacity requirements. This results in 
                      significant cost reductions, improved delivery performance, and reduced environmental impact 
                      through more efficient use of transportation resources.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaBoxes className="w-10 h-10 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Load Consolidation</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                              <FaBoxes className="w-4 h-4 text-gray-600" />
                            </div>
                            <span className="text-sm">Individual Shipments</span>
                          </div>
                          <HiOutlineArrowRight className="w-6 h-6 text-blue-600 mx-auto" />
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-12 h-12 bg-blue-200 rounded flex items-center justify-center">
                              <FaTruck className="w-6 h-6 text-blue-600" />
                            </div>
                            <span className="text-sm">Consolidated Load</span>
                          </div>
                        </div>
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
