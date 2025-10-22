"use client"

import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, DollarSign, Building, Users, Monitor, User } from "lucide-react"
import Image from "next/image"

export default function ReverseLogistics() {
  const benefits = [
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      description: "Promoting eco-friendly practices and waste reduction"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Optimizing costs through efficient return processing"
    },
    {
      icon: Building,
      title: "Inventory Optimization",
      description: "Strategic management of returned and refurbished goods"
    },
    {
      icon: Users,
      title: "Better Supplier Collaboration",
      description: "Enhanced partnerships with suppliers and vendors"
    },
    {
      icon: Monitor,
      title: "Data Analysis for Improvement",
      description: "Insights-driven decision making for process enhancement"
    },
    {
      icon: User,
      title: "Customer Loyalty and Retention",
      description: "Building lasting relationships through excellent service"
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
            Reverse Logistics
          </h1>
          
        </div>
      </section>

      {/* Introduction to Reverse Logistics Section */}
      <section className="py-20 sm:py-24 lg:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              Streamlined Returns and Recovery Solutions for Efficient Reverse Logistics Management
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-justify">
                Reverse logistics involves the process of managing the return, repair, recycling, and disposal of products and materials in a supply chain. It encompasses activities such as product returns, refurbishment, and redistribution. Reverse logistics aims to optimize the value of returned goods, reduce waste, and minimize environmental impact. It plays a critical role in sustainability efforts and can contribute to cost savings and customer satisfaction. This comprehensive approach ensures that returned products are handled efficiently, creating opportunities for value recovery while supporting environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Need For Reverse Logistics Section */}
      <section className="py-20 sm:py-24 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Need For Reverse-Logistics Process
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-justify">
                Reverse logistics is crucial for managing product returns, repairs, and disposal efficiently. It minimizes losses, recovers value from returns, and supports environmental sustainability through recycling and responsible disposal practices. Efficient reverse logistics leads to cost savings, improved customer retention, and environmental benefits. In today's competitive marketplace, businesses must implement robust reverse logistics processes to handle increasing return volumes, regulatory compliance requirements, and customer expectations for seamless return experiences.
              </p>
            </div>
            <div>
              <Image
                src="/rlp1.webp"
                alt="Reverse logistics process"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reverse Logistics Process Section */}
      <section className="py-20 sm:py-24 lg:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <Image
                src="/rlp.webp"
                alt="Reverse logistics flow diagram"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Reverse-Logistics Process
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-justify">
                Reverse logistics refers to the process of managing the return of goods from the point of consumption to the point of origin. It involves activities such as product returns, recalls, repairs, recycling, and disposal. The goal is to optimize these processes to recover value from returned products, minimize waste, and ensure environmental sustainability. Effective reverse logistics requires efficient handling, transportation, and disposition of returned items, often involving coordination with multiple stakeholders in the supply chain. This comprehensive approach ensures that every returned product is processed efficiently, creating maximum value while maintaining environmental responsibility.
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
              Benefits of Reverse-Logistics
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
