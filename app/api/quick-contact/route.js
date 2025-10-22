import { NextResponse } from 'next/server'
import { emailConfig, getQuickContactEmailTemplate } from '@/lib/email-config'

export async function POST(request) {
  try {
    const formData = await request.json()
    const templates = getQuickContactEmailTemplate(formData)

    // Send email to admin
    const adminEmailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': emailConfig.apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: emailConfig.senderName,
          email: emailConfig.senderEmail,
        },
        to: [
          {
            email: emailConfig.senderEmail,
            name: emailConfig.senderName,
          },
        ],
        subject: templates.adminEmail.subject,
        htmlContent: templates.adminEmail.htmlContent,
      }),
    })

    if (!adminEmailResponse.ok) {
      const error = await adminEmailResponse.json()
      console.error('Brevo API Error:', error)
      throw new Error('Failed to send email')
    }

    // Send auto-reply to customer
    const customerEmailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': emailConfig.apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: emailConfig.senderName,
          email: emailConfig.senderEmail,
        },
        to: [
          {
            email: formData.email,
            name: formData.name,
          },
        ],
        subject: templates.customerEmail.subject,
        htmlContent: templates.customerEmail.htmlContent,
      }),
    })

    if (!customerEmailResponse.ok) {
      console.error('Customer email failed')
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

