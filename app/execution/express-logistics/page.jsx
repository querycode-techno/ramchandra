import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, DollarSign, FileText, TrendingUp, Code, Users } from "lucide-react"
import Image from "next/image"

export default function ExpressLogistics() {
  const benefits = [
    {
      icon: ShoppingCart,
      title: "Efficient Operations",
      description: "Streamlined processes for maximum efficiency"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Competitive pricing for optimal value"
    },
    {
      icon: FileText,
      title: "Streamlined Distribution",
      description: "Optimized distribution networks"
    },
    {
      icon: TrendingUp,
      title: "Market Agility",
      description: "Quick response to market demands"
    },
    {
      icon: Code,
      title: "Data Enabled",
      description: "Technology-driven solutions"
    },
    {
      icon: Users,
      title: "Customer Retention",
      description: "Building lasting customer relationships"
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
            Express Logistics
          </h1>
          
        </div>
      </section>

      {/* Sm Express Logistics Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/logistics-warehouse-trucks.png"
                alt="Express logistics fleet"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Sm Express Logistics
              </h2>
              <p className="text-xl lg:text-2xl text-blue-800 font-medium leading-relaxed">
                Speedy Service, Solid Solutions Your Express Ticket to Effortless Deliveries.
              </p>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                Sm Express logistics is a specialized and vital segment within the broader logistics industry that focuses on providing fast, time-sensitive delivery services. At Patliputra Logistics, we take pride in offering comprehensive express logistics services that cater to the urgent transportation needs of our clients. Our express logistics solutions are designed to deliver goods quickly and efficiently, ensuring that time-critical shipments reach their destinations on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Express Delivery By Air Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Express Delivery By Air
              </h2>
              <p className="text-xl lg:text-2xl text-blue-800 font-medium leading-relaxed">
                Speed Above the Clouds Experience Express Delivery By Air at Its Finest.
              </p>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                Express Delivery By Air offers rapid and efficient transportation of goods via air cargo services, ensuring swift and reliable deliveries. This mode of delivery is ideal for time-sensitive shipments, providing speed and global reach to meet urgent delivery requirements. With a focus on speed and efficiency, express air delivery services cater to businesses and individuals seeking fast and reliable transportation solutions for their goods.
              </p>
            </div>
            <div>
              <Image
                src="/air-freight-icon.jpg"
                alt="Express delivery by air"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Express Delivery By Road Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/road-freight-icon.jpg"
                alt="Express delivery by road"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Express Delivery By Road
              </h2>
              <p className="text-xl lg:text-2xl text-blue-800 font-medium leading-relaxed">
                Swift Ground Transportation Reliable Road Express Delivery Solutions.
              </p>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                Express Delivery By Road provides fast and reliable ground transportation services for time-sensitive shipments within cities and across regions. Our road express delivery network ensures quick pickup and delivery of packages, documents, and goods with real-time tracking and professional handling. This cost-effective solution offers flexibility and accessibility to various locations, making it ideal for same-day and next-day delivery requirements.
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
              Benefits of Express Logistics
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
                    <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
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
