// ============================================
// BREVO EMAIL CONFIGURATION
// ============================================
// 
// All configuration is loaded from .env.local file
//
// TO CHANGE: Edit .env.local file in project root
//
// ============================================

export const emailConfig = {
  apiKey: process.env.BREVO_API_KEY,
  senderEmail: process.env.BREVO_SENDER_EMAIL,
  senderName: process.env.BREVO_SENDER_NAME,
  companyName: process.env.COMPANY_NAME,
  companyPhone: process.env.COMPANY_PHONE,
  companyAddress: process.env.COMPANY_ADDRESS,
  companyWebsite: process.env.COMPANY_WEBSITE,
}

// Email Templates
export const getContactEmailTemplate = (formData) => {
  return {
    // Email to admin
    adminEmail: {
      subject: `New Contact Form Submission from ${formData.name}`,
      htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                📧 New Contact Form Submission
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 24px; font-size: 16px; color: #374151; line-height: 1.6;">
                You have received a new contact form submission from your website.
              </p>
              
              <!-- Contact Details -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #f9fafb; border-left: 4px solid #2563eb;">
                    <h2 style="margin: 0 0 16px; font-size: 18px; color: #1f2937;">Contact Information</h2>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280; width: 140px;">Full Name:</td>
                        <td style="padding: 8px 0; color: #1f2937;">${formData.name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Email:</td>
                        <td style="padding: 8px 0; color: #1f2937;">
                          <a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none;">${formData.email}</a>
                        </td>
                      </tr>
                      ${formData.phone ? `
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Phone:</td>
                        <td style="padding: 8px 0; color: #1f2937;">
                          <a href="tel:${formData.phone}" style="color: #2563eb; text-decoration: none;">${formData.phone}</a>
                        </td>
                      </tr>
                      ` : ''}
                      ${formData.company ? `
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Company:</td>
                        <td style="padding: 8px 0; color: #1f2937;">${formData.company}</td>
                      </tr>
                      ` : ''}
                      ${formData.service ? `
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Service Interest:</td>
                        <td style="padding: 8px 0; color: #1f2937;">${formData.service}</td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #fef3c7; border-left: 4px solid #f59e0b;">
                    <h3 style="margin: 0 0 12px; font-size: 16px; color: #1f2937;">Message:</h3>
                    <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
                  </td>
                </tr>
              </table>
              
              <!-- Call to Action -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td align="center" style="padding: 24px 0;">
                    <a href="mailto:${formData.email}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      Reply to ${formData.name}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px; background-color: #f9fafb; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 14px; color: #6b7280;">
                This email was sent from the contact form on ${emailConfig.companyWebsite}
              </p>
              <p style="margin: 8px 0 0; font-size: 12px; color: #9ca3af;">
                ${new Date().toLocaleString()}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `
    },
    
    // Auto-reply to customer
    customerEmail: {
      subject: `Thank you for contacting ${emailConfig.companyName}!`,
      htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0 0 8px; color: #ffffff; font-size: 32px; font-weight: bold;">
                ${emailConfig.companyName}
              </h1>
              <p style="margin: 0; color: #e0e7ff; font-size: 16px;">Your Trusted Logistics Partner</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 16px; font-size: 24px; color: #1f2937;">
                Hello ${formData.name}! 👋
              </h2>
              
              <p style="margin: 0 0 16px; font-size: 16px; color: #374151; line-height: 1.6;">
                Thank you for reaching out to us! We've received your message and our team is already reviewing it.
              </p>
              
              <div style="margin: 24px 0; padding: 20px; background-color: #dbeafe; border-left: 4px solid #2563eb; border-radius: 4px;">
                <p style="margin: 0; font-size: 16px; color: #1e40af; font-weight: 600;">
                  ✅ We'll get back to you within 24 hours
                </p>
              </div>
              
              <p style="margin: 24px 0 16px; font-size: 16px; color: #374151; line-height: 1.6;">
                In the meantime, feel free to explore our services or reach out to us directly:
              </p>
              
              <!-- Contact Info Cards -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 24px 0;">
                <tr>
                  <td style="padding: 16px; background-color: #f9fafb; border-radius: 8px;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="font-size: 20px;">📞</span>
                          <strong style="color: #1f2937; margin-left: 8px;">Phone:</strong>
                          <br>
                          <a href="tel:${emailConfig.companyPhone}" style="color: #2563eb; text-decoration: none; margin-left: 32px;">${emailConfig.companyPhone}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="font-size: 20px;">✉️</span>
                          <strong style="color: #1f2937; margin-left: 8px;">Email:</strong>
                          <br>
                          <a href="mailto:${emailConfig.senderEmail}" style="color: #2563eb; text-decoration: none; margin-left: 32px;">${emailConfig.senderEmail}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="font-size: 20px;">📍</span>
                          <strong style="color: #1f2937; margin-left: 8px;">Address:</strong>
                          <br>
                          <span style="color: #6b7280; margin-left: 32px;">${emailConfig.companyAddress}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 32px 0;">
                <tr>
                  <td align="center">
                    <a href="${emailConfig.companyWebsite}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      Visit Our Website
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 24px 0 0; font-size: 16px; color: #374151; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #1f2937;">The ${emailConfig.companyName} Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px; background-color: #1f2937; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 14px; color: #9ca3af;">
                © ${new Date().getFullYear()} ${emailConfig.companyName}. All rights reserved.
              </p>
              <p style="margin: 0; font-size: 12px; color: #6b7280;">
                ${emailConfig.companyAddress}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `
    }
  }
}

export const getQuoteEmailTemplate = (formData) => {
  return {
    // Email to admin
    adminEmail: {
      subject: `New Quote Request from ${formData.companyName}`,
      htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                💼 New Quote Request
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <!-- Company Information -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #f0fdf4; border-left: 4px solid #10b981;">
                    <h2 style="margin: 0 0 16px; font-size: 18px; color: #1f2937;">Company Information</h2>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280; width: 160px;">Company Name:</td>
                        <td style="padding: 8px 0; color: #1f2937;">${formData.companyName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Contact Person:</td>
                        <td style="padding: 8px 0; color: #1f2937;">${formData.contactPerson}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Email:</td>
                        <td style="padding: 8px 0; color: #1f2937;">
                          <a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none;">${formData.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Phone:</td>
                        <td style="padding: 8px 0; color: #1f2937;">
                          <a href="tel:${formData.phone}" style="color: #2563eb; text-decoration: none;">${formData.phone}</a>
                        </td>
                      </tr>
                      ${formData.website ? `
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Website:</td>
                        <td style="padding: 8px 0; color: #1f2937;">
                          <a href="${formData.website}" style="color: #2563eb; text-decoration: none;">${formData.website}</a>
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Service Requirements -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #dbeafe; border-left: 4px solid #3b82f6;">
                    <h2 style="margin: 0 0 16px; font-size: 18px; color: #1f2937;">Service Requirements</h2>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280; width: 160px;">Service Type:</td>
                        <td style="padding: 8px 0; color: #1f2937;">${formData.serviceType}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Industry:</td>
                        <td style="padding: 8px 0; color: #1f2937;">${formData.industry}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Route:</td>
                        <td style="padding: 8px 0; color: #1f2937;">${formData.origin} → ${formData.destination}</td>
                      </tr>
                      ${formData.frequency ? `
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Frequency:</td>
                        <td style="padding: 8px 0; color: #1f2937;">${formData.frequency}</td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Cargo Details -->
              ${formData.cargoType || formData.weight || formData.volume ? `
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #fef3c7; border-left: 4px solid #f59e0b;">
                    <h2 style="margin: 0 0 16px; font-size: 18px; color: #1f2937;">Cargo Details</h2>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      ${formData.cargoType ? `
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280; width: 160px;">Cargo Type:</td>
                        <td style="padding: 8px 0; color: #1f2937;">${formData.cargoType}</td>
                      </tr>
                      ` : ''}
                      ${formData.weight ? `
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Weight:</td>
                        <td style="padding: 8px 0; color: #1f2937;">${formData.weight} kg</td>
                      </tr>
                      ` : ''}
                      ${formData.volume ? `
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Volume:</td>
                        <td style="padding: 8px 0; color: #1f2937;">${formData.volume} CBM</td>
                      </tr>
                      ` : ''}
                      ${formData.timeline ? `
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Timeline:</td>
                        <td style="padding: 8px 0; color: #1f2937;">${formData.timeline}</td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
              ` : ''}
              
              <!-- Additional Information -->
              ${formData.specialRequirements || formData.budget || formData.additionalInfo ? `
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #fce7f3; border-left: 4px solid #ec4899;">
                    <h2 style="margin: 0 0 16px; font-size: 18px; color: #1f2937;">Additional Information</h2>
                    ${formData.budget ? `
                    <p style="margin: 0 0 12px; color: #374151;">
                      <strong style="color: #6b7280;">Budget Range:</strong> ${formData.budget}
                    </p>
                    ` : ''}
                    ${formData.specialRequirements ? `
                    <p style="margin: 0 0 12px; color: #374151;">
                      <strong style="color: #6b7280;">Special Requirements:</strong><br>
                      <span style="white-space: pre-wrap;">${formData.specialRequirements}</span>
                    </p>
                    ` : ''}
                    ${formData.additionalInfo ? `
                    <p style="margin: 0; color: #374151;">
                      <strong style="color: #6b7280;">Additional Info:</strong><br>
                      <span style="white-space: pre-wrap;">${formData.additionalInfo}</span>
                    </p>
                    ` : ''}
                  </td>
                </tr>
              </table>
              ` : ''}
              
              <!-- Call to Action -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td align="center" style="padding: 24px 0;">
                    <a href="mailto:${formData.email}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      Prepare Quote for ${formData.companyName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px; background-color: #f9fafb; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 14px; color: #6b7280;">
                This quote request was submitted from ${emailConfig.companyWebsite}
              </p>
              <p style="margin: 8px 0 0; font-size: 12px; color: #9ca3af;">
                ${new Date().toLocaleString()}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `
    },
    
    // Auto-reply to customer
    customerEmail: {
      subject: `Thank you for your quote request - ${emailConfig.companyName}`,
      htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0;">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0 0 8px; color: #ffffff; font-size: 32px; font-weight: bold;">
                ${emailConfig.companyName}
              </h1>
              <p style="margin: 0; color: #e0e7ff; font-size: 16px;">Your Trusted Logistics Partner</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 16px; font-size: 24px; color: #1f2937;">
                Hello ${formData.contactPerson}! 👋
              </h2>
              
              <p style="margin: 0 0 16px; font-size: 16px; color: #374151; line-height: 1.6;">
                Thank you for requesting a quote from <strong>${emailConfig.companyName}</strong>! We've received your requirements and our logistics experts are already working on preparing a customized solution for you.
              </p>
              
              <!-- Request Summary -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 24px 0;">
                <tr>
                  <td style="padding: 20px; background-color: #f0fdf4; border-left: 4px solid #10b981; border-radius: 4px;">
                    <h3 style="margin: 0 0 12px; font-size: 18px; color: #1f2937;">Your Request Summary</h3>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 6px 0; font-weight: 600; color: #6b7280;">Service:</td>
                        <td style="padding: 6px 0; color: #1f2937;">${formData.serviceType}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-weight: 600; color: #6b7280;">Route:</td>
                        <td style="padding: 6px 0; color: #1f2937;">${formData.origin} → ${formData.destination}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-weight: 600; color: #6b7280;">Industry:</td>
                        <td style="padding: 6px 0; color: #1f2937;">${formData.industry}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- What's Next -->
              <div style="margin: 24px 0; padding: 20px; background-color: #dbeafe; border-left: 4px solid #3b82f6; border-radius: 4px;">
                <h3 style="margin: 0 0 12px; font-size: 18px; color: #1f2937;">What Happens Next?</h3>
                <ol style="margin: 0; padding-left: 20px; color: #374151;">
                  <li style="margin-bottom: 8px;">Our team reviews your requirements</li>
                  <li style="margin-bottom: 8px;">We prepare a customized quote</li>
                  <li style="margin-bottom: 8px;">You'll receive a detailed proposal within 24 hours</li>
                  <li>We discuss and refine the solution together</li>
                </ol>
              </div>
              
              <p style="margin: 24px 0 16px; font-size: 16px; color: #374151; line-height: 1.6;">
                Need immediate assistance? Feel free to contact us:
              </p>
              
              <!-- Contact Info -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 24px 0;">
                <tr>
                  <td style="padding: 16px; background-color: #f9fafb; border-radius: 8px;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="font-size: 20px;">📞</span>
                          <strong style="color: #1f2937; margin-left: 8px;">Phone:</strong>
                          <br>
                          <a href="tel:${emailConfig.companyPhone}" style="color: #2563eb; text-decoration: none; margin-left: 32px;">${emailConfig.companyPhone}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="font-size: 20px;">✉️</span>
                          <strong style="color: #1f2937; margin-left: 8px;">Email:</strong>
                          <br>
                          <a href="mailto:${emailConfig.senderEmail}" style="color: #2563eb; text-decoration: none; margin-left: 32px;">${emailConfig.senderEmail}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 32px 0;">
                <tr>
                  <td align="center">
                    <a href="${emailConfig.companyWebsite}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      Visit Our Website
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 24px 0 0; font-size: 16px; color: #374151; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #1f2937;">The ${emailConfig.companyName} Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px; background-color: #1f2937; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 14px; color: #9ca3af;">
                © ${new Date().getFullYear()} ${emailConfig.companyName}. All rights reserved.
              </p>
              <p style="margin: 0; font-size: 12px; color: #6b7280;">
                ${emailConfig.companyAddress}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `
    }
  }
}

export const getQuickContactEmailTemplate = (formData) => {
  return {
    // Email to admin
    adminEmail: {
      subject: `Quick Contact: ${formData.name}`,
      htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                ⚡ Quick Contact Message
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 24px; font-size: 16px; color: #374151; line-height: 1.6;">
                Someone has reached out via the quick contact form on your website.
              </p>
              
              <!-- Contact Details -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #faf5ff; border-left: 4px solid #8b5cf6;">
                    <h2 style="margin: 0 0 16px; font-size: 18px; color: #1f2937;">Contact Details</h2>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280; width: 100px;">Name:</td>
                        <td style="padding: 8px 0; color: #1f2937;">${formData.name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Email:</td>
                        <td style="padding: 8px 0; color: #1f2937;">
                          <a href="mailto:${formData.email}" style="color: #8b5cf6; text-decoration: none;">${formData.email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #fce7f3; border-left: 4px solid #ec4899;">
                    <h3 style="margin: 0 0 12px; font-size: 16px; color: #1f2937;">Message:</h3>
                    <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
                  </td>
                </tr>
              </table>
              
              <!-- Call to Action -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td align="center" style="padding: 24px 0;">
                    <a href="mailto:${formData.email}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      Reply Now
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px; background-color: #f9fafb; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 14px; color: #6b7280;">
                Sent from quick contact form on ${emailConfig.companyWebsite}
              </p>
              <p style="margin: 8px 0 0; font-size: 12px; color: #9ca3af;">
                ${new Date().toLocaleString()}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `
    },
    
    // Auto-reply to customer
    customerEmail: {
      subject: `Thanks for reaching out - ${emailConfig.companyName}`,
      htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0 0 8px; color: #ffffff; font-size: 32px; font-weight: bold;">
                ${emailConfig.companyName}
              </h1>
              <p style="margin: 0; color: #fae8ff; font-size: 16px;">Your Trusted Logistics Partner</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 16px; font-size: 24px; color: #1f2937;">
                Hi ${formData.name}! 👋
              </h2>
              
              <p style="margin: 0 0 16px; font-size: 16px; color: #374151; line-height: 1.6;">
                Thanks for getting in touch! We've received your message and someone from our team will reach out to you shortly.
              </p>
              
              <div style="margin: 24px 0; padding: 20px; background-color: #faf5ff; border-left: 4px solid #8b5cf6; border-radius: 4px;">
                <p style="margin: 0; font-size: 16px; color: #6b21a8; font-weight: 600;">
                  ⚡ Quick response within a few hours
                </p>
              </div>
              
              <p style="margin: 24px 0 16px; font-size: 16px; color: #374151; line-height: 1.6;">
                Need immediate assistance? Contact us directly:
              </p>
              
              <!-- Contact Info -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 24px 0;">
                <tr>
                  <td style="padding: 16px; background-color: #f9fafb; border-radius: 8px;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="font-size: 20px;">📞</span>
                          <a href="tel:${emailConfig.companyPhone}" style="color: #8b5cf6; text-decoration: none; margin-left: 8px; font-weight: 600;">${emailConfig.companyPhone}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="font-size: 20px;">✉️</span>
                          <a href="mailto:${emailConfig.senderEmail}" style="color: #8b5cf6; text-decoration: none; margin-left: 8px; font-weight: 600;">${emailConfig.senderEmail}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 24px 0 0; font-size: 16px; color: #374151; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #1f2937;">The ${emailConfig.companyName} Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px; background-color: #1f2937; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 14px; color: #9ca3af;">
                © ${new Date().getFullYear()} ${emailConfig.companyName}. All rights reserved.
              </p>
              <p style="margin: 0; font-size: 12px; color: #6b7280;">
                ${emailConfig.companyAddress}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `
    }
  }
}

