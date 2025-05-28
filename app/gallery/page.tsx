"use client"

import Image from "next/image"
import { Play, Calendar, Users, Tag, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"

type ImageItem = {
  id: number
  title: string
  category: string
  type: "image"
  date: string
  participants: string
  description: string
  image: string
  tags: string[]
}

type VideoItem = {
  id: number
  title: string
  category: string
  type: "video"
  date: string
  participants: string
  description: string
  thumbnail: string
  videoUrl: string
  tags: string[]
}

type GalleryItem = ImageItem | VideoItem

export default function GalleryPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const categories = ["All", "Events", "Workshops", "Hackathons", "Awards", "Infrastructure", "Videos"]

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Smart Industry 4.0 Hackathon",
      category: "Hackathons",
      type: "image",
      date: "2024-01-15",
      participants: "5000+ Teams",
      description: "Largest hackathon with 5000 team registrations and 2.5 lakh online impressions",
      image: "/gallery/hackathon-industry40.jpg",
      tags: ["Innovation", "Technology", "Competition"],
    },
    {
      id: 2,
      title: "CITIL SDG Hackathon 2025",
      category: "Hackathons",
      type: "image",
      date: "2024-02-10",
      participants: "231 Applications",
      description: "Focused on Sustainable Development Goals with 28 finalists and ₹75,000 grants awarded",
      image: "/gallery/sdg-hackathon.jpg",
      tags: ["SDG", "Sustainability", "Innovation"],
    },
    {
      id: 3,
      title: "Launch Pad Hackathon 2025",
      category: "Hackathons",
      type: "image",
      date: "2024-03-05",
      participants: "2500 Registrations",
      description: "250 students participated in the finale with 25 teams selected",
      image: "/gallery/launchpad-hackathon.jpg",
      tags: ["Startup", "Launch", "Competition"],
    },
    {
      id: 4,
      title: "Idea Generation Bootcamp",
      category: "Workshops",
      type: "image",
      date: "2024-01-20",
      participants: "150+ Students",
      description: "Comprehensive bootcamp covering design thinking, ideation, and pitch development",
      image: "/gallery/idea-bootcamp.jpg",
      tags: ["Ideation", "Design Thinking", "Bootcamp"],
    },
    {
      id: 5,
      title: "Minor Degree in Innovation & Entrepreneurship",
      category: "Events",
      type: "image",
      date: "2024-02-01",
      participants: "300+ Students",
      description: "18-credit program launch with industry experts and successful entrepreneurs",
      image: "/gallery/minor-degree.jpg",
      tags: ["Education", "Entrepreneurship", "Program"],
    },
    {
      id: 6,
      title: "KUKA Robotics Center Inauguration",
      category: "Infrastructure",
      type: "image",
      date: "2023-12-15",
      participants: "Industry Leaders",
      description: "State-of-the-art robotics center with industrial automation systems",
      image: "/gallery/kuka-center.jpg",
      tags: ["Robotics", "Infrastructure", "Technology"],
    },
    {
      id: 7,
      title: "Best Incubator Award 2023",
      category: "Awards",
      type: "image",
      date: "2023-12-20",
      participants: "CITBIF Team",
      description: "Recognition from Startup India for outstanding contribution to startup ecosystem",
      image: "/gallery/best-incubator-award.jpg",
      tags: ["Award", "Recognition", "Achievement"],
    },
    {
      id: 8,
      title: "Fronius Welding Research Center",
      category: "Infrastructure",
      type: "image",
      date: "2023-11-10",
      participants: "Research Team",
      description: "Advanced welding technology research center with cutting-edge equipment",
      image: "/gallery/fronius-center.jpg",
      tags: ["Research", "Welding", "Technology"],
    },
    {
      id: 9,
      title: "Startup Demo Day 2024",
      category: "Events",
      type: "video",
      date: "2024-03-15",
      participants: "50+ Startups",
      description: "Annual showcase of incubated startups presenting to investors and industry leaders",
      thumbnail: "/gallery/demo-day-thumb.jpg",
      videoUrl: "/videos/demo-day-2024.mp4",
      tags: ["Demo", "Startups", "Investors"],
    },
    {
      id: 10,
      title: "Innovation Festival Highlights",
      category: "Videos",
      type: "video",
      date: "2024-02-25",
      participants: "1000+ Attendees",
      description: "Three-day innovation festival featuring workshops, masterclasses, and startup showcase",
      thumbnail: "/gallery/innovation-festival-thumb.jpg",
      videoUrl: "/videos/innovation-festival.mp4",
      tags: ["Festival", "Innovation", "Workshop"],
    },
    {
      id: 11,
      title: "Semiconductor Design Hub",
      category: "Infrastructure",
      type: "image",
      date: "2024-01-05",
      participants: "Engineering Students",
      description: "India's premier semiconductor design hub with industry-standard tools",
      image: "/gallery/semiconductor-hub.jpg",
      tags: ["Semiconductor", "Design", "Technology"],
    },
    {
      id: 12,
      title: "Mentorship Session with Industry Experts",
      category: "Workshops",
      type: "image",
      date: "2024-02-20",
      participants: "100+ Entrepreneurs",
      description: "Interactive session with successful entrepreneurs and industry veterans",
      image: "/gallery/mentorship-session.jpg",
      tags: ["Mentorship", "Guidance", "Experts"],
    },
  ]

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  const openLightbox = (src: string, index: number) => {
    setLightboxImage(src)
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  // Corrected nextImage and prevImage to satisfy TS
  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredItems.length
    setCurrentImageIndex(nextIndex)
    const nextItem = filteredItems[nextIndex]
    const src = nextItem.type === "image" ? nextItem.image : nextItem.thumbnail
    setLightboxImage(src)
  }

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredItems.length) % filteredItems.length
    setCurrentImageIndex(prevIndex)
    const prevItem = filteredItems[prevIndex]
    const src = prevItem.type === "image" ? prevItem.image : prevItem.thumbnail
    setLightboxImage(src)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 animate-pulse-glow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1B120A] text-shimmer">Gallery</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto mb-8 animate-scale-in"></div>
            <p className="text-xl text-[#1B120A] max-w-4xl mx-auto leading-relaxed">
              Capturing moments of innovation, collaboration, and achievement at CITBIF
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-[#FFB347]/10 py-12">
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
              Showing {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`bg-[#1B120A] rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-${(index % 6) + 1} relative overflow-hidden cursor-pointer`}
                onClick={() =>
                  item.type === "image"
                    ? openLightbox(item.image, index)
                    : openLightbox(item.thumbnail, index)
                }
              >
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <Image
                    src={item.type === "image" ? item.image : item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=256&width=400"
                    }}
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-[#FF6B35]/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-semibold">{item.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#FF6B35] mb-2 group-hover:text-[#FFB347] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white mb-4 group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-300">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-300">
                        <Users className="h-4 w-4" />
                        <span>{item.participants}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-[#FF6B35]/20 text-[#FFB347] px-2 py-1 rounded-full text-xs flex items-center gap-1"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-60 bg-[#FF6B35] hover:bg-[#FF6B35]/80 text-white p-2 rounded-full transition-all duration-300"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-60 bg-[#1B120A]/80 hover:bg-[#1B120A] text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-60 bg-[#1B120A]/80 hover:bg-[#1B120A] text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <Image
              src={lightboxImage || "/placeholder.svg"}
              alt="Gallery Image"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg?height=600&width=800"
              }}
            />

            <div className="absolute bottom-4 left-4 right-4 bg-[#1B120A]/80 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-white font-bold text-lg mb-2">{filteredItems[currentImageIndex]?.title}</h3>
              <p className="text-gray-300 text-sm">{filteredItems[currentImageIndex]?.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Be Part of Our Story</h2>
            <p className="text-xl text-[#1B120A] mb-8 leading-relaxed">
              Join our vibrant community and create memorable moments of innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group">
                Join Our Events
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-4 text-lg transition-all duration-300"
              >
                Submit Your Photos
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
