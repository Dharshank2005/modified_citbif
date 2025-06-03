"use client"

import Image from "next/image"
import { DollarSign, TrendingUp, Target, ChevronRight, ExternalLink, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"

export default function MoneyPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const fundingSchemes = [
    {
      title: "CITIL Innovation Grant",
      amount: "₹10 Lakhs",
      description: "Seed funding for innovative startups with high potential",
      eligibility: "Early-stage startups with MVP",
      duration: "12 months",
      icon: "💡",
      color: "from-[#FF6B35] to-[#FFB347]",
      details:
        "Comprehensive support including mentorship, workspace, and technical guidance for early-stage startups.",
    },
    {
      title: "IVP Grants",
      amount: "₹7 Lakhs",
      description: "Industry Validation Program grants for market-ready products",
      eligibility: "Startups with validated business model",
      duration: "18 months",
      icon: "🚀",
      color: "from-[#FFB347] to-[#FF6B35]",
      details: "Focused on market validation and industry partnerships for scaling your validated business model.",
    },
    {
      title: "Pre-Incubation Support",
      amount: "₹2-5 Lakhs",
      description: "Early-stage support for idea development and prototyping",
      eligibility: "Students and faculty with innovative ideas",
      duration: "6 months",
      icon: "🌱",
      color: "from-[#FF6B35] to-[#FFB347]",
      details: "Perfect for transforming innovative ideas into viable prototypes with expert guidance.",
    },
    {
      title: "Acceleration Program",
      amount: "₹15-25 Lakhs",
      description: "Advanced funding for scaling and market expansion",
      eligibility: "Growth-stage startups",
      duration: "24 months",
      icon: "📈",
      color: "from-[#FFB347] to-[#FF6B35]",
      details: "Comprehensive acceleration program for startups ready to scale and expand to new markets.",
    },
  ]

  const benefitedCompanies = [
    {
      name: "Mechimed Technologies",
      sector: "Medical Technology",
      funding: "₹7 Lakhs",
      description: "Revolutionary medical device for patient monitoring",
      status: "Successfully Launched",
      image: "/company-mechimed.jpg",
      achievements: ["50+ Hospitals", "FDA Approved", "₹2Cr Revenue"],
      founded: "2022",
    },
    {
      name: "Quazr Motors",
      sector: "Electric Vehicles",
      funding: "₹7 Lakhs",
      description: "Innovative electric vehicle solutions for urban mobility",
      status: "Market Ready",
      image: "/company-quazr.jpg",
      achievements: ["100+ Pre-orders", "Patent Filed", "Series A Ready"],
      founded: "2021",
    },
    {
      name: "Mam Industries",
      sector: "Manufacturing",
      funding: "₹7 Lakhs",
      description: "Advanced manufacturing solutions using Industry 4.0",
      status: "Scaling",
      image: "/company-mam.jpg",
      achievements: ["25+ Clients", "IoT Integration", "AI-Powered"],
      founded: "2023",
    },
    {
      name: "Fuinn Tech",
      sector: "AI/ML",
      funding: "₹7 Lakhs",
      description: "AI-powered solutions for business automation",
      status: "Growing",
      image: "/company-fuinn.jpg",
      achievements: ["Enterprise Clients", "Cloud Platform", "API Ready"],
      founded: "2022",
    },
  ]

  const fundingProcess = [
    {
      step: "01",
      title: "Application Submission",
      description: "Submit your business plan and pitch deck through our online portal",
      icon: "📝",
      timeline: "Week 1",
    },
    {
      step: "02",
      title: "Initial Screening",
      description: "Our expert panel reviews applications for feasibility and innovation",
      icon: "🔍",
      timeline: "Week 2-3",
    },
    {
      step: "03",
      title: "Pitch Presentation",
      description: "Selected candidates present their ideas to our investment committee",
      icon: "🎯",
      timeline: "Week 4",
    },
    {
      step: "04",
      title: "Due Diligence",
      description: "Comprehensive evaluation of business model and market potential",
      icon: "📊",
      timeline: "Week 5-6",
    },
    {
      step: "05",
      title: "Funding Decision",
      description: "Final approval and funding disbursement with mentorship support",
      icon: "✅",
      timeline: "Week 7-8",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % fundingSchemes.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + fundingSchemes.length) % fundingSchemes.length)
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1B120A] text-shimmer animate-wiggle">
              Funding & Investment
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto mb-8 animate-scale-in hover:w-48 transition-all duration-500"></div>
            <p className="text-xl text-[#1B120A] max-w-4xl mx-auto leading-relaxed transform hover:scale-105 transition-transform duration-300">
              Empowering startups with comprehensive funding schemes and investment opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Funding Schemes Section - CAROUSEL LAYOUT */}
      <section className="bg-[#FFB347]/10 py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Our Funding Schemes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            <div className="carousel-container">
              <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {fundingSchemes.map((scheme, index) => (
                  <div key={index} className="carousel-item w-full flex-shrink-0">
                    <div className="bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift mx-4 relative overflow-hidden">
                      <div
                        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${scheme.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity duration-500`}
                      ></div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 flex items-center justify-center text-5xl transition-transform duration-300 transform group-hover:scale-110">
                            {scheme.icon}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                              {scheme.title}
                            </h3>
                            <p className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                              {scheme.amount}
                            </p>
                          </div>
                        </div>
                        <p className="text-white mb-6 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed text-lg">
                          {scheme.description}
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed">{scheme.details}</p>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-[#FFB347]" />
                            <span className="text-gray-300">Eligibility: {scheme.eligibility}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-[#FFB347]" />
                            <span className="text-gray-300">Duration: {scheme.duration}</span>
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white rounded-xl btn-animate group ripple">
                          Apply Now
                          <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-[#1B120A] text-[#FF6B35] p-3 rounded-full hover:bg-[#FF6B35] hover:text-white transition-all duration-300 z-10 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-[#1B120A] text-[#FF6B35] p-3 rounded-full hover:bg-[#FF6B35] hover:text-white transition-all duration-300 z-10 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {fundingSchemes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-[#FF6B35] scale-125" : "bg-[#FFB347]/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefited Companies Section - FLIP CARDS LAYOUT */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] max-w-3xl mx-auto mt-6">
              Companies that have successfully leveraged our funding programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefitedCompanies.map((company, index) => (
              <div key={index} className={`flip-card animate-bounce-in stagger-${index + 1}`}>
                <div className="flip-card-inner">
                  {/* Front of card */}
                  <div className="flip-card-front bg-[#1B120A] border border-[#FFB347]/50">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 overflow-hidden">
                        <Image
                          src={company.image || "/placeholder.svg"}
                          alt={company.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg?height=64&width=64"
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#FF6B35] mb-1">{company.name}</h3>
                        <p className="text-[#FFB347] text-sm mb-2">{company.sector}</p>
                        <div className="inline-flex items-center gap-1 bg-gradient-to-r from-[#FF6B35]/20 to-[#FFB347]/20 px-3 py-1 rounded-full">
                          <DollarSign className="h-3 w-3 text-[#FF6B35]" />
                          <span className="text-white text-xs font-semibold">{company.funding}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-white mb-4 leading-relaxed">{company.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 text-sm font-semibold bg-green-400/10 px-3 py-1 rounded-full">
                        {company.status}
                      </span>
                      <span className="text-gray-300 text-sm">Founded: {company.founded}</span>
                    </div>
                    <div className="absolute bottom-4 right-4 text-[#FFB347]/50 text-sm">Hover to see more →</div>
                  </div>

                  {/* Back of card */}
                  <div className="flip-card-back bg-gradient-to-br from-[#FF6B35] to-[#FFB347] text-white">
                    <h3 className="text-2xl font-bold mb-4">{company.name}</h3>
                    <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                    <div className="space-y-3 mb-6">
                      {company.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-[#FF6B35] w-full"
                    >
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Process Section - TIMELINE LAYOUT */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Funding Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="timeline">
              {fundingProcess.map((process, index) => (
                <div key={index} className={`timeline-item animate-slide-in-left stagger-${index + 1}`}>
                  <div className="timeline-marker animate-timeline-pulse"></div>
                  <div className="bg-[#1B120A] p-6 rounded-2xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group hover-lift">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-full flex items-center justify-center text-white font-bold">
                        {process.step}
                      </div>
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {process.icon}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                          {process.title}
                        </h3>
                        <span className="text-[#FFB347] text-sm">{process.timeline}</span>
                      </div>
                    </div>
                    <p className="text-white group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - SPLIT SCREEN LAYOUT */}
      <section className="bg-[#E8E4C9]/30 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="split-screen max-w-6xl mx-auto">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">
                Ready to Secure Funding?
              </h2>
              <p className="text-xl text-[#1B120A] mb-8 leading-relaxed">
                Take the first step towards transforming your innovative idea into a successful business
              </p>
              <div className="space-y-4">
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group ripple w-full sm:w-auto">
                  Apply for Funding
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-4 text-lg transition-all duration-300 w-full sm:w-auto"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FFB347]/20 rounded-3xl blur-xl animate-pulse-glow"></div>
                <div className="relative bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 text-center">
                  <div className="text-6xl mb-4 animate-float">🚀</div>
                  <h3 className="text-2xl font-bold text-[#FF6B35] mb-4">Join 60+ Successful Startups</h3>
                  <p className="text-white leading-relaxed">
                    Be part of our thriving ecosystem of innovators and entrepreneurs who have successfully secured
                    funding and scaled their businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
