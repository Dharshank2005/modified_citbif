"use client"
import { FileText, TrendingUp, Download, ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"

export default function MorePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const annualReports = [
    {
      year: "2023-24",
      title: "Annual Report 2023-24",
      description: "Comprehensive overview of our achievements, financial performance, and strategic initiatives",
      pages: 45,
      size: "2.3 MB",
      highlights: ["60+ Startups Incubated", "₹2Cr+ Funding Facilitated", "32 Centers of Excellence"],
      downloadUrl: "/reports/annual-report-2023-24.pdf",
    },
    {
      year: "2022-23",
      title: "Annual Report 2022-23",
      description: "Detailed analysis of growth trajectory and milestone achievements",
      pages: 38,
      size: "1.8 MB",
      highlights: ["45+ Startups Launched", "₹1.5Cr Funding", "25 Industry Partners"],
      downloadUrl: "/reports/annual-report-2022-23.pdf",
    },
    {
      year: "2021-22",
      title: "Annual Report 2021-22",
      description: "Foundation year achievements and strategic roadmap development",
      pages: 32,
      size: "1.5 MB",
      highlights: ["25+ Startups", "₹80L Funding", "15 Partnerships"],
      downloadUrl: "/reports/annual-report-2021-22.pdf",
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
        { label: "Startups Incubated", value: "60+", growth: "+25%" },
        { label: "Jobs Created", value: "300+", growth: "+40%" },
        { label: "Revenue Generated", value: "₹15Cr+", growth: "+60%" },
        { label: "International Reach", value: "12 Countries", growth: "+50%" },
      ],
    },
    {
      title: "Academic Excellence",
      metrics: [
        { label: "Research Projects", value: "150+", growth: "+30%" },
        { label: "Faculty Publications", value: "810", growth: "+20%" },
        { label: "Student Innovations", value: "500+", growth: "+45%" },
        { label: "Industry Projects", value: "75+", growth: "+35%" },
      ],
    },
    {
      title: "Infrastructure Growth",
      metrics: [
        { label: "Lab Facilities", value: "32", growth: "+15%" },
        { label: "Equipment Value", value: "₹50Cr+", growth: "+25%" },
        { label: "Campus Area", value: "10K Sq.ft", growth: "+20%" },
        { label: "Technology Centers", value: "15", growth: "+30%" },
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
    },
    {
      title: "AICTE Idea Lab",
      description: "Collaboration offering labs for ideation and product development",
      status: "Ongoing",
      participants: "200+ Students",
      impact: "Medium",
      icon: "💡",
    },
    {
      title: "Ignite Network Program",
      description: "Partnership with colleges providing access to CITIL facilities",
      status: "Expanding",
      participants: "15+ Colleges",
      impact: "High",
      icon: "🔥",
    },
    {
      title: "Minor Degree in Innovation",
      description: "18-credit program for innovation and entrepreneurship education",
      status: "Active",
      participants: "300+ Students",
      impact: "High",
      icon: "🎓",
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1B120A] text-shimmer">Reports & Achievements</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto mb-8 animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] max-w-4xl mx-auto leading-relaxed">
              Comprehensive insights into our journey, achievements, and strategic initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Annual Reports</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {annualReports.map((report, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-${index + 1} relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="h-8 w-8 text-[#FF6B35] group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h3 className="text-xl font-bold text-[#FF6B35] group-hover:text-[#FFB347] transition-colors duration-300">
                        {report.title}
                      </h3>
                      <p className="text-[#FFB347] text-sm">{report.year}</p>
                    </div>
                  </div>
                  <p className="text-white mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {report.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {report.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#FFB347] rounded-full"></div>
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-300 text-sm">{report.pages} pages</span>
                    <span className="text-gray-300 text-sm">{report.size}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white rounded-xl btn-animate group">
                    Download Report
                    <Download className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
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
                className={`bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-bounce-in stagger-${categoryIndex + 1} relative overflow-hidden`}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#FF6B35] mb-6 group-hover:text-[#FFB347] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="flex items-center justify-between p-4 bg-[#2a2a2a] rounded-xl border border-[#FFB347]/20 hover:border-[#FF6B35]/40 transition-all duration-300"
                      >
                        <div>
                          <p className="text-white font-semibold">{metric.label}</p>
                          <p className="text-gray-300 text-sm">Current Value</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-[#FF6B35]">{metric.value}</p>
                          <p className="text-green-400 text-sm flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            {metric.growth}
                          </p>
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

      {/* Achievements */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Our Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="space-y-12 max-w-6xl mx-auto">
            {achievements.map((category, categoryIndex) => (
              <div key={categoryIndex} className={`animate-slide-in-left stagger-${categoryIndex + 1}`}>
                <h3 className="text-2xl font-bold text-[#1B120A] mb-8 text-center">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-[#1B120A] p-6 rounded-2xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-bl-full"></div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </span>
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
                        <p className="text-gray-300 text-xs">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Initiatives */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">New Initiatives</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto animate-scale-in"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className={`bg-[#1B120A] p-8 rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-${index + 1} relative overflow-hidden`}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {initiative.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#FF6B35] mb-2 group-hover:text-[#FFB347] transition-colors duration-300">
                        {initiative.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
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
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
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
                  <p className="text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {initiative.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FFB347] text-sm">{initiative.participants}</span>
                    <Button variant="ghost" size="sm" className="text-[#FF6B35] hover:text-white hover:bg-[#FF6B35]/20">
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
            <p className="text-xl text-[#1B120A] mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest reports, achievements, and initiatives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group">
                Subscribe Newsletter
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-4 text-lg transition-all duration-300"
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
