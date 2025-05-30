"use client"

import Image from "next/image"
import { Users, Target, Lightbulb, Award, ChevronRight, Mail, Phone, ChevronLeft, MapPin, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Auto-rotate team slider
    const interval = setInterval(() => {
      setCurrentTeamSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3))
    }, 5000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  const teamMembers = [
    {
      name: "Mr. S. Gokulakrishnan",
      role: "Director of Innovation",
      email: "citbif@citchennai.net",
      phone: "+91 999 469 1313",
      image: "/team1.jpg",
      department: "Leadership",
      experience: "15+ Years",
      specialization: "Strategic Innovation",
      id: "1",
      location: "Chennai",
      joinyear: "2012",
      achievements: "Awarded Best Director",
    },
    {
      name: "Dr. R. Rajkamal",
      role: "Head - Innovation & Incubation",
      email: "rajkamal@citchennai.net",
      phone: "+91 44 2478 1111",
      image: "/team2.jpg",
      department: "Innovation",
      experience: "12+ Years",
      specialization: "Incubation Programs",
      id: "2",
      location: "Chennai",
      joinyear: "2013",
      achievements: "Published 5 research papers",
    },
    {
      name: "Dr. Dhanesh Babu S.D",
      role: "Incubation Manager",
      email: "dhanesh@citchennai.net",
      phone: "+91 44 2478 1111",
      image: "/team3.jpg",
      department: "Operations",
      experience: "10+ Years",
      specialization: "Startup Management",
      id: "3",
      location: "Chennai",
      joinyear: "2015",
      achievements: "Mentored 20+ startups",
    },
    {
      name: "Dr. B. Priya",
      role: "Innovation Manager",
      email: "priya@citchennai.net",
      phone: "+91 44 2478 1111",
      image: "/team4.jpg",
      department: "Innovation",
      experience: "8+ Years",
      specialization: "Technology Transfer",
      id: "4",
      location: "Chennai",
      joinyear: "2016",
      achievements: "Secured 3 patents",
    },
    {
      name: "Mr. J. Zahid Hussain",
      role: "Program Coordinator",
      email: "zahid@citchennai.net",
      phone: "+91 44 2478 1111",
      image: "/team5.jpg",
      department: "Programs",
      experience: "6+ Years",
      specialization: "Event Management",
      id: "5",
      location: "Chennai",
      joinyear: "2018",
      achievements: "Organized 10+ successful events",
    },
  ]

  const achievements = [
    {
      icon: "🏆",
      title: "60+ Startups Incubated",
      description: "Successfully nurtured over 60 innovative startups",
      height: "h-48",
    },
    {
      icon: "💰",
      title: "₹2Cr+ Funding Facilitated",
      description: "Helped startups secure significant funding",
      height: "h-56",
    },
    {
      icon: "🎓",
      title: "5000+ Students Impacted",
      description: "Transformed lives through innovation programs",
      height: "h-44",
    },
    {
      icon: "🤝",
      title: "25+ Strategic Partners",
      description: "Built strong industry collaborations",
      height: "h-52",
    },
    {
      icon: "🏭",
      title: "32 Centers of Excellence",
      description: "State-of-the-art research facilities",
      height: "h-60",
    },
    {
      icon: "📊",
      title: "4 Years of Excellence",
      description: "Consistent growth and innovation",
      height: "h-40",
    },
  ]

  const nextTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3))
  }

  const prevTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 3)) % Math.ceil(teamMembers.length / 3))
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
      <Navbar/>
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-8 h-8 border-2 border-[#FF6B35]/20 rotate-45 animate-float"
          style={{
            left: `${10 + mousePosition.x * 0.01}%`,
            top: `${20 + mousePosition.y * 0.01}%`,
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute w-6 h-6 bg-[#FFB347]/15 rounded-full animate-float"
          style={{
            left: `${80 + mousePosition.x * 0.015}%`,
            top: `${30 + mousePosition.y * 0.015}%`,
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute w-4 h-4 bg-[#FF6B35]/25 transform rotate-45 animate-float"
          style={{
            left: `${60 + mousePosition.x * 0.02}%`,
            top: `${70 + mousePosition.y * 0.02}%`,
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 animate-pulse-glow"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-[#FF6B35]/10 to-[#FFB347]/10 rounded-full blur-xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-[#FFB347]/10 to-[#FF6B35]/10 rounded-full blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#FF6B35]/3 to-[#FFB347]/3 rounded-full blur-3xl animate-rotate"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1B120A] text-shimmer animate-wiggle">
              About CITBIF
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto mb-8 animate-scale-in hover:w-48 transition-all duration-500"></div>
            <p className="text-xl text-[#1B120A] max-w-4xl mx-auto leading-relaxed transform hover:scale-105 transition-transform duration-300">
              Chennai Institute of Technology Business Incubation Forum - Pioneering Innovation and Entrepreneurship
            </p>
          </div>
        </div>
      </section>

      {/* What is CITBIF Section - FIXED SPLIT SCREEN */}
      <section className="bg-[#FFB347]/10 py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#FF6B35]/5 to-[#FFB347]/5 rounded-full blur-3xl animate-rotate"></div>
          <div
            className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#FFB347]/5 to-[#FF6B35]/5 rounded-full blur-3xl animate-rotate"
            style={{ animationDirection: "reverse" }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8 animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B120A] text-shimmer">What is CITBIF?</h2>
              <div className="space-y-6 text-lg text-[#1B120A] leading-relaxed">
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  The Chennai Institute of Technology Business Incubation Forum (CITBIF) is a Section 8 Company that
                  operates under the brand name Chennai Institute of Technology Innovation Labs (CITIL).
                </p>
                <p
                  className="transform hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: "0.1s" }}
                >
                  We are committed to fostering entrepreneurship by providing mentorship, advanced technology, and
                  dedicated Centres of Excellence (COEs) for deep tech product development.
                </p>
                <p
                  className="transform hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: "0.2s" }}
                >
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
                    className={`bg-[#1B120A] p-6 rounded-2xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group hover-lift animate-bounce-in stagger-${index + 1} interactive-card`}
                  >
                    <item.icon className="h-8 w-8 text-[#FF6B35] mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float" />
                    <h3 className="font-bold text-white mb-2 group-hover:text-[#FFB347] transition-colors duration-300 group-hover:translate-y-[-2px]">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-r from-[#FF6B35]/30 to-[#FFB347]/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse-glow"></div>
                <div className="relative bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 shadow-2xl hover-lift group-hover:border-[#FF6B35] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                  <Image
                    src="/citbif-building.jpg"
                    alt="CITBIF Building"
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto image-hover relative z-10"
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

      {/* Achievements Section - MASONRY LAYOUT */}
      <section className="bg-[#E8E4C9]/30 py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-[#FF6B35]/5 to-[#FFB347]/5 rounded-full blur-2xl animate-pulse-glow"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-[#FFB347]/5 to-[#FF6B35]/5 rounded-full blur-2xl animate-pulse-glow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Our Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="masonry-grid max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className={`masonry-item animate-bounce-in stagger-${index + 1}`}>
                <div
                  className={`bg-[#1B120A] p-6 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift relative overflow-hidden interactive-card ${achievement.height}`}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 via-transparent to-[#FFB347]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float">
                      {achievement.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#FF6B35] mb-3 group-hover:text-[#FFB347] transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-white group-hover:text-gray-200 transition-colors duration-300 leading-relaxed text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section - CREATIVE CARD-IN-POCKET AUTO SLIDER */}
      <section className="bg-[#FFB347]/10 py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-[#FF6B35]/3 to-[#FFB347]/3 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-[#FFB347]/4 to-[#FF6B35]/4 rounded-full blur-2xl animate-pulse-glow"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Meet Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] max-w-3xl mx-auto mt-6 transform hover:scale-105 transition-transform duration-300">
              Our dedicated team of professionals driving innovation and entrepreneurship
            </p>
          </div>

          {/* Enhanced Auto Slider Container */}
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTeamSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                      {teamMembers.slice(slideIndex * 3, slideIndex * 3 + 3).map((member, index) => (
                        <div
                          key={member.id}
                          className={`team-pocket-container group animate-bounce-in`}
                          style={{
                            animationDelay: `${index * 0.2}s`,
                          }}
                        >
                          {/* Enhanced Pocket with Fixed 3D Effect */}
                          <div className="team-pocket relative bg-gradient-to-br from-[#1B120A] via-[#2A1F1A] to-[#1B120A] rounded-3xl border-2 border-[#FFB347]/30 shadow-2xl overflow-hidden h-96 group-hover:shadow-[#FF6B35]/20 transition-all duration-700 ease-out">
                            {/* Pocket Opening Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFB347]/5 to-[#FF6B35]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            {/* Pocket Rim Effect */}
                            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF6B35]/20 via-[#FFB347]/30 to-[#FF6B35]/20 group-hover:h-4 transition-all duration-500"></div>

                            {/* Pocket Cover - Always Visible with Fixed Z-Index */}
                            <div className="team-pocket-cover absolute inset-0 p-8 flex flex-col justify-center items-center text-center transition-all duration-700 ease-out z-20 group-hover:z-10">
                              {/* Profile Image with Enhanced Effects */}
                              <div className="relative mb-6">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/30 to-[#FFB347]/30 rounded-full blur-lg group-hover:blur-xl group-hover:scale-125 transition-all duration-700"></div>
                                <div className="relative w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 overflow-hidden ring-4 ring-[#FFB347]/30 group-hover:ring-[#FF6B35]/60 group-hover:ring-8 transition-all duration-700 group-hover:scale-110">
                                  <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    onError={(e) => {
                                      e.currentTarget.src = "/placeholder.svg?height=96&width=96"
                                    }}
                                  />
                                  {/* Image Overlay Effect */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                {/* Floating Particles */}
                                <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#FF6B35] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#FFB347] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700"></div>
                              </div>

                              {/* Name and Role */}
                              <h3 className="text-2xl font-bold text-[#FF6B35] mb-3 group-hover:text-[#FFB347] transition-all duration-500 group-hover:scale-105">
                                {member.name}
                              </h3>
                              <p className="text-white text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-500 font-medium">
                                {member.role}
                              </p>

                              {/* Department Badge */}
                              <div className="mt-4 px-4 py-2 bg-gradient-to-r from-[#FF6B35]/20 to-[#FFB347]/20 rounded-full border border-[#FFB347]/30 group-hover:border-[#FF6B35]/50 transition-all duration-500">
                                <span className="text-sm text-[#FFB347] group-hover:text-[#FF6B35] transition-colors duration-300 font-semibold">
                                  {member.department}
                                </span>
                              </div>

                              {/* Pocket Hint with Animation */}
                              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-[#FFB347]/60 text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 animate-bounce">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></div>
                                  <span>Hover to reveal details</span>
                                  <div
                                    className="w-2 h-2 bg-[#FFB347] rounded-full animate-pulse"
                                    style={{ animationDelay: "0.5s" }}
                                  ></div>
                                </div>
                              </div>
                            </div>

                            {/* Enhanced Card - Slides Out on Hover with Fixed Positioning */}
                            <div
                              className="team-card absolute inset-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-out shadow-2xl z-30 group-hover:z-40"
                              style={{
                                background: `
                                  linear-gradient(135deg, #FF6B35 0%, #FFB347 50%, #FF6B35 100%),
                                  radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                                  radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
                                `,
                                borderRadius: "1.5rem",
                                backdropFilter: "blur(10px)",
                                willChange: "transform",
                              }}
                            >
                              {/* Card Header */}
                              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/20">
                                <div className="relative">
                                  <div className="w-16 h-16 rounded-full bg-white/20 overflow-hidden ring-2 ring-white/30">
                                    <Image
                                      src={member.image || "/placeholder.svg"}
                                      alt={member.name}
                                      width={64}
                                      height={64}
                                      className="w-full h-full object-cover"
                                      onError={(e) => {
                                        e.currentTarget.src = "/placeholder.svg?height=64&width=64"
                                      }}
                                    />
                                  </div>
                                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-xl font-bold">{member.name}</h3>
                                  <p className="text-sm opacity-90 font-medium">{member.role}</p>
                                  <p className="text-xs opacity-75">{member.department}</p>
                                </div>
                              </div>

                              {/* Card Content */}
                              <div className="space-y-4 mb-6">
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                                    <p className="text-xs font-semibold opacity-80 mb-1">EXPERIENCE</p>
                                    <p className="text-sm font-bold">{member.experience}</p>
                                  </div>
                                  <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                                    <p className="text-xs font-semibold opacity-80 mb-1">JOINED</p>
                                    <p className="text-sm font-bold">{member.joinyear}</p>
                                  </div>
                                </div>

                                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                                  <p className="text-xs font-semibold opacity-80 mb-1">SPECIALIZATION</p>
                                  <p className="text-sm font-medium">{member.specialization}</p>
                                </div>

                                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                                  <div className="flex items-center gap-2 mb-1">
                                    <Trophy className="h-3 w-3" />
                                    <p className="text-xs font-semibold opacity-80">ACHIEVEMENT</p>
                                  </div>
                                  <p className="text-sm font-medium">{member.achievements}</p>
                                </div>
                              </div>

                              {/* Contact Information */}
                              <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm bg-white/10 rounded-xl p-3 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                                  <Mail className="h-4 w-4 flex-shrink-0" />
                                  <span className="truncate font-medium">{member.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm bg-white/10 rounded-xl p-3 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                                  <Phone className="h-4 w-4 flex-shrink-0" />
                                  <span className="font-medium">{member.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm bg-white/10 rounded-xl p-3 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                                  <MapPin className="h-4 w-4 flex-shrink-0" />
                                  <span className="font-medium">{member.location}</span>
                                </div>
                              </div>

                              {/* Card Shine Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1500 pointer-events-none"></div>

                              {/* Card Border Glow */}
                              <div className="absolute inset-0 rounded-3xl border border-white/30 group-hover:border-white/50 transition-colors duration-500 pointer-events-none"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Slider Controls */}
            <button
              onClick={prevTeamSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#1B120A] to-[#2A1F1A] text-[#FF6B35] p-4 rounded-full hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-[#FFB347] hover:text-white transition-all duration-500 z-20 shadow-2xl border border-[#FFB347]/30 hover:border-white/50 hover:scale-110 group"
            >
              <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button
              onClick={nextTeamSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#1B120A] to-[#2A1F1A] text-[#FF6B35] p-4 rounded-full hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-[#FFB347] hover:text-white transition-all duration-500 z-20 shadow-2xl border border-[#FFB347]/30 hover:border-white/50 hover:scale-110 group"
            >
              <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Enhanced Slider Indicators */}
            <div className="flex justify-center mt-12 space-x-3">
              {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamSlide(index)}
                  className={`relative transition-all duration-500 hover:scale-125 ${
                    currentTeamSlide === index
                      ? "w-12 h-4 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] rounded-full scale-125"
                      : "w-4 h-4 bg-[#FFB347]/50 hover:bg-[#FFB347]/80 rounded-full"
                  }`}
                >
                  {currentTeamSlide === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-6 max-w-md mx-auto">
              <div className="w-full bg-[#FFB347]/20 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#FF6B35] to-[#FFB347] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentTeamSlide + 1) / Math.ceil(teamMembers.length / 3)) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - FIXED FLOATING OVERLAPPING LAYOUT */}
      <section className="bg-[#E8E4C9]/30 py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-[#FF6B35]/5 via-transparent to-[#FFB347]/5 animate-pulse-glow"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto relative">
            {/* Main CTA Card */}
            <div className="bg-[#1B120A] p-12 rounded-3xl border border-[#FFB347]/50 text-center relative z-10 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF6B35] text-shimmer">
                Ready to Innovate with Us?
              </h2>
              <p className="text-xl text-white mb-8 leading-relaxed max-w-3xl mx-auto">
                Join our thriving ecosystem of entrepreneurs, innovators, and industry leaders
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group ripple hover:shadow-2xl hover:shadow-[#FF6B35]/25 transition-all duration-300">
                  Join Our Incubator
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-8 -left-8 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] p-6 rounded-2xl text-white shadow-xl animate-float z-20">
              <div className="text-3xl font-bold">60+</div>
              <div className="text-sm">Startups</div>
            </div>

            <div
              className="absolute -top-4 -right-12 bg-gradient-to-br from-[#FFB347] to-[#FF6B35] p-6 rounded-2xl text-white shadow-xl animate-float z-20"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-3xl font-bold">₹2Cr+</div>
              <div className="text-sm">Funding</div>
            </div>

            <div
              className="absolute -bottom-8 left-8 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] p-6 rounded-2xl text-white shadow-xl animate-float z-20"
              style={{ animationDelay: "2s" }}
            >
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-sm">Students</div>
            </div>

            <div
              className="absolute -bottom-4 -right-8 bg-gradient-to-br from-[#FFB347] to-[#FF6B35] p-6 rounded-2xl text-white shadow-xl animate-float z-20"
              style={{ animationDelay: "3s" }}
            >
              <div className="text-3xl font-bold">4</div>
              <div className="text-sm">Years</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes scale-in {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3) translateY(50px); }
          50% { opacity: 1; transform: scale(1.05) translateY(-10px); }
          70% { transform: scale(0.9) translateY(0px); }
          100% { opacity: 1; transform: scale(1) translateY(0px); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-rotate { animation: rotate 20s linear infinite; }
        .animate-wiggle { animation: wiggle 2s ease-in-out infinite; }
        .animate-scale-in { animation: scale-in 0.5s ease-out; }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-bounce-in { animation: bounce-in 0.6s ease-out; }
        
        .text-shimmer {
          background: linear-gradient(90deg, #1B120A, #FF6B35, #FFB347, #1B120A);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        
        .hover-lift {
          transition: transform 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
        }
        
        .image-hover {
          transition: transform 0.5s ease;
        }
        .image-hover:hover {
          transform: scale(1.05);
        }
        
        .interactive-card {
          cursor: pointer;
        }
        
        .masonry-grid {
          columns: 1;
          column-gap: 2rem;
        }
        
        @media (min-width: 640px) {
          .masonry-grid {
            columns: 2;
          }
        }
        
        @media (min-width: 1024px) {
          .masonry-grid {
            columns: 3;
          }
        }
        
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 2rem;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        
        .btn-animate {
          position: relative;
          overflow: hidden;
        }
        
        .btn-animate::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn-animate:hover::before {
          left: 100%;
        }
        
        .ripple {
          position: relative;
          overflow: hidden;
        }
        
        .ripple::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .ripple:hover::after {
          width: 300px;
          height: 300px;
        }
        
        /* Enhanced Team Pocket Styles */
        .team-pocket-container {
          perspective: 1000px;
        }
        
        .team-pocket {
          transform-style: preserve-3d;
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .team-pocket-cover {
          backface-visibility: hidden;
        }
        
        .team-card {
          backface-visibility: hidden;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Smooth card slide animation */
        .team-pocket-container:hover .team-card {
          box-shadow: 0 25px 50px rgba(255, 107, 53, 0.4);
        }
        
        /* Remove the problematic rotateX transform */
        .team-pocket-container:hover .team-pocket {
          transform: none;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  )
}
