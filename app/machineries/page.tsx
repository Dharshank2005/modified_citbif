"use client"

import Image from "next/image"
import { Cpu, Cog, Microscope, Wrench, ChevronRight, ExternalLink, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"

export default function MachineriesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Auto-rotate partner slider
    const interval = setInterval(() => {
      setCurrentPartnerSlide((prev) => (prev + 1) % industryPartners.length)
    }, 4000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  const centersOfExcellence = [
    {
      name: "KUKA Center for Advanced Industrial Robotics",
      description: "State-of-the-art robotics lab with industrial automation systems",
      features: [
        "Machine Vision Technology",
        "Spot Welding Applications",
        "Pick and Place Systems",
        "Training Programs",
      ],
      image: "/lab-kuka.jpg",
      icon: "🤖",
      category: "Robotics",
      established: "2020",
      capacity: "50 Students",
      equipment: "25+ Robots",
    },
    {
      name: "Center for Semiconductor Design Hub",
      description: "Industry-standard tools for VLSI design and semiconductor research",
      features: ["Synopsys Tools", "Cadence Design Suite", "Ansys Simulation", "Xilinx Vitis Platform"],
      image: "/lab-semiconductor.jpg",
      icon: "💻",
      category: "Electronics",
      established: "2019",
      capacity: "40 Students",
      equipment: "30+ Workstations",
    },
    {
      name: "Center for Advanced Welding Technology",
      description: "Fronius welding research center with cutting-edge equipment",
      features: ["Advanced Welding Systems", "Solar Energy Solutions", "Battery Charging Tech", "Research Projects"],
      image: "/lab-welding.jpg",
      icon: "⚡",
      category: "Manufacturing",
      established: "2021",
      capacity: "30 Students",
      equipment: "15+ Welding Units",
    },
    {
      name: "Center for 3D Printing and Additive Manufacturing",
      description: "Complete additive manufacturing solutions and rapid prototyping",
      features: ["Industrial 3D Printers", "Material Testing", "Reverse Engineering", "Prototype Development"],
      image: "/lab-3d.jpg",
      icon: "🖨️",
      category: "Manufacturing",
      established: "2020",
      capacity: "35 Students",
      equipment: "20+ 3D Printers",
    },
    {
      name: "Center for Mruby Research",
      description: "India's first Mruby research center for embedded systems",
      features: ["Lightweight Ruby Programming", "Embedded Systems", "AI Applications", "IoT Development"],
      image: "/lab-mruby.jpg",
      icon: "💎",
      category: "Software",
      established: "2022",
      capacity: "25 Students",
      equipment: "40+ Dev Boards",
    },
    {
      name: "WABCO-CIT-KYUTECH IoT Center",
      description: "Platform for innovation in cutting-edge IoT technologies",
      features: ["IoT Development", "5G Technology", "M2M Communication", "Security Solutions"],
      image: "/lab-iot.jpg",
      icon: "📡",
      category: "IoT",
      established: "2021",
      capacity: "45 Students",
      equipment: "50+ IoT Devices",
    },
  ]

  const labCategories = [
    { name: "All Labs", count: centersOfExcellence.length },
    { name: "Robotics", count: centersOfExcellence.filter((lab) => lab.category === "Robotics").length },
    { name: "Electronics", count: centersOfExcellence.filter((lab) => lab.category === "Electronics").length },
    { name: "Manufacturing", count: centersOfExcellence.filter((lab) => lab.category === "Manufacturing").length },
    { name: "Software", count: centersOfExcellence.filter((lab) => lab.category === "Software").length },
    { name: "IoT", count: centersOfExcellence.filter((lab) => lab.category === "IoT").length },
  ]

  const filteredLabs =
    activeTab === 0
      ? centersOfExcellence
      : centersOfExcellence.filter((lab) => lab.category === labCategories[activeTab].name)

  const industryPartners = [
    {
      name: "KUKA Industrial Automation",
      description: "Having its office in our campus for robotics training and research",
      logo: "/partner-kuka.jpg",
      specialization: "Industrial Robotics",
      partnership: "On-Campus Office",
      projects: "15+ Active Projects",
      since: "2019",
      employees: "12+ Engineers",
      achievements: ["Robot Training Center", "Industry 4.0 Solutions", "Automation Excellence"],
    },
    {
      name: "Fronius Welding",
      description: "Advanced welding, solar energy, and battery charging solutions",
      logo: "/partner-fronius.jpg",
      specialization: "Welding Technology",
      partnership: "Research Center",
      projects: "12+ Collaborations",
      since: "2020",
      employees: "8+ Specialists",
      achievements: ["Welding Innovation Hub", "Solar Integration", "Green Technology"],
    },
    {
      name: "Bonfiglioli Academy",
      description: "Cutting-edge academy for real-world engineering projects",
      logo: "/partner-bonfiglioli.jpg",
      specialization: "Mechanical Systems",
      partnership: "Training Academy",
      projects: "20+ Training Programs",
      since: "2021",
      employees: "15+ Trainers",
      achievements: ["Engineering Excellence", "Skill Development", "Industry Readiness"],
    },
    {
      name: "RANE NSK",
      description: "Material science collaboration with automotive focus",
      logo: "/partner-rane.jpg",
      specialization: "Material Science",
      partnership: "R&D Collaboration",
      projects: "8+ Research Projects",
      since: "2022",
      employees: "6+ Researchers",
      achievements: ["Automotive Innovation", "Material Testing", "Quality Assurance"],
    },
    {
      name: "Siemens Digital Factory",
      description: "Digital manufacturing and automation solutions",
      logo: "/partner-siemens.jpg",
      specialization: "Digital Manufacturing",
      partnership: "Technology Center",
      projects: "18+ Digital Solutions",
      since: "2020",
      employees: "20+ Engineers",
      achievements: ["Digital Twin Technology", "Smart Manufacturing", "IoT Integration"],
    },
    {
      name: "ABB Robotics",
      description: "Advanced robotics and automation technology partnership",
      logo: "/partner-abb.jpg",
      specialization: "Robotics & Automation",
      partnership: "Innovation Lab",
      projects: "22+ Automation Projects",
      since: "2019",
      employees: "18+ Specialists",
      achievements: ["Collaborative Robots", "AI-Powered Automation", "Safety Systems"],
    },
  ]

  const facilities = [
    {
      title: "Advanced Manufacturing",
      description: "State-of-the-art manufacturing equipment and processes",
      icon: Cog,
      items: ["CNC Machines", "Industrial Robots", "Quality Control Systems", "Automation Tools"],
      count: "25+ Machines",
      area: "2000 sq ft",
      value: "₹15Cr+",
    },
    {
      title: "Electronics & Computing",
      description: "Cutting-edge electronics and computing infrastructure",
      icon: Cpu,
      items: ["VLSI Design Tools", "Embedded Systems", "High-Performance Computing", "Testing Equipment"],
      count: "40+ Workstations",
      area: "1500 sq ft",
      value: "₹12Cr+",
    },
    {
      title: "Research & Development",
      description: "Comprehensive R&D facilities for innovation",
      icon: Microscope,
      items: ["Material Testing", "Prototype Development", "Simulation Software", "Analysis Tools"],
      count: "15+ Labs",
      area: "3000 sq ft",
      value: "₹18Cr+",
    },
    {
      title: "Specialized Equipment",
      description: "Industry-specific specialized machinery and tools",
      icon: Wrench,
      items: ["Welding Systems", "3D Printers", "IoT Devices", "Measurement Instruments"],
      count: "30+ Tools",
      area: "1800 sq ft",
      value: "₹10Cr+",
    },
  ]

  const labStats = [
    { label: "Total Labs", value: "32", icon: "🏭" },
    { label: "Equipment Worth", value: "₹50Cr+", icon: "💰" },
    { label: "Students Trained", value: "5000+", icon: "🎓" },
    { label: "Research Projects", value: "200+", icon: "🔬" },
    { label: "Industry Partners", value: "25+", icon: "🤝" },
    { label: "Patents Filed", value: "150+", icon: "📋" },
  ]

  const nextPartnerSlide = () => {
    setCurrentPartnerSlide((prev) => (prev + 1) % industryPartners.length)
  }

  const prevPartnerSlide = () => {
    setCurrentPartnerSlide((prev) => (prev - 1 + industryPartners.length) % industryPartners.length)
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1B120A] text-shimmer">Labs & Machineries</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto mb-8 animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] max-w-4xl mx-auto leading-relaxed">
              World-class laboratories and cutting-edge machinery for innovation and research
            </p>
          </div>
        </div>
      </section>

      {/* Lab Statistics - FLOATING CARDS LAYOUT */}
      <section className="bg-[#FFB347]/10 py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {labStats.map((stat, index) => (
              <div
                key={index}
                className={`floating-stat-card bg-[#1B120A] p-6 rounded-2xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-bounce-in stagger-${index + 1} text-center relative overflow-hidden`}
                style={{
                  transform: `translateY(${index % 2 === 0 ? "0" : "20px"})`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-[#FFB347]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 animate-float">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#FF6B35] mb-2 group-hover:text-[#FFB347] transition-colors duration-300">
                    {stat.value}
                  </div>
                  <p className="text-white text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Overview - MORPHING CARDS LAYOUT */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Our Facilities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>

          <div className="morphing-cards-grid max-w-7xl mx-auto">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className={`morphing-card bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-700 group shadow-xl hover-lift animate-slide-up stagger-${index + 1} relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-bl-full group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="facility-icon-container">
                      <facility.icon className="h-12 w-12 text-[#FF6B35] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                        {facility.title}
                      </h3>
                      <div className="flex gap-4 mt-1">
                        <span className="text-[#FFB347] text-sm">{facility.count}</span>
                        <span className="text-gray-300 text-sm">{facility.area}</span>
                        <span className="text-green-400 text-sm">{facility.value}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white mb-6 group-hover:text-gray-200 transition-colors duration-300 flex-1">
                    {facility.description}
                  </p>
                  <div className="facility-items-grid">
                    {facility.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="facility-item bg-[#FF6B35]/10 border border-[#FFB347]/30 rounded-lg p-3 text-center group-hover:scale-105 transition-all duration-500"
                        style={{ transitionDelay: `${itemIndex * 0.1}s` }}
                      >
                        <span className="text-white text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centers of Excellence - ISOTOPE GRID LAYOUT */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Centers of Excellence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {labCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? "bg-[#FF6B35] text-white shadow-lg scale-105"
                    : "bg-[#1B120A] text-white hover:bg-[#FF6B35]/80 hover:scale-105"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Labs Isotope Grid */}
          <div className="isotope-grid max-w-7xl mx-auto">
            {filteredLabs.map((lab, index) => (
              <div
                key={index}
                className={`isotope-item isotope-item-${(index % 3) + 1} bg-[#1B120A] rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-${index + 1} relative overflow-hidden`}
              >
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <Image
                    src={lab.image || "/placeholder.svg"}
                    alt={lab.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=200&width=400"
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-[#FF6B35]/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-semibold">{lab.category}</span>
                  </div>
                  <div className="absolute top-4 right-4 text-3xl">{lab.icon}</div>
                  <div className="absolute bottom-4 left-4 right-4 bg-[#1B120A]/80 backdrop-blur-sm rounded-lg p-2">
                    <div className="flex justify-between text-xs text-white">
                      <span>Est. {lab.established}</span>
                      <span>{lab.capacity}</span>
                      <span>{lab.equipment}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#FF6B35] mb-3 group-hover:text-[#FFB347] transition-colors duration-300">
                    {lab.name}
                  </h3>
                  <p className="text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {lab.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {lab.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#FFB347] rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white rounded-xl btn-animate group">
                    Explore Lab
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partners - CAROUSEL WITH MULTIPLE CARDS */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Industry Partners</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] max-w-3xl mx-auto mt-6">
              Leading industry partners with on-campus presence and collaboration
            </p>
          </div>

          <div className="partners-carousel-container max-w-7xl mx-auto relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPartnerSlide * 33.333}%)` }}
              >
                {industryPartners.map((partner, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <div className="bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift relative overflow-hidden h-full">
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full"></div>
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-start gap-6 mb-6">
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg?height=80&width=80"
                              }}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                              {partner.name}
                            </h3>
                            <p className="text-[#FFB347] text-sm mb-1">{partner.specialization}</p>
                            <p className="text-gray-300 text-sm">{partner.partnership}</p>
                            <div className="flex gap-4 mt-2 text-xs text-gray-400">
                              <span>Since {partner.since}</span>
                              <span>{partner.employees}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-white group-hover:text-gray-200 transition-colors duration-300 mb-6 flex-1">
                          {partner.description}
                        </p>
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-[#FFB347] mb-2">Key Achievements:</h4>
                          <div className="space-y-1">
                            {partner.achievements.map((achievement, achIndex) => (
                              <div key={achIndex} className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-[#FFB347] rounded-full"></div>
                                <span className="text-gray-300 text-xs">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="bg-[#FF6B35]/20 text-[#FFB347] px-4 py-2 rounded-full text-sm font-semibold">
                            {partner.projects}
                          </span>
                          <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white rounded-xl">
                            Learn More
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevPartnerSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1B120A] text-[#FF6B35] p-3 rounded-full hover:bg-[#FF6B35] hover:text-white transition-all duration-300 z-10 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextPartnerSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1B120A] text-[#FF6B35] p-3 rounded-full hover:bg-[#FF6B35] hover:text-white transition-all duration-300 z-10 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(industryPartners.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPartnerSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPartnerSlide === index ? "bg-[#FF6B35] scale-125" : "bg-[#FFB347]/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - SPLIT SCREEN LAYOUT */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="split-screen max-w-6xl mx-auto">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">
                Ready to Access Our Labs?
              </h2>
              <p className="text-xl text-[#1B120A] mb-8 leading-relaxed">
                Get hands-on experience with cutting-edge technology and equipment
              </p>
              <div className="space-y-4">
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group ripple w-full sm:w-auto">
                  Book Lab Access
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-4 text-lg transition-all duration-300 w-full sm:w-auto"
                >
                  Schedule Tour
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FFB347]/20 rounded-3xl blur-xl animate-pulse-glow"></div>
                <div className="relative bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 text-center">
                  <div className="text-6xl mb-4 animate-float">🔬</div>
                  <h3 className="text-2xl font-bold text-[#FF6B35] mb-4">32 Centers of Excellence</h3>
                  <p className="text-white leading-relaxed">
                    State-of-the-art facilities equipped with the latest technology for hands-on learning and research.
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
