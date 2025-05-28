"use client"

import Image from "next/image"
import { ExternalLink, TrendingUp, Users, Calendar, Award, MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"

export default function StartupsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const categories = ["All", "AI/ML", "Healthcare", "Manufacturing", "FinTech", "EdTech", "CleanTech"]

  const startups = [
    {
      id: 1,
      name: "Mechimed Technologies",
      category: "Healthcare",
      logo: "/startups/mechimed-logo.jpg",
      description: "Revolutionary medical devices for patient monitoring and healthcare automation",
      founder: "Dr. Rajesh Kumar",
      founded: "2023",
      funding: "₹7 Lakhs",
      employees: "8-12",
      status: "Scaling",
      website: "https://mechimed.com",
      achievements: ["Product Launched", "FDA Approval", "Hospital Partnerships"],
      technologies: ["IoT", "Medical Devices", "AI"],
      location: "Chennai, India",
    },
    {
      id: 2,
      name: "Quazr Motors",
      category: "CleanTech",
      logo: "/startups/quazr-logo.jpg",
      description: "Next-generation electric vehicle solutions for sustainable urban mobility",
      founder: "Arjun Patel",
      founded: "2023",
      funding: "₹7 Lakhs",
      employees: "10-15",
      status: "Market Ready",
      website: "https://quazrmotors.com",
      achievements: ["Prototype Developed", "Industry Partnerships", "Patent Filed"],
      technologies: ["Electric Vehicles", "Battery Tech", "IoT"],
      location: "Chennai, India",
    },
    {
      id: 3,
      name: "Mam Industries",
      category: "Manufacturing",
      logo: "/startups/mam-logo.jpg",
      description: "Advanced manufacturing solutions using Industry 4.0 technologies",
      founder: "Priya Sharma",
      founded: "2023",
      funding: "₹7 Lakhs",
      employees: "12-18",
      status: "Growing",
      website: "https://mamindustries.com",
      achievements: ["Technology Validated", "Customer Acquisition", "Team Expansion"],
      technologies: ["Industry 4.0", "Automation", "AI"],
      location: "Chennai, India",
    },
    {
      id: 4,
      name: "Fuinn Tech",
      category: "AI/ML",
      logo: "/startups/fuinn-logo.jpg",
      description: "AI-powered solutions for business automation and intelligent decision making",
      founder: "Vikram Singh",
      founded: "2023",
      funding: "₹7 Lakhs",
      employees: "6-10",
      status: "Expanding",
      website: "https://fuinntech.com",
      achievements: ["MVP Launched", "User Base Growth", "AI Model Deployed"],
      technologies: ["Machine Learning", "AI", "Data Analytics"],
      location: "Chennai, India",
    },
    {
      id: 5,
      name: "Datom Technologies",
      category: "Manufacturing",
      logo: "/startups/datom-logo.jpg",
      description: "Revolutionizing manufacturing industry with innovative software and hardware solutions",
      founder: "Dharamraj",
      founded: "2022",
      funding: "₹10 Lakhs",
      employees: "15-20",
      status: "Scaling",
      website: "https://datomtech.com",
      achievements: ["International Clients", "Revenue Growth", "Product Suite"],
      technologies: ["Manufacturing Tech", "Software", "Hardware"],
      location: "Chennai, India",
    },
    {
      id: 6,
      name: "OAK Studio",
      category: "EdTech",
      logo: "/startups/oak-logo.jpg",
      description: "Creative design and technology solutions for educational institutions",
      founder: "Studio Team",
      founded: "2023",
      funding: "₹5 Lakhs",
      employees: "5-8",
      status: "Growing",
      website: "https://oakstudio.in",
      achievements: ["Design Awards", "Client Portfolio", "Creative Solutions"],
      technologies: ["Design Tech", "EdTech", "Creative Tools"],
      location: "Chennai, India",
    },
    {
      id: 7,
      name: "AREON Networks",
      category: "AI/ML",
      logo: "/startups/areon-logo.jpg",
      description: "Advanced networking solutions powered by artificial intelligence",
      founder: "AREON Team",
      founded: "2023",
      funding: "₹8 Lakhs",
      employees: "8-12",
      status: "Market Ready",
      website: "https://areonnetworks.com",
      achievements: ["Network Optimization", "AI Integration", "Client Success"],
      technologies: ["Networking", "AI", "Cloud Computing"],
      location: "Chennai, India",
    },
    {
      id: 8,
      name: "Karking",
      category: "FinTech",
      logo: "/startups/karking-logo.jpg",
      description: "Innovative financial technology solutions for modern banking needs",
      founder: "Karthick Mari Pitchai",
      founded: "2022",
      funding: "₹6 Lakhs",
      employees: "10-15",
      status: "Expanding",
      website: "https://karking.in",
      achievements: ["Financial Products", "User Adoption", "Regulatory Compliance"],
      technologies: ["FinTech", "Blockchain", "Mobile Apps"],
      location: "Chennai, India",
    },
  ]

  const filteredStartups =
    selectedCategory === "All" ? startups : startups.filter((startup) => startup.category === selectedCategory)

  const successMetrics = [
    {
      title: "Total Startups",
      value: "60+",
      description: "Successfully incubated startups",
      icon: "🚀",
      color: "from-[#FF6B35] to-[#FFB347]",
    },
    {
      title: "Total Funding",
      value: "₹2Cr+",
      description: "Funding facilitated for startups",
      icon: "💰",
      color: "from-[#FFB347] to-[#FF6B35]",
    },
    {
      title: "Jobs Created",
      value: "300+",
      description: "Employment opportunities generated",
      icon: "👥",
      color: "from-[#FF6B35] to-[#FFB347]",
    },
    {
      title: "Success Rate",
      value: "85%",
      description: "Startups achieving market fit",
      icon: "📈",
      color: "from-[#FFB347] to-[#FF6B35]",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Scaling":
        return "bg-green-500/20 text-green-400"
      case "Market Ready":
        return "bg-blue-500/20 text-blue-400"
      case "Growing":
        return "bg-yellow-500/20 text-yellow-400"
      case "Expanding":
        return "bg-purple-500/20 text-purple-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 animate-pulse-glow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1B120A] text-shimmer">Our Startups</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto mb-8 animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] max-w-4xl mx-auto leading-relaxed">
              Meet the innovative startups that are transforming industries and creating impact
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Our Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {successMetrics.map((metric, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-bounce-in stagger-${index + 1} relative overflow-hidden text-center`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${metric.color} opacity-10 rounded-bl-full`}
                ></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#FF6B35] mb-2 group-hover:text-[#FFB347] transition-colors duration-300">
                    {metric.value}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-[#E8E4C9]/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#FF6B35] text-white shadow-lg scale-105"
                    : "bg-[#1B120A] text-white hover:bg-[#FF6B35]/80 hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="text-center">
            <p className="text-[#1B120A] text-lg">
              Showing {filteredStartups.length} {filteredStartups.length === 1 ? "startup" : "startups"}
            </p>
          </div>
        </div>
      </section>

      {/* Startups Grid */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredStartups.map((startup, index) => (
              <div
                key={startup.id}
                className={`bg-[#1B120A] rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-${(index % 6) + 1} relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-bl-full"></div>

                <div className="p-8 relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={startup.logo || "/placeholder.svg"}
                        alt={startup.name}
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
                        {startup.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-[#FF6B35]/20 text-[#FFB347] px-2 py-1 rounded-full text-xs">
                          {startup.category}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(startup.status)}`}
                        >
                          {startup.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {startup.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Users className="h-4 w-4" />
                      <span>Founder: {startup.founder}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>Founded: {startup.founded}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <TrendingUp className="h-4 w-4" />
                      <span>Funding: {startup.funding}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{startup.location}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-[#FFB347] font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {startup.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-[#FFB347]/20 text-[#FFB347] px-2 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-[#FFB347] font-semibold mb-2 text-sm">Key Achievements:</h4>
                    <div className="space-y-1">
                      {startup.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center gap-2">
                          <Award className="h-3 w-3 text-[#FFB347]" />
                          <span className="text-gray-300 text-xs">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white rounded-xl btn-animate group">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#FFB347] text-[#FFB347] hover:bg-[#FFB347] hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
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
              Ready to Join Our Startup Ecosystem?
            </h2>
            <p className="text-xl text-[#1B120A] mb-8 leading-relaxed">
              Transform your innovative idea into a successful startup with our comprehensive support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group">
                Apply for Incubation
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-4 text-lg transition-all duration-300"
              >
                Partner with Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
