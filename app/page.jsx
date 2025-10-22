import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import OurStrength from "@/components/our-strength"
import OurServices from "@/components/our-services"
import AboutUs from "@/components/about"
import OurCoreValues from "@/components/our-core-values"
import OurNetwork from "@/components/our-network"
import Technology from "@/components/technology"
import OurClients from "@/components/our-clients" // Import OurClients component
import ConnectWithUs from "@/components/connect-with-us"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <HeroCarousel />
        <OurStrength />
        <OurServices />
        <AboutUs />
        <OurCoreValues />
        <OurNetwork />
        <Technology />
        <OurClients />
        <ConnectWithUs />
      </main>
      <SiteFooter />
    </div>
  )
}
