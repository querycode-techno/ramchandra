export default function SiteFooter() {
  const year = new Date().getFullYear()
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
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/about-us/team" className="hover:underline">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/about-us/careers" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Execution</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/execution/contract-logistics" className="hover:underline">
                  Contract Logistics
                </a>
              </li>
              <li>
                <a href="/execution/express-logistics" className="hover:underline">
                  Express Logistics
                </a>
              </li>
              <li>
                <a href="/execution/last-mile" className="hover:underline">
                  Last Mile Delivery
                </a>
              </li>
              <li>
                <a href="/execution/after-market" className="hover:underline">
                  After Market
                </a>
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
            <a href="/privacy" className="hover:underline">
              Privacy
            </a>
            <a href="/terms" className="hover:underline">
              Terms
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
