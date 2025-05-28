"use client"

import Image from "next/image"
import { Users, Target, Lightbulb, Award, ChevronRight, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const teamMembers = [
    {
      name: "Mr. S. Gokulakrishnan",
      role: "Director of Innovation",
      email: "citbif@citchennai.net",
      phone: "+91 999 469 1313",
      image: "/team1.jpg",
    },
    {
      name: "Dr. R. Rajkamal",
      role: "Head - Innovation & Incubation Initiatives",
      email: "rajkamal@citchennai.net",
      phone: "+91 44 2478 1111",
      image: "/team2.jpg",
    },
    {
      name: "Dr. Dhanesh Babu S.D",
      role: "Incubation Manager",
      email: "dhanesh@citchennai.net",
      phone: "+91 44 2478 1111",
      image: "/team3.jpg",
    },
    {
      name: "Dr. B. Priya",
      role: "Innovation Manager",
      email: "priya@citchennai.net",
      phone: "+91 44 2478 1111",
      image: "/team4.jpg",
    },
    {
      name: "Mr. J. Zahid Hussain",
      role: "Program Coordinator",
      email: "zahid@citchennai.net",
      phone: "+91 44 2478 1111",
      image: "/team5.jpg",
    },
  ]

  const achievements = [
    { icon: "🏆", title: "60+ Startups Incubated", description: "Successfully nurtured over 60 innovative startups" },
    { icon: "💰", title: "₹2Cr+ Funding Facilitated", description: "Helped startups secure significant funding" },
    { icon: "🎓", title: "5000+ Students Impacted", description: "Transformed lives through innovation programs" },
    { icon: "🤝", title: "25+ Strategic Partners", description: "Built strong industry collaborations" },
    { icon: "🏭", title: "32 Centers of Excellence", description: "State-of-the-art research facilities" },
    { icon: "📊", title: "4 Years of Excellence", description: "Consistent growth and innovation" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 animate-pulse-glow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1B120A] text-shimmer">About CITBIF</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto mb-8 animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] max-w-4xl mx-auto leading-relaxed">
              Chennai Institute of Technology Business Incubation Forum - Pioneering Innovation and Entrepreneurship
            </p>
          </div>
        </div>
      </section>

      {/* What is CITBIF Section */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8 animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B120A] text-shimmer">What is CITBIF?</h2>
              <div className="space-y-6 text-lg text-[#1B120A] leading-relaxed">
                <p>
                  The Chennai Institute of Technology Business Incubation Forum (CITBIF) is a Section 8 Company that
                  operates under the brand name Chennai Institute of Technology Innovation Labs (CITIL).
                </p>
                <p>
                  We are committed to fostering entrepreneurship by providing mentorship, advanced technology, and
                  dedicated Centres of Excellence (COEs) for deep tech product development.
                </p>
                <p>
                  CITIL offers essential funding and all-round support to help transform ideas into successful
                  businesses, with key focus areas including AI/ML, IoT, and other forward-thinking, sustainable
                  initiatives.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { icon: Target, title: "Mission Driven", desc: "Focused on societal impact" },
                  { icon: Lightbulb, title: "Innovation First", desc: "Cutting-edge technology solutions" },
                  { icon: Users, title: "Community Focused", desc: "Building entrepreneurial ecosystem" },
                  { icon: Award, title: "Excellence", desc: "Proven track record of success" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-[#1B120A] p-6 rounded-2xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group hover-lift animate-bounce-in stagger-${index + 1}`}
                  >
                    <item.icon className="h-8 w-8 text-[#FF6B35] mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-bold text-white mb-2 group-hover:text-[#FFB347] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-r from-[#FF6B35]/30 to-[#FFB347]/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="relative bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 shadow-2xl hover-lift">
                  <Image
                    src="/citbif-building.jpg"
                    alt="CITBIF Building"
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto image-hover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=400&width=600"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Our Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-bounce-in stagger-${index + 1} relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#FF6B35] mb-3 group-hover:text-[#FFB347] transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-white group-hover:text-gray-200 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Meet Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] max-w-3xl mx-auto mt-6">
              Our dedicated team of professionals driving innovation and entrepreneurship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-${index + 1} relative overflow-hidden`}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full"></div>
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=96&width=96"
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#FF6B35] mb-2 group-hover:text-[#FFB347] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {member.role}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-gray-300 hover:text-[#FFB347] transition-colors duration-300">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-300 hover:text-[#FFB347] transition-colors duration-300">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{member.phone}</span>
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
              Ready to Innovate with Us?
            </h2>
            <p className="text-xl text-[#1B120A] mb-8 leading-relaxed">
              Join our thriving ecosystem of entrepreneurs, innovators, and industry leaders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group">
                Join Our Incubator
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-4 text-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}