import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import WhatsAppChat from "@/components/whatsapp-chat"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata = {
  title: "Ramchandra Transport",
  description: "Your Trusted Logistics Partner",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>{children}</Suspense>
        <WhatsAppChat />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
