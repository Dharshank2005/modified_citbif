"use client"

import Image from "next/image"
import { Globe, TrendingUp, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"

export default function MarketPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const globalConnections = [
    {
      region: "North America",
      countries: ["USA", "Canada"],
      partnerships: 15,
      description: "Strong connections with Silicon Valley startups and tech giants",
      icon: "🇺🇸",
      color: "from-[#FF6B35] to-[#FFB347]",
    },
    {
      region: "Europe",
      countries: ["Germany", "UK", "Netherlands"],
      partnerships: 12,
      description: "Collaborations with European innovation hubs and research centers",
      icon: "🇪🇺",
      color: "from-[#FFB347] to-[#FF6B35]",
    },
    {
      region: "Asia Pacific",
      countries: ["Japan", "Singapore", "Australia"],
      partnerships: 20,
      description: "Deep tech partnerships across Asia-Pacific region",
      icon: "🌏",
      color: "from-[#FF6B35] to-[#FFB347]",
    },
    {
      region: "Middle East",
      countries: ["UAE", "Israel", "Saudi Arabia"],
      partnerships: 8,
      description: "Growing presence in Middle Eastern innovation ecosystem",
      icon: "🕌",
      color: "from-[#FFB347] to-[#FF6B35]",
    },
  ]

  const marketOpportunities = [
    {
      sector: "Artificial Intelligence",
      marketSize: "$390B",
      growth: "+15.2%",
      opportunities: ["Machine Learning", "Computer Vision", "NLP", "Robotics"],
      icon: "🤖",
    },
    {
      sector: "IoT & Smart Cities",
      marketSize: "$650B",
      growth: "+12.8%",
      opportunities: ["Smart Infrastructure", "Connected Devices", "Data Analytics", "Automation"],
      icon: "🏙️",
    },
    {
      sector: "Clean Energy",
      marketSize: "$280B",
      growth: "+18.5%",
      opportunities: ["Solar Technology", "Energy Storage", "Smart Grids", "EV Infrastructure"],
      icon: "⚡",
    },
    {
      sector: "Healthcare Tech",
      marketSize: "$450B",
      growth: "+14.3%",
      opportunities: ["Telemedicine", "Medical Devices", "Digital Health", "Biotech"],
      icon: "🏥",
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
    },
  ]

  const marketServices = [
    {
      title: "Global Market Research",
      description: "Comprehensive market analysis and opportunity identification",
      features: ["Market Size Analysis", "Competitor Research", "Trend Analysis", "Customer Insights"],
      icon: "📊",
    },
    {
      title: "International Partnerships",
      description: "Facilitating strategic partnerships with global companies",
      features: ["Partner Matching", "Due Diligence", "Contract Negotiation", "Relationship Management"],
      icon: "🤝",
    },
    {
      title: "Export Assistance",
      description: "Support for international market entry and expansion",
      features: ["Export Documentation", "Regulatory Compliance", "Logistics Support", "Market Entry Strategy"],
      icon: "🌍",
    },
    {
      title: "Investor Connect",
      description: "Connecting startups with global investors and VCs",
      features: ["Investor Matching", "Pitch Preparation", "Due Diligence Support", "Funding Strategy"],
      icon: "💰",
    },
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

      {/* Global Connections */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Our Global Reach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {globalConnections.map((connection, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-bounce-in stagger-${index + 1} relative overflow-hidden`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${connection.color} opacity-10 rounded-bl-full`}
                ></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {connection.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#FF6B35] mb-2 group-hover:text-[#FFB347] transition-colors duration-300">
                    {connection.region}
                  </h3>
                  <div className="text-3xl font-bold text-white mb-3">{connection.partnerships}</div>
                  <p className="text-gray-300 text-sm mb-4">Partnerships</p>
                  <p className="text-white text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {connection.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {connection.countries.map((country, countryIndex) => (
                      <span
                        key={countryIndex}
                        className="bg-[#FF6B35]/20 text-[#FFB347] px-2 py-1 rounded-full text-xs"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunities */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Market Opportunities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {marketOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-${index + 1} relative overflow-hidden`}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {opportunity.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                        {opportunity.sector}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-2xl font-bold text-white">{opportunity.marketSize}</span>
                        <span className="text-green-400 text-sm font-semibold flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          {opportunity.growth}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {opportunity.opportunities.map((opp, oppIndex) => (
                      <div
                        key={oppIndex}
                        className="bg-[#FF6B35]/10 border border-[#FFB347]/30 rounded-lg p-3 text-center"
                      >
                        <span className="text-white text-sm">{opp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Services */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Market Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {marketServices.map((service, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-in-left stagger-${index + 1} relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-white mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#FFB347] rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Testimonials */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Startup Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-[#1B120A]/80 hover:bg-[#1B120A] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#FFB347]/30 hover:border-[#FF6B35]"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-[#1B120A]/80 hover:bg-[#1B120A] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#FFB347]/30 hover:border-[#FF6B35]"
            >
              <ChevronRight size={24} />
            </button>

            {/* Testimonial Card */}
            <div className="bg-[#1B120A] p-12 rounded-3xl border border-[#FFB347]/50 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full"></div>
              <Quote className="absolute top-6 right-6 h-12 w-12 text-[#FF6B35]/20" />

              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 overflow-hidden">
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

                <blockquote className="text-white text-lg leading-relaxed mb-6">
                  "{startupTestimonials[currentTestimonial].testimonial}"
                </blockquote>

                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B35]/20 to-[#FFB347]/20 px-4 py-2 rounded-full">
                  <span className="text-[#FFB347] text-sm font-semibold">
                    {startupTestimonials[currentTestimonial].sector}
                  </span>
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
      <section className="bg-[#FFB347]/10 py-24">
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
