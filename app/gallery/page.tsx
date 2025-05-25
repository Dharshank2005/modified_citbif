"use client"

import Image from "next/image"
import { Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import PageTransition from "@/components/page-transition"

export default function Gallery() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1B120A] animate-slide-in-left mb-6">
              INNOVATION <span className="text-[#FF6B35] text-shimmer">GALLERY</span>
            </h1>
            <p className="text-xl text-[#1B120A] max-w-3xl mx-auto animate-slide-in-right">
              Explore our innovation ecosystem through images and videos
            </p>
          </div>
        </section>

        {/* Gallery Categories */}
        <section className="bg-[#FFB347]/10 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Innovation Gallery</h2>
              <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
            </div>

            {/* Category Tabs */}
            <div className="flex justify-center mb-12">
              <div className="bg-[#1B120A] p-2 rounded-xl border border-[#FFB347]/50">
                {["All", "Labs", "Events", "Startups", "Facilities"].map((category, index) => (
                  <button
                    key={category}
                    className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                      index === 0 ? "bg-[#FF6B35] text-white" : "text-[#FFB347] hover:bg-[#FF6B35]/20 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "/innovation-hub.png",
                  title: "Innovation Hub",
                  category: "Labs",
                  desc: "Main innovation workspace",
                },
                {
                  src: "/incubation-lab.png",
                  title: "Incubation Laboratory",
                  category: "Labs",
                  desc: "Advanced research facility",
                },
                {
                  src: "/cit-incubation-lab.png",
                  title: "CIT Innovation Center",
                  category: "Facilities",
                  desc: "State-of-the-art equipment",
                },
                {
                  src: "/chairman.png",
                  title: "Leadership Meet",
                  category: "Events",
                  desc: "Strategic planning session",
                },
                {
                  src: "/testimonial1.png",
                  title: "Startup Showcase",
                  category: "Events",
                  desc: "Annual startup presentation",
                },
                {
                  src: "/testimonial2.png",
                  title: "Mentor Session",
                  category: "Events",
                  desc: "Expert guidance program",
                },
                {
                  src: "/company-itl.png",
                  title: "ITL Success Story",
                  category: "Startups",
                  desc: "Automotive innovation",
                },
                {
                  src: "/company-festa.png",
                  title: "Festa Solar",
                  category: "Startups",
                  desc: "Clean energy solutions",
                },
                {
                  src: "/partner-kuka.png",
                  title: "KUKA Partnership",
                  category: "Events",
                  desc: "Industrial robotics collaboration",
                },
                {
                  src: "/focus-ai.png",
                  title: "AI Research Lab",
                  category: "Labs",
                  desc: "Artificial intelligence development",
                },
                {
                  src: "/focus-iot.png",
                  title: "IoT Testing Center",
                  category: "Labs",
                  desc: "Internet of Things innovation",
                },
                {
                  src: "/focus-robotics.png",
                  title: "Robotics Workshop",
                  category: "Facilities",
                  desc: "Advanced robotics development",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-[#1B120A] p-4 rounded-xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-md card-hover hover-lift scroll-animate stagger-${(index % 6) + 1}`}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover image-hover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=300&width=400"
                      }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white btn-animate">
                        <Camera className="w-4 h-4 mr-2" />
                        View Full
                      </Button>
                    </div>
                    <div className="absolute top-2 right-2 bg-[#FF6B35] text-white text-xs px-2 py-1 rounded-full">
                      {item.category}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="bg-[#E8E4C9]/30 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Video Gallery</h2>
              <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "CITIL Overview", duration: "3:45", views: "2.5K" },
                { title: "Startup Success Stories", duration: "5:20", views: "1.8K" },
                { title: "Innovation Lab Tour", duration: "4:15", views: "3.2K" },
                { title: "Mentorship Program", duration: "2:30", views: "1.5K" },
                { title: "Technology Showcase", duration: "6:10", views: "2.1K" },
                { title: "Industry Partnerships", duration: "3:55", views: "1.9K" },
              ].map((video, index) => (
                <div
                  key={index}
                  className={`bg-[#1B120A] p-4 rounded-xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-md card-hover hover-lift scroll-animate stagger-${(index % 6) + 1}`}
                >
                  <div className="relative bg-gray-800 rounded-lg h-40 flex items-center justify-center mb-4 group-hover:bg-gray-700 transition-colors duration-300">
                    <div className="text-6xl text-[#FF6B35] group-hover:scale-110 transition-transform duration-300">
                      ▶️
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{video.views} views</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
