"use client"
import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { FaPhone, FaDollarSign, FaWarehouse, FaShoppingCart, FaDatabase, FaUser, FaBuilding,  FaMapMarkerAlt } from "react-icons/fa"
import { HiArrowRight } from "react-icons/hi"

export default function InPlantLogistics() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?key=in-plant-logistics-hero"
              alt="In-Plant Logistics Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-white">
                  In-Plant Logistics
                </h1>
                <div className="flex justify-center">
                 
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* In-Plant Logistics Content Section */}
        <section className="py-20 md:py-32 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="lg:order-2">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?key=warehouse-automation"
                      alt="Warehouse Automation"
                      className="rounded-xl object-cover w-full h-[450px] lg:h-[500px] shadow-lg"
                    />
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-blue-600">
                      In-Plant Logistics
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                      In-Plant Logistics Streamlining Operations, Enhancing Productivity.
                    </h3>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <p className="text-pretty">
                      In-plant logistics company in lucknow refers to the management of materials, parts, and products within a manufacturing facility or production plant. This includes activities such as inventory management, material handling, and transportation of goods within the plant premises. The goal of in-plant logistics is to streamline internal processes, optimize inventory levels, reduce lead times, and improve overall operational efficiency.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      By efficiently managing in-plant logistics, companies can enhance their production processes, minimize waste, and ensure timely delivery of materials to support manufacturing operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of In-Plant Logistics Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Benefits of In-Plant Logistics</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Efficient Operations */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaBuilding className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Efficient Operations</h3>
                  <p className="text-muted-foreground">
                    Streamlined internal processes and optimized material flow for enhanced operational efficiency.
                  </p>
                </div>

                {/* Cost-Effective */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaDollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Cost-Effective</h3>
                  <p className="text-muted-foreground">
                    Reduced operational costs through optimized inventory management and efficient resource utilization.
                  </p>
                </div>

                {/* Streamlined Distribution */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaWarehouse className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Streamlined Distribution</h3>
                  <p className="text-muted-foreground">
                    Optimized material handling and distribution processes within the plant premises.
                  </p>
                </div>

                {/* Market Agility */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaShoppingCart className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Market Agility</h3>
                  <p className="text-muted-foreground">
                    Enhanced responsiveness to market demands through flexible and adaptive logistics operations.
                  </p>
                </div>

                {/* Data Enabled */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaDatabase className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Data Enabled</h3>
                  <p className="text-muted-foreground">
                    Data-driven insights and analytics for informed decision-making and continuous improvement.
                  </p>
                </div>

                {/* Customer Retention */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaUser className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Customer Retention</h3>
                  <p className="text-muted-foreground">
                    Improved customer satisfaction through reliable and efficient in-plant logistics services.
                  </p>
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
