import Link from "next/link"
import { AtSign, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function SiteFooter() {
  const year = new Date().getFullYear()
  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61581460526366",
      label: "Facebook",
      icon: Facebook,
    },
    {
      href: "https://www.youtube.com/@RamChandraTransport",
      label: "YouTube",
      icon: Youtube,
    },
    {
      href: "https://x.com/RamChandraTrans",
      label: "X (Twitter)",
      icon: Twitter,
    },
    {
      href: "https://www.threads.com/@ramchandratransport",
      label: "Threads",
      icon: AtSign,
    },
    {
      href: "https://www.instagram.com/ramchandratransport/",
      label: "Instagram",
      icon: Instagram,
    },
    {
      href: "https://www.linkedin.com/in/ram-chandra-7a4a99386/",
      label: "LinkedIn",
      icon: Linkedin,
    },
  ]
  return (
    <footer className="border-t border-border bg-background" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Ramchandra Transport logo" className="h-20 w-20" />
              <span className="font-semibold">Ramchandra Transport</span>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Empowering global supply chains with dependable logistics and technology-driven visibility.
            </p>
            <ul className="flex flex-wrap items-center gap-3 pt-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition hover:border-primary/60 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:underline">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="hover:underline">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Execution</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/execution/contract-logistics" className="hover:underline">
                  Contract Logistics
                </Link>
              </li>
              <li>
                <Link href="/execution/express-logistics" className="hover:underline">
                  Express Logistics
                </Link>
              </li>
              <li>
                <Link href="/execution/last-mile" className="hover:underline">
                  Last Mile Delivery
                </Link>
              </li>
              <li>
                <Link href="/execution/after-market" className="hover:underline">
                  After Market
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Advisory</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/advisory/descriptiveAnalytics" className="hover:underline">
                  Descriptive Analytics
                </a>
              </li>
              <li>
                <a href="/advisory/predictiveAnalytics" className="hover:underline">
                  Predictive Analytics
                </a>
              </li>
              <li>
                <a href="/advisory/prescriptiveAnalytics" className="hover:underline">
                  Prescriptive Analytics
                </a>
              </li>
              <li>
                <a href="/advisory/supplyChain" className="hover:underline">
                  Supply Chain
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">© {year} Ramchandra Transport. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
