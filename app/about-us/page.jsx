import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"

const principles = [
  {
    title: "Bias for Action",
    description: "We never over-think. We act decisively and constantly iterate.",
  },
  {
    title: "Impact",
    description: "We take it as a challenge to create a disruptive impact on India's supply chain industry.",
  },
  {
    title: "Ownership",
    description: "We expect every employee to act like an owner of the company.",
  },
  {
    title: "Cost Consciousness",
    description: "We use our resources responsibly to ensure efficiency and maximum productivity.",
  },
  {
    title: "Innovation",
    description: "We aim to set unique benchmarks and create valuable propositions our customers truly need.",
  },
  {
    title: "Integrity",
    description: "We focus on taking the right path and ensure everyone at RTS is accountable, responsible, and trustworthy.",
  },
]

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <section className="bg-background py-20 text-foreground md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
                <div className="lg:order-2">
                  <div className="relative">
                    <img
                      src="large-distribution-center.jpg"
                      alt="About Us Image"
                      className="h-[450px] w-full rounded-xl object-cover shadow-lg lg:h-[500px]"
                    />
                  </div>
                </div>
                <div className="space-y-6 text-center lg:order-1 lg:text-left">
                  <div className="space-y-4">
                    <h2 className="text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
                      About Us
                    </h2>
                    <div className="mx-auto h-1 w-20 bg-primary lg:mx-0" />
                  </div>
                  <div className="space-y-6 text-lg leading-relaxed md:text-xl">
                    <p className="text-pretty">
                      Ramchandra Transport is a global logistics and supply chain partner built on trust,
                      innovation, and excellence. With years of experience and a dedicated team, we provide
                      seamless solutions across air, ocean, road, and warehousing.
                    </p>
                    <p className="text-pretty text-muted-foreground">
                      Our commitment to quality, innovation, and customer satisfaction drives us to deliver seamless
                      logistics solutions across all modes of transportation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission and Values Section */}
              <div className="mt-16">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {/* Mission */}
                  <div className="rounded-xl border border-blue-200/50 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:border-blue-800/50 dark:from-blue-950/20 dark:to-indigo-950/20">
                    <div className="mb-4 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-3 text-center text-xl font-bold text-blue-900 dark:text-blue-100">
                      Our Mission
                    </h3>
                    <p className="text-center text-sm leading-relaxed text-blue-800 dark:text-blue-200">
                      Deliver smarter supply chains with reliability and visibility.
                    </p>
                  </div>

                  {/* Values */}
                  <div className="rounded-xl border border-green-200/50 bg-gradient-to-br from-green-50 to-emerald-50 p-6 dark:border-green-800/50 dark:from-green-950/20 dark:to-emerald-950/20">
                    <div className="mb-4 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-4 text-center text-xl font-bold text-green-900 dark:text-green-100">
                      Our Values
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {[
                        { name: "Integrity", icon: "🛡️" },
                        { name: "Innovation", icon: "💡" },
                        { name: "Excellence", icon: "⭐" },
                        { name: "Customer Focus", icon: "👥" },
                        { name: "Sustainability", icon: "🌱" },
                      ].map((value, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-1 rounded-md bg-white/50 px-2 py-1 backdrop-blur-sm dark:bg-gray-800/50"
                        >
                          <span className="text-sm">{value.icon}</span>
                          <span className="text-xs font-semibold text-green-800 dark:text-green-200">{value.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Principles Section */}
              <section className="mt-20 rounded-3xl border border-border bg-card px-6 py-12 shadow-sm sm:px-10">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-4xl font-bold text-balance md:text-5xl">Our Principles</h2>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {principles.map((principle) => (
                    <div
                      key={principle.title}
                      className="rounded-2xl border border-border bg-background/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <h3 className="text-xl font-semibold text-foreground">{principle.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}