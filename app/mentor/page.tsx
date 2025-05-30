"use client"

import Image from "next/image"
import { Users, Calendar, Award, BookOpen, ChevronRight, Clock, MapPin, User, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"

export default function MentorPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const mentors = [
    {
      name: "Dr. K. Manivannan",
      role: "National Expert & Assessor",
      expertise: ["Innovation Management", "Technology Transfer", "Startup Strategy"],
      experience: "15+ Years",
      image: "/mentor1.jpg",
      bio: "Driving and revolutionizing faculty innovation, inspiring faculty to explore their innovative ideas and convert them into tangible products for society's betterment.",
      sessions: 45,
      rating: 4.9,
      achievements: ["50+ Patents Filed", "₹100Cr+ Funding Facilitated", "200+ Startups Mentored"],
      specialization: "Deep Tech Innovation",
    },
    {
      name: "Dr. Vivek Menon",
      role: "Principal Scientist, IIT Madras",
      expertise: ["Deep Tech", "Research & Development", "Product Development"],
      experience: "12+ Years",
      image: "/mentor2.jpg",
      bio: "Expert in deep technology research with extensive experience in translating research into commercial products.",
      sessions: 38,
      rating: 4.8,
      achievements: ["30+ Research Papers", "5 Successful Exits", "IIT Excellence Award"],
      specialization: "Research Commercialization",
    },
    {
      name: "Anil Kumar Kattera",
      role: "Head Innovation Lead",
      expertise: ["Business Strategy", "Market Analysis", "Scaling"],
      experience: "10+ Years",
      image: "/mentor3.jpg",
      bio: "Seasoned business leader with expertise in innovation management and startup scaling strategies.",
      sessions: 52,
      rating: 4.9,
      achievements: ["10+ Successful Scales", "Fortune 500 Experience", "Strategy Expert"],
      specialization: "Business Scaling",
    },
    {
      name: "Dr. A. Noorjahan",
      role: "Bio-focus Scientific Solutions",
      expertise: ["Biotechnology", "Life Sciences", "Healthcare Innovation"],
      experience: "8+ Years",
      image: "/mentor4.jpg",
      bio: "Biotechnology expert focused on healthcare innovations and scientific solutions for real-world problems.",
      sessions: 29,
      rating: 4.7,
      achievements: ["FDA Approvals", "Healthcare Patents", "Bio-Innovation Awards"],
      specialization: "Healthcare Innovation",
    },
  ]

  const mentorshipPrograms = [
    {
      title: "One-on-One Mentoring",
      duration: "3-6 Months",
      frequency: "Weekly Sessions",
      description: "Personalized guidance from industry experts tailored to your startup's specific needs",
      features: ["Individual Attention", "Customized Roadmap", "Direct Access", "Progress Tracking"],
      icon: "👤",
      price: "Free for Incubatees",
      details:
        "Deep dive into your specific challenges with dedicated mentor support, weekly check-ins, and personalized growth plans.",
    },
    {
      title: "Group Mentoring",
      duration: "2-4 Months",
      frequency: "Bi-weekly Sessions",
      description: "Collaborative learning environment with peer startups and expert mentors",
      features: ["Peer Learning", "Group Discussions", "Shared Experiences", "Network Building"],
      icon: "👥",
      price: "₹5,000/month",
      details:
        "Learn alongside fellow entrepreneurs, share challenges and solutions, and build lasting professional relationships.",
    },
    {
      title: "Specialized Workshops",
      duration: "1-2 Days",
      frequency: "Monthly",
      description: "Intensive workshops on specific topics led by domain experts",
      features: ["Expert-led Sessions", "Hands-on Learning", "Practical Tools", "Certificates"],
      icon: "🎯",
      price: "₹2,000/workshop",
      details:
        "Focused learning sessions on specific skills like fundraising, product development, marketing, and legal compliance.",
    },
    {
      title: "Advisory Board",
      duration: "6-12 Months",
      frequency: "Monthly Reviews",
      description: "Strategic guidance from a panel of experienced advisors and investors",
      features: ["Strategic Planning", "Investment Readiness", "Board Meetings", "Long-term Vision"],
      icon: "🏛️",
      price: "Equity-based",
      details:
        "High-level strategic guidance from seasoned entrepreneurs and investors to help shape your company's future.",
    },
  ]

  const upcomingSessions = [
    {
      title: "Startup Funding Strategies",
      mentor: "Dr. K. Manivannan",
      date: "2024-02-15",
      time: "10:00 AM - 12:00 PM",
      type: "Workshop",
      participants: 25,
      location: "CITBIF Conference Hall",
    },
    {
      title: "Product-Market Fit Analysis",
      mentor: "Anil Kumar Kattera",
      date: "2024-02-18",
      time: "2:00 PM - 4:00 PM",
      type: "Group Session",
      participants: 15,
      location: "Innovation Lab",
    },
    {
      title: "Deep Tech Commercialization",
      mentor: "Dr. Vivek Menon",
      date: "2024-02-22",
      time: "11:00 AM - 1:00 PM",
      type: "Masterclass",
      participants: 30,
      location: "Virtual Session",
    },
    {
      title: "Healthcare Innovation Trends",
      mentor: "Dr. A. Noorjahan",
      date: "2024-02-25",
      time: "3:00 PM - 5:00 PM",
      type: "Seminar",
      participants: 20,
      location: "Biotech Lab",
    },
  ]

  const mentorshipBenefits = [
    {
      title: "Expert Guidance",
      description: "Learn from industry veterans with proven track records",
      icon: Award,
      color: "from-[#FF6B35] to-[#FFB347]",
    },
    {
      title: "Network Access",
      description: "Connect with investors, partners, and fellow entrepreneurs",
      icon: Users,
      color: "from-[#FFB347] to-[#FF6B35]",
    },
    {
      title: "Skill Development",
      description: "Build essential entrepreneurial and technical skills",
      icon: BookOpen,
      color: "from-[#FF6B35] to-[#FFB347]",
    },
    {
      title: "Regular Support",
      description: "Ongoing mentorship throughout your startup journey",
      icon: Calendar,
      color: "from-[#FFB347] to-[#FF6B35]",
    },
  ]

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 animate-pulse-glow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1B120A] text-shimmer animate-wiggle">
              Mentorship & Guidance
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto mb-8 animate-scale-in hover:w-48 transition-all duration-500"></div>
            <p className="text-xl text-[#1B120A] max-w-4xl mx-auto leading-relaxed transform hover:scale-105 transition-transform duration-300">
              Learn from industry experts and accelerate your startup journey with personalized mentorship
            </p>
          </div>
        </div>
      </section>

      {/* Mentorship Benefits - HEXAGONAL GRID LAYOUT */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">
              Why Choose Our Mentorship?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="hex-grid max-w-4xl mx-auto">
            {mentorshipBenefits.map((benefit, index) => (
              <div key={index} className={`hex-item animate-bounce-in stagger-${index + 1}`}>
                <div className="hex-shape border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group hover-lift animate-hex-float">
                  <div className="hex-content text-center">
                    <benefit.icon className="h-8 w-8 text-[#FF6B35] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-sm font-bold text-[#FF6B35] mb-2 group-hover:text-[#FFB347] transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-white text-xs leading-tight group-hover:text-gray-200 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mentors - FLIP CARDS LAYOUT */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Meet Our Mentors</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mentors.map((mentor, index) => (
              <div key={index} className={`flip-card animate-slide-up stagger-${index + 1}`}>
                <div className="flip-card-inner">
                  {/* Front of card */}
                  <div className="flip-card-front bg-[#1B120A] border border-[#FFB347]/50">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB347]/20 overflow-hidden">
                        <Image
                          src={mentor.image || "/placeholder.svg"}
                          alt={mentor.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg?height=80&width=80"
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#FF6B35] mb-1">{mentor.name}</h3>
                        <p className="text-[#FFB347] text-sm mb-2">{mentor.role}</p>
                        <p className="text-gray-300 text-sm">{mentor.experience} Experience</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-white text-sm">{mentor.sessions} Sessions</span>
                          <span className="text-yellow-400 text-sm">★ {mentor.rating}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-white mb-4 leading-relaxed">{mentor.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.slice(0, 2).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-[#FF6B35]/20 text-[#FFB347] px-3 py-1 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="absolute bottom-4 right-4 text-[#FFB347]/50 text-sm">Hover for details →</div>
                  </div>

                  {/* Back of card */}
                  <div className="flip-card-back bg-gradient-to-br from-[#FF6B35] to-[#FFB347] text-white">
                    <h3 className="text-2xl font-bold mb-2">{mentor.name}</h3>
                    <p className="text-lg font-semibold mb-4">{mentor.specialization}</p>
                    <h4 className="font-semibold mb-3">Key Achievements</h4>
                    <div className="space-y-2 mb-6">
                      {mentor.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-[#FF6B35] w-full"
                    >
                      Book Session
                      <Calendar className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Programs - ACCORDION LAYOUT */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Mentorship Programs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            {mentorshipPrograms.map((program, index) => (
              <div
                key={index}
                className={`accordion-item ${activeAccordion === index ? "active" : ""} animate-slide-in-left stagger-${index + 1} mb-4`}
              >
                <div className="bg-[#1B120A] rounded-2xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 overflow-hidden">
                  <div className="accordion-header group cursor-pointer p-6" onClick={() => toggleAccordion(index)}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          {program.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                            {program.title}
                          </h3>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-gray-300 text-sm">{program.duration}</span>
                            <span className="text-[#FFB347] text-sm">{program.frequency}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[#FF6B35] font-bold text-lg">{program.price}</span>
                        <ChevronDown
                          className={`h-5 w-5 text-[#FFB347] transition-transform duration-300 ${
                            activeAccordion === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Accordion Content with proper styling */}
                  <div
                    className={`accordion-content transition-all duration-300 overflow-hidden ${
                      activeAccordion === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-[#2A1F1A] border-t border-[#FFB347]/20 p-6">
                      <p className="text-[#E8E4C9] mb-4 leading-relaxed">{program.description}</p>
                      <p className="text-[#FFB347]/80 mb-6 leading-relaxed">{program.details}</p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {program.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#FFB347] rounded-full"></div>
                            <span className="text-[#E8E4C9] text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white rounded-xl btn-animate">
                        Enroll Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Sessions - CALENDAR GRID LAYOUT */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Upcoming Sessions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {upcomingSessions.map((session, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-6 rounded-2xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-bounce-in stagger-${index + 1} relative overflow-hidden interactive-card`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-[#FF6B35]/20 text-[#FFB347] px-3 py-1 rounded-full text-xs font-semibold">
                      {session.type}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#FF6B35]">{new Date(session.date).getDate()}</div>
                      <div className="text-xs text-[#FFB347]">
                        {new Date(session.date).toLocaleDateString("en-US", { month: "short" })}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#FF6B35] mb-2 group-hover:text-[#FFB347] transition-colors duration-300">
                    {session.title}
                  </h3>
                  <p className="text-[#FFB347] text-sm mb-4">{session.mentor}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{session.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <User className="h-4 w-4" />
                      <span>{session.participants} participants</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white rounded-xl btn-animate group ripple">
                    Register Now
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFB347]/10 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">
              Ready to Start Your Mentorship Journey?
            </h2>
            <p className="text-xl text-[#1B120A] mb-8 leading-relaxed transform hover:scale-105 transition-transform duration-300">
              Connect with experienced mentors and accelerate your startup success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group ripple">
                Find a Mentor
                <Users className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Become a Mentor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
