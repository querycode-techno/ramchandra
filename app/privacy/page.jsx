import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { Shield, Lock, Eye, Database, Mail, Phone } from "lucide-react"

export const metadata = {
  title: "Privacy Policy - Ramchandra Transport",
  description: "Privacy Policy and data protection information for Ramchandra Transport",
}

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-blue-950 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
                Privacy Policy
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
                At Ramchandra Transport, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Information We Collect</h2>
              </div>
              
              <div className="space-y-6 bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                  <p className="text-muted-foreground mb-3">
                    When you use our services or contact us, we may collect:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Company name and business details</li>
                    <li>Shipment and cargo information</li>
                    <li>Payment and billing information</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
                  <p className="text-muted-foreground mb-3">
                    When you visit our website, we automatically collect:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website and search terms</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">How We Use Your Information</h2>
              </div>
              
              <div className="space-y-4 bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="text-muted-foreground mb-4">
                  We use the collected information for the following purposes:
                </p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Service Delivery</h4>
                      <p className="text-muted-foreground text-sm">
                        To provide, maintain, and improve our logistics services
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Communication</h4>
                      <p className="text-muted-foreground text-sm">
                        To respond to inquiries, provide quotes, and send service updates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Order Processing</h4>
                      <p className="text-muted-foreground text-sm">
                        To process shipments, track cargo, and manage deliveries
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Analytics</h4>
                      <p className="text-muted-foreground text-sm">
                        To analyze website usage and improve user experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Marketing</h4>
                      <p className="text-muted-foreground text-sm">
                        To send promotional materials and updates (with your consent)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Legal Compliance</h4>
                      <p className="text-muted-foreground text-sm">
                        To comply with legal obligations and protect our rights
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Data Security</h2>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information, including:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span className="text-muted-foreground">Encryption of data in transit and at rest</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span className="text-muted-foreground">Regular security assessments and updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span className="text-muted-foreground">Access controls and authentication measures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span className="text-muted-foreground">Employee training on data protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span className="text-muted-foreground">Secure backup and recovery procedures</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Information Sharing and Disclosure</h2>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="text-muted-foreground mb-4">
                  We may share your information with:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Service Providers</h4>
                    <p className="text-muted-foreground text-sm">
                      Third-party companies that help us operate our business (e.g., shipping carriers, payment processors, email services)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Business Partners</h4>
                    <p className="text-muted-foreground text-sm">
                      Partners who assist in providing logistics services to you
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Legal Requirements</h4>
                    <p className="text-muted-foreground text-sm">
                      When required by law, court order, or government regulations
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Business Transfers</h4>
                    <p className="text-muted-foreground text-sm">
                      In connection with a merger, acquisition, or sale of assets
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Your Rights</h2>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-muted-foreground">Access and receive a copy of your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-muted-foreground">Correct inaccurate or incomplete information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-muted-foreground">Request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-muted-foreground">Object to processing of your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-muted-foreground">Restrict processing of your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-muted-foreground">Data portability (receive your data in a structured format)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-muted-foreground">Withdraw consent at any time</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Cookies and Tracking Technologies</h2>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to improve your browsing experience. You can control cookies through your browser settings.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2">Essential Cookies</h4>
                    <p className="text-muted-foreground text-sm">
                      Required for website functionality and security
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                    <p className="text-muted-foreground text-sm">
                      Help us understand how visitors use our website
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Marketing Cookies</h4>
                    <p className="text-muted-foreground text-sm">
                      Used to deliver relevant advertisements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Children's Privacy</h2>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="text-muted-foreground">
                  Our services are not directed to children under 18 years of age. We do not knowingly collect personal information from children. 
                  If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Changes to This Privacy Policy</h2>
              
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. 
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Contact Us</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL}`} className="text-blue-600 hover:underline">
                    {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                  </a>
                </div>    
                <div className="flex items-start gap-3 mt-4">
                  <div className="w-5 h-5 text-blue-600 mt-1">📍</div>
                  <div className="text-muted-foreground">
                    {process.env.NEXT_PUBLIC_COMPANY_NAME}<br />
                    {process.env.NEXT_PUBLIC_COMPANY_ADDRESS}
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

