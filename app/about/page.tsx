"use client"

import Image from "next/image"
import { ChevronRight, Target, Eye, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import PageTransition from "@/components/page-transition"
import Link from "next/link"

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 animate-pulse-glow"></div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1B120A] animate-slide-in-left mb-6">
              ABOUT <span className="text-[#FF6B35] text-shimmer">CITIL</span>
            </h1>
            <p className="text-xl text-[#1B120A] max-w-3xl mx-auto animate-slide-in-right">
              Empowering innovation through cutting-edge technology and entrepreneurial excellence
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-[#FFB347]/10 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1B120A] p-8 rounded-xl border border-[#FFB347]/50 relative overflow-hidden group shadow-lg card-hover hover-lift scroll-animate">
                <div className="absolute inset-0 bg-[url('/vision-bg.png')] opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
                <Eye className="w-12 h-12 text-[#FF6B35] mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-6 text-[#FF6B35] relative z-10 group-hover:scale-110 transition-transform duration-300">
                  Vision
                </h3>
                <p className="text-white leading-relaxed relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                  To foster innovation by empowering students and entrepreneurs with mentorship, resources, and
                  partnerships to create impactful, scalable solutions that transform industries and society.
                </p>
              </div>

              <div className="bg-[#1B120A] p-8 rounded-xl border border-[#FFB347]/50 relative overflow-hidden group shadow-lg card-hover hover-lift scroll-animate stagger-2">
                <div className="absolute inset-0 bg-[url('/mission-bg.png')] opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
                <Target className="w-12 h-12 text-[#FF6B35] mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-6 text-[#FF6B35] relative z-10 group-hover:scale-110 transition-transform duration-300">
                  Mission
                </h3>
                <p className="text-white leading-relaxed relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                  To foster creativity and entrepreneurship through a collaborative platform that enables transformative
                  solutions for societal and economic impact through deep technology innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About CITBIF */}
        <section className="bg-[#E8E4C9]/30 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">About CITBIF</h2>
              <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="scroll-animate">
                <div className="bg-[#1B120A] p-8 rounded-xl border border-[#FFB347]/50 shadow-lg card-hover hover-lift">
                  <p className="text-white leading-relaxed mb-6">
                    The Chennai Institute Technology Business Incubation Forum (CITBIF) is a Section 8 Company,
                    operating under the brand name Chennai Institute of Technology Innovation Labs (CITIL). We are
                    dedicated to nurturing entrepreneurship by offering mentorship, cutting-edge technology, and
                    specialized Centers of Excellence (COEs) for deep tech product development.
                  </p>
                  <p className="text-white leading-relaxed mb-6">
                    We provide crucial funding and comprehensive support, guiding ideas from conception to thriving
                    businesses. CITIL's focus areas include AI/ML, IoT, and other innovative, sustainable ventures that
                    align with global sustainability goals and industry needs.
                  </p>
                  <div className="flex gap-4">
                    <Link href="/incubate">
                      <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white btn-animate hover-lift">
                        Start Your Journey
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white btn-animate hover-lift"
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="scroll-animate stagger-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] rounded-xl blur-lg opacity-30 animate-pulse-glow"></div>
                  <div className="relative bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 shadow-lg hover-lift">
                    <Image
                      src="/incubation-lab.png"
                      alt="CITIL Innovation Lab"
                      width={500}
                      height={400}
                      className="rounded-lg w-full image-hover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=400&width=500"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-[#FFB347]/10 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Why Choose CITIL?</h2>
              <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Expert Mentorship",
                  description:
                    "Access to industry experts and successful entrepreneurs who guide your journey from idea to market.",
                },
                {
                  icon: Award,
                  title: "Proven Track Record",
                  description:
                    "Over 60+ startups incubated with a combined funding of 2Cr+ and 5000+ students impacted.",
                },
                {
                  icon: Target,
                  title: "Comprehensive Support",
                  description:
                    "End-to-end support including funding, technology, market access, and business development.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`bg-[#1B120A] p-8 rounded-xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-lg card-hover hover-lift scroll-animate stagger-${index + 1}`}
                >
                  <feature.icon className="w-12 h-12 text-[#FF6B35] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#FFB347] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#E8E4C9]/30 py-20 scroll-animate">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1B120A] text-shimmer">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-xl text-[#1B120A] mb-8 max-w-2xl mx-auto">
              Join our innovation ecosystem and turn your entrepreneurial dreams into reality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/incubate">
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-3 btn-animate hover-lift group">
                  Apply for Incubation
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  variant="outline"
                  className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-3 btn-animate hover-lift"
                >
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
