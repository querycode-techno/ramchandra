"use client";

import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  CheckCircle,
  Eye,
  Shield,
  Heart,
  Zap,
  Package,
  Truck,
  Building,
  Globe,
  Smartphone,
  Beaker,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function Industries() {
  const industries = [
    {
      title: "FMCG",
      description: "Fast-moving consumer goods logistics solutions",
      detailedDescription:
        "FMCG (Fast-Moving Consumer Goods) are products that sell quickly at relatively low prices. In this sector, we offer tailored supply chain solutions emphasizing agility. Our services include demand forecasting, inventory management, and distribution optimization, ensuring reliable and efficient delivery to maintain market competitiveness and customer satisfaction.",
      icon: Package,
      benefits: [
        "Efficient Operations",
        "Cost-Effective",
        "Streamlined Distribution",
        "Market Agility",
        "Technology Integration",
        "Customer Retention",
      ],
    },
    {
      title: "FMCD",
      description: "Consumer durables and electronics logistics",
      detailedDescription:
        "The FMCD (Fast-Moving Consumer Durables) sector includes products like electronics, appliances, and furniture. In this sector, we offer tailored supply chain solutions focused on efficiency and reliability. Our services encompass demand forecasting, inventory management, and optimized distribution to ensure timely and cost-effective delivery of durable consumer goods.",
      icon: Truck,
      benefits: [
        "Advanced Demand Forecasting",
        "Cost Savings",
        "Inventory Optimization",
        "Operational Efficiency",
        "Quality Management",
        "Customer Satisfaction",
      ],
    },
    // Update the E-Commerce industry object
{
    title: "E-Commerce",
    description: "Online retail logistics solutions",
    detailedDescription: "In the ECommerce Services sector, we provide tailored supply chain solutions designed to meet the unique demands of online retail. Our services include order fulfillment, last-mile delivery optimization, and returns management. By leveraging technology and operational expertise, we enable e-commerce businesses to achieve efficient, reliable, and cost-effective logistics operations, enhancing customer satisfaction.",
    icon: Globe,
    benefits: [
      "Efficient Order Fulfillment",
      "Last-Mile Optimization",
      "Inventory Visibility",
      "Cost Saving",
      "Technology Integration",
      "Customer Satisfaction"
    ]
  },
  
  // Update the Telecom industry object
  {
    title: "Telecom",
    description: "Telecommunications logistics solutions",
    detailedDescription: "In the telecom sector, we provide specialized supply chain solutions tailored to the unique needs of telecommunications companies. Our services include inventory management for telecom equipment, logistics for network expansion projects, and reverse logistics for equipment returns. We ensure efficient, reliable, and cost-effective supply chain operations to support the telecom industry's growth and service quality.",
    icon: Smartphone,
    benefits: [
      "Efficient Operations",
      "Network Expansion Support",
      "Supply Chain Visibility",
      "Quality Control",
      "Technology Integration",
      "Cost Saving"
    ]
  },
  
  // Update the Pharmaceutical industry object
  {
    title: "Pharmaceutical",
    description: "Pharmaceutical supply chain solutions",
    detailedDescription: "Patliputra Logistics provides comprehensive logistics solutions designed specifically for the pharmaceutical sector. Our services are tailored to meet the stringent requirements of the industry, ensuring the safe, compliant, and efficient transportation, storage, and distribution of pharmaceutical products. We prioritize product integrity, regulatory compliance, and on-time delivery to support the critical needs of the pharmaceutical supply chain.",
    icon: Beaker,
    benefits: [
      "Regulatory Compliance",
      "Cost-Effective",
      "Quality Assurance",
      "Efficient Supply Chain",
      "Data Enabled",
      "Customer Satisfaction"
    ]
  },
  
  // Update the Beverages industry object
  {
    title: "Beverages",
    description: "Beverage manufacturers logistics solutions",
    detailedDescription: "In the dynamic Beverage Manufacturers sector, Patliputra Logistics stands out as a leading provider of specialized logistics solutions. Leveraging our expertise, we offer a range of services tailored to the unique needs of beverage companies. Our offerings include temperature-controlled storage facilities, efficient distribution networks, and precise delivery management systems. By partnering with us, beverage companies can streamline their supply chains, ensuring timely deliveries and meeting customer demands with precision and excellence.",
    icon: Heart,
    benefits: [
      "Efficient Operations",
      "Cost-Effective",
      "Streamlined Distribution",
      "Market Agility",
      "Technology Integration",
      "Customer Retention"
    ]
  }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Efficiency",
      description:
        "Our solutions improve operational efficiency, reducing costs and enhancing productivity.",
    },
    {
      icon: Eye,
      title: "Visibility",
      description:
        "Gain real-time visibility into your supply chain for better decision-making and proactive management.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description:
        "We ensure the reliability of your supply chain, minimizing disruptions and optimizing resource utilization.",
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description:
        "By improving delivery times and order accuracy, we enhance overall customer satisfaction.",
    },
    {
      icon: CheckCircle,
      title: "Flexibility",
      description:
        "Our solutions are flexible and scalable, adapting to your changing business needs and market dynamics.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-900/80 to-blue-700/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="/logistics-warehouse-trucks.png"
            alt="Industries background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 sm:px-8 lg:px-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Industries
          </h1>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-6">
              Industries We Serve
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto">
              We provide specialized logistics solutions across diverse
              industries, ensuring efficient and reliable supply chain
              management tailored to each sector's unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl hover:scale-105 cursor-pointer">
                      <CardHeader className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                          <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                            {industry.title}
                          </CardTitle>
                        </div>
                        <p className="text-gray-600 mt-2">
                          {industry.description}
                        </p>
                      </CardHeader>
                      <CardContent className="p-6 pt-0 flex justify-end">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                        <div className="p-3 bg-blue-600 rounded-xl mr-4">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        {industry.title} Industry Solutions
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {industry.detailedDescription}
                        </p>
                        <div className="bg-blue-50 p-6 rounded-lg">
                          <h4 className="text-lg font-semibold text-blue-900 mb-4">
                            Key Benefits for {industry.title} Sector:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {industry.benefits.map((benefit, benefitIndex) => (
                              <div
                                key={benefitIndex}
                                className="flex items-center text-gray-700"
                              >
                                <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            Our Services Include:
                          </h4>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center">
                              <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                              Supply Chain Optimization
                            </li>
                            <li className="flex items-center">
                              <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                              Inventory Management
                            </li>
                            <li className="flex items-center">
                              <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                              Distribution Network Design
                            </li>
                            <li className="flex items-center">
                              <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                              Technology Integration
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits of Our Services Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-6">
              Benefits of Our Services
            </h2>
          </div>

          <div className="space-y-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                      {index + 1}. {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
