import React from 'react'
import { FaChartLine, FaTruck, FaShieldAlt, FaBuilding, FaBox, FaArrowRight, FaPhone, FaEnvelope, FaAt } from "react-icons/fa"
import { HiOutlineArrowRight } from "react-icons/hi"
const connect = () => {
  return (
    <div>
      {/* Connect With Us Section */}
      <section className="py-20 md:py-32 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="lg:order-2">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?key=contact-person"
                      alt="Contact Person"
                      className="rounded-xl object-cover w-full h-[450px] lg:h-[500px] shadow-lg"
                    />
                    <div className="absolute top-4 right-4 flex flex-col gap-3">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <FaPhone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <FaEnvelope className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <FaAt className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-blue-600">
                      Connect With Us
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
                  </div>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Services</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                        <option>Select a service</option>
                        <option>Predictive Analytics</option>
                        <option>Descriptive Analytics</option>
                        <option>Prescriptive Analytics</option>
                        <option>Transportation Optimization</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Enter your message"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      Submit
                      <FaArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
            </div>
          </div>
        </div>
        </section>
    </div>
  )
}

export default connect
