"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ConnectWithUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
        duration: 3000,
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/quick-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "✅ Message Sent!",
          description: "Thanks for reaching out! We'll get back to you soon.",
          duration: 5000,
          className: "bg-gradient-to-r from-purple-500 to-purple-600 text-white border-none",
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      } else {
        toast({
          title: "❌ Error Sending Message",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
          duration: 5000,
          className: "bg-gradient-to-r from-red-500 to-red-600 text-white border-none",
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: "❌ Error Sending Message",
        description: "Unable to send message. Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
        className: "bg-gradient-to-r from-red-500 to-red-600 text-white border-none",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section aria-labelledby="connect-title" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h2 id="connect-title" className="text-2xl sm:text-3xl font-semibold text-balance">
              Connect with us
            </h2>
            <p className="text-muted-foreground text-pretty">
              We'd love to learn about your supply chain goals. Reach out and our team will get back to you promptly.
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
                <a className="text-muted-foreground hover:underline" href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}>
                  {process.env.NEXT_PUBLIC_COMPANY_PHONE}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-muted-foreground mt-1" aria-hidden="true" />
              <div>
                <div className="font-medium">Email</div>
                <a className="text-muted-foreground hover:underline" href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL}`}>
                  {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground mt-1" aria-hidden="true" />
              <div>
                <div className="font-medium">Address</div>
                <p className="text-muted-foreground">
                  {process.env.NEXT_PUBLIC_COMPANY_NAME}, {process.env.NEXT_PUBLIC_COMPANY_ADDRESS}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border p-4 sm:p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-label="Your name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-label="Email address"
                  placeholder="Email address"
                  type="email"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                aria-label="How can we help?"
                placeholder="How can we help?"
                rows={4}
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <Button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Submit
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
