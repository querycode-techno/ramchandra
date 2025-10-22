"use client"

import { useState } from 'react'
import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { 
  Send, 
  CheckCircle, 
  Truck, 
  Package, 
  Globe, 
  Clock, 
  Calculator,
  FileText,
  Phone,
  Mail,
  MapPin
} from "lucide-react"

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    
    // Service Requirements
    serviceType: '',
    industry: '',
    origin: '',
    destination: '',
    frequency: '',
    
    // Cargo Details
    cargoType: '',
    weight: '',
    volume: '',
    specialRequirements: '',
    
    // Additional Information
    timeline: '',
    budget: '',
    additionalInfo: ''
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
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Quote Request Submitted! 🎉",
        description: "Thank you for your request. Our team will review your requirements and provide a customized quote within 24 hours.",
        duration: 5000,
      })
      
      // Reset form
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        website: '',
        serviceType: '',
        industry: '',
        origin: '',
        destination: '',
        frequency: '',
        cargoType: '',
        weight: '',
        volume: '',
        specialRequirements: '',
        timeline: '',
        budget: '',
        additionalInfo: ''
      })
    }, 2000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-blue-950 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Request a Quote
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get a customized logistics solution tailored to your business needs. Our experts will provide you with competitive pricing and optimal service recommendations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Free Quote</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">24hr Response</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium">No Obligation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">Get Your Custom Quote</h2>
              <p className="text-muted-foreground">
                      Fill out the form below with your logistics requirements and we'll provide you with a detailed quote.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Company Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <FileText className="w-5 h-5 text-blue-600" />
                        Company Information
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-foreground">Company Name *</label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200"
                            placeholder="Enter your company name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-foreground">Contact Person *</label>
                          <input
                            type="text"
                            name="contactPerson"
                            value={formData.contactPerson}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-foreground">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200"
                            placeholder="your.email@company.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-foreground">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200"
                            placeholder="+91 12345 67890"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-foreground">Website</label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200"
                          placeholder="https://www.yourcompany.com"
                        />
                      </div>
                    </div>

                    {/* Service Requirements */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <Truck className="w-5 h-5 text-blue-600" />
                        Service Requirements
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-foreground">Service Type *</label>
                          <select 
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200"
                          >
                            <option value="">Select service type</option>
                            <option value="air-freight">Air Freight</option>
                            <option value="ocean-freight">Ocean Freight</option>
                            <option value="road-freight">Road Freight</option>
                            <option value="warehousing">Warehousing</option>
                            <option value="customs-brokerage">Customs Brokerage</option>
                            <option value="supply-chain-consulting">Supply Chain Consulting</option>
                            <option value="express-logistics">Express Logistics</option>
                            <option value="last-mile">Last Mile Delivery</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-foreground">Industry *</label>
                          <select 
                            name="industry"
                            value={formData.industry}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200"
                          >
                            <option value="">Select industry</option>
                            <option value="fmcg">FMCG</option>
                            <option value="fmcd">FMCD</option>
                            <option value="e-commerce">E-Commerce</option>
                            <option value="telecom">Telecom</option>
                            <option value="pharmaceutical">Pharmaceutical</option>
                            <option value="beverages">Beverages</option>
                            <option value="automotive">Automotive</option>
                            <option value="textiles">Textiles</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-foreground">Origin *</label>
                          <input
                            type="text"
                            name="origin"
                            value={formData.origin}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200"
                            placeholder="City, Country"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-foreground">Destination *</label>
                          <input
                            type="text"
                            name="destination"
                            value={formData.destination}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200"
                            placeholder="City, Country"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-foreground">Shipment Frequency</label>
                        <select 
                          name="frequency"
                          value={formData.frequency}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200"
                        >
                          <option value="">Select frequency</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                          <option value="quarterly">Quarterly</option>
                          <option value="one-time">One-time</option>
                        </select>
                      </div>
                    </div>

                    {/* Cargo Details */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <Package className="w-5 h-5 text-blue-600" />
                        Cargo Details
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-foreground">Cargo Type</label>
                          <input
                            type="text"
                            name="cargoType"
                            value={formData.cargoType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200"
                            placeholder="e.g., Electronics, Textiles, Machinery"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-foreground">Weight (kg)</label>
                          <input
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200"
                            placeholder="Enter weight in kg"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-foreground">Volume (CBM)</label>
                          <input
                            type="number"
                            name="volume"
                            value={formData.volume}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200"
                            placeholder="Enter volume in CBM"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-foreground">Timeline</label>
                          <select 
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200"
                          >
                            <option value="">Select timeline</option>
                            <option value="urgent">Urgent (1-3 days)</option>
                            <option value="standard">Standard (1-2 weeks)</option>
                            <option value="flexible">Flexible (1 month+)</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-foreground">Special Requirements</label>
                        <textarea
                          name="specialRequirements"
                          value={formData.specialRequirements}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200 resize-none"
                          placeholder="Temperature control, hazardous materials, insurance requirements, etc."
                        />
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <Globe className="w-5 h-5 text-blue-600" />
                        Additional Information
                      </h3>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-foreground">Budget Range</label>
                        <select 
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under ₹10,000</option>
                          <option value="10k-50k">₹10,000 - ₹50,000</option>
                          <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                          <option value="1l-5l">₹1,00,000 - ₹5,00,000</option>
                          <option value="5l-plus">₹5,00,000+</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-foreground">Additional Information</label>
                        <textarea
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background transition-all duration-200 resize-none"
                          placeholder="Any additional requirements, questions, or specific needs..."
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Submitting Request...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Quote Request
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Need Immediate Help?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Call Us</div>
                        <a className="text-muted-foreground hover:text-blue-600 transition-colors" href="tel:+911234567890">
                          +91 12345 67890
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Email Us</div>
                        <a className="text-muted-foreground hover:text-green-600 transition-colors" href="mailto:quotes@ramchandratransport.com">
                          quotes@ramchandratransport.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Visit Us</div>
                        <p className="text-muted-foreground text-sm">
                          Ramchandra Transport<br />
                          New Delhi, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Why Choose Us?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Competitive pricing with transparent costs</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">24/7 customer support</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Global network coverage</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Real-time tracking</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Insurance coverage</span>
                    </div>
                  </div>
                </div>

                {/* Process */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Our Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <span className="text-sm text-muted-foreground">Submit your requirements</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <span className="text-sm text-muted-foreground">We analyze your needs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <span className="text-sm text-muted-foreground">Receive customized quote</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <span className="text-sm text-muted-foreground">Start your logistics journey</span>
                    </div>
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
