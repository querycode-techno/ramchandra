export default function OurNetwork() {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Global Network</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-pretty">
          With a vast and strategically located network, Ramchandra Transport ensures seamless connectivity and
          efficient delivery across the globe.
        </p>
        <div className="relative w-full max-w-5xl mx-auto">
          <img
            src="/placeholder.svg?key=global-map"
            alt="Global Logistics Network Map"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
            <p className="text-white text-2xl md:text-3xl font-bold text-balance">
              Connecting Continents, Delivering Trust
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
