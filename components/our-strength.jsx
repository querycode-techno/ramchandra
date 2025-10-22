export default function OurStrength() {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Who We Are</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-pretty">
        Ramchandra Transport is a global logistics and supply chain partner built on trust, innovation, and excellence. With years of experience and a dedicated team, we provide seamless solutions across air, ocean, road, and warehousing.
        </p>
        
        {/* Mission and Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-6 border border-blue-200/50 dark:border-blue-800/50">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-100">Our Mission</h3>
            <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
              Deliver smarter supply chains with reliability and visibility.
            </p>
          </div>

          {/* Values */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-6 border border-green-200/50 dark:border-green-800/50">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">Our Values</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { name: "Integrity", icon: "🛡️" },
                { name: "Innovation", icon: "💡" },
                { name: "Excellence", icon: "⭐" },
                { name: "Customer Focus", icon: "👥" },
                { name: "Sustainability", icon: "🌱" }
              ].map((value, index) => (
                <div key={index} className="flex items-center space-x-1 bg-white/50 dark:bg-gray-800/50 rounded-md px-2 py-1 backdrop-blur-sm">
                  <span className="text-sm">{value.icon}</span>
                  <span className="text-xs font-semibold text-green-800 dark:text-green-200">{value.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img src="/global-reach-icon.jpg" alt="Global Reach Icon" className="mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Global Reach</h3>
            <p className="text-center text-muted-foreground">
              Extensive network spanning continents, ensuring your cargo reaches its destination, no matter how far.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/advanced-technology-icon.jpg" alt="Advanced Technology Icon" className="mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Advanced Technology</h3>
            <p className="text-center text-muted-foreground">
              Utilizing the latest innovations in logistics to provide real-time tracking and optimized routes.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/expert-team-icon.png" alt="Expert Team Icon" className="mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Expert Team</h3>
            <p className="text-center text-muted-foreground">
              A team of seasoned professionals dedicated to handling your logistics needs with precision and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
