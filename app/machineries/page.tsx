"use client"

import Image from "next/image"
import { Cpu, Cog, Microscope, Wrench, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"

export default function MachineriesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
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
    },
    {
      name: "Center for Semiconductor Design Hub",
      description: "Industry-standard tools for VLSI design and semiconductor research",
      features: ["Synopsys Tools", "Cadence Design Suite", "Ansys Simulation", "Xilinx Vitis Platform"],
      image: "/lab-semiconductor.jpg",
      icon: "💻",
      category: "Electronics",
    },
    {
      name: "Center for Advanced Welding Technology",
      description: "Fronius welding research center with cutting-edge equipment",
      features: ["Advanced Welding Systems", "Solar Energy Solutions", "Battery Charging Tech", "Research Projects"],
      image: "/lab-welding.jpg",
      icon: "⚡",
      category: "Manufacturing",
    },
    {
      name: "Center for 3D Printing and Additive Manufacturing",
      description: "Complete additive manufacturing solutions and rapid prototyping",
      features: ["Industrial 3D Printers", "Material Testing", "Reverse Engineering", "Prototype Development"],
      image: "/lab-3d.jpg",
      icon: "🖨️",
      category: "Manufacturing",
    },
    {
      name: "Center for Mruby Research",
      description: "India's first Mruby research center for embedded systems",
      features: ["Lightweight Ruby Programming", "Embedded Systems", "AI Applications", "IoT Development"],
      image: "/lab-mruby.jpg",
      icon: "💎",
      category: "Software",
    },
    {
      name: "WABCO-CIT-KYUTECH IoT Center",
      description: "Platform for innovation in cutting-edge IoT technologies",
      features: ["IoT Development", "5G Technology", "M2M Communication", "Security Solutions"],
      image: "/lab-iot.jpg",
      icon: "📡",
      category: "IoT",
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
    },
    {
      name: "Fronius Welding",
      description: "Advanced welding, solar energy, and battery charging solutions",
      logo: "/partner-fronius.jpg",
      specialization: "Welding Technology",
    },
    {
      name: "Bonfiglioli Academy",
      description: "Cutting-edge academy for real-world engineering projects",
      logo: "/partner-bonfiglioli.jpg",
      specialization: "Mechanical Systems",
    },
    {
      name: "RANE NSK",
      description: "Material science collaboration with automotive focus",
      logo: "/partner-rane.jpg",
      specialization: "Material Science",
    },
  ]

  const facilities = [
    {
      title: "Advanced Manufacturing",
      description: "State-of-the-art manufacturing equipment and processes",
      icon: Cog,
      items: ["CNC Machines", "Industrial Robots", "Quality Control Systems", "Automation Tools"],
    },
    {
      title: "Electronics & Computing",
      description: "Cutting-edge electronics and computing infrastructure",
      icon: Cpu,
      items: ["VLSI Design Tools", "Embedded Systems", "High-Performance Computing", "Testing Equipment"],
    },
    {
      title: "Research & Development",
      description: "Comprehensive R&D facilities for innovation",
      icon: Microscope,
      items: ["Material Testing", "Prototype Development", "Simulation Software", "Analysis Tools"],
    },
    {
      title: "Specialized Equipment",
      description: "Industry-specific specialized machinery and tools",
      icon: Wrench,
      items: ["Welding Systems", "3D Printers", "IoT Devices", "Measurement Instruments"],
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1B120A] text-shimmer">Labs & Machineries</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto mb-8 animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] max-w-4xl mx-auto leading-relaxed">
              World-class laboratories and cutting-edge machinery for innovation and research
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Our Facilities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-bounce-in stagger-${index + 1} relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <facility.icon className="h-12 w-12 text-[#FF6B35] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-[#FF6B35] mb-3 group-hover:text-[#FFB347] transition-colors duration-300">
                    {facility.title}
                  </h3>
                  <p className="text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {facility.description}
                  </p>
                  <ul className="space-y-2">
                    {facility.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#FFB347] rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centers of Excellence */}
      <section className="bg-[#E8E4C9]/30 py-24">
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

          {/* Labs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredLabs.map((lab, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-${index + 1} relative overflow-hidden`}
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
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#FF6B35] mb-3 group-hover:text-[#FFB347] transition-colors duration-300">
                    {lab.name}
                  </h3>
                  <p className="text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {lab.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {lab.features.map((feature, featureIndex) => (
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

      {/* Industry Partners */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Industry Partners</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] max-w-3xl mx-auto mt-6">
              Leading industry partners with on-campus presence and collaboration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {industryPartners.map((partner, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-in-left stagger-${index + 1} relative overflow-hidden`}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=64&width=64"
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                        {partner.name}
                      </h3>
                      <p className="text-[#FFB347] text-sm">{partner.specialization}</p>
                    </div>
                  </div>
                  <p className="text-white group-hover:text-gray-200 transition-colors duration-300">
                    {partner.description}
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
              Ready to Access Our Labs?
            </h2>
            <p className="text-xl text-[#1B120A] mb-8 leading-relaxed">
              Get hands-on experience with cutting-edge technology and equipment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group">
                Book Lab Access
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-4 text-lg transition-all duration-300"
              >
                Schedule Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
