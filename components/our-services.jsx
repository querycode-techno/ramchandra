export default function OurServices() {
  const services = [
    {
      icon: "/air-freight-icon.jpg",
      title: "Air Freight",
      description: "Fast and reliable air cargo services for urgent shipments across the globe.",
    },
    {
      icon: "/ocean-freight-icon.jpg",
      title: "Ocean Freight",
      description: "Cost-effective and efficient sea cargo solutions for large volume international shipping.",
    },
    {
      icon: "/road-freight-icon.jpg",
      title: "Road Freight",
      description: "Comprehensive road transportation services for domestic and cross-border deliveries.",
    },
    {
      icon: "/warehousing-icon.jpg",
      title: "Warehousing",
      description: "Secure and modern warehousing facilities for storage, distribution, and inventory management.",
    },
    {
      icon: "/customs-brokerage-icon.jpg",
      title: "Customs Brokerage",
      description: "Expert customs clearance services to ensure smooth and compliant international trade.",
    },
    {
      icon: "/supply-chain-consulting-icon.jpg",
      title: "Supply Chain Consulting",
      description: "Strategic consulting to optimize your supply chain for maximum efficiency and cost savings.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Services</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-pretty">
            We offer a comprehensive range of logistics services designed to meet your unique business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-lg p-6 text-center shadow-sm border">
              <div className="flex flex-col items-center h-full">
                <img 
                  src={service.icon || "/placeholder.svg"} 
                  alt={service.title} 
                  className="mb-4 h-16 w-16 object-contain" 
                />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
