"use client"

import Image from "next/image"
import { ChevronRight, Menu, Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentFocusSlide, setCurrentFocusSlide] = useState(0)

  const focusAreas = [
    { name: "Electric Vehicle", icon: "🚗" },
    { name: "Autonomous Navigation", icon: "🛣️" },
    { name: "Biotechnology", icon: "🧬" },
    { name: "AI/ML", icon: "🤖" },
    { name: "Sensors", icon: "📡" },
    { name: "Advanced Materials", icon: "🔬" },
    { name: "IoT", icon: "📱" },
    { name: "Chip Design", icon: "💻" },
    { name: "AIML", icon: "🧠" },
    { name: "Digital Manufacturing", icon: "🏭" },
    { name: "Quantum Computing", icon: "⚛️" },
    { name: "Cyber Security", icon: "🔒" },
    { name: "Blockchain", icon: "🔗" },
    { name: "Robotics", icon: "🦾" },
    { name: "3D Printing", icon: "🖨️" },
    { name: "Industry 4.0", icon: "🏢" },
  ]

  useEffect(() => {
    setIsLoaded(true)

    // Focus area carousel
    const focusInterval = setInterval(() => {
      setCurrentFocusSlide((prev) => (prev + 1) % 2) // 2 slides (0 and 1)
    }, 5000)

    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")

          // Special handling for partnership sections
          if (entry.target.classList.contains("partnership-zoom")) {
            entry.target.classList.add("zoom-in")
          }
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".scroll-animate")
    animateElements.forEach((el) => observer.observe(el))

    const partnershipElements = document.querySelectorAll(".partnership-zoom")
    partnershipElements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      clearInterval(focusInterval)
    }
  }, [])

  const getCurrentFocusAreas = () => {
    const startIndex = currentFocusSlide * 8
    return focusAreas.slice(startIndex, startIndex + 8)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 animate-pulse-glow"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 z-10">
            <div className="inline-block px-4 py-1 bg-[#FFB347]/20 rounded-full text-[#1a1a1a] font-medium text-sm mb-4 animate-bounce-in hover-glow smooth-bounce">
              INNOVATION RELOAD
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1B120A] animate-slide-in-left">
              UNLEASH <br />
              THE POWER OF <br />
              <span className="text-[#FF6B35] text-shimmer">INNOVATION</span>
            </h1>
            <p className="text-[#1B120A] text-lg max-w-md animate-slide-in-left stagger-2">
              Chennai Institute of Technology Innovation Labs - Empowering the next generation of entrepreneurs and
              innovators.
            </p>
            <div className="pt-4 animate-slide-in-left stagger-3">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-md px-6 btn-animate hover-lift group gentle-pulse">
                Explore More
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-slide-in-right">
            <div className="relative w-80 h-80 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] rounded-full flex items-center justify-center animate-float hover-glow">
              <div className="absolute inset-2 bg-[#1a1a1a] rounded-full flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/innovation-hub.png"
                    alt="Innovation Hub"
                    width={200}
                    height={200}
                    className="h-32 w-auto animate-rotate-slow"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=200&width=200"
                    }}
                  />
                </div>
              </div>
              <div className="absolute -right-4 top-12 w-24 h-24 bg-[#FFB347] rounded-full flex items-center justify-center text-center p-2 animate-bounce-in stagger-1 hover-lift gentle-pulse">
                <div>
                  <div className="font-bold text-xl text-white">32</div>
                  <div className="text-xs text-white">Centers of Excellence</div>
                </div>
              </div>
              <div className="absolute -left-4 top-20 w-20 h-20 bg-[#FF6B35] rounded-full flex items-center justify-center text-center p-2 animate-bounce-in stagger-2 hover-lift gentle-pulse">
                <div>
                  <div className="font-bold text-lg text-white">25+</div>
                  <div className="text-xs text-white">Strategic Partners</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-12 w-20 h-20 bg-[#FFB347] rounded-full flex items-center justify-center text-center p-2 animate-bounce-in stagger-3 hover-lift gentle-pulse">
                <div>
                  <div className="font-bold text-lg text-white">40+</div>
                  <div className="text-xs text-white">Innovation Ambassadors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#FFB347]/10 py-20 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">
              Chennai Institute of Technology <br />
              Business Incubation Forum
            </h2>
            <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#1B120A] p-8 rounded-xl border border-[#FFB347]/50 shadow-lg card-hover hover-lift scroll-animate">
              <p className="text-white leading-relaxed">
                The Chennai Institute Technology Business Incubation Forum (CITBIF) is a Section 8 Company, operating
                under the brand name Chennai Institute of Technology Innovation Labs (CITIL) dedicated to nurturing
                entrepreneurship by offering mentorship, cutting-edge technology, and specialized COEs for deep tech
                product development. We provide crucial funding and comprehensive support, guiding ideas to become
                thriving businesses. CITIL's focus areas include AI/ML, IoT, and other innovative, sustainable ventures.
                Our commitment lies in empowering startups to flourish and thrive in the market. With a blend of
                innovation, technology, and support, we pave the way for the growth of entrepreneurial endeavors.
              </p>
            </div>
            <div className="flex justify-center scroll-animate stagger-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] rounded-xl blur-lg opacity-30 animate-pulse-glow"></div>
                <div className="relative bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 shadow-lg hover-lift">
                  <div className="image-hover">
                    <Image
                      src="/incubation-lab.png"
                      alt="CIT Incubation Lab"
                      width={400}
                      height={300}
                      className="rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=300&width=400"
                      }}
                    />
                  </div>
                  <div className="mt-4 text-center font-semibold text-[#FF6B35] animate-fade-in">
                    CIT-INCUBATION LAB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="bg-[#E8E4C9]/30 py-20 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Objectives of CITIL</h2>
            <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                text: "Encourage a culture of ideation, experimentation, and innovation among students, faculty, and researchers.",
              },
              {
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                text: "Conduct practical training on emerging technologies, entrepreneurship, and innovation to build skills and foster real-world problem-solving.",
              },
              {
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                text: "Provide continuous mentoring, technical support, and networking opportunities to empower innovators at all levels.",
              },
              {
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                text: "Drive deeptech innovation with a focus on sustainability, industry, and social impact, fostering solutions aligned with UN SDGs.",
              },
            ].map((objective, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-lg card-hover hover-lift scroll-animate stagger-${index + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#FF6B35]/20 p-3 rounded-lg group-hover:bg-[#FF6B35]/30 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-8 h-8 text-[#FF6B35] transition-transform duration-300 group-hover:rotate-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={objective.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#FFB347] transition-colors duration-300">
                      {objective.text}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#FFB347]/10 py-20 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1B120A] p-8 rounded-xl border border-[#FFB347]/50 relative overflow-hidden group shadow-lg card-hover hover-lift scroll-animate">
              <div className="absolute inset-0 bg-[url('/vision-bg.png')] opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-bold mb-6 text-center text-[#FF6B35] relative z-10 group-hover:scale-110 transition-transform duration-300">
                Vision
              </h3>
              <p className="text-white leading-relaxed relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                To foster innovation by empowering students and entrepreneurs with mentorship, resources, and
                partnerships to create impactful, scalable solutions.
              </p>
            </div>

            <div className="bg-[#1B120A] p-8 rounded-xl border border-[#FFB347]/50 relative overflow-hidden group shadow-lg card-hover hover-lift scroll-animate stagger-2">
              <div className="absolute inset-0 bg-[url('/mission-bg.png')] opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-bold mb-6 text-center text-[#FF6B35] relative z-10 group-hover:scale-110 transition-transform duration-300">
                Mission
              </h3>
              <p className="text-white leading-relaxed relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                To foster creativity and entrepreneurship through a collaborative platform that enables transformative
                solutions for societal and economic impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas with Carousel */}
      <section className="bg-[#E8E4C9]/30 py-20 relative overflow-hidden scroll-animate">
        <div className="absolute inset-0 bg-[url('/tech-pattern.png')] opacity-5 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Focus Areas</h2>
            <div className="w-20 h-1 bg-[#FF6B35] mx-auto mb-6 animate-scale-in"></div>
            <p className="text-[#1B120A] max-w-2xl mx-auto font-medium animate-fade-in">
              Our primary focus area is in the Deeptech domain, but not limited to any one specific sector
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 transition-transform duration-800 ease-in-out carousel-slide"
              style={{ transform: `translateX(-${currentFocusSlide * 100}%)` }}
            >
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className={`bg-[#1B120A] p-4 rounded-xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 text-center group shadow-md card-hover hover-lift scroll-animate stagger-${(index % 6) + 1}`}
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-[#FF6B35]/20 rounded-full flex items-center justify-center group-hover:bg-[#FF6B35]/30 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                    <div className="text-2xl transition-transform duration-300 group-hover:scale-110">{area.icon}</div>
                  </div>
                  <h3 className="text-sm font-medium text-white group-hover:text-[#FF6B35] transition-all duration-300 group-hover:scale-105">
                    {area.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1].map((slide) => (
                <button
                  key={slide}
                  onClick={() => setCurrentFocusSlide(slide)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentFocusSlide === slide ? "bg-[#FF6B35] scale-125" : "bg-[#FFB347]/50 hover:bg-[#FFB347]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Formula */}
      <section className="bg-[#FFB347]/10 py-20 relative overflow-hidden scroll-animate">
        <div className="absolute inset-0 bg-[url('/success-pattern.png')] opacity-5 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">OUR SUCCESS FORMULA</h2>
            <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative">
              {[
                { name: "MENTORING", icon: "📊" },
                { name: "MARKET ACCESS", icon: "🌐" },
                { name: "FUNDING", icon: "💰" },
                { name: "PROGRAMS", icon: "📝" },
                { name: "TALENT", icon: "🌟" },
                { name: "NETWORKING", icon: "🔄" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 text-center group relative overflow-hidden shadow-lg card-hover hover-lift scroll-animate stagger-${index + 1}`}
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#FF6B35]/20 rounded-full flex items-center justify-center group-hover:bg-[#FF6B35]/30 transition-all duration-300 group-hover:scale-125 animate-pulse-glow">
                      <div className="text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#FF6B35] transition-all duration-300 group-hover:scale-105">
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How CITIL adds values */}
      <section className="bg-[#E8E4C9]/30 py-20 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">How CITIL adds values</h2>
            <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Co Working Space", icon: "👥" },
              { name: "IP Support", icon: "📜" },
              { name: "Mentorship", icon: "🧠" },
              { name: "Maker Lab", icon: "🛠️" },
              { name: "Financial Aid", icon: "💵" },
              { name: "Hardware & Software", icon: "💻" },
              { name: "Technological Infrastructure", icon: "🏗️" },
              { name: "Networking Events", icon: "🤝" },
            ].map((value, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-4 rounded-full border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-md hover-lift scroll-animate stagger-${(index % 6) + 1}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF6B35]/20 rounded-full flex items-center justify-center group-hover:bg-[#FF6B35]/30 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                    <div className="text-xl transition-transform duration-300 group-hover:scale-110">{value.icon}</div>
                  </div>
                  <h3 className="text-sm font-medium text-white group-hover:text-[#FF6B35] transition-all duration-300 group-hover:scale-105">
                    {value.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-[#FFB347]/10 py-20 relative overflow-hidden scroll-animate">
        <div className="absolute inset-0 bg-[url('/metrics-bg.png')] opacity-5 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">CITBIF IMPACT METRICS</h2>
            <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "60+", label: "Startups Incubated" },
              { value: "4", label: "Years of Operation" },
              { value: "5000+", label: "Students Impacted" },
              { value: "2Cr", label: "Funding Raised" },
            ].map((metric, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-6 rounded-full aspect-square flex flex-col items-center justify-center text-center border-2 border-[#FF6B35] group hover:bg-[#1B120A]/80 transition-all duration-500 shadow-lg hover-lift animate-pulse-glow scroll-animate stagger-${index + 1}`}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#FF6B35] group-hover:scale-125 transition-all duration-500 animate-bounce-in">
                  {metric.value}
                </div>
                <div className="text-sm text-white mt-2 font-medium group-hover:text-[#FFB347] transition-colors duration-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#E8E4C9]/30 py-20 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Testimonials</h2>
            <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. K. Manivannan",
                role: "National Expert & Assessor",
                image: "/testimonial1.png",
                text: "Driving and revolutionizing faculty innovation, CITIL works to inspire faculty to explore their innovative ideas and convert them into tangible products for the society's betterment.",
              },
              {
                name: "Dr. Vivek Menon",
                role: "Principal Scientist, ZTI Madras",
                image: "/testimonial2.png",
                text: "Students were very keen and intensive, understood the challenges they face as a goal. Thank you Vijay venkatesh sir for shaping and bringing this.",
              },
              {
                name: "Anil Kumar Kattera",
                role: "Head Innovation Lead",
                image: "/testimonial3.png",
                text: "An outstanding educational institution that nurtures innovation and entrepreneurship. I was impressed with the level of talent here and the work of CITIL team in creating an environment of innovation.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 group hover:border-[#FF6B35] transition-all duration-500 shadow-lg card-hover hover-lift scroll-animate stagger-${index + 1}`}
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-[#FF6B35]/20 mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover image-hover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=80&width=80"
                      }}
                    />
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-[#FFB347] transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {testimonial.role}
                  </p>
                </div>
                <p className="text-white text-sm text-center group-hover:text-gray-200 transition-colors duration-300">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="bg-[#FFB347]/10 py-20 relative overflow-hidden scroll-animate">
        <div className="absolute inset-0 bg-[url('/partners-bg.png')] opacity-5 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">
              Corporate Partnerships and Collaborations
            </h2>
            <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { name: "KUKA", logo: "/partner-kuka.png" },
              { name: "Dassault", logo: "/partner-dassault.png" },
              { name: "Bonfiglioli", logo: "/partner-bonfiglioli.png" },
              { name: "Fronius", logo: "/partner-fronius.png" },
              { name: "CyberX", logo: "/partner-cyberx.png" },
              { name: "SEIndia", logo: "/partner-seindia.png" },
              { name: "Zoho", logo: "/partner-zoho.png" },
              { name: "Buddi AI", logo: "/partner-buddi.png" },
              { name: "Festa Solar", logo: "/partner-festa.png" },
              { name: "Tech Corp", logo: "/partner-techcorp.png" },
            ].map((partner, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg flex items-center justify-center h-24 transition-all duration-500 shadow-md partnership-zoom partnership-item scroll-animate stagger-${(index % 6) + 1}`}
              >
                <div className="w-full h-full rounded flex items-center justify-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto opacity-90 transition-all duration-300 filter grayscale hover:grayscale-0"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=60&width=120"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Partners */}
      <section className="bg-[#E8E4C9]/30 py-20 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Ecosystem Partners</h2>
            <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "MSME", logo: "/eco-msme.png" },
              { name: "NSTEDB", logo: "/eco-nstedb.png" },
              { name: "Institution's Innovation Council", logo: "/eco-iic.png" },
              { name: "Startup India", logo: "/eco-startupindia.png" },
              { name: "Sustainable Development Goals", logo: "/eco-sdg.png" },
              { name: "StartupTN", logo: "/eco-startuptn.png" },
              { name: "iTNT", logo: "/eco-itnt.png" },
              { name: "TNRISE", logo: "/eco-tnrise.png" },
            ].map((partner, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg flex items-center justify-center h-24 transition-all duration-500 shadow-md partnership-zoom partnership-item scroll-animate stagger-${(index % 6) + 1}`}
              >
                <div className="w-full h-full rounded flex items-center justify-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto opacity-90 transition-all duration-300 filter grayscale hover:grayscale-0"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=60&width=120"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Talk */}
      <section className="bg-[#FFB347]/10 py-20 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Founder's Talk</h2>
            <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "STUDIO",
                role: "Founder, OAK Studio",
                image: "/founder1.png",
                text: "CITBIF has been a great partner to our business. Their support has accelerated our growth and provided valuable resources.",
              },
              {
                name: "Dharamraj",
                role: "Founder, Datom Technologies",
                image: "/founder2.png",
                text: "I'm Dharamraj founder of Datom Technologies, a manufacturing organization. Our mission is to revolutionize the manufacturing industry with innovative software and hardware means.",
              },
              {
                name: "AREON",
                role: "Founder, AREON Networks",
                image: "/founder3.png",
                text: "The support from CITIL has been instrumental in our growth journey. Their mentorship and resources have been invaluable.",
              },
            ].map((founder, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 group hover:border-[#FF6B35] transition-all duration-500 shadow-lg card-hover hover-lift scroll-animate stagger-${index + 1}`}
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B35]/20 to-[#FFB347]/20 mb-4 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover image-hover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=64&width=64"
                      }}
                    />
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-[#FFB347] transition-colors duration-300">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {founder.role}
                  </p>
                </div>
                <p className="text-white text-sm text-center group-hover:text-gray-200 transition-colors duration-300">
                  "{founder.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chairman Profile */}
      <section className="bg-[#E8E4C9]/30 py-20 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative scroll-animate">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] rounded-xl blur-lg opacity-30 animate-pulse-glow"></div>
              <div className="relative bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 overflow-hidden shadow-lg hover-lift">
                <Image
                  src="/chairman.png"
                  alt="Shri P. Sriram"
                  width={400}
                  height={500}
                  className="rounded-lg mx-auto image-hover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=500&width=400"
                  }}
                />
              </div>
            </div>

            <div className="scroll-animate stagger-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Shri.P.Sriram</h2>
              <div className="w-20 h-1 bg-[#FF6B35] mb-6 animate-scale-in"></div>
              <h3 className="text-xl mb-6 text-[#1B120A] animate-fade-in">
                First Generation Entrepreneur and Industrialist
              </h3>
              <p className="text-[#1B120A] mb-4 font-medium animate-fade-in stagger-2">
                Chairman, Chennai Institute of Technology
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {[
                  { name: "ITL Auto Components", logo: "/company-itl.png" },
                  { name: "Festen", logo: "/company-festen.png" },
                  { name: "Festa Solar", logo: "/company-festa.png" },
                  { name: "Fesren Energy", logo: "/company-fesren.png" },
                  { name: "CITBIF", logo: "/company-citbif.png" },
                  { name: "Corsair Autotech", logo: "/company-corsair.png" },
                ].map((company, index) => (
                  <div
                    key={index}
                    className={`bg-[#1B120A] p-3 rounded-lg flex items-center justify-center h-16 border border-[#FFB347]/50 shadow-md hover-lift transition-all duration-300 hover:scale-105 scroll-animate stagger-${index + 1}`}
                  >
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      width={80}
                      height={40}
                      className="max-h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=40&width=80"
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#FFB347]/10 py-20 relative overflow-hidden scroll-animate">
        <div className="absolute inset-0 bg-[url('/contact-pattern.png')] opacity-5 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Contact Us</h2>
            <div className="w-20 h-1 bg-[#FF6B35] mx-auto mb-6 animate-scale-in"></div>
            <p className="text-[#1B120A] max-w-2xl mx-auto animate-fade-in">
              Reach out to us for collaborations, inquiries, or to learn more about our innovation ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#1B120A] p-8 rounded-xl border border-[#FFB347]/50 shadow-lg card-hover hover-lift scroll-animate">
              <h3 className="text-2xl font-bold mb-6 text-[#FF6B35] animate-fade-in">Get In Touch</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-slide-in-left stagger-1">
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300 focus:scale-105"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="animate-slide-in-right stagger-1">
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300 focus:scale-105"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="animate-slide-in-left stagger-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300 focus:scale-105"
                    placeholder="Subject"
                  />
                </div>

                <div className="animate-slide-in-left stagger-3">
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white resize-none transition-all duration-300 focus:scale-105"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <div className="animate-slide-in-left stagger-4">
                  <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white py-3 rounded-lg font-medium btn-animate hover-lift group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </form>
            </div>

            <div className="space-y-8 scroll-animate stagger-2">
              <div className="bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 shadow-lg card-hover hover-lift">
                <h3 className="text-xl font-bold mb-6 text-[#FF6B35] animate-fade-in">Contact Information</h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      title: "Address",
                      content: [
                        "Chennai Institute of Technology",
                        "Sarathy Nagar, Kundrathur",
                        "Chennai - 600069",
                        "Tamil Nadu, India",
                      ],
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: ["info@citil.in", "support@citil.in"],
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      content: ["+91 44 2478 1111", "+91 44 2478 2222"],
                    },
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-4 animate-slide-in-left stagger-${index + 1}`}>
                      <div className="bg-[#FF6B35]/20 p-3 rounded-lg hover:bg-[#FF6B35]/30 transition-all duration-300 hover:scale-110">
                        <item.icon className="h-6 w-6 text-[#FF6B35]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 text-white">{item.title}</h4>
                        {item.content.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-white text-sm">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 h-64 relative overflow-hidden shadow-lg hover-lift">
                <div className="absolute inset-0 bg-[url('/map.png')] opacity-70 bg-cover bg-center image-hover"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-md px-6 btn-animate hover-lift group animate-bounce-in">
                    View on Google Maps
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-[#3a3a3a] py-12 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-slide-in-left stagger-1">
              <Image
                src="/logo.png"
                alt="CITIL Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4 hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=40&width=120"
                }}
              />
              <p className="text-gray-400 text-sm">
                Chennai Institute of Technology Innovation Labs - Empowering the next generation of entrepreneurs and
                innovators.
              </p>
            </div>

            <div className="animate-slide-in-left stagger-2">
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {["Innovation", "Portfolio", "Facilities", "About Us", "Incubation"].map((item, index) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`text-gray-400 hover:text-[#FFB347] text-sm transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-fade-in stagger-${index + 1}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-slide-in-left stagger-3">
              <h4 className="text-lg font-semibold mb-4 text-white">Programs</h4>
              <ul className="space-y-2">
                {["Incubation", "Acceleration", "Mentorship", "Funding", "Networking"].map((item, index) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={`text-gray-400 hover:text-[#FFB347] text-sm transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-fade-in stagger-${index + 1}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-slide-in-left stagger-4">
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
              <address className="text-gray-400 text-sm not-italic animate-fade-in">
                Chennai Institute of Technology
                <br />
                Sarathy Nagar, Kundrathur
                <br />
                Chennai - 600069
                <br />
                Tamil Nadu, India
              </address>
              <div className="mt-4">
                <a
                  href="mailto:info@citil.in"
                  className="text-[#FFB347] hover:underline text-sm transition-all duration-300 hover:scale-105 animate-fade-in stagger-2"
                >
                  info@citil.in
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#3a3a3a] mt-8 pt-8 text-center text-gray-500 text-sm animate-fade-in">
            &copy; {new Date().getFullYear()} Chennai Institute of Technology Innovation Labs. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isLoaded && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white p-3 rounded-full shadow-lg hover-lift btn-animate animate-bounce-in z-50 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronRight className="h-6 w-6 rotate-[-90deg]" />
        </button>
      )}
    </div>
  )
}
