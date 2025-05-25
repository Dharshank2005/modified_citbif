"use client"

import { Mail, Phone, MapPin, Send, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import PageTransition from "@/components/page-transition"
import Link from "next/link"

export default function Contact() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1B120A] animate-slide-in-left mb-6">
              CONTACT <span className="text-[#FF6B35] text-shimmer">US</span>
            </h1>
            <p className="text-xl text-[#1B120A] max-w-3xl mx-auto animate-slide-in-right">
              Get in touch with our team for collaborations and inquiries
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="bg-[#FFB347]/10 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-[#1B120A] p-8 rounded-xl border border-[#FFB347]/50 shadow-lg card-hover hover-lift scroll-animate">
                <h3 className="text-2xl font-bold mb-6 text-[#FF6B35]">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Organization</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                        placeholder="Your Organization"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Inquiry Type</label>
                    <select className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300">
                      <option>Select Inquiry Type</option>
                      <option>Incubation Program</option>
                      <option>Partnership Opportunity</option>
                      <option>Mentorship</option>
                      <option>Funding Support</option>
                      <option>General Inquiry</option>
                      <option>Media & Press</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Subject *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Message *</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white resize-none transition-all duration-300"
                      placeholder="Please provide detailed information about your inquiry..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="newsletter" className="mr-2" />
                    <label htmlFor="newsletter" className="text-sm text-gray-300">
                      Subscribe to our newsletter for updates
                    </label>
                  </div>

                  <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white py-3 btn-animate hover-lift group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 scroll-animate stagger-2">
                <div className="bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 shadow-lg card-hover hover-lift">
                  <h3 className="text-xl font-bold mb-6 text-[#FF6B35]">Contact Information</h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: MapPin,
                        title: "Main Campus",
                        content: [
                          "Chennai Institute of Technology",
                          "Sarathy Nagar, Kundrathur",
                          "Chennai - 600069",
                          "Tamil Nadu, India",
                        ],
                      },
                      {
                        icon: Mail,
                        title: "Email Addresses",
                        content: [
                          "General: info@citil.in",
                          "Incubation: incubation@citil.in",
                          "Partnerships: partnerships@citil.in",
                          "Support: support@citil.in",
                        ],
                      },
                      {
                        icon: Phone,
                        title: "Phone Numbers",
                        content: [
                          "Main Office: +91 44 2478 1111",
                          "Incubation: +91 44 2478 2222",
                          "WhatsApp: +91 98765 43210",
                        ],
                      },
                      {
                        icon: Clock,
                        title: "Office Hours",
                        content: [
                          "Monday - Friday: 9:00 AM - 6:00 PM",
                          "Saturday: 9:00 AM - 1:00 PM",
                          "Sunday: Closed",
                          "Emergency: 24/7 Support Available",
                        ],
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="bg-[#FF6B35]/20 p-3 rounded-lg hover:bg-[#FF6B35]/30 transition-all duration-300 hover:scale-110">
                          <item.icon className="h-6 w-6 text-[#FF6B35]" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-2 text-white">{item.title}</h4>
                          {item.content.map((line, lineIndex) => (
                            <p key={lineIndex} className="text-white text-sm mb-1">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 shadow-lg card-hover hover-lift">
                  <h3 className="text-xl font-bold mb-4 text-[#FF6B35]">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link href="/incubate">
                      <Button className="w-full bg-[#FF6B35]/20 hover:bg-[#FF6B35] text-[#FF6B35] hover:text-white border border-[#FF6B35] btn-animate">
                        Apply for Incubation
                      </Button>
                    </Link>
                    <Link href="/startups">
                      <Button className="w-full bg-[#FFB347]/20 hover:bg-[#FFB347] text-[#FFB347] hover:text-white border border-[#FFB347] btn-animate">
                        View Our Startups
                      </Button>
                    </Link>
                    <Link href="/gallery">
                      <Button className="w-full bg-[#1B120A] hover:bg-[#FFB347]/20 text-white hover:text-[#FFB347] border border-[#FFB347]/50 btn-animate">
                        Explore Gallery
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="bg-[#E8E4C9]/30 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Find Us</h2>
              <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
            </div>

            <div className="bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 h-96 relative overflow-hidden shadow-lg hover-lift">
              <div className="absolute inset-0 bg-[url('/map.png')] opacity-70 bg-cover bg-center image-hover"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#1B120A]/90 p-6 rounded-xl text-center">
                  <h3 className="text-white font-bold mb-2">Chennai Institute of Technology</h3>
                  <p className="text-gray-300 text-sm mb-4">Sarathy Nagar, Kundrathur, Chennai</p>
                  <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white btn-animate hover-lift group">
                    Open in Google Maps
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
