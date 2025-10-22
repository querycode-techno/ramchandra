import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { FaTarget, FaUsers, FaChartLine, FaCogs, FaDollarSign, FaLightbulb, FaShieldAlt, FaChartBar, FaGlobe, FaMobile, FaLaptop } from "react-icons/fa"
import { HiOutlineArrowRight } from "react-icons/hi"

export default function SupplyChainAdvisory() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/logistics-warehouse-trucks.png"
              alt="Supply Chain Advisory Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-white">
                  Supply Chain Advisory
                </h1>
                
              </div>
            </div>
          </div>
        </section>

        {/* Supply Chain Advisory Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="lg:order-2">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?key=whiteboard-drawing"
                      alt="Supply Chain Advisory Whiteboard"
                      className="rounded-xl object-cover w-full h-[450px] lg:h-[500px] shadow-lg"
                    />
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                      Supply Chain Advisory (Supply Chain Consulting companies)
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto lg:mx-0"></div>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <p className="text-pretty">
                      In today's global business environment, a robust and efficient supply chain is crucial for success. 
                      At Ramchandra Transport, we understand the complexities of modern supply chain management and offer 
                      comprehensive advisory services to help businesses optimize their operations.
                    </p>
                    <p className="text-muted-foreground text-pretty">
                      Our expert consultants work closely with organizations to develop customized supply chain strategies 
                      that enhance operational efficiency, improve agility, flexibility, and resilience. We help businesses 
                      navigate challenges and capitalize on opportunities in an ever-evolving marketplace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Customized Strategies</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      We develop tailored supply chain strategies that align with your business objectives, ensuring 
                      cost-effectiveness and operational excellence. Our approach considers your unique requirements, 
                      market conditions, and growth aspirations.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Process Optimization</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Through detailed analysis and continuous improvement methodologies, we help streamline your 
                      operations, reduce costs, and improve efficiency. Our experts identify bottlenecks and implement 
                      solutions that drive measurable results.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Technology Integration</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      We leverage advanced tools and systems to enhance visibility, traceability, and decision-making 
                      capabilities. Our technology solutions provide real-time insights and enable proactive management 
                      of your supply chain operations.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Risk Management</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      We implement robust frameworks to identify, assess, and mitigate potential risks and disruptions. 
                      Our comprehensive risk management strategies ensure business continuity and resilience in the face 
                      of uncertainties.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Performance Monitoring</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      We establish key performance indicators (KPIs) and monitoring systems to track the effectiveness 
                      of implemented strategies. Ongoing performance analysis helps identify areas for improvement and 
                      ensures continuous optimization.
                    </p>
                  </div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Our Offerings</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?key=predictive-analytics"
                      alt="Predictive Analytics"
                      className="rounded-xl object-cover w-full h-[300px] shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold">Predictive Analytics</h3>
                  <p className="text-muted-foreground">
                    Advanced forecasting and predictive modeling to anticipate future trends and optimize decision-making.
                  </p>
                </div>
                <div className="text-center space-y-6">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?key=descriptive-analytics"
                      alt="Descriptive Analytics"
                      className="rounded-xl object-cover w-full h-[300px] shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold">Descriptive Analytics</h3>
                  <p className="text-muted-foreground">
                    Comprehensive data analysis and reporting to understand past performance and current state of operations.
                  </p>
                </div>
                <div className="text-center space-y-6">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?key=prescriptive-analytics"
                      alt="Prescriptive Analytics"
                      className="rounded-xl object-cover w-full h-[300px] shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold">Prescriptive Analytics</h3>
              <p className="text-muted-foreground">
                    Actionable recommendations and optimization strategies to improve future performance and outcomes.
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
