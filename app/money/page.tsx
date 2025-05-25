"use client"
import { DollarSign, TrendingUp, PiggyBank, CreditCard, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import PageTransition from "@/components/page-transition"
import Link from "next/link"

export default function Money() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 animate-pulse-glow"></div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1B120A] animate-slide-in-left mb-6">
              FUNDING & <span className="text-[#FF6B35] text-shimmer">FINANCIAL SUPPORT</span>
            </h1>
            <p className="text-xl text-[#1B120A] max-w-3xl mx-auto animate-slide-in-right">
              Access comprehensive funding opportunities and financial resources to fuel your innovation journey
            </p>
          </div>
        </section>

        {/* Funding Statistics */}
        <section className="bg-[#FFB347]/10 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "₹2Cr+", label: "Total Funding Raised", icon: DollarSign },
                { value: "60+", label: "Startups Funded", icon: TrendingUp },
                { value: "₹50L", label: "Average Funding", icon: PiggyBank },
                { value: "95%", label: "Success Rate", icon: CheckCircle },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 text-center group hover:border-[#FF6B35] transition-all duration-500 shadow-lg hover-lift animate-pulse-glow scroll-animate stagger-${index + 1}`}
                >
                  <stat.icon className="w-8 h-8 text-[#FF6B35] mx-auto mb-4 group-hover:scale-125 transition-transform duration-300" />
                  <div className="text-2xl md:text-3xl font-bold text-[#FF6B35] group-hover:scale-125 transition-all duration-500 animate-bounce-in">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white mt-2 font-medium group-hover:text-[#FFB347] transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Funding Types */}
        <section className="bg-[#E8E4C9]/30 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Funding Opportunities</h2>
              <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Seed Funding",
                  amount: "₹5L - ₹25L",
                  description: "Early-stage funding for proof of concept and prototype development",
                  features: [
                    "Equity-based investment",
                    "Mentorship included",
                    "Market validation support",
                    "Technical guidance",
                  ],
                  icon: "🌱",
                },
                {
                  title: "Series A",
                  amount: "₹25L - ₹1Cr",
                  description: "Growth funding for market expansion and team building",
                  features: ["Scaling operations", "Market expansion", "Team building", "Product enhancement"],
                  icon: "🚀",
                },
                {
                  title: "Bridge Funding",
                  amount: "₹10L - ₹50L",
                  description: "Short-term funding to bridge gaps between major funding rounds",
                  features: ["Quick disbursement", "Flexible terms", "Operational support", "Strategic guidance"],
                  icon: "🌉",
                },
              ].map((funding, index) => (
                <div
                  key={index}
                  className={`bg-[#1B120A] p-8 rounded-xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-lg card-hover hover-lift scroll-animate stagger-${index + 1}`}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {funding.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                    {funding.title}
                  </h3>
                  <div className="text-xl font-semibold text-white mb-4">{funding.amount}</div>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {funding.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {funding.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                      >
                        <CheckCircle className="w-4 h-4 text-[#FF6B35] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white btn-animate hover-lift">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Support Services */}
        <section className="bg-[#FFB347]/10 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">
                Financial Support Services
              </h2>
              <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Business Plan Development", icon: "📋", desc: "Professional business plan creation" },
                { name: "Financial Modeling", icon: "📊", desc: "Comprehensive financial projections" },
                { name: "Investor Pitch Deck", icon: "🎯", desc: "Compelling investor presentations" },
                { name: "Due Diligence Support", icon: "🔍", desc: "Complete due diligence assistance" },
                { name: "Legal Documentation", icon: "📄", desc: "Legal and compliance support" },
                { name: "Tax Planning", icon: "💼", desc: "Strategic tax optimization" },
                { name: "Grant Applications", icon: "🏆", desc: "Government grant assistance" },
                { name: "Financial Advisory", icon: "💡", desc: "Ongoing financial guidance" },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 text-center group shadow-md card-hover hover-lift scroll-animate stagger-${(index % 6) + 1}`}
                >
                  <div className="text-3xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-[#FF6B35] transition-all duration-300 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="bg-[#E8E4C9]/30 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Application Process</h2>
              <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Submit Application",
                  desc: "Complete our online application form with your business details",
                },
                { step: "02", title: "Initial Review", desc: "Our team reviews your application and business model" },
                { step: "03", title: "Pitch Presentation", desc: "Present your idea to our investment committee" },
                {
                  step: "04",
                  title: "Funding Decision",
                  desc: "Receive funding decision and begin your journey with us",
                },
              ].map((process, index) => (
                <div key={index} className={`text-center scroll-animate stagger-${index + 1}`}>
                  <div className="bg-[#1B120A] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#FF6B35] group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[#FF6B35] font-bold text-lg">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B120A] mb-2">{process.title}</h3>
                  <p className="text-[#1B120A]/80">{process.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/incubate">
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-3 btn-animate hover-lift group">
                  Start Application Process
                  <CreditCard className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
