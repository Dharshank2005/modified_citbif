"use client"

import type React from "react"

import { Mail, Phone, MapPin, Send, Clock, Globe, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    category: "General Inquiry",
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Chennai Institute of Technology",
        "Sarathy Nagar, Kundrathur",
        "Chennai - 600069",
        "Tamil Nadu, India",
      ],
      color: "from-[#FF6B35] to-[#FFB347]",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 999 469 1313 (Director)", "+91 44 2478 1111 (Main)", "+91 44 2478 2222 (Support)"],
      color: "from-[#FFB347] to-[#FF6B35]",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["citbif@citchennai.net", "info@citbif.in", "support@citbif.in"],
      color: "from-[#FF6B35] to-[#FFB347]",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
      color: "from-[#FFB347] to-[#FF6B35]",
    },
  ]

  const departments = [
    {
      name: "Innovation & Incubation",
      head: "Mr. S. Gokulakrishnan",
      email: "citbif@citchennai.net",
      phone: "+91 999 469 1313",
      description: "Director of Innovation and overall incubation programs",
    },
    {
      name: "Research & Development",
      head: "Dr. R. Rajkamal",
      email: "rajkamal@citchennai.net",
      phone: "+91 44 2478 1111",
      description: "Head of Innovation & Incubation Initiatives",
    },
    {
      name: "Incubation Management",
      head: "Dr. Dhanesh Babu S.D",
      email: "dhanesh@citchennai.net",
      phone: "+91 44 2478 1111",
      description: "Incubation Manager and startup support",
    },
    {
      name: "Innovation Programs",
      head: "Dr. B. Priya",
      email: "priya@citchennai.net",
      phone: "+91 44 2478 1111",
      description: "Innovation Manager and program coordination",
    },
  ]

  const quickLinks = [
    { title: "Apply for Incubation", description: "Start your startup journey with us", action: "Apply Now" },
    { title: "Schedule a Visit", description: "Tour our facilities and labs", action: "Book Tour" },
    { title: "Partnership Inquiry", description: "Explore collaboration opportunities", action: "Partner" },
    { title: "Media & Press", description: "Press releases and media kit", action: "Media Kit" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 animate-pulse-glow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1B120A] text-shimmer">Contact Us</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto mb-8 animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] max-w-4xl mx-auto leading-relaxed">
              Get in touch with us for collaborations, inquiries, or to learn more about our innovation ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-bounce-in stagger-${index + 1} relative overflow-hidden`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${info.color} opacity-10 rounded-bl-full`}
                ></div>
                <div className="relative z-10">
                  <info.icon className="h-12 w-12 text-[#FF6B35] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-[#FF6B35] mb-4 group-hover:text-[#FFB347] transition-colors duration-300">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-white text-sm group-hover:text-gray-200 transition-colors duration-300"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="bg-[#1B120A] p-10 rounded-3xl border border-[#FFB347]/50 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8 text-[#FF6B35]">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-white mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-white mb-3">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="category" className="block text-sm font-semibold text-white mb-3">
                          Inquiry Type
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Incubation Application">Incubation Application</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Media & Press">Media & Press</option>
                          <option value="Technical Support">Technical Support</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-white mb-3">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-white mb-3">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-6 py-4 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white resize-none transition-all duration-300"
                        placeholder="Please provide details about your inquiry..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white py-4 rounded-xl font-semibold btn-animate hover-lift group text-lg"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Map & Quick Actions */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Map */}
              <div className="bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-bl from-[#FFB347]/20 to-transparent rounded-full"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-[#FF6B35]">Find Us</h3>
                  <div className="bg-gray-300 h-64 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20"></div>
                    <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-xl px-6 py-3 btn-animate hover-lift group z-10">
                      Open in Google Maps
                      <Globe className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#FF6B35]/20 to-transparent rounded-full"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-[#FF6B35]">Quick Actions</h3>
                  <div className="space-y-4">
                    {quickLinks.map((link, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-[#2a2a2a] rounded-xl border border-[#FFB347]/20 hover:border-[#FF6B35]/40 transition-all duration-300 group"
                      >
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-[#FFB347] transition-colors duration-300">
                            {link.title}
                          </h4>
                          <p className="text-gray-300 text-sm">{link.description}</p>
                        </div>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white rounded-lg"
                        >
                          {link.action}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Department Contacts</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-${index + 1} relative overflow-hidden`}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#FF6B35] mb-2 group-hover:text-[#FFB347] transition-colors duration-300">
                    {dept.name}
                  </h3>
                  <h4 className="text-lg font-semibold text-white mb-2">{dept.head}</h4>
                  <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {dept.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#FFB347]">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{dept.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#FFB347]">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{dept.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">
              Ready to Start Your Innovation Journey?
            </h2>
            <p className="text-xl text-[#1B120A] mb-8 leading-relaxed">
              Connect with us today and become part of our thriving innovation ecosystem
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group">
                Schedule a Meeting
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-4 text-lg transition-all duration-300"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}