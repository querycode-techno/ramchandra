"use client"

import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { config } from "@/lib/config"
import { FileText, AlertCircle, Scale, Truck, Mail, Phone } from "lucide-react"

export default function TermsAndConditions() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-slate-900 dark:to-purple-950 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
                Terms & Conditions
              </h1>
              <p className="text-lg text-muted-foreground">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground">
                Please read these Terms and Conditions carefully before using Ramchandra Transport services. 
                By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of these terms, 
                you may not access our services.
              </p>
            </div>

            {/* Agreement Alert */}
            <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 p-6 rounded-xl mb-12">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notice</h3>
                  <p className="text-amber-800 dark:text-amber-200 text-sm">
                    By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, 
                    as well as our Privacy Policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Definitions */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">1. Definitions</h2>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700 space-y-4">
                <div>
                  <span className="font-semibold">"Company", "We", "Us", "Our"</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Refers to Ramchandra Transport, the logistics service provider.
                  </p>
                </div>
                <div>
                  <span className="font-semibold">"Customer", "You", "Your"</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Refers to the individual or entity using our services.
                  </p>
                </div>
                <div>
                  <span className="font-semibold">"Services"</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Refers to all logistics, transportation, warehousing, and related services provided by Ramchandra Transport.
                  </p>
                </div>
                <div>
                  <span className="font-semibold">"Cargo" or "Goods"</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Refers to items, products, or materials transported or stored through our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Terms */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">2. Service Terms</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-4">2.1 Service Scope</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>We provide logistics, transportation, warehousing, and related services as agreed upon in service contracts or quotations.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Services are subject to availability and may be modified or discontinued at our discretion.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Specific service details, rates, and terms will be outlined in individual service agreements.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-4">2.2 Customer Responsibilities</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Provide accurate and complete information about cargo, including weight, dimensions, and contents.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Ensure proper packaging and labeling of goods according to industry standards.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Comply with all applicable laws, regulations, and customs requirements.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Provide necessary documentation for shipment and customs clearance.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pricing and Payment */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">3. Pricing and Payment</h2>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">3.1 Pricing</h4>
                  <p className="text-muted-foreground text-sm">
                    Prices for services are provided in quotations and may vary based on cargo specifications, distance, service type, and other factors. 
                    All prices are subject to change without prior notice unless locked in a written agreement.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3.2 Payment Terms</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    Payment terms will be specified in service agreements. Generally:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm ml-4">
                    <li>• Payment is due as per agreed terms (typically 30 days from invoice date)</li>
                    <li>• Late payments may incur interest charges</li>
                    <li>• We reserve the right to withhold services for overdue payments</li>
                    <li>• Additional charges may apply for extra services or special handling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3.3 Taxes and Duties</h4>
                  <p className="text-muted-foreground text-sm">
                    Customers are responsible for all applicable taxes, duties, customs fees, and other charges unless otherwise agreed in writing.
                  </p>
                </div>
              </div>
            </div>

            {/* Liability */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">4. Liability and Insurance</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-4">4.1 Limitation of Liability</h3>
                  <p className="text-muted-foreground mb-4">
                    Our liability for loss, damage, or delay to cargo is limited as follows:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Maximum liability is limited to the declared value of goods or statutory limits, whichever is lower.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>We are not liable for indirect, consequential, or special damages.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Claims must be filed within specified timeframes as per service agreements.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-4">4.2 Insurance</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Customers are strongly advised to obtain adequate insurance coverage for their cargo.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>We can facilitate cargo insurance upon request at additional cost.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Basic carrier liability coverage is included as per statutory requirements.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Prohibited Items */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">5. Prohibited and Restricted Items</h2>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="text-muted-foreground mb-4">
                  The following items are prohibited or require special authorization:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Prohibited Items:</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Illegal drugs and narcotics</li>
                      <li>• Explosives and weapons</li>
                      <li>• Counterfeit goods</li>
                      <li>• Hazardous materials (without proper authorization)</li>
                      <li>• Perishable goods (without proper arrangements)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-amber-600">Restricted Items:</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Alcoholic beverages</li>
                      <li>• Tobacco products</li>
                      <li>• Pharmaceuticals</li>
                      <li>• Live animals</li>
                      <li>• Valuable items (jewelry, art, etc.)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  Customers must declare all restricted items and obtain necessary permits. We reserve the right to refuse shipment of any items.
                </p>
              </div>
            </div>

            {/* Claims and Disputes */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">6. Claims and Disputes</h2>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">6.1 Filing Claims</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Claims for loss or damage must be filed within 30 days of delivery or scheduled delivery date</li>
                    <li>• Claims must be submitted in writing with supporting documentation</li>
                    <li>• We will investigate and respond to claims within 60 days</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">6.2 Dispute Resolution</h4>
                  <p className="text-muted-foreground text-sm">
                    Any disputes arising from these terms or our services shall be resolved through negotiation. 
                    If negotiation fails, disputes shall be subject to arbitration or jurisdiction as specified in service agreements.
                  </p>
                </div>
              </div>
            </div>

            {/* Cancellation and Termination */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">7. Cancellation and Termination</h2>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">7.1 Cancellation by Customer</h4>
                  <p className="text-muted-foreground text-sm">
                    Customers may cancel services with written notice. Cancellation fees may apply based on timing and services already rendered.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">7.2 Termination by Company</h4>
                  <p className="text-muted-foreground text-sm">
                    We reserve the right to terminate services for non-payment, violation of terms, or if we are unable to fulfill service requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Force Majeure */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">8. Force Majeure</h2>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="text-muted-foreground">
                  We shall not be liable for delays or failure to perform services due to circumstances beyond our reasonable control, including but not limited to:
                  natural disasters, acts of war, terrorism, strikes, government actions, pandemics, or other force majeure events.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">9. Intellectual Property</h2>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="text-muted-foreground mb-4">
                  All content on our website, including text, graphics, logos, images, and software, is the property of Ramchandra Transport and protected by copyright and trademark laws.
                </p>
                <p className="text-muted-foreground">
                  You may not reproduce, distribute, modify, or create derivative works without our express written permission.
                </p>
              </div>
            </div>

            {/* Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">10. Privacy</h2>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="text-muted-foreground">
                  Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, 
                  use, and protect your personal information.
                </p>
              </div>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">11. Modifications to Terms</h2>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. 
                  Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">12. Governing Law</h2>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="text-muted-foreground">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India. 
                  Any legal action or proceeding shall be brought exclusively in the courts of New Delhi, India.
                </p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 p-8 rounded-2xl border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold">Contact Us</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <a href={`mailto:${config.company.email}`} className="text-purple-600 hover:underline">
                    {config.company.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <a href={`tel:${config.company.phone}`} className="text-purple-600 hover:underline">
                    {config.company.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3 mt-4">
                  <div className="w-5 h-5 text-purple-600 mt-1">📍</div>
                  <div className="text-muted-foreground">
                    {config.company.name}<br />
                    {config.company.address}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

