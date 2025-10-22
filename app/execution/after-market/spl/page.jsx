"use client"

import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, DollarSign, Building, Users, Code, User } from "lucide-react"
import Image from "next/image"

export default function ServicePartsLogistics() {
  const benefits = [
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Comprehensive risk management strategies"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Optimized cost management solutions"
    },
    {
      icon: Building,
      title: "Streamlined Distribution",
      description: "Efficient distribution network management"
    },
    {
      icon: Users,
      title: "Comprehensive Support",
      description: "Round-the-clock customer support"
    },
    {
      icon: Code,
      title: "Data Enabled",
      description: "Technology-driven solutions and analytics"
    },
    {
      icon: User,
      title: "Customer Retention",
      description: "Enhanced customer satisfaction and retention"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-900/80 to-blue-700/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="/logistics-warehouse-trucks.png"
            alt="Logistics background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 sm:px-8 lg:px-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Service Parts Logistics (SPL)
          </h1>
          
        </div>
      </section>

      {/* Efficient Solutions Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              Efficient Solutions for Seamless Service Parts-Logistics Management
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-justify">
                Service Parts Logistics (SPL) is a specialized branch of logistics management that focuses on the strategic planning, procurement, storage, and distribution of spare parts and components needed for product maintenance and repair. This comprehensive approach plays a crucial role in aftermarket management by ensuring that critical parts are available when and where they are needed, minimizing equipment downtime and maximizing operational efficiency. Our SPL solutions are designed to optimize inventory levels, reduce carrying costs, and enhance customer satisfaction through timely delivery of service parts. By implementing advanced demand forecasting, strategic warehousing, and efficient distribution networks, we help businesses maintain cost-effective operations while ensuring reliable service parts availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Need For Service Parts Logistics Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Need For Service Parts-Logistics (SPL)
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-justify">
              The need for Service Parts Logistics (SPL) arises from the critical role of efficient and timely spare parts management in supporting various industries, such as automotive, electronics, and machinery. SPL ensures that essential components and parts are available whenever needed, minimizing equipment downtime and optimizing maintenance and repair operations. By streamlining the supply chain for spare parts, SPL helps organizations improve equipment reliability, reduce costs, and enhance customer satisfaction by ensuring prompt service and support.
              </p>
            </div>
            <div>
              <Image
                src="/logistics-warehouse-trucks.png"
                alt="Service parts logistics management"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Parts Logistics Process Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <Image
                src="/spl-process.webp"
                alt="SPL Process Flow"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Service Parts Logistics (SPL) Process
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-justify">
              The Service Parts Logistics (SPL) process involves the efficient management of spare parts and components required for maintenance, repair, and operations. It includes activities such as demand forecasting, inventory management, order processing, warehousing, and distribution. The goal is to ensure that the right parts are available at the right time and place, minimizing downtime and maximizing equipment performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-6">
              Benefits of Service Parts Logistics (SPL)
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-blue-600 rounded-full">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl lg:text-2xl font-semibold text-gray-800 leading-tight">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-lg leading-relaxed text-justify">{benefit.description}</p>
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
