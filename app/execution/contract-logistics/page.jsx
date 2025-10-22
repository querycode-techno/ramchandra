"use client"
import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { FaStore, FaDollarSign, FaWarehouse, FaShoppingCart, FaCode, FaUser, FaBoxes, FaTruck, FaChartLine, FaCogs } from "react-icons/fa"
import { HiArrowRight } from "react-icons/hi"

export default function ContractLogistics() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?key=contract-logistics-hero"
              alt="Contract Logistics Warehouse"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-white">
                  Contract Logistics
                </h1>
               
              </div>
            </div>
          </div>
        </section>

        {/* Contract Logistics Description Section */}
        <section className="py-20 md:py-32 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="lg:order-2">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?key=warehouse-operations"
                      alt="Warehouse Operations"
                      className="rounded-xl object-cover w-full h-[450px] lg:h-[500px] shadow-lg"
                    />
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-blue-600">
                      Contract Logistics
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Seamless Solutions, Superior Service Your Trusted Partner for Contract-Logistics Excellence.
                    </h3>
                    <p className="text-pretty">
                      Contract logistics involves strategic partnerships where we provide comprehensive logistics services 
                      to businesses on a contractual basis. This includes transportation, spare parts, and complete 
                      logistical service provider ownership of resources, infrastructure, warehouses, skilled human 
                      resources, equipment, inventory management systems, order dispatch tracking, and post-sales 
                      support capabilities.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      Our contract logistics solutions are designed to optimize your supply chain operations while 
                      reducing costs and improving efficiency. We take full responsibility for managing your logistics 
                      requirements, allowing you to focus on your core business activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of Contract Logistics Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Benefits of Contract Logistics</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Efficient Operations */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaStore className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Efficient Operations</h3>
                  <p className="text-muted-foreground">
                    Streamlined processes and optimized workflows for maximum operational efficiency.
                  </p>
                </div>

                {/* Cost-Effective */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaDollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Cost-Effective</h3>
                  <p className="text-muted-foreground">
                    Reduced operational costs through economies of scale and optimized resource utilization.
                  </p>
                </div>

                {/* Streamlined Distribution */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaWarehouse className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Streamlined Distribution</h3>
                  <p className="text-muted-foreground">
                    Optimized distribution networks for faster and more reliable delivery services.
                  </p>
                </div>

                {/* Market Agility */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaShoppingCart className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Market Agility</h3>
                  <p className="text-muted-foreground">
                    Quick adaptation to market changes and customer demands with flexible solutions.
                  </p>
                </div>

                {/* Technology Integration */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCode className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Technology Integration</h3>
                  <p className="text-muted-foreground">
                    Advanced technology solutions for real-time tracking and inventory management.
                  </p>
                </div>

                {/* Customer Retention */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaUser className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Customer Retention</h3>
                  <p className="text-muted-foreground">
                    Enhanced customer satisfaction through reliable and consistent service delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Offerings Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Offerings</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* Fulfillment Center */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative mb-6">
                    <img
                      src="/placeholder.svg?key=fulfillment-center"
                      alt="Fulfillment Center"
                      className="rounded-lg object-cover w-full h-[200px]"
                    />
                    <div className="absolute top-4 right-4">
                      <FaBoxes className="w-8 h-8 text-blue-600 bg-white rounded-full p-2" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Fulfillment Center</h3>
                </div>

                {/* Sort Centre */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative mb-6">
                    <img
                      src="/placeholder.svg?key=sort-centre"
                      alt="Sort Centre"
                      className="rounded-lg object-cover w-full h-[200px]"
                    />
                    <div className="absolute top-4 right-4">
                      <FaCogs className="w-8 h-8 text-green-600 bg-white rounded-full p-2" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Sort Centre</h3>
                </div>

                {/* Warehouse Management */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative mb-6">
                    <img
                      src="/placeholder.svg?key=warehouse-management"
                      alt="Warehouse Management"
                      className="rounded-lg object-cover w-full h-[200px]"
                    />
                    <div className="absolute top-4 right-4">
                      <FaWarehouse className="w-8 h-8 text-purple-600 bg-white rounded-full p-2" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Warehouse Management</h3>
                </div>

                {/* Distribution Management */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative mb-6">
                    <img
                      src="/placeholder.svg?key=distribution-management"
                      alt="Distribution Management"
                      className="rounded-lg object-cover w-full h-[200px]"
                    />
                    <div className="absolute top-4 right-4">
                      <FaChartLine className="w-8 h-8 text-orange-600 bg-white rounded-full p-2" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Distribution Management</h3>
                </div>
                {/* In-Plant Logistics */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative mb-6">
                    <img
                      src="/placeholder.svg?key=distribution-management"
                      alt="In-Plant Logistics"
                      className="rounded-lg object-cover w-full h-[200px]"
                    />
                    <div className="absolute top-4 right-4">
                      <FaChartLine className="w-8 h-8 text-orange-600 bg-white rounded-full p-2" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">In-Plant Logistics</h3>
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
