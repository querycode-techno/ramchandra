// ============================================
// CLIENT-SIDE CONFIGURATION
// ============================================
// This file makes environment variables available
// to client components in production
// ============================================

export const config = {
  company: {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME,
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
    phone: process.env.NEXT_PUBLIC_COMPANY_PHONE,
    address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS,
    website: process.env.NEXT_PUBLIC_COMPANY_WEBSITE,
  }
}

