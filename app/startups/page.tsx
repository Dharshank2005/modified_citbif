"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import PageTransition from "@/components/page-transition"
import Link from "next/link"

export default function Startups() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1B120A] animate-slide-in-left mb-6">
              OUR <span className="text-[#FF6B35] text-shimmer">STARTUPS</span>
            </h1>
            <p className="text-xl text-[#1B120A] max-w-3xl mx-auto animate-slide-in-right">
              Meet the innovative startups that are part of our ecosystem
            </p>
          </div>
        </section>

        {/* Startup Portfolio */}
        <section className="bg-[#FFB347]/10 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Our Startup Portfolio</h2>
              <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
              <p className="text-[#1B120A] mt-4 max-w-2xl mx-auto">
                Meet the innovative startups that have grown through our incubation program
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Datom Technologies",
                  sector: "Manufacturing Tech",
                  description: "Revolutionary manufacturing software and hardware solutions for Industry 4.0",
                  logo: "/company-itl.png",
                  status: "Series A",
                  founded: "2021",
                  funding: "₹45L",
                  employees: "25+",
                  founder: "Dharamraj Kumar",
                },
                {
                  name: "Festa Solar",
                  sector: "Clean Energy",
                  description: "Sustainable solar energy solutions and smart grid technologies",
                  logo: "/company-festa.png",
                  status: "Seed",
                  founded: "2022",
                  funding: "₹30L",
                  employees: "15+",
                  founder: "Rajesh Sharma",
                },
                {
                  name: "AREON Networks",
                  sector: "Networking",
                  description: "Advanced networking solutions for enterprise and IoT applications",
                  logo: "/company-festen.png",
                  status: "Pre-Series A",
                  founded: "2020",
                  funding: "₹60L",
                  employees: "35+",
                  founder: "Arjun Patel",
                },
                {
                  name: "OAK Studio",
                  sector: "Design Tech",
                  description: "Creative design solutions and digital transformation services",
                  logo: "/company-corsair.png",
                  status: "Seed",
                  founded: "2022",
                  funding: "₹25L",
                  employees: "12+",
                  founder: "Priya Nair",
                },
                {
                  name: "BioMed Innovations",
                  sector: "Healthcare",
                  description: "Medical device development and healthcare technology solutions",
                  logo: "/company-citbif.png",
                  status: "Series A",
                  founded: "2021",
                  funding: "₹75L",
                  employees: "40+",
                  founder: "Dr. Suresh Kumar",
                },
                {
                  name: "CyberShield Pro",
                  sector: "Cybersecurity",
                  description: "Next-generation cybersecurity solutions for enterprises",
                  logo: "/company-fesren.png",
                  status: "Pre-Seed",
                  founded: "2023",
                  funding: "₹15L",
                  employees: "8+",
                  founder: "Vikram Singh",
                },
              ].map((startup, index) => (
                <div
                  key={index}
                  className={`bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-lg card-hover hover-lift scroll-animate stagger-${(index % 6) + 1}`}
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src={startup.logo || "/placeholder.svg"}
                      alt={startup.name}
                      width={60}
                      height={60}
                      className="w-12 h-12 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=60&width=60"
                      }}
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B35] transition-colors duration-300">
                        {startup.name}
                      </h3>
                      <span className="text-sm text-[#FFB347]">{startup.sector}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {startup.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Founded:</span>
                      <span className="text-white">{startup.founded}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Funding:</span>
                      <span className="text-[#FFB347]">{startup.funding}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Team Size:</span>
                      <span className="text-white">{startup.employees}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Founder:</span>
                      <span className="text-white">{startup.founder}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-[#FF6B35]/20 text-[#FF6B35] px-3 py-1 rounded-full font-medium">
                      {startup.status}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-[#FFB347] hover:text-white hover:bg-[#FF6B35] btn-animate group-hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="bg-[#E8E4C9]/30 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Portfolio Impact</h2>
              <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "60+", label: "Startups Incubated", icon: "🚀" },
                { value: "₹2Cr+", label: "Total Funding Raised", icon: "💰" },
                { value: "200+", label: "Jobs Created", icon: "👥" },
                { value: "15+", label: "Patents Filed", icon: "📋" },
              ].map((metric, index) => (
                <div
                  key={index}
                  className={`bg-[#1B120A] p-6 rounded-xl text-center border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 shadow-lg hover-lift scroll-animate stagger-${index + 1}`}
                >
                  <div className="text-3xl mb-2">{metric.icon}</div>
                  <div className="text-2xl font-bold text-[#FF6B35] mb-2">{metric.value}</div>
                  <div className="text-sm text-white">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#E8E4C9]/30 py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-[#1B120A]">Join Our Startup Ecosystem</h2>
            <Link href="/incubate">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-3 btn-animate hover-lift">
                Apply for Incubation
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
