"use client"

import Image from "next/image"
import { Globe, TrendingUp, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"

export default function MarketPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % startupTestimonials.length)
    }, 5000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(testimonialInterval)
    }
  }, [])

  const globalConnections = [
    {
      region: "North America",
      countries: ["USA", "Canada", "Mexico"],
      partnerships: 15,
      description: "Strong connections with Silicon Valley startups and tech giants",
      icon: "🇺🇸",
      color: "from-[#FF6B35] to-[#FFB347]",
      keyPartners: ["Google", "Microsoft", "Tesla"],
      marketValue: "$2.5B",
    },
    {
      region: "Europe",
      countries: ["Germany", "UK", "Netherlands", "France"],
      partnerships: 12,
      description: "Collaborations with European innovation hubs and research centers",
      icon: "🇪🇺",
      color: "from-[#FFB347] to-[#FF6B35]",
      keyPartners: ["SAP", "Siemens", "ASML"],
      marketValue: "$1.8B",
    },
    {
      region: "Asia Pacific",
      countries: ["Japan", "Singapore", "Australia", "South Korea"],
      partnerships: 20,
      description: "Deep tech partnerships across Asia-Pacific region",
      icon: "🌏",
      color: "from-[#FF6B35] to-[#FFB347]",
      keyPartners: ["Sony", "Samsung", "TSMC"],
      marketValue: "$3.2B",
    },
    {
      region: "Middle East",
      countries: ["UAE", "Israel", "Saudi Arabia", "Qatar"],
      partnerships: 8,
      description: "Growing presence in Middle Eastern innovation ecosystem",
      icon: "🕌",
      color: "from-[#FFB347] to-[#FF6B35]",
      keyPartners: ["Aramco", "Mubadala", "Check Point"],
      marketValue: "$1.2B",
    },
  ]

  const marketOpportunities = [
    {
      sector: "Artificial Intelligence",
      marketSize: "$390B",
      growth: "+15.2%",
      opportunities: ["Machine Learning", "Computer Vision", "NLP", "Robotics"],
      icon: "🤖",
      trend: "Rising",
      projectedGrowth: "25% by 2025",
      keyDrivers: ["Automation", "Data Analytics", "Smart Cities"],
      size: "large",
    },
    {
      sector: "IoT & Smart Cities",
      marketSize: "$650B",
      growth: "+12.8%",
      opportunities: ["Smart Infrastructure", "Connected Devices", "Data Analytics", "Automation"],
      icon: "🏙️",
      trend: "Expanding",
      projectedGrowth: "18% by 2025",
      keyDrivers: ["Urbanization", "5G Networks", "Sustainability"],
      size: "medium",
    },
    {
      sector: "Clean Energy",
      marketSize: "$280B",
      growth: "+18.5%",
      opportunities: ["Solar Technology", "Energy Storage", "Smart Grids", "EV Infrastructure"],
      icon: "⚡",
      trend: "Booming",
      projectedGrowth: "30% by 2025",
      keyDrivers: ["Climate Goals", "Policy Support", "Cost Reduction"],
      size: "medium",
    },
    {
      sector: "Healthcare Tech",
      marketSize: "$450B",
      growth: "+14.3%",
      opportunities: ["Telemedicine", "Medical Devices", "Digital Health", "Biotech"],
      icon: "🏥",
      trend: "Growing",
      projectedGrowth: "22% by 2025",
      keyDrivers: ["Aging Population", "Digital Transformation", "Personalized Medicine"],
      size: "large",
    },
    {
      sector: "Fintech",
      marketSize: "$310B",
      growth: "+16.8%",
      opportunities: ["Digital Payments", "Blockchain", "Robo-advisors", "Insurtech"],
      icon: "💳",
      trend: "Accelerating",
      projectedGrowth: "28% by 2025",
      keyDrivers: ["Digital Banking", "Cryptocurrency", "Financial Inclusion"],
      size: "small",
    },
    {
      sector: "EdTech",
      marketSize: "$180B",
      growth: "+19.2%",
      opportunities: ["Online Learning", "VR/AR Education", "AI Tutoring", "Skill Development"],
      icon: "📚",
      trend: "Surging",
      projectedGrowth: "35% by 2025",
      keyDrivers: ["Remote Learning", "Skill Gap", "Lifelong Learning"],
      size: "small",
    },
  ]

  const startupTestimonials = [
    {
      name: "Dharamraj",
      company: "Datom Technologies",
      role: "Founder & CEO",
      image: "/founder-dharamraj.jpg",
      testimonial:
        "I'm Dharamraj founder of Datom Technologies, a manufacturing organization. Our mission is to revolutionize the manufacturing industry with innovative software and hardware means. CITBIF's global market connections have been instrumental in our international expansion.",
      rating: 5,
      sector: "Manufacturing",
      achievement: "International Expansion",
      revenue: "₹5Cr+",
      employees: "25+",
    },
    {
      name: "STUDIO",
      company: "OAK Studio",
      role: "Founder",
      image: "/founder-studio.jpg",
      testimonial:
        "CITBIF has been a great partner to our business. Their support has accelerated our growth and provided valuable resources. The global market access they provided helped us reach international clients within our first year.",
      rating: 5,
      sector: "Design & Technology",
      achievement: "Global Client Base",
      revenue: "₹3Cr+",
      employees: "15+",
    },
    {
      name: "AREON",
      company: "AREON Networks",
      role: "Founder",
      image: "/founder-areon.jpg",
      testimonial:
        "The support from CITBIF has been instrumental in our growth journey. Their mentorship and resources have been invaluable. The market connections opened doors we never thought possible.",
      rating: 5,
      sector: "Networking",
      achievement: "Market Expansion",
      revenue: "₹2Cr+",
      employees: "12+",
    },
    {
      name: "Karthick Mari Pitchai",
      company: "Karking",
      role: "Founder & CEO",
      image: "/founder-karthick.jpg",
      testimonial:
        "It's wonderful initiative! That's too from first year students. I can see lot of potential from students of CIT, in my opinion CIT will have too many student startups incubated inside in another 3 years of span.",
      rating: 5,
      sector: "Automotive",
      achievement: "Student Innovation",
      revenue: "₹1.5Cr+",
      employees: "8+",
    },
  ]

  const marketServices = [
    {
      title: "Global Market Research",
      description: "Comprehensive market analysis and opportunity identification",
      features: ["Market Size Analysis", "Competitor Research", "Trend Analysis", "Customer Insights"],
      icon: "📊",
      clients: "50+ Startups",
      successRate: "85%",
      avgDuration: "2-4 weeks",
    },
    {
      title: "International Partnerships",
      description: "Facilitating strategic partnerships with global companies",
      features: ["Partner Matching", "Due Diligence", "Contract Negotiation", "Relationship Management"],
      icon: "🤝",
      clients: "35+ Partnerships",
      successRate: "78%",
      avgDuration: "3-6 months",
    },
    {
      title: "Export Assistance",
      description: "Support for international market entry and expansion",
      features: ["Export Documentation", "Regulatory Compliance", "Logistics Support", "Market Entry Strategy"],
      icon: "🌍",
      clients: "25+ Exports",
      successRate: "92%",
      avgDuration: "1-3 months",
    },
    {
      title: "Investor Connect",
      description: "Connecting startups with global investors and VCs",
      features: ["Investor Matching", "Pitch Preparation", "Due Diligence Support", "Funding Strategy"],
      icon: "💰",
      clients: "40+ Connections",
      successRate: "65%",
      avgDuration: "4-8 weeks",
    },
  ]

  const marketStats = [
    { label: "Global Reach", value: "55+", unit: "Countries", icon: "🌍" },
    { label: "Market Value", value: "₹500Cr+", unit: "Accessed", icon: "💰" },
    { label: "Success Rate", value: "82%", unit: "Expansion", icon: "📈" },
    { label: "Partnerships", value: "120+", unit: "Active", icon: "🤝" },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % startupTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + startupTestimonials.length) % startupTestimonials.length)
  }

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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1B120A] text-shimmer">Global Market Connect</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto mb-8 animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] max-w-4xl mx-auto leading-relaxed">
              Connecting startups to global markets and international opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Market Statistics - FLOATING METRICS */}
      <section className="bg-[#FFB347]/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {marketStats.map((stat, index) => (
              <div
                key={index}
                className={`floating-metric bg-[#1B120A] p-6 rounded-2xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-bounce-in stagger-${index + 1} text-center relative overflow-hidden`}
                style={{
                  transform: `translateY(${index % 2 === 0 ? "0" : "20px"})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-[#FFB347]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 animate-float">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#FF6B35] mb-1 group-hover:text-[#FFB347] transition-colors duration-300">
                    {stat.value}
                  </div>
                  <p className="text-white text-sm mb-1">{stat.label}</p>
                  <p className="text-gray-300 text-xs">{stat.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Connections - WORLD MAP LAYOUT */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Our Global Reach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>

          <div className="world-map-container max-w-7xl mx-auto">
            {/* World Map Background */}
            <div className="relative bg-[#1B120A] rounded-3xl p-8 border border-[#FFB347]/50 mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-[#FFB347]/5 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4 animate-float">🗺️</div>
                <h3 className="text-2xl font-bold text-[#FF6B35] mb-2">Global Network</h3>
                <p className="text-white">Connecting startups across 55+ countries worldwide</p>
              </div>
            </div>

            {/* Regional Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {globalConnections.map((connection, index) => (
                <div
                  key={index}
                  className={`region-card bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-${index + 1} relative overflow-hidden`}
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${connection.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {connection.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                          {connection.region}
                        </h3>
                        <div className="flex gap-4 mt-1">
                          <span className="text-[#FFB347] text-sm">{connection.partnerships} Partnerships</span>
                          <span className="text-gray-300 text-sm">{connection.marketValue}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-white mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      {connection.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[#FFB347] mb-2">Key Partners:</h4>
                      <div className="flex flex-wrap gap-2">
                        {connection.keyPartners.map((partner, partnerIndex) => (
                          <span
                            key={partnerIndex}
                            className="bg-[#FF6B35]/20 text-[#FFB347] px-3 py-1 rounded-full text-xs"
                          >
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {connection.countries.map((country, countryIndex) => (
                        <span key={countryIndex} className="bg-[#FFB347]/20 text-white px-2 py-1 rounded-full text-xs">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunities - MASONRY GRID LAYOUT */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Market Opportunities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="masonry-opportunities-grid max-w-7xl mx-auto">
            {marketOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className={`masonry-opportunity-item masonry-${opportunity.size} bg-[#1B120A] p-6 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-bounce-in stagger-${index + 1} relative overflow-hidden`}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {opportunity.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                        {opportunity.sector}
                      </h3>
                      <span className="bg-green-400/20 text-green-400 px-2 py-1 rounded-full text-xs">
                        {opportunity.trend}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xl font-bold text-white">{opportunity.marketSize}</span>
                    <span className="text-green-400 text-sm font-semibold flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {opportunity.growth}
                    </span>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-300 text-sm mb-2">Projected Growth: {opportunity.projectedGrowth}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {opportunity.keyDrivers.map((driver, driverIndex) => (
                        <span
                          key={driverIndex}
                          className="bg-[#FFB347]/20 text-[#FFB347] px-2 py-1 rounded-full text-xs"
                        >
                          {driver}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 flex-1">
                    {opportunity.opportunities.map((opp, oppIndex) => (
                      <div
                        key={oppIndex}
                        className="bg-[#FF6B35]/10 border border-[#FFB347]/30 rounded-lg p-2 text-center group-hover:scale-105 transition-transform duration-300"
                        style={{ transitionDelay: `${oppIndex * 0.1}s` }}
                      >
                        <span className="text-white text-xs">{opp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Services - PERSPECTIVE CARDS LAYOUT */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Market Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="perspective-cards-layout max-w-7xl mx-auto">
            {marketServices.map((service, index) => (
              <div
                key={index}
                className={`perspective-card bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-in-left stagger-${index + 1} relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="flex gap-4 mt-1 text-sm">
                        <span className="text-[#FFB347]">{service.clients}</span>
                        <span className="text-green-400">{service.successRate} Success</span>
                        <span className="text-gray-300">{service.avgDuration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="bg-[#FF6B35]/10 border border-[#FFB347]/30 rounded-lg p-2 text-center group-hover:scale-105 transition-transform duration-300"
                        style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                      >
                        <span className="text-white text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white rounded-xl btn-animate group">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Testimonials - ENHANCED TESTIMONIAL CAROUSEL */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Startup Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons - MOVED AWAY FROM COMPONENT */}
            <button
              onClick={prevTestimonial}
              className="absolute -left-20 top-1/2 -translate-y-1/2 z-40 bg-[#1B120A]/80 hover:bg-[#1B120A] text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#FFB347]/30 hover:border-[#FF6B35] shadow-xl"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute -right-20 top-1/2 -translate-y-1/2 z-40 bg-[#1B120A]/80 hover:bg-[#1B120A] text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#FFB347]/30 hover:border-[#FF6B35] shadow-xl"
            >
              <ChevronRight size={28} />
            </button>

            {/* Enhanced Testimonial Card */}
            <div className="bg-[#1B120A] p-12 rounded-3xl border border-[#FFB347]/50 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full"></div>
              <Quote className="absolute top-6 right-6 h-12 w-12 text-[#FF6B35]/20" />

              <div className="relative z-10">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 overflow-hidden ring-4 ring-[#FFB347]/30">
                        <Image
                          src={startupTestimonials[currentTestimonial].image || "/placeholder.svg"}
                          alt={startupTestimonials[currentTestimonial].name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg?height=80&width=80"
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#FF6B35] mb-1">
                          {startupTestimonials[currentTestimonial].name}
                        </h3>
                        <p className="text-[#FFB347] mb-1">{startupTestimonials[currentTestimonial].role}</p>
                        <p className="text-white text-sm">{startupTestimonials[currentTestimonial].company}</p>
                        <div className="flex items-center gap-1 mt-2">
                          {[...Array(startupTestimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-[#FFB347] text-[#FFB347]" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-white text-lg leading-relaxed">
                      "{startupTestimonials[currentTestimonial].testimonial}"
                    </blockquote>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-[#2A1F1A] p-4 rounded-2xl border border-[#FFB347]/20">
                      <h4 className="text-[#FFB347] font-semibold mb-2">Company Metrics</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300 text-sm">Revenue:</span>
                          <span className="text-white text-sm font-semibold">
                            {startupTestimonials[currentTestimonial].revenue}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300 text-sm">Team Size:</span>
                          <span className="text-white text-sm font-semibold">
                            {startupTestimonials[currentTestimonial].employees}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300 text-sm">Sector:</span>
                          <span className="text-white text-sm font-semibold">
                            {startupTestimonials[currentTestimonial].sector}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-400/20 p-4 rounded-2xl">
                      <h4 className="text-green-400 font-semibold mb-2">Key Achievement</h4>
                      <p className="text-white text-sm">{startupTestimonials[currentTestimonial].achievement}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {startupTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-[#FF6B35] scale-125" : "bg-[#FFB347]/50 hover:bg-[#FFB347]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Ready to Go Global?</h2>
            <p className="text-xl text-[#1B120A] mb-8 leading-relaxed">
              Connect with international markets and scale your startup globally
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group">
                Explore Global Markets
                <Globe className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-4 text-lg transition-all duration-300"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
