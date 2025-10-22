"use client";
import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import {
  FaChartLine,
  FaChartBar,
  FaChartPie,
  FaClock,
  FaBox,
  FaTachometerAlt,
  FaDatabase,
  FaEye,
  FaTrendingUp,
  FaCogs,
  FaWarehouse,
  FaTruck,
  FaPlane,
  FaTrain,
  FaShip,
  FaMapMarkerAlt,
  FaRoute,
  FaMobile,
  FaDesktop,
  FaShieldAlt,
  FaBrain,
  FaSync,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function DistributionManagement() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?key=distribution-management-hero"
              alt="Distribution Management Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-white">
                  Distribution Management
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Distribution Management Introduction Section */}
        <section className="py-20 md:py-32 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="lg:order-2">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?key=distribution-interface"
                      alt="Distribution Interface"
                      className="rounded-xl object-cover w-full h-[450px] lg:h-[500px] shadow-lg"
                    />
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-blue-600">
                      Distribution Management
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Born from Logistics to Serve Logistics Innovating Seamless
                      Connections in Supply Chains
                    </h3>
                    <p className="text-pretty">
                      Distribution management is a vital element of supply chain
                      execution, encompassing strategic coordination and
                      meticulous control of goods movement from origin to
                      destination. Our comprehensive approach ensures efficient
                      and on-time delivery to meet customer demand.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      At Ramchandra Transport, we play a pivotal role in
                      seamless supply chain operations, leveraging advanced
                      technology and strategic planning to optimize distribution
                      networks and enhance overall supply chain performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multimodal Transportation Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-blue-600">
                      Multimodal Transportation
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Multimodal Transportation Linking Global Markets with
                      Versatile Logistics Solutions
                    </h3>
                    <p className="text-pretty">
                      Multimodal transportation is a sophisticated and
                      integrated logistics strategy that orchestrates the
                      movement of goods across various transportation modes
                      including rail, road, water, and air. Our comprehensive
                      multimodal services leverage the unique strengths of each
                      mode for efficient, cost-effective, and sustainable
                      solutions.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      By combining different transportation modes, we optimize
                      routes, reduce costs, and ensure reliable delivery while
                      minimizing environmental impact and maximizing operational
                      efficiency across the entire supply chain.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/placeholder.svg?key=multimodal-transportation"
                    alt="Multimodal Transportation"
                    className="rounded-xl object-cover w-full h-[450px] lg:h-[500px] shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FTL/PTL Transportation Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="lg:order-2">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?key=ftl-ptl-transportation"
                      alt="FTL/PTL Transportation"
                      className="rounded-xl object-cover w-full h-[450px] lg:h-[500px] shadow-lg"
                    />
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-blue-600">
                      FTL/PTL Transportation
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Efficient Logistics, Reliable Delivery, Maximum Value
                    </h3>
                    <p className="text-pretty">
                      FTL/PTL (Full Truck Load/Part Truck Load) transportation
                      is a dynamic logistics solution that accommodates a wide
                      range of shipment sizes and requirements. FTL is ideal for
                      large shipments requiring dedicated truck space, while PTL
                      offers flexibility for smaller loads by sharing truck
                      space with other shipments.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      Our FTL/PTL services ensure cost-effective, direct
                      delivery and streamlined efficiency for diverse shipping
                      requirements, providing optimal solutions for businesses
                      of all sizes and shipment volumes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Benefits
                </h2>
                <p className="text-xl text-muted-foreground">
                  With Distribution Management, you can achieve up to:
                </p>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Cost Reduction */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-4">
                    8%
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Cost Reduction
                  </h3>
                  <p className="text-muted-foreground">
                    Significant cost savings through optimized distribution
                    networks and efficient logistics operations.
                  </p>
                </div>

                {/* Annual Cost Reduction */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-5xl font-bold text-green-600 mb-4">
                    12%
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Annual Cost Reduction
                  </h3>
                  <p className="text-muted-foreground">
                    Year-over-year cost improvements through continuous
                    optimization and process enhancement.
                  </p>
                </div>

                {/* Improved Service Levels */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-5xl font-bold text-purple-600 mb-4">
                    50%
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Improved Service Levels
                  </h3>
                  <p className="text-muted-foreground">
                    Enhanced customer satisfaction through improved delivery
                    performance and service quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Distribution Management System Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Distribution Management System
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </div>

              {/* Optimize Your Operations */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
                <div className="text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-blue-600">
                      Optimize Your Operations
                    </h3>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-pretty">
                      Our comprehensive Transportation Management System (TMS)
                      optimizes planning, execution, and monitoring of
                      distribution operations. The system enables efficient
                      fleet management and cost-effective logistics operations
                      tailored to your specific needs and requirements.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      With advanced analytics and real-time monitoring
                      capabilities, we ensure optimal resource utilization and
                      continuous improvement in distribution performance.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold">TMS Dashboard</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            245
                          </div>
                          <p className="text-sm text-gray-600">Active Routes</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-green-600">
                            89%
                          </div>
                          <p className="text-sm text-gray-600">
                            On-Time Delivery
                          </p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-purple-600">
                            1,247
                          </div>
                          <p className="text-sm text-gray-600">
                            Total Shipments
                          </p>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-orange-600">
                            94%
                          </div>
                          <p className="text-sm text-gray-600">
                            Fleet Utilization
                          </p>
                        </div>
                      </div>
                      <div className="h-32 bg-gray-50 rounded flex items-center justify-center">
                        <FaChartBar className="w-96 h-32 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* See the Bigger Picture */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
                <div className="lg:order-2">
                  <div className="relative">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <div className="space-y-6">
                        <h4 className="text-lg font-semibold">
                          Real-time Visibility
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-blue-50 rounded-lg p-4 text-center">
                            <FaMobile className="w-6 h-6 text-blue-600" />
                            <p className="text-sm">Mobile App Tracking</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-4 text-center">
                            <FaDesktop className="w-6 h-6 text-green-600" />
                            <p className="text-sm">Web Dashboard</p>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-4 text-center">
                            <FaMapMarkerAlt className="w-6 h-6 text-purple-600" />
                            <p className="text-sm">GPS Tracking</p>
                          </div>
                          <div className="bg-orange-50 rounded-lg p-4 text-center">
                            <FaRoute className="w-6 h-6 text-orange-600" />
                            <p className="text-sm">Route Optimization</p>
                          </div>
                        </div>
                        <div className="h-32 bg-gray-50 rounded flex items-center justify-center">
                          <FaChartLine className="w-96 h-32 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-blue-600">
                      See the Bigger Picture
                    </h3>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-pretty">
                      Our management system empowers transportation operations
                      with real-time visibility, streamlining processes and
                      optimizing routes for cost-effective and efficient
                      deliveries. The system enhances customer satisfaction and
                      business performance through comprehensive monitoring and
                      control capabilities.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      With integrated tracking and analytics, we provide
                      complete visibility into the distribution process,
                      enabling proactive management and continuous improvement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Prescriptive Exception Management */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-blue-600">
                      Prescriptive Exception Management
                    </h3>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-pretty">
                      Enhanced efficiency through our prescriptive exception
                      management system, leveraging advanced technology to
                      proactively identify and resolve exceptions. The system
                      enables agile decision-making and optimization of supply
                      chain operations.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      With intelligent automation and predictive analytics, we
                      minimize disruptions and ensure smooth operations even
                      under challenging circumstances.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold">
                        Exception Management
                      </h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <p className="text-sm">Exception Resolution</p>
                          <span className="text-sm font-bold text-green-600">
                            95%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: "95%" }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm">Automated Alerts</p>
                          <span className="text-sm font-bold text-blue-600">
                            87%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: "87%" }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm">Response Time</p>
                          <span className="text-sm font-bold text-purple-600">
                            2.3 min
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-purple-600 h-2 rounded-full"
                            style={{ width: "78%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="h-32 bg-gray-50 rounded flex items-center justify-center">
                        <FaShieldAlt className="w-96 h-32 text-gray-400" />
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
  );
}
