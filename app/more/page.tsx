"use client"

import {
  TrendingUp,
  Download,
  ExternalLink,
  ChevronRight,
  Users,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import Navbar from "@/components/navbar"

export default function MorePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentReportSlide, setCurrentReportSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [counters, setCounters] = useState<{ [key: string]: number }>({})
  const [isHovering, setIsHovering] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Auto-rotate reports carousel only when not hovering
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentReportSlide((prev) => (prev + 1) % annualReports.length)
      }
    }, 5000)

    // Animate counters
    const animateCounters = () => {
      const targets = {
        startups: 60,
        jobs: 300,
        revenue: 15,
        countries: 12,
        research: 150,
        publications: 810,
        innovations: 500,
        projects: 75,
        labs: 32,
        equipment: 50,
        area: 10,
        centers: 15,
      }

      Object.keys(targets).forEach((key) => {
        let current = 0
        const target = targets[key as keyof typeof targets]
        const increment = target / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
        }, 50)
      })
    }

    const timer = setTimeout(animateCounters, 1000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [isHovering])

  const annualReports = [
    {
      year: "2023-24",
      title: "Annual Report 2023-24",
      description: "Comprehensive overview of our achievements, financial performance, and strategic initiatives",
      pages: 45,
      size: "2.3 MB",
      highlights: ["60+ Startups Incubated", "₹2Cr+ Funding Facilitated", "32 Centers of Excellence"],
      downloadUrl: "/reports/annual-report-2023-24.pdf",
      color: "from-[#FF6B35] to-[#FFB347]",
      icon: "📊",
    },
    {
      year: "2022-23",
      title: "Annual Report 2022-23",
      description: "Detailed analysis of growth trajectory and milestone achievements",
      pages: 38,
      size: "1.8 MB",
      highlights: ["45+ Startups Launched", "₹1.5Cr Funding", "25 Industry Partners"],
      downloadUrl: "/reports/annual-report-2022-23.pdf",
      color: "from-[#FFB347] to-[#FF6B35]",
      icon: "📈",
    },
    {
      year: "2021-22",
      title: "Annual Report 2021-22",
      description: "Foundation year achievements and strategic roadmap development",
      pages: 32,
      size: "1.5 MB",
      highlights: ["25+ Startups", "₹80L Funding", "15 Partnerships"],
      downloadUrl: "/reports/annual-report-2021-22.pdf",
      color: "from-[#FF6B35] to-[#FFB347]",
      icon: "🚀",
    },
  ]

  const achievements = [
    {
      category: "Recognition & Awards",
      items: [
        {
          title: "Best Incubator Award 2023",
          organization: "Startup India",
          description: "Recognized for outstanding contribution to startup ecosystem",
          date: "December 2023",
          icon: "🏆",
        },
        {
          title: "Excellence in Innovation",
          organization: "AICTE",
          description: "Award for promoting innovation in higher education",
          date: "October 2023",
          icon: "🌟",
        },
        {
          title: "Top Performing Incubator",
          organization: "Tamil Nadu Government",
          description: "State-level recognition for startup development",
          date: "August 2023",
          icon: "🥇",
        },
      ],
    },
    {
      category: "Research & Publications",
      items: [
        {
          title: "285 Patents Published",
          organization: "Indian Patent Office",
          description: "Innovative solutions across various technology domains",
          date: "2024",
          icon: "📜",
        },
        {
          title: "810 Research Publications",
          organization: "International Journals",
          description: "500 Web of Science indexed publications",
          date: "2024",
          icon: "📚",
        },
        {
          title: "Research Excellence",
          organization: "Various Conferences",
          description: "Presentations at national and international conferences",
          date: "2023-24",
          icon: "🔬",
        },
      ],
    },
    {
      category: "Industry Collaborations",
      items: [
        {
          title: "KUKA Partnership",
          organization: "KUKA Robotics",
          description: "On-campus robotics center and training programs",
          date: "2023",
          icon: "🤖",
        },
        {
          title: "Fronius Collaboration",
          organization: "Fronius International",
          description: "Advanced welding technology research center",
          date: "2022",
          icon: "⚡",
        },
        {
          title: "Bonfiglioli Academy",
          organization: "Bonfiglioli Group",
          description: "Cutting-edge engineering education programs",
          date: "2023",
          icon: "⚙️",
        },
      ],
    },
  ]

  const keyMetrics = [
    {
      title: "Innovation Impact",
      metrics: [
        { label: "Startups Incubated", value: "60+", growth: "+25%", key: "startups" },
        { label: "Jobs Created", value: "300+", growth: "+40%", key: "jobs" },
        { label: "Revenue Generated", value: "₹15Cr+", growth: "+60%", key: "revenue" },
        { label: "International Reach", value: "12 Countries", growth: "+50%", key: "countries" },
      ],
    },
    {
      title: "Academic Excellence",
      metrics: [
        { label: "Research Projects", value: "150+", growth: "+30%", key: "research" },
        { label: "Faculty Publications", value: "810", growth: "+20%", key: "publications" },
        { label: "Student Innovations", value: "500+", growth: "+45%", key: "innovations" },
        { label: "Industry Projects", value: "75+", growth: "+35%", key: "projects" },
      ],
    },
    {
      title: "Infrastructure Growth",
      metrics: [
        { label: "Lab Facilities", value: "32", growth: "+15%", key: "labs" },
        { label: "Equipment Value", value: "₹50Cr+", growth: "+25%", key: "equipment" },
        { label: "Campus Area", value: "10K Sq.ft", growth: "+20%", key: "area" },
        { label: "Technology Centers", value: "15", growth: "+30%", key: "centers" },
      ],
    },
  ]

  const initiatives = [
    {
      title: "CITIL & Kairos Joint Acceleration",
      description: "Partnership combining R&D, infrastructure, and mentorship for annual demo day",
      status: "Active",
      participants: "50+ Startups",
      impact: "High",
      icon: "🚀",
      progress: 85,
    },
    {
      title: "AICTE Idea Lab",
      description: "Collaboration offering labs for ideation and product development",
      status: "Ongoing",
      participants: "200+ Students",
      impact: "Medium",
      icon: "💡",
      progress: 70,
    },
    {
      title: "Ignite Network Program",
      description: "Partnership with colleges providing access to CITIL facilities",
      status: "Expanding",
      participants: "15+ Colleges",
      impact: "High",
      icon: "🔥",
      progress: 60,
    },
    {
      title: "Minor Degree in Innovation",
      description: "18-credit program for innovation and entrepreneurship education",
      status: "Active",
      participants: "300+ Students",
      impact: "High",
      icon: "🎓",
      progress: 90,
    },
  ]

  const nextReportSlide = () => {
    setCurrentReportSlide((prev) => (prev + 1) % annualReports.length)
  }

  const prevReportSlide = () => {
    setCurrentReportSlide((prev) => (prev - 1 + annualReports.length) % annualReports.length)
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1B120A] text-shimmer animate-wiggle">
              Reports & Achievements
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto mb-8 animate-scale-in hover:w-48 transition-all duration-500"></div>
            <p className="text-xl text-[#1B120A] max-w-4xl mx-auto leading-relaxed transform hover:scale-105 transition-transform duration-300">
              Comprehensive insights into our journey, achievements, and strategic initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Annual Reports - ENHANCED PREMIUM CAROUSEL */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Annual Reports</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>

          {/* Premium Carousel */}
          <div
            className="premium-carousel relative max-w-6xl mx-auto h-[650px] mb-12"
            ref={carouselRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {annualReports.map((report, index) => {
              // Calculate position based on current slide
              let position = "inactive"
              if (index === currentReportSlide) position = "active"
              else if (index === (currentReportSlide + 1) % annualReports.length) position = "next"
              else if (index === (currentReportSlide - 1 + annualReports.length) % annualReports.length)
                position = "prev"

              return (
                <div
                  key={index}
                  className={`premium-card ${position}`}
                  style={{
                    zIndex: position === "active" ? 30 : position === "next" || position === "prev" ? 20 : 10,
                  }}
                >
                  <div className="premium-card-inner">
                    {/* Front of card */}
                    <div className="premium-card-front">
                      <div className="premium-card-content bg-gradient-to-br from-[#1B120A] to-[#2A1F1A] border border-[#FFB347]/30 rounded-[2rem] p-8 h-full flex flex-col relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#FFB347]/10 to-transparent rounded-tr-full"></div>

                        {/* Card header */}
                        <div className="flex items-start gap-6 mb-8 relative z-10">
                          <div className="report-icon-container">
                            <div className="text-5xl animate-float-slow">{report.icon}</div>
                            <div className="report-icon-glow"></div>
                          </div>
                          <div>
                            <div className="inline-block px-4 py-1 bg-[#FF6B35]/20 text-[#FF6B35] rounded-full text-sm font-medium mb-2">
                              {report.year}
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">{report.title}</h3>
                          </div>
                        </div>

                        {/* Card body */}
                        <p className="text-gray-300 mb-8 text-lg leading-relaxed flex-1">{report.description}</p>

                        {/* Highlights */}
                        <div className="space-y-3 mb-8">
                          <h4 className="text-[#FFB347] font-semibold">Key Highlights</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {report.highlights.map((highlight, highlightIndex) => (
                              <div
                                key={highlightIndex}
                                className="flex items-center gap-3 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300"
                              >
                                <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B35]/20 rounded-full flex items-center justify-center">
                                  <Check className="h-3 w-3 text-[#FF6B35]" />
                                </div>
                                <span className="text-gray-200 text-sm">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Card footer */}
                        <div className="mt-auto">
                          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#FFB347] rounded-full"></div>
                              <span>{report.pages} pages</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                              <span>{report.size}</span>
                            </div>
                          </div>
                          <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white rounded-xl py-6 btn-animate group">
                            <span className="flex items-center justify-center gap-2">
                              Download Report
                              <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div className={`premium-card-back bg-gradient-to-br ${report.color}`}>
                      <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                        <div className="text-7xl mb-6 animate-float">{report.icon}</div>
                        <h3 className="text-3xl font-bold mb-4 text-white">{report.year}</h3>
                        <div className="w-16 h-1 bg-white/50 mx-auto mb-6"></div>
                        <p className="text-xl mb-8 text-white/90 max-w-xs">
                          Ready to download our comprehensive report for {report.year}?
                        </p>

                        <div className="space-y-6 w-full max-w-xs">
                          <div className="bg-white/20 rounded-2xl p-5">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-center">
                                <p className="text-sm text-white/70 mb-1">File Size</p>
                                <p className="text-lg font-semibold text-white">{report.size}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-sm text-white/70 mb-1">Pages</p>
                                <p className="text-lg font-semibold text-white">{report.pages}</p>
                              </div>
                            </div>
                          </div>

                          <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl py-6 group">
                            <span className="flex items-center justify-center gap-2">
                              Download PDF
                              <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Carousel Controls */}
            <button
              onClick={prevReportSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-[#1B120A]/80 text-[#FF6B35] p-4 rounded-full hover:bg-[#FF6B35] hover:text-white transition-all duration-300 z-40 shadow-lg backdrop-blur-sm"
              aria-label="Previous report"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextReportSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-[#1B120A]/80 text-[#FF6B35] p-4 rounded-full hover:bg-[#FF6B35] hover:text-white transition-all duration-300 z-40 shadow-lg backdrop-blur-sm"
              aria-label="Next report"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {annualReports.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReportSlide(index)}
                className={`transition-all duration-500 ${
                  currentReportSlide === index
                    ? "w-10 h-3 bg-[#FF6B35] rounded-full"
                    : "w-3 h-3 bg-[#FFB347]/50 rounded-full hover:bg-[#FFB347]/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics - ANIMATED COUNTER CARDS */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Key Performance Metrics</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {keyMetrics.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`counter-card bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-bounce-in stagger-${categoryIndex + 1} relative overflow-hidden`}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#FF6B35] mb-6 group-hover:text-[#FFB347] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="metric-item p-4 bg-[#2a2a2a] rounded-xl border border-[#FFB347]/20 hover:border-[#FF6B35]/40 transition-all duration-300 group-hover:scale-105"
                        style={{ transitionDelay: `${metricIndex * 0.1}s` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-white font-semibold">{metric.label}</p>
                          <p className="text-green-400 text-sm flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            {metric.growth}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="counter-display">
                            <span className="text-2xl font-bold text-[#FF6B35]">
                              {metric.key.includes("revenue") || metric.key.includes("equipment")
                                ? `₹${counters[metric.key] || 0}${metric.value.includes("Cr") ? "Cr+" : ""}`
                                : metric.key === "countries"
                                  ? `${counters[metric.key] || 0} Countries`
                                  : metric.key === "area"
                                    ? `${counters[metric.key] || 0}K Sq.ft`
                                    : `${counters[metric.key] || 0}+`}
                            </span>
                          </div>
                          <div className="progress-ring">
                            <svg className="w-12 h-12 transform -rotate-90">
                              <circle
                                cx="24"
                                cy="24"
                                r="20"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="transparent"
                                className="text-gray-600"
                              />
                              <circle
                                cx="24"
                                cy="24"
                                r="20"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="transparent"
                                strokeDasharray={`${2 * Math.PI * 20}`}
                                strokeDashoffset={`${2 * Math.PI * 20 * (1 - (counters[metric.key] || 0) / Number.parseInt(metric.value))}`}
                                className="text-[#FF6B35] transition-all duration-1000"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements - TIMELINE LAYOUT */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Our Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="achievements-timeline max-w-6xl mx-auto">
            {achievements.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`timeline-category animate-slide-in-left stagger-${categoryIndex + 1}`}
              >
                <div className="category-header text-center mb-12">
                  <h3 className="text-3xl font-bold text-[#1B120A] mb-4">{category.category}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto"></div>
                </div>
                <div className="timeline-items">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`timeline-achievement-item ${itemIndex % 2 === 0 ? "left" : "right"} animate-bounce-in stagger-${itemIndex + 1}`}
                    >
                      <div className="achievement-card bg-[#1B120A] p-6 rounded-2xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="achievement-icon text-3xl group-hover:scale-110 transition-transform duration-300 animate-float">
                              {item.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                                {item.title}
                              </h4>
                              <p className="text-[#FFB347] text-sm">{item.organization}</p>
                            </div>
                          </div>
                          <p className="text-white text-sm mb-3 group-hover:text-gray-200 transition-colors duration-300">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-300" />
                            <p className="text-gray-300 text-xs">{item.date}</p>
                          </div>
                        </div>
                      </div>
                      <div className="timeline-marker animate-timeline-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Initiatives - INTERACTIVE DASHBOARD CARDS */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">New Initiatives</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="dashboard-grid max-w-6xl mx-auto">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className={`dashboard-card bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-${index + 1} relative overflow-hidden interactive-card`}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="dashboard-header flex items-start gap-4 mb-6">
                    <div className="initiative-icon text-4xl group-hover:scale-110 transition-transform duration-300 animate-float">
                      {initiative.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#FF6B35] mb-2 group-hover:text-[#FFB347] transition-colors duration-300">
                        {initiative.title}
                      </h3>
                      <div className="status-indicators flex items-center gap-3 mb-3">
                        <span
                          className={`status-badge px-3 py-1 rounded-full text-xs font-semibold ${
                            initiative.status === "Active"
                              ? "bg-green-500/20 text-green-400"
                              : initiative.status === "Ongoing"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {initiative.status}
                        </span>
                        <span
                          className={`impact-badge px-3 py-1 rounded-full text-xs font-semibold ${
                            initiative.impact === "High"
                              ? "bg-[#FF6B35]/20 text-[#FF6B35]"
                              : "bg-[#FFB347]/20 text-[#FFB347]"
                          }`}
                        >
                          {initiative.impact} Impact
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {initiative.description}
                  </p>
                  <div className="progress-section mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#FFB347] text-sm font-semibold">Progress</span>
                      <span className="text-white text-sm">{initiative.progress}%</span>
                    </div>
                    <div className="progress-bar bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="progress-fill bg-gradient-to-r from-[#FF6B35] to-[#FFB347] h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="dashboard-footer flex items-center justify-between">
                    <div className="participants flex items-center gap-2">
                      <Users className="h-4 w-4 text-[#FFB347]" />
                      <span className="text-[#FFB347] text-sm">{initiative.participants}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#FF6B35] hover:text-white hover:bg-[#FF6B35]/20 group-hover:scale-105 transition-all duration-300"
                    >
                      Learn More
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">
              Stay Updated with Our Progress
            </h2>
            <p className="text-xl text-[#1B120A] mb-8 leading-relaxed transform hover:scale-105 transition-transform duration-300">
              Subscribe to our newsletter for the latest reports, achievements, and initiatives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group ripple">
                Subscribe Newsletter
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Download All Reports
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
