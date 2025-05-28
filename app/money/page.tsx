"use client"

import Image from "next/image"
import { DollarSign, TrendingUp, Target, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"

export default function MoneyPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
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
    },
    {
      title: "IVP Grants",
      amount: "₹7 Lakhs",
      description: "Industry Validation Program grants for market-ready products",
      eligibility: "Startups with validated business model",
      duration: "18 months",
      icon: "🚀",
      color: "from-[#FFB347] to-[#FF6B35]",
    },
    {
      title: "Pre-Incubation Support",
      amount: "₹2-5 Lakhs",
      description: "Early-stage support for idea development and prototyping",
      eligibility: "Students and faculty with innovative ideas",
      duration: "6 months",
      icon: "🌱",
      color: "from-[#FF6B35] to-[#FFB347]",
    },
    {
      title: "Acceleration Program",
      amount: "₹15-25 Lakhs",
      description: "Advanced funding for scaling and market expansion",
      eligibility: "Growth-stage startups",
      duration: "24 months",
      icon: "📈",
      color: "from-[#FFB347] to-[#FF6B35]",
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
    },
    {
      name: "Quazr Motors",
      sector: "Electric Vehicles",
      funding: "₹7 Lakhs",
      description: "Innovative electric vehicle solutions for urban mobility",
      status: "Market Ready",
      image: "/company-quazr.jpg",
    },
    {
      name: "Mam Industries",
      sector: "Manufacturing",
      funding: "₹7 Lakhs",
      description: "Advanced manufacturing solutions using Industry 4.0",
      status: "Scaling",
      image: "/company-mam.jpg",
    },
    {
      name: "Fuinn Tech",
      sector: "AI/ML",
      funding: "₹7 Lakhs",
      description: "AI-powered solutions for business automation",
      status: "Growing",
      image: "/company-fuinn.jpg",
    },
  ]

  const fundingProcess = [
    {
      step: "01",
      title: "Application Submission",
      description: "Submit your business plan and pitch deck through our online portal",
      icon: "📝",
    },
    {
      step: "02",
      title: "Initial Screening",
      description: "Our expert panel reviews applications for feasibility and innovation",
      icon: "🔍",
    },
    {
      step: "03",
      title: "Pitch Presentation",
      description: "Selected candidates present their ideas to our investment committee",
      icon: "🎯",
    },
    {
      step: "04",
      title: "Due Diligence",
      description: "Comprehensive evaluation of business model and market potential",
      icon: "📊",
    },
    {
      step: "05",
      title: "Funding Decision",
      description: "Final approval and funding disbursement with mentorship support",
      icon: "✅",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 animate-pulse-glow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1B120A] text-shimmer">Funding & Investment</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto mb-8 animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] max-w-4xl mx-auto leading-relaxed">
              Empowering startups with comprehensive funding schemes and investment opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Funding Schemes Section */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Our Funding Schemes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {fundingSchemes.map((scheme, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-${index + 1} relative overflow-hidden`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${scheme.color} opacity-10 rounded-bl-full`}
                ></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {scheme.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                        {scheme.title}
                      </h3>
                      <p className="text-3xl font-bold text-white">{scheme.amount}</p>
                    </div>
                  </div>
                  <p className="text-white mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {scheme.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-[#FFB347]" />
                      <span className="text-gray-300 text-sm">Eligibility: {scheme.eligibility}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-[#FFB347]" />
                      <span className="text-gray-300 text-sm">Duration: {scheme.duration}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white rounded-xl btn-animate group">
                    Apply Now
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefited Companies Section */}
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
              <div
                key={index}
                className={`bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-bounce-in stagger-${index + 1} relative overflow-hidden`}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 overflow-hidden group-hover:scale-110 transition-transform duration-300">
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
                      <h3 className="text-xl font-bold text-[#FF6B35] mb-1 group-hover:text-[#FFB347] transition-colors duration-300">
                        {company.name}
                      </h3>
                      <p className="text-[#FFB347] text-sm mb-2">{company.sector}</p>
                      <div className="inline-flex items-center gap-1 bg-gradient-to-r from-[#FF6B35]/20 to-[#FFB347]/20 px-3 py-1 rounded-full">
                        <DollarSign className="h-3 w-3 text-[#FF6B35]" />
                        <span className="text-white text-xs font-semibold">{company.funding}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {company.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 text-sm font-semibold">{company.status}</span>
                    <Button variant="ghost" size="sm" className="text-[#FFB347] hover:text-white hover:bg-[#FFB347]/20">
                      Learn More
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Process Section */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Funding Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            {fundingProcess.map((process, index) => (
              <div key={index} className={`flex items-start gap-8 mb-12 animate-slide-in-left stagger-${index + 1}`}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-full flex items-center justify-center text-white font-bold text-lg hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                </div>
                <div className="flex-1 bg-[#1B120A] p-6 rounded-2xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group hover-lift">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {process.icon}
                    </span>
                    <h3 className="text-xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                      {process.title}
                    </h3>
                  </div>
                  <p className="text-white group-hover:text-gray-200 transition-colors duration-300">
                    {process.description}
                  </p>
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
              Ready to Secure Funding?
            </h2>
            <p className="text-xl text-[#1B120A] mb-8 leading-relaxed">
              Take the first step towards transforming your innovative idea into a successful business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group">
                Apply for Funding
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
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
