export default function Technology() {
  return (
    <section className="py-16 md:py-24 bg-secondary text-foreground">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Advanced Technology</h2>
          <p className="text-lg md:text-xl mb-6 text-pretty">
            At Ramchandra Transport, we leverage state-of-the-art technology to optimize every aspect of your supply
            chain. From real-time tracking and predictive analytics to automated warehousing systems, our innovative
            solutions ensure efficiency, transparency, and security.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            Our commitment to technological advancement allows us to provide unparalleled service, reduce operational
            costs, and deliver your goods with precision and speed. We continuously invest in the latest tools to stay
            ahead in a dynamic global market.
          </p>
        </div>
        <div>
          <img
            src="/placeholder.svg?key=technology"
            alt="Technology in Logistics"
            className="rounded-lg object-cover w-full h-[400px]"
          />
        </div>
      </div>
    </section>
  )
}
