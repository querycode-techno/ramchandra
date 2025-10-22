"use client"

import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Users, Cog, Handshake, BarChart3, DollarSign, Building, Truck, Package, Globe, TrendingUp, AlertTriangle, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ControlTower() {
  const customerBenefits = [
    {
      icon: Eye,
      title: "Real-Time Visibility",
      description: "Instant insights for proactive decision-making and operational agility",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Scalable and Adaptable",
      description: "Flexible and efficient solutions in dynamic logistics environments",
      color: "bg-green-500"
    },
    {
      icon: Cog,
      title: "Predictive Insights and Resolutions",
      description: "Optimized supply chain operations by anticipating and proactively addressing potential challenges",
      color: "bg-purple-500"
    },
    {
      icon: Handshake,
      title: "Collaborative",
      description: "Fostering innovation and efficiency, enhancing the effectiveness of supply chain operations",
      color: "bg-orange-500"
    }
  ]

  const technologySystems = [
    {
      title: "Order Management System (OMS)",
      description: "Automates order processing, inventory management, and fulfillment",
      icon: Package,
      features: ["Order Processing", "Inventory Management", "Fulfillment"]
    },
    {
      title: "Transport Management System (TMS)",
      description: "Optimizes transportation, streamlines order selection, route planning, and payments",
      icon: Truck,
      features: ["Route Optimization", "Fleet Management", "Payment Processing"]
    },
    {
      title: "Warehouse Management System (WMS)",
      description: "Optimizes warehouse operations, managing inventory, orders, and logistics",
      icon: Building,
      features: ["Warehouse Operations", "Inventory Control", "Order Management"]
    },
    {
      title: "Freight Management System (FMS)",
      description: "Optimizes freight operations, managing shipments, carriers, and logistics",
      icon: Globe,
      features: ["Freight Operations", "Carrier Management", "Shipment Tracking"]
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center bg-gradient-to-r from-blue-900/80 to-blue-700/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="/control.png"
            alt="Logistics background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-blue-900 px-6 sm:px-8 lg:px-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Control Tower
          </h1>
          
        </div>
        
       
      </section>

      {/* Control Tower Description Section */}
      <section className="py-20 sm:py-24 lg:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Control Tower
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                A supply chain control tower is a connected, personalized dashboard providing real-time data, key business metrics, and event alerts across the entire supply chain. It enables organizations to gain a comprehensive understanding of their supply chain operations, prioritize critical issues, and take proactive measures. This centralized command center integrates data from multiple sources, providing end-to-end visibility and enabling informed decision-making for optimal supply chain performance.
              </p>
            </div>
            <div>
              <Image
                src="/control/a.webp"
                alt="Control tower global network"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Network Design Section */}
      <section className="py-20 sm:py-24 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <Image
                src="/control/b.webp"
                alt="Network design flowchart"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Network Design
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                Network design within a control tower involves strategically mapping the supply chain structure and flow, determining optimal locations for facilities, distribution centers, and transportation routes to achieve efficient operations, minimize costs, and meet customer demands. It leverages advanced algorithms and data analytics to enhance agility, resilience, and responsiveness. This comprehensive approach ensures that the supply chain network is optimized for current and future business requirements while maintaining flexibility for market changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demand Planning Section */}
      <section className="py-20 sm:py-24 lg:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Demand Planning
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                Demand planning is a strategic process that utilizes historical data and advanced analytics to forecast future demand patterns by analyzing trends and customer behavior. It aims to optimize inventory levels, minimize stockouts, and enhance customer satisfaction, helping businesses align supply with demand and improve operational efficiency. This data-driven approach enables proactive decision-making and ensures that resources are allocated effectively to meet market demands.
              </p>
            </div>
            <div>
              <Image
                src="/control/c.webp"
                alt="Demand planning dashboard"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Visibility Section */}
      <section className="py-20 sm:py-24 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <Image
                src="/control/d.webp"
                alt="Real-time visibility dashboard"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Real-time End-to-End Visibility
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                Continuous monitoring and analysis of all stages from procurement to delivery, providing a comprehensive view for proactive decision-making, optimizing operations, and enhancing customer satisfaction by ensuring timely and efficient delivery with real-time insights. This end-to-end visibility enables businesses to identify bottlenecks, track performance metrics, and respond quickly to changing conditions across the entire supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proactive Alerts Section */}
      <section className="py-20 sm:py-24 lg:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Proactive Alerts & Exception Management
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                These systems play a crucial role in maintaining operational excellence. They use advanced analytics and real-time data to detect and address potential issues before they escalate, ensuring smooth operations and customer satisfaction by proactively managing exceptions. This proactive approach minimizes disruptions and enables quick resolution of issues before they impact business performance.
              </p>
            </div>
            <div>
              <Image
                src="/control/e.webp"
                alt="Alerts and exception management dashboard"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Predictive Insights Section */}
      <section className="py-20 sm:py-24 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <Image
                src="/control/f.webp"
                alt="Predictive insights dashboard"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Predictive Insights
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                Predictive insights leverage data analytics and AI to forecast future trends and potential issues, enabling businesses to make informed decisions, anticipate demand fluctuations, optimize inventory levels, and enhance overall supply chain efficiency. This forward-looking approach helps organizations stay ahead of market changes and maintain competitive advantage through data-driven strategic planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Benefits Section */}
      <section className="py-20 sm:py-24 lg:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-6">
              Customer Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {customerBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative p-8 pb-4">
                    <div className="flex justify-center mb-6">
                      <div className={`p-5 ${benefit.color} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight group-hover:text-blue-900 transition-colors duration-300">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative pt-0 pb-8">
                    <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
                  </CardContent>
                  
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3PL & 4PL Control Tower Section */}
      <section className="py-20 sm:py-24 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 leading-tight">
                3PL Control Tower
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Service Scope:</h4>
                  <p className="text-gray-700">Transportation, warehousing, freight management</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Involvement:</h4>
                  <p className="text-gray-700">Managing specific logistics functions</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Coordination:</h4>
                  <p className="text-gray-700">Focus on specific segments</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">4PL</div>
                  <div className="text-sm">Control Tower</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 leading-tight">
                4PL Control Tower
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Service Scope:</h4>
                  <p className="text-gray-700">Beyond traditional logistics, including supply chain strategy, technology integration</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Involvement:</h4>
                  <p className="text-gray-700">Managing multiple service providers</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Coordination:</h4>
                  <p className="text-gray-700">Optimizing end-to-end visibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="py-20 sm:py-24 lg:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-6">
              Our Technology
            </h2>
            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
              Patliputra Logistics is a leader in supply chain management, emphasizing our commitment to providing efficient, reliable, and innovative solutions that drive operational excellence and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {technologySystems.map((system, index) => {
              const IconComponent = system.icon
              return (
                <Card key={index} className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50/30 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative p-6 pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg lg:text-xl font-bold text-blue-900 leading-tight text-center">
                      {system.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative pt-0 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">{system.description}</p>
                    <div className="space-y-2 mb-4">
                      {system.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-gray-500">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
