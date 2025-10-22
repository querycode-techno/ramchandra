"use client"
import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { FaChartLine, FaChartBar, FaChartPie, FaClock, FaBox, FaTachometerAlt, FaDatabase, FaEye, FaTrendingUp, FaCogs, FaWarehouse, FaTruck, FaBarcode, FaRfid, FaTasks, FaArrowUp, FaArrowDown, FaSync, FaBrain, FaShieldAlt } from "react-icons/fa"
import { HiArrowRight } from "react-icons/hi"

export default function WarehouseManagement() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?key=warehouse-management-hero"
              alt="Warehouse Management Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-white">
                  Warehouses Management
                </h1>
                
              </div>
            </div>
          </div>
        </section>

        {/* Warehouses Management Introduction Section */}
        <section className="py-20 md:py-32 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="lg:order-2">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?key=warehouse-dashboard"
                      alt="Warehouse Dashboard"
                      className="rounded-xl object-cover w-full h-[450px] lg:h-[500px] shadow-lg"
                    />
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-blue-600">
                      Warehouses Management
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Efficient Warehousing Solutions for Seamless Supply Chains
                    </h3>
                    <p className="text-pretty">
                      Warehouse management systems are essential for efficient supply chain operations, 
                      providing real-time visibility, inventory control, and streamlined processes. 
                      Our comprehensive solutions help optimize warehouse operations, reduce costs, 
                      and improve overall supply chain performance.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      With advanced technology integration and data-driven insights, we help businesses 
                      achieve maximum efficiency in their warehouse operations while maintaining accuracy 
                      and reducing operational costs.
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Benefits</h2>
                <p className="text-xl text-muted-foreground">With Warehouses Management, you can achieve up to:</p>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Increased Units Per Hour */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-4">12%</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Increased Units Per Hour</h3>
                  <p className="text-muted-foreground">
                    Enhanced productivity through optimized workflows and efficient task management.
                  </p>
                </div>

                {/* Improved Case Pick Productivity */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-4xl font-bold text-green-600 mb-4">15%</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Improved Case Pick Productivity</h3>
                  <p className="text-muted-foreground">
                    Streamlined picking processes with intelligent routing and optimized layouts.
                  </p>
                </div>

                {/* Costs Reductions */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-4">30%</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Costs Reductions</h3>
                  <p className="text-muted-foreground">
                    Significant cost savings through efficient resource utilization and process optimization.
                  </p>
                </div>

                {/* Faster Vendor Onboarding */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-4">55%</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Faster Vendor Onboarding</h3>
                  <p className="text-muted-foreground">
                    Streamlined vendor integration processes for quicker setup and deployment.
                  </p>
                </div>

                {/* Improved Accuracy */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-4xl font-bold text-red-600 mb-4">100%</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Improved Accuracy</h3>
                  <p className="text-muted-foreground">
                    Enhanced accuracy through automated systems and real-time validation.
                  </p>
                </div>

                {/* Increased Productivity */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-4">20%</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Increased Productivity</h3>
                  <p className="text-muted-foreground">
                    Overall productivity gains through integrated management systems and automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warehouses Management System Features Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Warehouses Management System</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </div>

              {/* Agile Task Management */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
                <div className="text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-blue-600">Agile Task Management</h3>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-pretty">
                      Agile task management in warehouse execution focuses on quick adoption and efficient 
                      task management. Our system streamlines workflows, enhances productivity, and provides 
                      real-time visibility into warehouse operations.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      With flexible task allocation and dynamic resource management, we ensure optimal 
                      performance and continuous improvement in warehouse operations.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold">Category Wise Stock</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">1100 T</div>
                          <p className="text-sm text-gray-600">Stock Value</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">28</div>
                          <p className="text-sm text-gray-600">Current Stock</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">0</div>
                          <p className="text-sm text-gray-600">Stock In</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-600">11</div>
                          <p className="text-sm text-gray-600">Stock Out</p>
                        </div>
                      </div>
                      <div className="h-32 bg-gray-50 rounded flex items-center justify-center">
                        <FaChartBar className="w-8 h-8 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-time Inbound and Outbound Processing */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
                <div className="lg:order-2">
                  <div className="relative">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <div className="space-y-6">
                        <h4 className="text-lg font-semibold">Processing Status</h4>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-green-600 font-bold">85%</span>
                            </div>
                            <p className="text-sm text-gray-600">Completed</p>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-blue-600 font-bold">12%</span>
                            </div>
                            <p className="text-sm text-gray-600">In Progress</p>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-red-600 font-bold">3%</span>
                            </div>
                            <p className="text-sm text-gray-600">Pending</p>
                          </div>
                        </div>
                        <div className="h-32 bg-gray-50 rounded flex items-center justify-center">
                          <FaChartLine className="w-8 h-8 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-blue-600">Real-time Inbound and Outbound Processing</h3>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-pretty">
                      Real-time inbound and outbound processing manages the movement of goods with precision 
                      and efficiency. Our system uses advanced technologies like RFID and barcode scanning 
                      for accurate tracking and processing.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      With automated workflows and real-time updates, we ensure seamless operations and 
                      minimize processing times while maintaining high accuracy standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advanced Visibility and Analytics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
                <div className="text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-blue-600">Advanced Visibility and Analytics</h3>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-pretty">
                      Advanced visibility and analytics leverage cutting-edge technologies and data analytics 
                      for real-time insights. Our system tracks inventory levels, order statuses, and warehouse 
                      performance with comprehensive reporting.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      With predictive analytics and performance metrics, we provide actionable insights 
                      for continuous improvement and strategic decision-making.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold">Performance Analytics</h4>
                      <div className="text-center">
                        <div className="relative w-32 h-32 mx-auto mb-4">
                          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
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
                              strokeDasharray="75, 100"
                              strokeLinecap="round"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-blue-600">473</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">Total Orders</p>
                      </div>
                      <div className="h-32 bg-gray-50 rounded flex items-center justify-center">
                        <FaChartLine className="w-8 h-8 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Synchronized Interleaving */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
                <div className="lg:order-2">
                  <div className="relative">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <div className="space-y-6">
                        <h4 className="text-lg font-semibold">Resource Allocation</h4>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Storage Efficiency</span>
                            <span className="text-sm font-bold text-green-600">92%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Workflow Efficiency</span>
                            <span className="text-sm font-bold text-blue-600">87%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Space Utilization</span>
                            <span className="text-sm font-bold text-purple-600">78%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-blue-600">Synchronized Interleaving</h3>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-pretty">
                      Synchronized interleaving coordinates the movement and storage of goods within the 
                      warehouse to optimize space utilization and workflow efficiency. Our system ensures 
                      seamless coordination between different warehouse operations.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      With intelligent routing and space optimization algorithms, we maximize warehouse 
                      capacity while maintaining operational efficiency and reducing bottlenecks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic Workflow Enablement */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
                <div className="text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-blue-600">Dynamic Workflow Enablement</h3>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-pretty">
                      Dynamic workflow enablement adapts and optimizes operational workflows in real-time 
                      based on changing demands and priorities. Our system allows for flexible task allocation 
                      and resource utilization.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      With intelligent automation and adaptive algorithms, we ensure optimal resource 
                      allocation and workflow efficiency under varying operational conditions.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold">Workflow Stages</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">1060</div>
                          <p className="text-sm text-gray-600">Total Tasks</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">81%</div>
                          <p className="text-sm text-gray-600">Completed</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">5%</div>
                          <p className="text-sm text-gray-600">In Progress</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-600">7%</div>
                          <p className="text-sm text-gray-600">Pending</p>
                        </div>
                      </div>
                      <div className="h-32 bg-gray-50 rounded flex items-center justify-center">
                        <FaChartBar className="w-8 h-8 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intelligent Inventory Management */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="lg:order-2">
                  <div className="relative">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <div className="space-y-6">
                        <h4 className="text-lg font-semibold">Warehouse Management Dashboard</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-blue-50 rounded-lg p-4 text-center">
                            <div className="text-xl font-bold text-blue-600">245</div>
                            <p className="text-sm text-gray-600">Orders</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-4 text-center">
                            <div className="text-xl font-bold text-green-600">1,847</div>
                            <p className="text-sm text-gray-600">Inventory</p>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-4 text-center">
                            <div className="text-xl font-bold text-purple-600">89</div>
                            <p className="text-sm text-gray-600">Shipments</p>
                          </div>
                          <div className="bg-orange-50 rounded-lg p-4 text-center">
                            <div className="text-xl font-bold text-orange-600">94%</div>
                            <p className="text-sm text-gray-600">Performance</p>
                          </div>
                        </div>
                        <div className="h-32 bg-gray-50 rounded flex items-center justify-center">
                          <FaChartPie className="w-8 h-8 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-blue-600">Intelligent Inventory Management</h3>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-pretty">
                      Intelligent inventory management uses advanced technologies and analytics to optimize 
                      inventory levels, storage, and movement. Our system includes predictive analytics for 
                      demand forecasting and stock replenishment.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      With real-time tracking and automated reordering capabilities, we ensure optimal 
                      inventory levels while minimizing carrying costs and stockouts.
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
