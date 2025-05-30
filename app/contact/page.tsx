"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  FileText,
  Calendar,
  HelpCircle,
  Users,
  Building,
  Briefcase,
} from "lucide-react"
import Navbar from "@/components/navbar"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState("general")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredAction, setHoveredAction] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Your message has been sent successfully!")
  }

  const contactInfo = [
    {
      title: "Email Us",
      icon: Mail,
      details: "info@citil.edu.in",
      action: "Send Email",
      link: "mailto:info@citil.edu.in",
    },
    {
      title: "Call Us",
      icon: Phone,
      details: "+91 9876543210",
      action: "Call Now",
      link: "tel:+919876543210",
    },
    {
      title: "Visit Us",
      icon: MapPin,
      details: "Chennai, Tamil Nadu, India",
      action: "Get Directions",
      link: "https://maps.google.com",
    },
    {
      title: "Office Hours",
      icon: Clock,
      details: "Mon-Fri: 9AM - 5PM",
      action: "View Schedule",
      link: "#schedule",
    },
  ]

  const departments = [
    {
      name: "General Inquiries",
      id: "general",
      email: "info@citil.edu.in",
      phone: "+91 9876543210",
      contact: "Dr. Rajesh Kumar",
      position: "Director",
    },
    {
      name: "Admissions",
      id: "admissions",
      email: "admissions@citil.edu.in",
      phone: "+91 9876543211",
      contact: "Ms. Priya Sharma",
      position: "Admissions Officer",
    },
    {
      name: "Research",
      id: "research",
      email: "research@citil.edu.in",
      phone: "+91 9876543212",
      contact: "Dr. Anand Verma",
      position: "Research Director",
    },
    {
      name: "Industry Relations",
      id: "industry",
      email: "industry@citil.edu.in",
      phone: "+91 9876543213",
      contact: "Mr. Suresh Menon",
      position: "Industry Liaison Officer",
    },
    {
      name: "Media & Press",
      id: "media",
      email: "media@citil.edu.in",
      phone: "+91 9876543214",
      contact: "Ms. Lakshmi Nair",
      position: "Media Relations Manager",
    },
  ]

  const quickActions = [
    {
      title: "Send Message",
      icon: MessageSquare,
      description: "Send us a quick message or inquiry",
      link: "#contact-form",
      color: "from-[#FF6B35] to-[#FFB347]",
    },
    {
      title: "Request Brochure",
      icon: FileText,
      description: "Download our latest brochure",
      link: "#brochure",
      color: "from-[#FFB347] to-[#FF6B35]",
    },
    {
      title: "Schedule Visit",
      icon: Calendar,
      description: "Plan a visit to our campus",
      link: "#schedule-visit",
      color: "from-[#FF6B35] to-[#FFB347]",
    },
    {
      title: "FAQs",
      icon: HelpCircle,
      description: "Find answers to common questions",
      link: "#faqs",
      color: "from-[#FFB347] to-[#FF6B35]",
    },
    {
      title: "Join Our Team",
      icon: Users,
      description: "Explore career opportunities",
      link: "#careers",
      color: "from-[#FF6B35] to-[#FFB347]",
    },
    {
      title: "Partner With Us",
      icon: Building,
      description: "Collaboration opportunities for organizations",
      link: "#partnerships",
      color: "from-[#FFB347] to-[#FF6B35]",
    },
    {
      title: "Investor Relations",
      icon: Briefcase,
      description: "Information for potential investors",
      link: "#investors",
      color: "from-[#FF6B35] to-[#FFB347]",
    },
    {
      title: "Media Kit",
      icon: FileText,
      description: "Resources for media professionals",
      link: "#media-kit",
      color: "from-[#FFB347] to-[#FF6B35]",
    },
  ]

  const activeTabData = departments.find((dept) => dept.id === activeTab)

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-4 h-4 bg-[#FF6B35]/20 rounded-full animate-float"
          style={{
            left: `${mousePosition.x * 0.01}px`,
            top: `${mousePosition.y * 0.01}px`,
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute w-6 h-6 bg-[#FFB347]/15 rounded-full animate-float"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            animationDelay: "1s",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 animate-pulse-glow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1B120A] text-shimmer animate-wiggle">
              Get In Touch
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto mb-8 animate-scale-in hover:w-48 transition-all duration-500"></div>
            <p className="text-xl text-[#1B120A] max-w-4xl mx-auto leading-relaxed transform hover:scale-105 transition-transform duration-300">
              We'd love to hear from you. Reach out to us for any inquiries, collaborations, or information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-[#FFB347]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-[#1B120A] rounded-3xl p-8 text-white border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-bounce-in stagger-1 relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">{item.details}</p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-[#FF6B35]/20 to-[#FFB347]/20 hover:from-[#FF6B35]/30 hover:to-[#FFB347]/30 text-white border border-[#FFB347]/50 hover:border-[#FF6B35] rounded-xl btn-animate group"
                  >
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.action}
                      <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions - IMPROVED HEXAGON LAYOUT */}
      <section className="py-20 bg-[#E8E4C9]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Quick Actions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] mt-6 max-w-3xl mx-auto">
              Fast access to our most requested services and information
            </p>
          </div>

          <div className="improved-hexagon-grid max-w-6xl mx-auto">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.link}
                className={`improved-hexagon-item bg-[#1B120A] border border-[#FFB347]/50 hover:border-[#FF6B35] shadow-xl animate-fade-in stagger-${(index % 8) + 1}`}
                onMouseEnter={() => setHoveredAction(action.title)}
                onMouseLeave={() => setHoveredAction(null)}
              >
                <div className="relative h-full w-full p-6 flex flex-col items-center justify-center text-center">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-10 rounded-2xl transition-opacity duration-500 ${
                      hoveredAction === action.title ? "opacity-20" : "opacity-10"
                    }`}
                  ></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-full flex items-center justify-center mb-4 transform transition-all duration-500 ${
                        hoveredAction === action.title ? "scale-110" : ""
                      }`}
                    >
                      <action.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3
                      className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        hoveredAction === action.title ? "text-[#FFB347]" : "text-[#FF6B35]"
                      }`}
                    >
                      {action.title}
                    </h3>
                    <p
                      className={`text-sm transition-opacity duration-500 ${
                        hoveredAction === action.title ? "opacity-100" : "opacity-80"
                      } text-white`}
                    >
                      {action.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Department Tabs & Contact Form */}
      <section className="py-20 bg-[#FFB347]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Department Tabs */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1B120A]">Contact Departments</h2>
              <div className="bg-[#1B120A] rounded-3xl p-6 border border-[#FFB347]/50 shadow-xl">
                <div className="flex flex-wrap gap-2 mb-6">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setActiveTab(dept.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeTab === dept.id
                          ? "bg-gradient-to-r from-[#FF6B35] to-[#FFB347] text-white"
                          : "bg-[#2a1f1a] text-gray-300 hover:bg-[#2a1f1a]/80"
                      }`}
                    >
                      {dept.name}
                    </button>
                  ))}
                </div>

                {activeTabData && (
                  <div className="text-white animate-fade-in">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#FF6B35] mb-2">{activeTabData.name}</h3>
                      <p className="text-gray-300 mb-4">Contact: {activeTabData.contact}</p>
                      <p className="text-gray-400 text-sm">{activeTabData.position}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-[#2a1f1a] rounded-xl p-4 border border-[#FFB347]/20 hover:border-[#FF6B35]/40 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center gap-3 mb-2">
                          <Mail className="h-5 w-5 text-[#FFB347]" />
                          <h4 className="font-semibold text-[#FFB347]">Email</h4>
                        </div>
                        <a
                          href={`mailto:${activeTabData.email}`}
                          className="text-white hover:text-[#FF6B35] transition-colors duration-300"
                        >
                          {activeTabData.email}
                        </a>
                      </div>

                      <div className="bg-[#2a1f1a] rounded-xl p-4 border border-[#FFB347]/20 hover:border-[#FF6B35]/40 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center gap-3 mb-2">
                          <Phone className="h-5 w-5 text-[#FFB347]" />
                          <h4 className="font-semibold text-[#FFB347]">Phone</h4>
                        </div>
                        <a
                          href={`tel:${activeTabData.phone}`}
                          className="text-white hover:text-[#FF6B35] transition-colors duration-300"
                        >
                          {activeTabData.phone}
                        </a>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white rounded-xl btn-animate group">
                        Contact {activeTabData.name}
                        <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1B120A]">Send Us a Message</h2>
              <form
                onSubmit={handleSubmit}
                className="bg-[#1B120A] rounded-3xl p-8 border border-[#FFB347]/50 shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-[#FFB347] mb-2 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#2a1f1a] border border-[#FFB347]/30 focus:border-[#FF6B35] rounded-xl p-3 text-white outline-none transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#FFB347] mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#2a1f1a] border border-[#FFB347]/30 focus:border-[#FF6B35] rounded-xl p-3 text-white outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-[#FFB347] mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#2a1f1a] border border-[#FFB347]/30 focus:border-[#FF6B35] rounded-xl p-3 text-white outline-none transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-[#FFB347] mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#2a1f1a] border border-[#FFB347]/30 focus:border-[#FF6B35] rounded-xl p-3 text-white outline-none transition-all duration-300"
                      placeholder="Inquiry about..."
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#FFB347] mb-2 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-[#2a1f1a] border border-[#FFB347]/30 focus:border-[#FF6B35] rounded-xl p-3 text-white outline-none transition-all duration-300 resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white rounded-xl py-4 text-lg btn-animate group ripple"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#E8E4C9]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Visit Our Campus</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] mt-6 max-w-3xl mx-auto">
              We're located in the heart of Chennai, easily accessible by public transportation
            </p>
          </div>

          <div className="bg-[#1B120A] rounded-3xl p-4 border border-[#FFB347]/50 shadow-xl overflow-hidden animate-bounce-in">
            <div className="aspect-video w-full rounded-2xl overflow-hidden">
              {/* Replace with actual map or iframe */}
              <div className="w-full h-full bg-[#2a1f1a] flex items-center justify-center">
                <p className="text-white text-lg">Interactive Map Will Be Displayed Here</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#1B120A] rounded-3xl p-6 border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                  Address
                </h3>
              </div>
              <p className="text-white">
                123 Innovation Street
                <br />
                Chennai - 600001
                <br />
                Tamil Nadu, India
              </p>
            </div>

            <div className="bg-[#1B120A] rounded-3xl p-6 border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                  Office Hours
                </h3>
              </div>
              <ul className="text-white space-y-2">
                <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                <li>Saturday: 9:00 AM - 1:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            <div className="bg-[#1B120A] rounded-3xl p-6 border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-3">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-full flex items-center justify-center">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                  Need Help?
                </h3>
              </div>
              <p className="text-white mb-4">
                Our support team is available to assist you with any questions or concerns.
              </p>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-[#FF6B35]/20 to-[#FFB347]/20 hover:from-[#FF6B35]/30 hover:to-[#FFB347]/30 text-white border border-[#FFB347]/50 hover:border-[#FF6B35] rounded-xl btn-animate group"
              >
                <a href="#contact-form">
                  Contact Support
                  <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFB347]/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Ready to Collaborate?</h2>
            <p className="text-xl text-[#1B120A] mb-8 leading-relaxed transform hover:scale-105 transition-transform duration-300">
              Join us in our mission to innovate and transform the future through technology and education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group ripple">
                Schedule a Meeting
                <Calendar className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Explore Partnerships
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
