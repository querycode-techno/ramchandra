"use client"
import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { FaChartLine, FaChartBar, FaChartPie, FaClock, FaBox, FaTachometerAlt, FaDatabase, FaEye, FaTrendingUp } from "react-icons/fa"
import { HiArrowRight } from "react-icons/hi"

export default function DescriptiveAnalytics() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?key=descriptive-analytics-hero"
              alt="Descriptive Analytics Dashboard"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-white">
                  Descriptive Analytics
                </h1>
                
              </div>
            </div>
          </div>
        </section>

        {/* Descriptive Analytics Content Section */}
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
                      Descriptive Analytics
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <p className="text-pretty">
                      Descriptive analytics is a cornerstone of Ramchandra Transport's supply chain advisory services, 
                      leveraging historical data to gain insights into supply chain performance. This powerful approach 
                      analyzes metrics such as inventory levels, demand patterns, lead times, transportation costs, and 
                      supplier performance to uncover trends and correlations.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      Our approach goes beyond mere number crunching, employing advanced data visualization techniques 
                      to present complex supply chain data in a clear and actionable format. We help organizations 
                      understand what has happened in their supply chain operations and identify patterns that can 
                      inform future decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Defining & Monitoring KPI Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-blue-600">
                      Defining & Monitoring KPI
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <p className="text-pretty">
                      Defining and monitoring Key Performance Indicators (KPIs) in supply chain advisory helps establish 
                      measurable metrics to track performance, evaluate efficiency, and identify areas for improvement. 
                      Our comprehensive KPI framework enables organizations to make informed decisions for optimizing 
                      supply chain operations.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      We work with clients to develop customized KPI dashboards that align with their strategic objectives. 
                      These metrics provide real-time visibility into supply chain performance, enabling proactive 
                      management and continuous improvement initiatives.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="space-y-6">
                      {/* Progress Charts */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="relative w-20 h-20 mx-auto mb-2">
                            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                              <path
                                className="text-gray-200"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                className="text-blue-600"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeDasharray="22, 100"
                                strokeLinecap="round"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-sm font-bold text-blue-600">22%</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">Efficiency</p>
                        </div>
                        <div className="text-center">
                          <div className="relative w-20 h-20 mx-auto mb-2">
                            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                              <path
                                className="text-gray-200"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                className="text-green-600"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeDasharray="96, 100"
                                strokeLinecap="round"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-sm font-bold text-green-600">96%</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">Performance</p>
                        </div>
                        <div className="text-center">
                          <div className="relative w-20 h-20 mx-auto mb-2">
                            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                              <path
                                className="text-gray-200"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                className="text-orange-600"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeDasharray="90, 100"
                                strokeLinecap="round"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-sm font-bold text-orange-600">90%</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">Quality</p>
                        </div>
                      </div>
                      
                      {/* Metrics Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <FaClock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                          <p className="text-sm font-medium">25 min</p>
                          <p className="text-xs text-gray-600">Avg Time</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 text-center">
                          <FaBox className="w-6 h-6 text-green-600 mx-auto mb-2" />
                          <p className="text-sm font-medium">10 items</p>
                          <p className="text-xs text-gray-600">Processed</p>
                        </div>
                      </div>
                      
                      {/* Bar Chart */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm text-gray-600">75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Dashboards Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="lg:order-2">
                  <div className="relative">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-center mb-6">Supply Chain Inventory Management Dashboard</h3>
                        
                        {/* Percentage Boxes */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="bg-red-100 rounded-lg p-4">
                              <p className="text-2xl font-bold text-red-600">6.67%</p>
                              <p className="text-xs text-gray-600">1 15</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="bg-yellow-100 rounded-lg p-4">
                              <p className="text-2xl font-bold text-yellow-600">2.17%</p>
                              <p className="text-xs text-gray-600">248 11,434</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="bg-green-100 rounded-lg p-4">
                              <p className="text-2xl font-bold text-green-600">1.11%</p>
                              <p className="text-xs text-gray-600">1 90</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Line Graph Placeholder */}
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="text-sm font-medium mb-2">Inventory Days of Supply</h4>
                          <div className="h-32 bg-white rounded border flex items-center justify-center">
                            <FaChartLine className="w-8 h-8 text-gray-400" />
                          </div>
                        </div>
                        
                        {/* Gauge Chart Placeholder */}
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="text-sm font-medium mb-2">Performance Gauge</h4>
                          <div className="h-24 bg-white rounded border flex items-center justify-center">
                            <FaTachometerAlt className="w-8 h-8 text-gray-400" />
                          </div>
                        </div>
                        
                        {/* Bar Charts */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="text-sm font-medium mb-2">Trends</h4>
                            <div className="h-20 bg-white rounded border flex items-center justify-center">
                              <FaChartBar className="w-6 h-6 text-gray-400" />
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="text-sm font-medium mb-2">Analysis</h4>
                            <div className="h-20 bg-white rounded border flex items-center justify-center">
                              <FaChartPie className="w-6 h-6 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-blue-600">
                      Interactive Dashboards
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <p className="text-pretty">
                      Interactive dashboards provide real-time visualizations of key supply chain metrics, enabling 
                      stakeholders to monitor performance, identify trends, and make data-driven decisions. These 
                      powerful tools offer dynamic insights for enhanced visibility and proactive management.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      Our dashboard solutions are designed to be intuitive and customizable, allowing users to drill 
                      down into specific areas of interest and gain deeper insights into their supply chain operations. 
                      With real-time data updates and interactive features, these dashboards support improved overall 
                      supply chain efficiency and strategic decision-making.
                    </p>
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
