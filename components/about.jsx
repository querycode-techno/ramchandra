export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="lg:order-2">
          <img
            src="/placeholder.svg?key=21234"
            alt="About Us Image"
            className="rounded-lg object-cover w-full h-[400px]"
          />
        </div>
        <div className="lg:order-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Us</h2>
          <p className="text-lg md:text-xl mb-6 text-pretty">
            Ramchandra Transport is a leading provider of integrated logistics solutions, committed to delivering
            excellence and innovation. With years of experience, we have built a reputation for reliability, efficiency,
            and customer-centric services. Our global network and advanced technology ensure that your cargo is handled
            with the utmost care and precision, from origin to destination.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            We believe in fostering strong partnerships and continuously adapting to the evolving demands of the global
            supply chain. Our dedicated team works tirelessly to provide tailored solutions that drive success for our
            clients.
          </p>
        </div>
        
      </div>
    </section>
  )
}
