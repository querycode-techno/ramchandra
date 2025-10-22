"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ConnectWithUs() {
  return (
    <section aria-labelledby="connect-title" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h2 id="connect-title" className="text-2xl sm:text-3xl font-semibold text-balance">
              Connect with us
            </h2>
            <p className="text-muted-foreground text-pretty">
              We’d love to learn about your supply chain goals. Reach out and our team will get back to you promptly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/request-quote">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-muted-foreground mt-1" aria-hidden="true" />
              <div>
                <div className="font-medium">Phone</div>
                <a className="text-muted-foreground hover:underline" href="tel:+911234567890">
                  +91 12345 67890
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-muted-foreground mt-1" aria-hidden="true" />
              <div>
                <div className="font-medium">Email</div>
                <a className="text-muted-foreground hover:underline" href="mailto:info@patliputralogistics.com">
                  info@patliputralogistics.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground mt-1" aria-hidden="true" />
              <div>
                <div className="font-medium">Address</div>
                <p className="text-muted-foreground">
                  Ramchandra Transport, 1st Floor, Business Park, New Delhi, India
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border p-4 sm:p-6">
            <form className="space-y-4" action="/contact">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  aria-label="Your name"
                  placeholder="Your name"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  aria-label="Email address"
                  placeholder="Email address"
                  type="email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <textarea
                aria-label="How can we help?"
                placeholder="How can we help?"
                rows={4}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <Button type="submit" className="inline-flex items-center gap-2">
                <Send className="h-4 w-4" aria-hidden="true" />
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
