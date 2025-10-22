export default function OurCoreValues() {
  const coreValues = [
    {
      icon: "/placeholder.svg?key=integrity",
      title: "Integrity",
      description: "Upholding the highest ethical standards in all our operations and interactions.",
    },
    {
      icon: "/placeholder.svg?key=innovation",
      title: "Innovation",
      description: "Continuously seeking new and better ways to deliver logistics solutions.",
    },
    {
      icon: "/placeholder.svg?key=excellence",
      title: "Excellence",
      description: "Striving for superior quality and performance in every aspect of our service.",
    },
    {
      icon: "/placeholder.svg?key=customer-focus",
      title: "Customer Focus",
      description: "Prioritizing our clients' needs and building lasting relationships based on trust.",
    },
    {
      icon: "/placeholder.svg?key=sustainability",
      title: "Sustainability",
      description: "Committed to environmentally responsible practices and sustainable growth.",
    },
    {
      icon: "/placeholder.svg?key=teamwork",
      title: "Teamwork",
      description: "Fostering a collaborative environment where every team member contributes to success.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary text-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Core Values</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-pretty">
          Our values are the foundation of our business, guiding our actions and decisions every day.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md">
              <img src={value.icon || "/placeholder.svg"} alt={value.title} className="mb-4 h-12 w-12" />
              <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
              <p className="text-center text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
