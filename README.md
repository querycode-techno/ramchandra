# Ramchandra Transport Website

Modern logistics website built with Next.js, JavaScript, and Tailwind CSS with integrated email functionality.

---

## 📧 Email Integration Setup (IMPORTANT!)

All 3 contact forms are integrated with **Brevo email service**. Each form sends:
- Admin notification email (to your inbox)
- Customer auto-reply email (to customer)

### Quick Setup (2 Steps)

#### 1. Create `.env.local` File

Create a file named `.env.local` in the project root folder.

**Content:**
```env
BREVO_API_KEY=your-brevo-api-key-here
BREVO_SENDER_EMAIL=your-email@example.com
BREVO_SENDER_NAME=Your Company Name

NEXT_PUBLIC_COMPANY_NAME=Your Company Name
NEXT_PUBLIC_COMPANY_EMAIL=your-email@example.com
NEXT_PUBLIC_COMPANY_PHONE=+91 XXXXX XXXXX
NEXT_PUBLIC_COMPANY_ADDRESS=Your Company Address
NEXT_PUBLIC_COMPANY_WEBSITE=https://yourwebsite.com

COMPANY_NAME=Your Company Name
COMPANY_EMAIL=your-email@example.com
COMPANY_PHONE=+91 XXXXX XXXXX
COMPANY_ADDRESS=Your Company Address
COMPANY_WEBSITE=https://yourwebsite.com
```

#### 2. Restart Development Server

```bash
npm run dev
```

**All pages, forms, and emails will automatically use these values!**

---

### ✅ What Uses .env.local

**ALL contact information comes from .env.local only:**

- ✅ Contact page - phone, email, address
- ✅ Quote request page - phone, email, address  
- ✅ Privacy page - phone, email, address
- ✅ Terms page - phone, email, address
- ✅ Connect with us - phone, email, address
- ✅ Email templates - company info
- ✅ Email API - sending emails

**ONE email everywhere:** Value from `.env.local`

---

### Forms with Email Integration

1. **Contact Form** (`/contact`) - General inquiries
2. **Quote Request Form** (`/request-quote`) - Quote requests
3. **Quick Contact Form** (Homepage/Footer) - Quick messages

---

### To Update for Client

Edit `.env.local` file with client's information and update all the values.

Then restart the server. **Done!** All pages update automatically.

---

### Email Features

✅ Beautiful HTML email templates  
✅ Admin notification emails  
✅ Customer auto-reply emails  
✅ Mobile-responsive email designs  
✅ Professional branding  
✅ Colorful gradient toast notifications
✅ All info from .env.local only

---

### Getting Brevo API Key

1. Sign up at [Brevo](https://www.brevo.com/)
2. Go to Settings → API Keys: https://app.brevo.com/settings/keys/api
3. Create a new API key
4. Copy and paste into `.env.local`
5. Verify your sender email in Brevo dashboard

**Free Plan:** 300 emails/day

---

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## 🎨 UI Components (Shadcn)

This project uses the following shadcn/ui components:

- **Button** - Call-to-action buttons
- **DropdownMenu** - Navigation dropdown
- **Card** - Services, technology display
- **NavigationMenu** - Main navigation
- **Sheet** - Mobile navigation
- **Carousel** - Client logos
- **Input / Textarea** - Contact forms
- **Label / Form** - Form elements
- **Dialog** - Modals
- **Avatar** - User profiles
- **Separator** - Content separation
- **AspectRatio** - Image ratios
- **Badge** - Informational tags
- **ScrollArea** - Scrollable content
- **Tooltip** - Interactive tooltips

---

## 📁 Project Structure

```
ramchandra/
├── app/
│   ├── api/
│   │   ├── contact/route.js        # Contact form API
│   │   ├── quote/route.js          # Quote request API
│   │   └── quick-contact/route.js  # Quick contact API
│   ├── contact/page.jsx            # Contact page
│   ├── request-quote/page.jsx      # Quote request page
│   └── ...
├── components/
│   ├── connect-with-us.jsx         # Quick contact form
│   ├── header.jsx
│   ├── site-footer.jsx
│   └── ui/                         # Shadcn UI components
├── lib/
│   └── email-config.js             # Email configuration & templates
├── .env.local                      # ⚠️ CREATE THIS FILE!
└── README.md
```

---

## 🔧 Technologies Used

- **Next.js 14+** - React framework
- **JavaScript** - Programming language
- **Tailwind CSS** - Styling
- **Shadcn UI** - UI components
- **Brevo API** - Email service
- **Lucide Icons** - Icon library

---

## 📝 Important Notes

⚠️ **Security**: Never commit `.env.local` to Git (already in `.gitignore`)  
⚠️ **Email Verification**: Sender email must be verified in Brevo dashboard  
⚠️ **Server Restart**: Always restart server after editing `.env.local`
⚠️ **No Hardcoded Values**: All contact info reads from `.env.local` only

---

## 📧 Email API Files

- `lib/email-config.js` - Configuration & beautiful HTML email templates
- `app/api/contact/route.js` - Contact form API
- `app/api/quote/route.js` - Quote request API
- `app/api/quick-contact/route.js` - Quick contact API

---

**Ready to use!** Just create `.env.local` and start the dev server. 🚀
