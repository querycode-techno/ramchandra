"use client";
import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import {
  FaTruck,
  FaWarehouse,
  FaShippingFast,
  FaMapMarkerAlt,
  FaBoxes,
  FaPlane,
  FaTrain,
  FaClock,
  FaChartLine,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function SupplyChainExecution() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?key=supply-chain-execution-hero"
              alt="Supply Chain Execution Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-white">
                  Supply Chain Execution
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Supply Chain Companies in India Section */}
        <section className="py-20 md:py-32 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="lg:order-2">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?key=supply-chain-illustration"
                      alt="Supply Chain Illustration"
                      className="rounded-xl object-cover w-full h-[450px] lg:h-[500px] shadow-lg"
                    />
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-gray-800">
                      supply chain companies in India
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <p className="text-pretty">
                      Supply chain execution is the critical process of
                      implementing and managing the day-to-day operations of a
                      supply chain. At Ramchandra Transport, we understand that
                      effective execution is essential for maximizing asset
                      utilization, monitoring costs, and ensuring timely
                      delivery of goods and services.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      Our comprehensive supply chain execution services are
                      designed to optimize every aspect of your logistics
                      operations. We leverage cutting-edge technologies and
                      industry best practices to deliver efficiency, competitive
                      pricing, and continuous improvement in your supply chain
                      performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Offerings Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Our Offerings
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Express Logistics */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative mb-6">
                    <img
                      src="/placeholder.svg?key=express-logistics"
                      alt="Express Logistics"
                      className="rounded-lg object-cover w-full h-[200px]"
                    />
                    <div className="absolute top-4 right-4">
                      <FaShippingFast className="w-8 h-8 text-blue-600 bg-white rounded-full p-2" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Express Logistics
                  </h3>
                  <p className="text-muted-foreground">
                    Fast and reliable express delivery services for
                    time-sensitive shipments across India.
                  </p>
                </div>

                {/* Hyper Local */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative mb-6">
                    <img
                      src="/placeholder.svg?key=hyper-local"
                      alt="Hyper Local"
                      className="rounded-lg object-cover w-full h-[200px]"
                    />
                    <div className="absolute top-4 right-4">
                      <FaMapMarkerAlt className="w-8 h-8 text-green-600 bg-white rounded-full p-2" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Hyper Local</h3>
                  <p className="text-muted-foreground">
                    Localized delivery solutions for same-day and next-day
                    delivery within specific regions.
                  </p>
                </div>

                {/* Fulfillment Center */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative mb-6">
                    <img
                      src="/placeholder.svg?key=fulfillment-center"
                      alt="Fulfillment Center"
                      className="rounded-lg object-cover w-full h-[200px]"
                    />
                    <div className="absolute top-4 right-4">
                      <FaWarehouse className="w-8 h-8 text-purple-600 bg-white rounded-full p-2" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Fulfillment Center
                  </h3>
                  <p className="text-muted-foreground">
                    Complete fulfillment services including storage, picking,
                    packing, and shipping.
                  </p>
                </div>

                {/* Dark Store Service */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative mb-6">
                    <img
                      src="/placeholder.svg?key=dark-store"
                      alt="Dark Store Service"
                      className="rounded-lg object-cover w-full h-[200px]"
                    />
                    <div className="absolute top-4 right-4">
                      <FaBoxes className="w-8 h-8 text-orange-600 bg-white rounded-full p-2" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Dark Store Service
                  </h3>
                  <p className="text-muted-foreground">
                    Dedicated fulfillment centers for online orders with
                    optimized inventory management.
                  </p>
                </div>

                {/* Sort Center */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative mb-6">
                    <img
                      src="/placeholder.svg?key=sort-center"
                      alt="Sort Center"
                      className="rounded-lg object-cover w-full h-[200px]"
                    />
                    <div className="absolute top-4 right-4">
                      <FaClock className="w-8 h-8 text-red-600 bg-white rounded-full p-2" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Sort Center</h3>
                  <p className="text-muted-foreground">
                    Automated sorting and distribution facilities for efficient
                    package routing.
                  </p>
                </div>

                {/* Contract Logistic */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative mb-6">
                    <img
                      src="/placeholder.svg?key=contract-logistics"
                      alt="Contract Logistics"
                      className="rounded-lg object-cover w-full h-[200px]"
                    />
                    <div className="absolute top-4 right-4">
                      <FaTruck className="w-8 h-8 text-indigo-600 bg-white rounded-full p-2" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Contract Logistics
                  </h3>
                  <p className="text-muted-foreground">
                    Comprehensive logistics solutions tailored to specific
                    business requirements.
                  </p>
                </div>
              </div>
                {/* Multimodal Transportation */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow lg:col-span-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    {/* Image Section */}
                    <div className="relative">
                      <img
                        src="/placeholder.svg?key=multimodal-transportation"
                        alt="Multimodal Transportation"
                        className="rounded-lg object-cover w-full h-[200px] lg:h-[250px]"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="flex space-x-1">
                          <FaPlane className="w-4 h-4 text-blue-600 bg-white rounded-full p-1" />
                          <FaTrain className="w-4 h-4 text-green-600 bg-white rounded-full p-1" />
                          <FaTruck className="w-4 h-4 text-orange-600 bg-white rounded-full p-1" />
                        </div>
                      </div>
                    </div>
                    {/* Content Section */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">
                        Multimodal Transportation
                      </h3>
                      <p className="text-muted-foreground">
                        Integrated transportation solutions using air, rail, road, and
                        sea for optimal efficiency. Our multimodal approach ensures cost-effective
                        and timely delivery across different transportation modes.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Air Freight</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Rail Transport</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Road Logistics</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Sea Shipping</span>
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
  );
}
