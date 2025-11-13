"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Send, X } from "lucide-react"

const WHATSAPP_NUMBER = "919693662203"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
const REMINDER_MESSAGE = "Need quick help? Start a live chat with us."

const initialFormState = {
  name: "",
  phone: "",
  services: "",
}

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [formState, setFormState] = useState(initialFormState)
  const [showReminder, setShowReminder] = useState(false)
  const [typedReminder, setTypedReminder] = useState("")

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
    setShowReminder(false)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedName = formState.name.trim()
    const trimmedPhone = formState.phone.trim()
    const trimmedServices = formState.services.trim()

    if (!trimmedName || !trimmedPhone || !trimmedServices) {
      return
    }

    const message = `Hello, my name is ${trimmedName}.\nPhone: ${trimmedPhone}\nI am interested in: ${trimmedServices}`
    const encodedMessage = encodeURIComponent(message)

    window.open(`${WHATSAPP_URL}?text=${encodedMessage}`, "_blank", "noopener,noreferrer")

    setFormState(initialFormState)
    setIsOpen(false)
  }

  useEffect(() => {
    const reminderTimer = setTimeout(() => {
      setShowReminder(true)
    }, 20000)

    return () => {
      clearTimeout(reminderTimer)
    }
  }, [])

  useEffect(() => {
    if (!showReminder || typedReminder === REMINDER_MESSAGE) {
      return
    }

    const typingTimer = setInterval(() => {
      setTypedReminder((prev) => REMINDER_MESSAGE.slice(0, prev.length + 1))
    }, 120)

    return () => {
      clearInterval(typingTimer)
    }
  }, [showReminder, typedReminder])

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {isOpen && (
        <div className="w-64 rounded-xl border border-border bg-background p-4 shadow-xl">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">WhatsApp Enquiry</p>
              <p className="text-xs text-muted-foreground">We typically reply within a few minutes.</p>
            </div>
            <button
              type="button"
              onClick={handleToggle}
              aria-label="Close WhatsApp chat"
              className="rounded-full p-1 text-muted-foreground transition hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2.5">
            <input
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              required
              placeholder="Phone number"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              name="services"
              value={formState.services}
              onChange={handleChange}
              required
              placeholder="Services you need"
              rows={3}
              className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Send className="h-4 w-4" />
              Start Chat
            </button>
          </form>
        </div>
      )}

      <div className="relative flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={handleToggle}
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-emerald-500 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60"
        >
          <Image src="/whatsapp.png" alt="WhatsApp" width={38} height={38} priority />
        </button>
        <p
          onClick={handleToggle}
          className="cursor-pointer rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white slow-vibrate hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Live Chat
        </p>

        {showReminder && !isOpen && (
          <div className="reminder-bubble absolute left-20 top-1/2 w-64 -translate-y-1/2 rounded-xl border border-emerald-100 bg-white/95 px-4 py-3 text-sm shadow-lg backdrop-blur">
            <div className="mb-3 flex items-start gap-3">
              <span className="mt-1 h-2 w-2 animate-pulse rounded-full bg-emerald-500" aria-hidden="true" />
              <span className="flex-1 text-sm font-medium text-slate-900">{typedReminder}</span>
              <button
                type="button"
                aria-label="Dismiss reminder"
                className="rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                onClick={() => {
                  setShowReminder(false)
                  setTypedReminder("")
                }}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleToggle}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
            >
              Chat Now
            </button>
          </div>
        )}
      </div>
      <style jsx>{`
        .slow-vibrate {
          display: inline-block;
          animation: slow-vibrate 3s ease-in-out infinite;
        }

        .reminder-bubble::before {
          content: "";
          position: absolute;
          left: -10px;
          top: 50%;
          height: 20px;
          width: 20px;
          transform: translateY(-50%) rotate(45deg);
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.95);
          border-left: 1px solid rgba(16, 185, 129, 0.35);
          border-bottom: 1px solid rgba(16, 185, 129, 0.35);
          box-shadow: -3px 3px 6px rgba(15, 118, 110, 0.12);
        }

        @keyframes slow-vibrate {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-1.5px);
          }
          50% {
            transform: translateX(1.5px);
          }
          75% {
            transform: translateX(-1px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}

