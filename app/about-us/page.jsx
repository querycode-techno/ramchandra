import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"

export default function AboutUs() {
  return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-16">
          <section className="py-20 md:py-32 bg-background text-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                  <div className="lg:order-2">
                    <div className="relative">
                      <img
                        src="/placeholder.svg?key=21234"
                        alt="About Us Image"
                        className="rounded-xl object-cover w-full h-[450px] lg:h-[500px] shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="lg:order-1 text-center lg:text-left space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                        About Us
                      </h2>
                      <div className="w-20 h-1 bg-primary mx-auto lg:mx-0"></div>
                    </div>
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                      <p className="text-pretty">
                      Ramchandra Transport is a global logistics and supply chain partner built on trust, innovation, and excellence. With years of experience and a dedicated team, we provide seamless solutions across air, ocean, road, and warehousing.
                      </p>
                      <p className="text-muted-foreground text-pretty">
                      Our commitment to quality, innovation, and customer satisfaction drives us to deliver seamless logistics solutions across all modes of transportation.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Mission and Values Section */}
                <div className="mt-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Mission */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-6 border border-blue-200/50 dark:border-blue-800/50">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-100 text-center">Our Mission</h3>
                      <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed text-center">
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
                      <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100 text-center">Our Values</h3>
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
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
  )
}
