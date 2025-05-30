"use client"

import Image from "next/image"
import { Play, Calendar, Users, Tag, X, ChevronLeft, ChevronRight, Filter } from "lucide-react"
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [filterAnimation, setFilterAnimation] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
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
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const openLightbox = (src: string, index: number) => {
    setLightboxImage(src)
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

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

  const handleCategoryChange = (category: string) => {
    setFilterAnimation(true)
    setTimeout(() => {
      setSelectedCategory(category)
      setFilterAnimation(false)
    }, 300)
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1B120A] text-shimmer animate-wiggle">Gallery</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] mx-auto mb-8 animate-scale-in hover:w-48 transition-all duration-500"></div>
            <p className="text-xl text-[#1B120A] max-w-4xl mx-auto leading-relaxed transform hover:scale-105 transition-transform duration-300">
              Capturing moments of innovation, collaboration, and achievement at CITBIF
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter - ANIMATED TAB SYSTEM */}
      <section className="bg-[#FFB347]/10 py-12">
        <div className="container mx-auto px-4">
          <div className="filter-tabs-container max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <Filter className="h-5 w-5 text-[#FF6B35]" />
              <span className="text-[#1B120A] font-semibold">Filter by Category</span>
            </div>
            <div className="filter-tabs relative bg-[#1B120A] p-2 rounded-2xl">
              <div
                className="tab-indicator absolute top-2 bottom-2 bg-gradient-to-r from-[#FF6B35] to-[#FFB347] rounded-xl transition-all duration-500 ease-out"
                style={{
                  left: `${(categories.indexOf(selectedCategory) * 100) / categories.length}%`,
                  width: `${100 / categories.length}%`,
                }}
              ></div>
              <div className="flex relative z-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 relative z-10 ${
                      selectedCategory === category ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#1B120A] px-6 py-3 rounded-full">
              <span className="text-[#FF6B35] font-bold text-lg">{filteredItems.length}</span>
              <span className="text-white">{filteredItems.length === 1 ? "item" : "items"} found</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid - MASONRY LAYOUT WITH ISOTOPE FILTERING */}
      <section className="bg-[#E8E4C9]/30 py-24">
        <div className="container mx-auto px-4">
          <div
            className={`gallery-masonry-grid max-w-7xl mx-auto transition-all duration-500 ${
              filterAnimation ? "opacity-50 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`gallery-masonry-item gallery-item-${(index % 4) + 1} bg-[#1B120A] rounded-3xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-xl hover-lift animate-slide-up stagger-${(index % 6) + 1} relative overflow-hidden cursor-pointer interactive-card`}
                onClick={() =>
                  item.type === "image" ? openLightbox(item.image, index) : openLightbox(item.thumbnail, index)
                }
              >
                <div className="gallery-image-container relative overflow-hidden rounded-t-3xl">
                  <div className="aspect-w-16 aspect-h-12">
                    <Image
                      src={item.type === "image" ? item.image : item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=300&width=400"
                      }}
                    />
                  </div>

                  {/* Image Overlay */}
                  <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-white" />
                        <span className="text-white text-sm">{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-white" />
                        <span className="text-white text-sm">{item.participants}</span>
                      </div>
                    </div>
                  </div>

                  {/* Video Play Button */}
                  {item.type === "video" && (
                    <div className="video-play-overlay absolute inset-0 flex items-center justify-center">
                      <div className="play-button w-16 h-16 bg-[#FF6B35]/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="category-badge absolute top-4 left-4 bg-[#FF6B35]/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-semibold">{item.category}</span>
                  </div>

                  {/* Type Badge */}
                  <div className="type-badge absolute top-4 right-4">
                    {item.type === "video" ? (
                      <div className="bg-red-500/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <span className="text-white text-xs font-semibold">VIDEO</span>
                      </div>
                    ) : (
                      <div className="bg-blue-500/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <span className="text-white text-xs font-semibold">IMAGE</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="gallery-card-content p-6">
                  <h3 className="text-xl font-bold text-[#FF6B35] mb-2 group-hover:text-[#FFB347] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white mb-4 group-hover:text-gray-200 transition-colors duration-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="tags-container">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="tag bg-[#FF6B35]/20 text-[#FFB347] px-2 py-1 rounded-full text-xs flex items-center gap-1 group-hover:scale-105 transition-transform duration-300"
                          style={{ transitionDelay: `${tagIndex * 0.1}s` }}
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="tag bg-[#FFB347]/20 text-[#FF6B35] px-2 py-1 rounded-full text-xs">
                          +{item.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox */}
      {lightboxImage && (
        <div className="lightbox-overlay fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="lightbox-container relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="lightbox-close absolute top-4 right-4 z-60 bg-[#FF6B35] hover:bg-[#FF6B35]/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="lightbox-nav-prev absolute left-4 top-1/2 -translate-y-1/2 z-60 bg-[#1B120A]/80 hover:bg-[#1B120A] text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextImage}
              className="lightbox-nav-next absolute right-4 top-1/2 -translate-y-1/2 z-60 bg-[#1B120A]/80 hover:bg-[#1B120A] text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Main Image */}
            <div className="lightbox-image-container relative">
              <Image
                src={lightboxImage || "/placeholder.svg"}
                alt="Gallery Image"
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=800&width=1200"
                }}
              />
            </div>

            {/* Image Info */}
            <div className="lightbox-info absolute bottom-4 left-4 right-4 bg-[#1B120A]/90 backdrop-blur-sm p-6 rounded-2xl border border-[#FFB347]/30">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{filteredItems[currentImageIndex]?.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{filteredItems[currentImageIndex]?.description}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-[#FFB347]" />
                    <span className="text-gray-300">{filteredItems[currentImageIndex]?.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-[#FFB347]" />
                    <span className="text-gray-300">{filteredItems[currentImageIndex]?.participants}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {filteredItems[currentImageIndex]?.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-[#FF6B35]/20 text-[#FFB347] px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="lightbox-counter absolute top-4 left-4 bg-[#1B120A]/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white text-sm">
                {currentImageIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-[#FFB347]/10 py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B120A] text-shimmer">Be Part of Our Story</h2>
            <p className="text-xl text-[#1B120A] mb-8 leading-relaxed transform hover:scale-105 transition-transform duration-300">
              Join our vibrant community and create memorable moments of innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full px-8 py-4 text-lg btn-animate hover-lift group ripple">
                Join Our Events
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
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
