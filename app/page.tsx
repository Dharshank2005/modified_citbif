"use client"

import Image from "next/image"
import { Users, Target, Lightbulb, Award, ChevronLeft, ChevronRight, Mail, Phone, MapPin, Send, ArrowRight, Trophy, Clock, MessageSquare, FileText, Calendar, HelpCircle, Building, Briefcase, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import Navbar from "@/components/navbar"
import kuka from "../public/kuka.jpg"
import dassault from "../public/Dassault Systems.jpg"
import bonfiglioli from "../public/Bonfiglioli.jpg"
import fronius from "../public/Fronius.jpg"
import cyberx from "../public/Cyberx.jpg"
import sindia from "../public/SAEIndia.jpg"
import zoho from "../public/ZOHO.jpg"
import buddi from "../public/BUDDI Ai.jpg"
import festa from "../public/Festa Solar.jpg"
import msme from "../public/MSME.jpg"
import aicte from "../public/AICTE.jpg"
import iic from "../public/IIC.jpg"
import tnrise from "../public/TNRise.jpg"
import stindia from "../public/StartupIndia.jpg"
import sttn from "../public/StartupTN.jpg"
import itnt from "../public/iTNT.jpg"
import sdg from "../public/SDG.jpg"
import test1 from "../public/testimonial1.jpg"
import test2 from "../public/testimonial2.jpg"
import test3 from "../public/testimonial3.jpg"
import com1 from "../public/company1.jpg"
import com2 from "../public/company2.jpg"
import com3 from "../public/company3.jpg"
import com4 from "../public/company4.jpg"
import com5 from "../public/company5.jpg"
import com6 from "../public/company6.jpg"
import chairman from "../public/Chairman.jpg"
import edii from "../public/edii.png"
import idealab from "../public/idealab.png"
import noor from "../public/noor.jpg"
import karthick from "../public/karthick.jpg"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentFocusSlide, setCurrentFocusSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentFocusSlide((prev) => (prev === 1 ? 0 : 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleSlideChange = (slide: number) => {
    setCurrentFocusSlide(slide)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const focusAreas = [
    {
      icon: "🤖",
      name: "AI/ML",
      description: "Building intelligent systems using machine learning and data science.",
    },
    {
      icon: "🌐",
      name: "IoT",
      description: "Connecting devices to communicate and automate environments.",
    },
    {
      icon: "🧠",
      name: "Neurotech",
      description: "Innovations in brain-computer interfaces and cognitive computing.",
    },
    {
      icon: "🧬",
      name: "Biotech",
      description: "Advancements in healthcare, genetics, and biological systems.",
    },
    {
      icon: "🛰️",
      name: "Aerospace",
      description: "Cutting-edge technologies for space exploration and aviation.",
    },
    {
      icon: "🔐",
      name: "Cybersecurity",
      description: "Protecting systems and data from digital threats and breaches.",
    },
    {
      icon: "⚛️",
      name: "Quantum Tech",
      description: "Leveraging quantum mechanics for computing and communication.",
    },
    {
      icon: "🧪",
      name: "Material Science",
      description: "Innovating with advanced materials for stronger, smarter solutions.",
    },
    {
      icon: "🚀",
      name: "Defense Tech",
      description: "Developing advanced systems for national security and defense.",
    },
    {
      icon: "💡",
      name: "Clean Tech",
      description: "Sustainable technologies for renewable energy and environment.",
    },
    {
      icon: "📦",
      name: "Supply Chain",
      description: "Improving logistics, inventory, and delivery systems with tech.",
    },
    {
      icon: "💊",
      name: "Health Tech",
      description: "Innovations in digital health, telemedicine, and diagnostics.",
    },
    {
      icon: "🏭",
      name: "Industry 4.0",
      description: "Smart factories and automation in manufacturing systems.",
    },
    {
      icon: "📱",
      name: "AR/VR",
      description: "Immersive experiences through augmented and virtual reality.",
    },
    {
      icon: "🧾",
      name: "FinTech",
      description: "Transforming financial services with digital technology.",
    },
    {
      icon: "🚗",
      name: "Mobility",
      description: "Innovations in transport including EVs and smart mobility.",
    }
  ];
  const [counters, setCounters] = useState([0, 0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  const metrics = [
    {
      value: 60,
      label: "Startups Incubated",
      color: "from-[#FF6B35] to-[#FFB347]",
      suffix: "+",
    },
    {
      value: 4,
      label: "Years of Operation",
      color: "from-[#FFB347] to-[#FF6B35]",
      suffix: "",
    },
    {
      value: 5000,
      label: "Students Touched",
      color: "from-[#FF6B35] to-[#FFB347]",
      suffix: "+",
    },
    {
      value: 2,
      label: "Funds Facilitated",
      color: "from-[#FFB347] to-[#FF6B35]",
      suffix: "Cr",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    metrics.forEach((metric, index) => {
      let current = 0
      const increment = metric.value / 50 // Divide by number of steps for smooth animation
      const timer = setInterval(() => {
        current += increment
        if (current >= metric.value) {
          current = metric.value
          clearInterval(timer)
        }
        setCounters((prev) => {
          const newCounters = [...prev]
          newCounters[index] = Math.floor(current)
          return newCounters
        })
      }, 30) // 30ms interval for smooth animation
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFocusSlide((prev) => (prev === 0 ? 1 : 0))
    }, 5000) // Slide every 5 seconds

    return () => clearInterval(interval) // Clean up
  }, [])

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
  const [currentIndex, setCurrentIndex] = useState(0)

  const founders = [
    {
      name: "Sriram",
      role: "Founder, GOK Studio",
      image: "/GOK.png",
      text: "CITBIF has been a great partner to our business. Their support has accelerated our growth and provided valuable resources.",
    },
    {
      name: "Dharanya",
      role: "Founder, Diatom Technologies",
      image: "/diatom.png",
      text: "I'm Dharanya, founder of Diatom Technologies, a manufacturing organization. Our mission is to revolutionize the manufacturing industry with innovative software and hardware means.",
    },
    {
      name: "Manojarwin P",
      role: "Founder, ARWIN Networks",
      image: "/Arwin.png",
      text: "The support from CITBIF has been instrumental in our growth journey. Their mentorship and resources have been invaluable.",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % founders.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + founders.length) % founders.length)
  }

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + founders.length) % founders.length

    if (position === 0) {
      // Center card - focused
      return {
        transform: "translateX(0%) scale(1)",
        opacity: 1,
        zIndex: 30,
        filter: "blur(0px)",
      }
    } else if (position === 1) {
      // Right card
      return {
        transform: "translateX(80%) scale(0.8)",
        opacity: 0.6,
        zIndex: 10,
        filter: "blur(1px)",
      }
    } else {
      // Left card
      return {
        transform: "translateX(-80%) scale(0.8)",
        opacity: 0.6,
        zIndex: 10,
        filter: "blur(1px)",
      }
    }
  }

  const partners = [
    { name: "KUKA", logo: kuka },
    { name: "Dassault", logo: dassault },
    { name: "Bonfiglioli", logo: bonfiglioli },
    { name: "Fronius", logo: fronius },
    { name: "CyberX", logo: cyberx },
    { name: "SEIndia", logo: sindia },
    { name: "Zoho", logo: zoho },
    { name: "Buddi AI", logo: buddi },
    { name: "Festa Solar", logo: festa },
  ]

  const copartners = [
    { name: "MSME", logo: msme },
    { name: "NSTEDB", logo: aicte },
    { name: "Institution's Innovation Council", logo: iic },
    { name: "Startup India", logo: stindia },
    { name: "Sustainable Development Goals", logo: sdg },
    { name: "StartupTN", logo: sttn },
    { name: "iTNT", logo: itnt },
    { name: "TNRISE", logo: tnrise },
    { name: "Edii-tn", logo: edii },
    { name: "idea-lab", logo: idealab },
  ]

  const [isItLoaded, setIsItLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0)

  useEffect(() => {
    setIsItLoaded(true)

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

  const contactInfo = [
      {
        title: "Email Us",
        icon: Mail,
        details: "info@citil.edu.in",
        action: "Send Email",
        link: "mailto:info@citil.edu.in",
      },
      {
        title: "Call Us",
        icon: Phone,
        details: "+91 9876543210",
        action: "Call Now",
        link: "tel:+919876543210",
      },
      {
        title: "Visit Us",
        icon: MapPin,
        details: "Chennai, Tamil Nadu, India",
        action: "Get Directions",
        link: "https://maps.google.com",
      },
      {
        title: "Office Hours",
        icon: Clock,
        details: "Mon-Fri: 9AM - 5PM",
        action: "View Schedule",
        link: "#schedule",
      },
    ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
      {/* Header */}
      <Navbar />

      {/* Hero Section - Asymmetric Layout */}
      <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden flex items-center py-16">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 animate-pulse-glow"></div>

        {/* Geometric Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-48 h-48 bg-[#FFB347]/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7 space-y-8 z-10">
              <div className="inline-flex items-center px-6 py-3 bg-[#FFB347]/20 rounded-full text-[#1a1a1a] font-medium text-sm mb-6 animate-bounce-in hover-glow smooth-bounce">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full mr-3 animate-pulse"></div>
                INNOVATION RELOAD
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#1B120A] animate-slide-in-left">
                  UNLEASH THE POWER OF
                  <br />
                  <span className="text-[#FF6B35] text-shimmer">INNOVATION</span>
                </h1>

                <div className="max-w-lg">
                  <p className="text-[#1B120A] text-xl leading-relaxed animate-slide-in-left stagger-2">
                    Chennai Institute of Technology Business Incubation Forum - Empowering the next generation of
                    entrepreneurs and innovators.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-slide-in-left stagger-3">
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group gentle-pulse">
                  Explore More
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="px-6 py-3 border-2 border-[#FF6B35] bg-white text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full font-semibold">
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Right Visual - 5 columns */}
            <div className="lg:col-span-5 flex justify-center animate-slide-in-right">
              <div className="relative">
                {/* Main Circle */}
                <div className="relative w-96 h-96 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-full flex items-center justify-center hover-glow">
                  <div className="absolute inset-4 bg-[#F0E7C3] rounded-full flex items-center justify-center">
                    <Image
                      src="/citbif-new-logo.png"
                      alt="Innovation Hub"
                      width={400}
                      height={400}
                      className="w-[300px] h-[300px] w-auto"
                      onError={(e) => {
                        e.currentTarget.src = "/logo.png?height=200&width=200"
                      }}
                    />
                  </div>
                </div>

                {/* Floating Stats - Positioned around the circle */}
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-[#FFB347] to-[#FF6B35] rounded-2xl flex flex-col items-center justify-center text-center p-3 animate-bounce-in stagger-1 hover-lift gentle-pulse shadow-xl">
                  <div className="font-bold text-2xl text-white">32</div>
                  <div className="text-xs text-white font-medium">Centers of Excellence</div>
                </div>

                <div className="absolute -left-12 top-16 w-24 h-24 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-2xl flex flex-col items-center justify-center text-center p-3 animate-bounce-in stagger-2 hover-lift gentle-pulse shadow-xl">
                  <div className="font-bold text-xl text-white">25+</div>
                  <div className="text-xs text-white font-medium">Strategic Partners</div>
                </div>

                <div className="absolute -bottom-6 left-8 w-24 h-24 bg-gradient-to-br from-[#FFB347] to-[#FF6B35] rounded-2xl flex flex-col items-center justify-center text-center p-3 animate-bounce-in stagger-3 hover-lift gentle-pulse shadow-xl">
                  <div className="font-bold text-xl text-white">70+</div>
                  <div className="text-xs text-white font-medium">Innovation Ambassadors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Split Screen Layout */}
      <section className="bg-[#FFB347]/10 py-24 scroll-animate">
        <div className="container mx-auto px-4">
          {/* Header with Centered Design */}
          <div className="text-center mb-20 scroll-animate">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer relative">
                Chennai Institute of Technology <br />
                Business Incubation Forum
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] rounded-full animate-scale-in"></div>
              </h2>
            </div>
          </div>

          {/* Split Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Left Side - Content */}
            <div className="space-y-8 scroll-animate">
              <div className="bg-[#1B120A] p-10 rounded-3xl border border-[#FFB347]/50 shadow-2xl card-hover hover-lift relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/20 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <p className="text-white leading-relaxed text-lg">
                    The Chennai Institute of Technology Business Incubation Forum (CITBIF), a Section 8 Company,
                    operates under the brand name Chennai Institute of Technology Innovation Labs (CITIL). It is
                    committed to fostering entrepreneurship by providing mentorship, advanced technology, and dedicated
                    Centres of Excellence (COEs) for deep tech product development. CITIL offers essential funding and
                    all-round support to help transform ideas into successful businesses. Its key focus areas include
                    AI/ML, IoT, and other forward-thinking, sustainable initiatives. CITIL is devoted to empowering
                    startups to succeed in the market by combining innovation, technology, and strong support to drive
                    entrepreneurial growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="flex items-center justify-center scroll-animate stagger-2">
              <div className="relative group">
                {/* Background Glow */}
                <div className="absolute -inset-8 bg-gradient-to-r from-[#FF6B35]/30 to-[#FFB347]/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-[#1B120A] to-[#2a2a2a] p-8 rounded-3xl border border-[#FFB347]/50 shadow-2xl hover-lift">
                  <div className="image-hover rounded-2xl overflow-hidden">
                    <Image
                      src="/citbif-lab.png"
                      alt="CIT Incubation Lab"
                      width={500}
                      height={400}
                      className="rounded-2xl w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=400&width=500"
                      }}
                    />
                  </div>

                  {/* Label */}
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] rounded-full">
                      <span className="font-bold text-white text-lg">CIT-INCUBATION LAB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                      className="bg-[#1B120A] p-6 rounded-2xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group"
                    >
                      <item.icon className="h-8 w-8 text-[#FF6B35] mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                      <h3 className="font-bold text-white mb-2 group-hover:text-[#FFB347] transition-colors duration-300">
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
                        src="/citbif.jpg"
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

      {/* Objectives Section - Enhanced Masonry Grid Layout */}
      <section className="bg-[#E8E4C9]/30 py-20 scroll-animate relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#FF6B35]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#FFB347]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer relative inline-block">
              Key Objectives of CITBIF
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF6B35] rounded-full animate-scale-in"></div>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
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
                className={`bg-[#1B120A] p-6 lg:p-6 rounded-2xl border-2 border-[#FFB347]/20 hover:border-[#FF6B35]/60 transition-all duration-700 group shadow-2xl card-hover hover-lift scroll-animate stagger-${
                  index + 1
                } relative overflow-hidden backdrop-blur-sm min-h-[260px] flex flex-col`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#FF6B35]/15 via-[#FFB347]/8 to-transparent rounded-bl-full transition-all duration-700 group-hover:scale-150 group-hover:rotate-12"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-radial from-[#FFB347]/10 to-transparent rounded-tr-full transition-all duration-700 group-hover:scale-125"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6B35]/20 via-transparent to-[#FFB347]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="bg-gradient-to-br from-[#FF6B35]/25 to-[#FFB347]/25 p-4 rounded-xl group-hover:from-[#FF6B35]/40 group-hover:to-[#FFB347]/40 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 flex-shrink-0 shadow-lg backdrop-blur-sm border border-[#FF6B35]/20">
                      <svg
                        className="w-9 h-9 text-[#FF6B35] transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 filter drop-shadow-lg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={objective.icon} />
                      </svg>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="text-white text-base lg:text-lg leading-relaxed group-hover:text-gray-100 transition-all duration-500 group-hover:translate-x-2">
                        {objective.text}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 h-0.5 bg-gradient-to-r from-[#FF6B35]/50 to-[#FFB347]/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission - Side by Side Cards */}
      <section className="bg-[#FFB347]/10 py-24 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision Card */}
            <div className="group scroll-animate">
              <div className="bg-[#1B120A] p-12 rounded-3xl border border-[#FFB347]/50 relative overflow-hidden shadow-2xl card-hover hover-lift h-full">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('/vision-bg.png')] opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/20 to-transparent rounded-full"></div>

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">👁️</span>
                  </div>

                  <h3 className="text-3xl font-bold mb-8 text-[#FF6B35] group-hover:scale-105 transition-transform duration-300">
                    Vision
                  </h3>

                  <p className="text-white leading-relaxed text-lg flex-1 group-hover:text-gray-200 transition-colors duration-300">
                    To position CITBIF as a leading hub for deep-tech and manufacturing innovation, driving
                    industry-academia collaboration for economic and societal impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group scroll-animate stagger-2">
              <div className="bg-[#1B120A] p-12 rounded-3xl border border-[#FFB347]/50 relative overflow-hidden shadow-2xl card-hover hover-lift h-full">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('/mission-bg.png')] opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-[#FFB347]/20 to-transparent rounded-full"></div>

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFB347] to-[#FF6B35] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🎯</span>
                  </div>

                  <h3 className="text-3xl font-bold mb-8 text-[#FF6B35] group-hover:scale-105 transition-transform duration-300">
                    Mission
                  </h3>

                  <p className="text-white leading-relaxed text-lg flex-1 group-hover:text-gray-200 transition-colors duration-300">
                    To build a supportive ecosystem that empowers students and startups through mentorship, technology,
                    and CoEs, driving sustainable growth aligned with SDG.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas - Horizontal Slider */}
      <section className="bg-[#E8E4C9]/30 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/tech-pattern.png')] opacity-5 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] relative inline-block">
              Focus Areas of Innovation
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] rounded-full"></div>
            </h2>
            <p className="text-[#1B120A] max-w-3xl mx-auto font-medium text-xl mt-6">
              Our primary focus area is in the Deeptech domain, but not limited to any one specific sector
            </p>
          </div>

          {/* Horizontal Slider */}
          <div className="relative overflow-hidden rounded-3xl bg-[#1B120A]/5 p-8">
            <div className="relative h-80">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${currentFocusSlide * 100}%)`,
                }}
              >
                {/* Slide 1 - First 8 items */}
                <div className="w-full flex-shrink-0 grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                  {focusAreas.slice(0, 8).map((area, index) => (
                    <div key={index} className="group" style={{ perspective: "1000px" }}>
                      <div
                        className="relative w-full h-32 transition-transform duration-700 group-hover:rotate-y-180"
                        style={{
                          transformStyle: "preserve-3d",
                          transform: "rotateY(0deg)",
                        }}
                      >
                        {/* Front of card */}
                        <div
                          className="absolute inset-0 bg-[#1B120A] rounded-2xl border border-[#FFB347]/50 flex flex-col items-center justify-center p-4 shadow-lg"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 rounded-2xl flex items-center justify-center mb-3">
                            <div className="text-2xl">{area.icon}</div>
                          </div>
                          <h3 className="text-sm font-semibold text-white text-center">{area.name}</h3>
                        </div>

                        {/* Back of card */}
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-2xl flex items-center justify-center p-4 shadow-lg"
                          style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                          }}
                        >
                          <div className="text-center text-white">
                            <div className="text-3xl mb-2">{area.icon}</div>
                            <p className="text-sm font-medium leading-snug">{area.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slide 2 - Next 8 items */}
                <div className="w-full flex-shrink-0 grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                  {focusAreas.slice(8, 16).map((area, index) => (
                    <div key={index + 8} className="group" style={{ perspective: "1000px" }}>
                      <div
                        className="relative w-full h-32 transition-transform duration-700 group-hover:rotate-y-180"
                        style={{
                          transformStyle: "preserve-3d",
                          transform: "rotateY(0deg)",
                        }}
                      >
                        {/* Front of card */}
                        <div
                          className="absolute inset-0 bg-[#1B120A] rounded-2xl border border-[#FFB347]/50 flex flex-col items-center justify-center p-4 shadow-lg"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 rounded-2xl flex items-center justify-center mb-3">
                            <div className="text-2xl">{area.icon}</div>
                          </div>
                          <h3 className="text-sm font-semibold text-white text-center">{area.name}</h3>
                        </div>

                        {/* Back of card */}
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-2xl flex items-center justify-center p-4 shadow-lg"
                          style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                          }}
                        >
                          <div className="text-center text-white">
                            <div className="text-3xl mb-2">{area.icon}</div>
                            <p className="text-sm font-medium leading-snug">{area.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {[0, 1].map((slide) => (
                <button
                  key={slide}
                  onClick={() => setCurrentFocusSlide(slide)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentFocusSlide === slide
                      ? "bg-[#FF6B35] scale-125 shadow-lg"
                      : "bg-[#FFB347]/50 hover:bg-[#FFB347] hover:scale-110"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .group:hover > div {
            transform: rotateY(180deg) !important;
          }
        `}</style>
      </section>

      {/* Success Formula - Circular Layout */}
      <section className="bg-[#E8EEEE]/30 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/success-pattern.png')] opacity-5 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer relative inline-block">
              Why CITBIF?
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#FF6B35] rounded-full animate-scale-in"></div>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
            {[
              { name: "STARTUP-CENTRIC ECOSYSTEM", icon: "🚀" },
              { name: "MENTORSHIP FROM EXPERTS", icon: "🧠" },
              { name: "END-TO-END SUPPORT", icon: "🤝" },
              { name: "STATE-OF-THE-ART INFRASTRUCTURE", icon: "🏭" },
              { name: "OPPORTUNITIES FOR COLLABORATION", icon: "🔄" },
              { name: "PROVEN TRACK RECORD", icon: "🏆" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group w-44 h-44 md:w-52 md:h-52 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#3a3a3a] text-white rounded-[30px] p-4 flex flex-col items-center justify-center transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-[2deg] cursor-pointer hover:shadow-2xl hover:shadow-orange-300/50"
                style={{
                  boxShadow: "0 0 10px #FF6B35, 0 0 20px #FFB347, 0 0 30px #FF6B35",
                }}
              >
                {/* Glow Border Layer - Very Slow Pulse */}
                <div className="absolute inset-0 rounded-[30px] border border-orange-400 blur-sm opacity-60 group-hover:opacity-100 group-hover:border-orange-300 transition-all duration-300 animate-slow-pulse pointer-events-none"></div>

                {/* Enhanced Glow on Hover */}
                <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-orange-400/0 via-orange-300/0 to-orange-400/0 group-hover:from-orange-400/20 group-hover:via-orange-300/30 group-hover:to-orange-400/20 transition-all duration-500 pointer-events-none"></div>

                {/* Shine overlay - Very Slow Pulse */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 animate-slow-pulse bg-[length:200%_100%] rounded-[30px] transition-all duration-300 pointer-events-none"></div>

                <div className="z-10 text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-center font-semibold text-sm md:text-base text-white z-10 group-hover:text-orange-100 transition-colors duration-300">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes slow-pulse {
            0%,
            100% {
              opacity: 0.6;
            }
            50% {
              opacity: 1;
            }
          }

          .animate-slow-pulse {
            animation: slow-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
      </section>

      {/* How CITBIF adds values - Pill Layout */}
      <section className="bg-[#E8E4C9]/30 py-24 scroll-animate">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer relative inline-block">
              Services Provided by CITBIF
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#FF6B35] rounded-full animate-scale-in"></div>
            </h2>
          </div>

          {/* Pill Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Co Working Space", icon: "👥" },
              { name: "IP/TM Support", icon: "📜" },
              { name: "Mentorship", icon: "🧠" },
              { name: "Maker Lab", icon: "🛠️" },
              { name: "Innovation Grant", icon: "💵" },
              { name: "Hardware & Software", icon: "💻" },
              { name: "Technological Infrastructure", icon: "🏗️" },
              { name: "Investor Connect", icon: "🤝" },
            ].map((value, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-6 rounded-full border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-lg hover-lift scroll-animate stagger-${
                  (index % 6) + 1
                } relative overflow-hidden`}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FFB347]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#FF6B35]/30 group-hover:to-[#FFB347]/30 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 flex-shrink-0">
                    <div className="text-2xl transition-transform duration-300 group-hover:scale-110">{value.icon}</div>
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-[#FF6B35] transition-all duration-300 group-hover:scale-105 flex-1">
                    {value.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics - Dashboard Style */}
      <section ref={sectionRef} className="bg-[#FFB347]/10 py-24 relative overflow-hidden scroll-animate">
        <div className="absolute inset-0 bg-[url('/metrics-bg.png')] opacity-5 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer relative inline-block">
              CITBIF IMPACT METRICS
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#FF6B35] rounded-full animate-scale-in"></div>
            </h2>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className={`group scroll-animate stagger-${index + 1}`}>
                <div className="bg-[#1B120A] w-48 h-48 mx-auto rounded-full border-4 border-[#FF6B35] relative overflow-hidden shadow-2xl hover-lift transition-all duration-500 group-hover:scale-105 flex items-center justify-center">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-full`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 text-center p-4">
                    <div className="text-3xl lg:text-4xl font-bold text-[#FF6B35] group-hover:scale-125 transition-all duration-500 animate-bounce-in mb-2">
                      {counters[index]}
                      {metric.suffix}
                    </div>
                    <div className="text-xs font-semibold text-white group-hover:text-[#FFB347] transition-colors duration-300 leading-tight">
                      {metric.label}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-bl from-[#FF6B35]/20 to-transparent rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-tr from-[#FFB347]/20 to-transparent rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .text-shimmer {
            background: linear-gradient(45deg, #1b120a, #ff6b35, #1b120a);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: shimmer 2s infinite;
          }

          @keyframes shimmer {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }

          .animate-scale-in {
            animation: scaleIn 1s ease-out;
          }

          @keyframes scaleIn {
            from {
              transform: translateX(-50%) scaleX(0);
            }
            to {
              transform: translateX(-50%) scaleX(1);
            }
          }

          .animate-bounce-in {
            animation: bounceIn 0.8s ease-out;
          }

          @keyframes bounceIn {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.8;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(255, 107, 53, 0.3);
          }

          .scroll-animate {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .stagger-1 {
            animation-delay: 0.1s;
          }
          .stagger-2 {
            animation-delay: 0.2s;
          }
          .stagger-3 {
            animation-delay: 0.3s;
          }
          .stagger-4 {
            animation-delay: 0.4s;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
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

      {/* Testimonials - Card Deck Layout */}
      <section className="bg-[#E8E4C9]/30 py-24 scroll-animate">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer relative inline-block">
              Ecosystem Testimonials
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#FF6B35] rounded-full animate-scale-in"></div>
            </h2>
          </div>

          {/* Staggered Card Layout */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Dr. A. Noorjahan",
                role: "Bio-focus Scientific Solutions",
                image: noor,
                text: "Campus and the infrastructure facility is very useful to students. Good, Hospitality, Responsive and interactive students and future entrepreneurs. Good initiatives and Talented. All the best for future entrepreneurs.",
              },
              {
                name: "Dr. Vivek Manik",
                role: "Principal Scientist, IIT Madras",
                image: test2,
                text: "Students were very keen and attentive. Hospitality of Professors was very good.",
              },
              {
                name: "Karthick Mari Pitchai",
                role: "Founder and CEO Karking",
                image: karthick,
                text: "It's wonderful initiative! That's too from first year students. I can see lot of potential from students of CIT, in my opinion CIT will have too many student startups incubated inside in another 3 years of span.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`group scroll-animate stagger-${index + 1} ${
                  index === 1 ? "lg:mt-12" : ""
                } ${index === 2 ? "lg:mt-24" : ""}`}
              >
                <div className="bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 group-hover:border-[#FF6B35] transition-all duration-500 shadow-xl card-hover hover-lift relative overflow-hidden">
                  {/* Quote Mark */}
                  <div className="absolute top-6 right-6 text-6xl text-[#FF6B35]/20 font-serif">"</div>

                  {/* Profile Section */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 overflow-hidden group-hover:scale-110 transition-transform duration-300 mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover image-hover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white group-hover:text-[#FFB347] transition-colors duration-300 text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300 relative z-10">
                    {testimonial.text}
                  </p>

                  {/* Rating Stars */}
                  <div className="flex mt-6 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#FFB347] text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partnerships - Flowing Grid */}
      <section className="bg-orange-100/10 py-24 relative overflow-hidden scroll-animate">
        {/* Background Gradient */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-orange-200 to-orange-300 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900 relative inline-block">
              Corporate Partnerships and Collaborations
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-600 rounded-full"></div>
            </h2>
          </div>

          {/* Partner Carousel */}
          <div className="relative max-w-7xl mx-auto overflow-hidden">
            <div className="flex gap-8 w-max carousel-track">
              {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="group flex-shrink-0 w-64">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl border border-gray-200/50 hover:border-orange-600/50 hover:scale-105 hover:-translate-y-2">
                    <div className="w-full h-20 flex items-center justify-center">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        className="max-h-12 w-auto opacity-70 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=60&width=120"
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .carousel-track {
            animation: scroll 30s linear infinite;
          }

          .carousel-track:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Ecosystem Partners - Hexagonal Layout */}
      <section className="bg-[#E8E4C9]/30 py-24 scroll-animate relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer relative inline-block">
              Ecosystem Partners
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#FF6B35] rounded-full animate-scale-in"></div>
            </h2>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden group">
            <div className="flex gap-8 w-max carousel-track">
              {[...copartners, ...copartners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="group flex-shrink-0 w-48 h-28 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl border border-gray-200/50 hover:border-[#FF6B35]/50 flex items-center justify-center partnership-zoom partnership-item hover:scale-105 hover:-translate-y-2"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto opacity-70 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                    unoptimized
                    priority={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .carousel-track {
            animation: scroll 40s linear infinite;
          }

          .carousel-track:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Founder's Talk - Spotlight Layout */}
      <section className="bg-[#FFB347]/10 py-24 scroll-animate overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer relative inline-block">
              Founder's Talk
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#FF6B35] rounded-full animate-scale-in"></div>
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-[#1B120A]/80 hover:bg-[#1B120A] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#FFB347]/30 hover:border-[#FF6B35]"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-[#1B120A]/80 hover:bg-[#1B120A] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#FFB347]/30 hover:border-[#FF6B35]"
            >
              <ChevronRight size={24} />
            </button>

            {/* Cards Container */}
            <div className="relative h-[500px] flex justify-center items-center">
              {founders.map((founder, index) => (
                <div
                  key={index}
                  className="absolute w-80 transition-all duration-700 ease-in-out cursor-pointer"
                  style={getCardStyle(index)}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div
                    className={`group bg-[#1B120A] p-8 rounded-3xl border transition-all duration-500 shadow-xl relative overflow-hidden h-[450px] ${
                      index === currentIndex
                        ? "border-[#FF6B35] shadow-2xl shadow-[#FF6B35]/20"
                        : "border-[#FFB347]/50 hover:border-[#FF6B35]"
                    }`}
                  >
                    {/* Spotlight Effect */}
                    <div
                      className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-bl from-[#FF6B35]/20 to-transparent rounded-full blur-xl transition-transform duration-500 ${
                        index === currentIndex ? "scale-150" : "group-hover:scale-150"
                      }`}
                    ></div>

                    <div className="relative z-10 h-full flex flex-col">
                      {/* Profile Image */}
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 flex items-center justify-center overflow-hidden transition-transform duration-300 ${
                          index === currentIndex ? "scale-110" : "group-hover:scale-110"
                        }`}
                      >
                        <img
                          src={founder.image || "/placeholder.svg"}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg?height=80&width=80"
                          }}
                        />
                      </div>

                      {/* Name and Role */}
                      <div className="text-center mb-6">
                        <h3
                          className={`font-bold text-xl mb-2 transition-colors duration-300 ${
                            index === currentIndex ? "text-[#FFB347]" : "text-white group-hover:text-[#FFB347]"
                          }`}
                        >
                          {founder.name}
                        </h3>
                        <p
                          className={`text-sm transition-colors duration-300 ${
                            index === currentIndex ? "text-gray-200" : "text-gray-300 group-hover:text-gray-200"
                          }`}
                        >
                          {founder.role}
                        </p>
                      </div>

                      {/* Quote */}
                      <div className="relative flex-1 flex flex-col justify-center">
                        <div className="absolute -top-2 -left-2 text-4xl text-[#FF6B35]/30 font-serif">"</div>
                        <p
                          className={`text-sm leading-relaxed pl-6 transition-colors duration-300 ${
                            index === currentIndex ? "text-gray-200" : "text-white group-hover:text-gray-200"
                          }`}
                        >
                          {founder.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {founders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#FF6B35] scale-125" : "bg-[#FFB347]/50 hover:bg-[#FFB347]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chairman Profile - Feature Layout */}
      <section className="bg-[#E8E4C9]/30 py-24 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16 items-center max-w-7xl mx-auto">
            {/* Image Section - 2 columns */}
            <div className="lg:col-span-2 scroll-animate">
              <div className="relative group">
                {/* Background Elements */}
                <div className="absolute -inset-8 bg-gradient-to-r from-[#FF6B35]/30 to-[#FFB347]/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute top-8 left-8 w-full h-full bg-gradient-to-br from-[#FF6B35]/10 to-[#FFB347]/10 rounded-3xl"></div>

                {/* Main Image */}
                <div className="relative bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 overflow-hidden shadow-2xl hover-lift">
                  <Image
                    src={"/placeholder.svg"}
                    alt="Mr. S. GokulaKrishnan"
                    width={400}
                    height={500}
                    className="rounded-2xl mx-auto image-hover w-full h-auto"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=500&width=400"
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Content Section - 3 columns */}
            <div className="lg:col-span-3 space-y-8 scroll-animate stagger-2">
              {/* Header */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1B120A] text-shimmer">Mr. S. GokulaKrishnan</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mb-6 animate-scale-in"></div>
                <h3 className="text-2xl mb-4 text-[#1B120A] animate-fade-in font-semibold">
                </h3>
                <p className="text-[#1B120A] mb-6 font-medium text-lg animate-fade-in stagger-2">
                  Director of Innovation, Chennai Institute of Technology Business Incubation Forum
                </p>
              </div>

              {/* Companies Grid */}
              <div>
                <h4 className="text-xl font-bold text-[#1B120A] mb-6">Associated Companies</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: "ITL Auto Components", logo: com1 },
                    { name: "Festen", logo: com2 },
                    { name: "Festa Solar", logo: com3 },
                    { name: "Fesren Energy", logo: com4 },
                    { name: "CITBIF", logo: com5 },
                    { name: "Corsair Autotech", logo: com6 },
                  ].map((company, index) => (
                    <div
                      key={index}
                      className={`bg-white/90 backdrop-blur-sm p-4 rounded-xl flex items-center justify-center h-16 border border-gray-200/50 shadow-md hover-lift transition-all duration-300 hover:scale-105 hover:shadow-lg scroll-animate stagger-${
                        index + 1
                      }`}
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
        </div>
      </section>

      {/* Contact Section - Split Layout */}
      <section id="contact" className="bg-[#FFB347]/10 py-24 relative overflow-hidden scroll-animate">
        <div className="absolute inset-0 bg-[url('/contact-pattern.png')] opacity-5 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer relative inline-block">
              Contact Us
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#FF6B35] rounded-full animate-scale-in"></div>
            </h2>
            <p className="text-[#1B120A] max-w-3xl mx-auto text-xl animate-fade-in mt-6">
              Reach out to us for collaborations, inquiries, or to learn more about our innovation ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="scroll-animate">
              <div className="bg-[#1B120A] p-10 rounded-3xl border border-[#FFB347]/50 shadow-2xl card-hover hover-lift relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-bl-full"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8 text-[#FF6B35] animate-fade-in">Get In Touch</h3>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="animate-slide-in-left stagger-1">
                        <label htmlFor="name" className="block text-sm font-semibold text-white mb-3">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-6 py-4 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300 focus:scale-105"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="animate-slide-in-right stagger-1">
                        <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-6 py-4 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300 focus:scale-105"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>

                    <div className="animate-slide-in-left stagger-2">
                      <label htmlFor="subject" className="block text-sm font-semibold text-white mb-3">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-6 py-4 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300 focus:scale-105"
                        placeholder="Subject"
                      />
                    </div>

                    <div className="animate-slide-in-left stagger-3">
                      <label htmlFor="message" className="block text-sm font-semibold text-white mb-3">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-6 py-4 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white resize-none transition-all duration-300 focus:scale-105"
                        placeholder="Your Message"
                      ></textarea>
                    </div>

                    <div className="animate-slide-in-left stagger-4">
                      <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white py-4 rounded-xl font-semibold btn-animate hover-lift group text-lg">
                        Send Message
                        <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 scroll-animate stagger-2">
              {/* Contact Details Card */}
              <div className="bg-[#1B120A] p-10 rounded-3xl border border-[#FFB347]/50 shadow-2xl card-hover hover-lift relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-bl from-[#FFB347]/20 to-transparent rounded-full"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8 text-[#FF6B35] animate-fade-in">Contact Information</h3>

                  <div className="space-y-6">
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
                        content: ["citbif@citchennai.net", "info@citbif.in"],
                      },
                      {
                        icon: Phone,
                        title: "Phone",
                        content: ["+91 999 469 1313", "+91 44 2478 1111"],
                      },
                    ].map((item, index) => (
                      <div key={index} className={`flex items-start gap-4 animate-slide-in-left stagger-${index + 1}`}>
                        <div className="bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 p-4 rounded-2xl hover:bg-gradient-to-br hover:from-[#FF6B35]/30 hover:to-[#FFB347]/30 transition-all duration-300 hover:scale-110">
                          <item.icon className="h-6 w-6 text-[#FF6B35]" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-white text-lg">{item.title}</h4>
                          {item.content.map((line, lineIndex) => (
                            <p key={lineIndex} className="text-white text-sm leading-relaxed">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Card */}
              <div className="bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 h-64 relative overflow-hidden shadow-2xl hover-lift group">
                <div className="absolute inset-0 bg-[url('/map.png')] opacity-70 bg-cover bg-center image-hover group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B120A]/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white rounded-xl px-8 py-3 btn-animate hover-lift group animate-bounce-in shadow-lg">
                    View on Google Maps
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
            <section className="py-16 bg-[#FFB347]/10">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#1B120A] rounded-3xl p-8 text-white border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-bounce-in stagger-1 relative overflow-hidden"
                    >
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 mb-6 text-lg">{item.details}</p>
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-[#FF6B35]/20 to-[#FFB347]/20 hover:from-[#FF6B35]/30 hover:to-[#FFB347]/30 text-white border border-[#FFB347]/50 hover:border-[#FF6B35] rounded-xl btn-animate group"
                        >
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.action}
                            <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

      {/* Footer - Modern Layout */}
      <footer className="bg-[#1a1a1a] border-t border-[#3a3a3a] py-16 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="animate-slide-in-left stagger-1">
              <Image
                src="/company6.jpg"
                alt="CITBIF Logo"
                width={140}
                height={45}
                className="h-12 w-auto mb-6 hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=45&width=140"
                }}
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Chennai Institute of Technology Business Incubation Forum - Empowering the next generation of
                entrepreneurs and innovators.
              </p>
              <div className="flex space-x-4">
                {["📧", "📱", "🌐", "💼"].map((icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-[#FF6B35]/20 rounded-full flex items-center justify-center hover:bg-[#FF6B35]/30 transition-all duration-300 hover:scale-110 cursor-pointer"
                  >
                    <span className="text-lg">{icon}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-slide-in-left stagger-2">
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {["Innovation", "Portfolio", "Facilities", "About Us", "Incubation"].map((item, index) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`text-gray-400 hover:text-[#FFB347] text-sm transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-fade-in stagger-${
                        index + 1
                      } block py-1`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="animate-slide-in-left stagger-3">
              <h4 className="text-lg font-bold mb-6 text-white">Programs</h4>
              <ul className="space-y-3">
                {["Incubation", "Acceleration", "Mentorship", "Funding", "Networking"].map((item, index) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={`text-gray-400 hover:text-[#FFB347] text-sm transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-fade-in stagger-${
                        index + 1
                      } block py-1`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-in-left stagger-4">
              <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
              <address className="text-gray-400 text-sm not-italic animate-fade-in leading-relaxed mb-4">
                Chennai Institute of Technology
                <br />
                Sarathy Nagar, Kundrathur
                <br />
                Chennai - 600069
                <br />
                Tamil Nadu, India
              </address>
              <div className="space-y-2">
                <a
                  href="mailto:citbif@citchennai.net"
                  className="text-[#FFB347] hover:underline text-sm transition-all duration-300 hover:scale-105 animate-fade-in stagger-2 block"
                >
                  citbif@citchennai.net
                </a>
                <a
                  href="tel:+919994691313"
                  className="text-[#FFB347] hover:underline text-sm transition-all duration-300 hover:scale-105 animate-fade-in stagger-3 block"
                >
                  +91 999 469 1313
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[#3a3a3a] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm animate-fade-in">
            <div>
              &copy; {new Date().getFullYear()} Chennai Institute of Technology Business Incubation Forum. All rights
              reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#FFB347] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#FFB347] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#FFB347] transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isLoaded && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white p-4 rounded-full shadow-2xl hover-lift btn-animate animate-bounce-in z-50 transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <ChevronRight className="h-6 w-6 rotate-[-90deg] group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}
    </div>
  )
}