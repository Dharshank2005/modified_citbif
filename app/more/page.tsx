"use client"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import PageTransition from "@/components/page-transition"
import Link from "next/link"

export default function More() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1B120A] animate-slide-in-left mb-6">
              MORE <span className="text-[#FF6B35] text-shimmer">RESOURCES</span>
            </h1>
            <p className="text-xl text-[#1B120A] max-w-3xl mx-auto animate-slide-in-right">
              Additional resources and services to support your innovation journey
            </p>
          </div>
        </section>

        {/* Additional Services */}
        <section className="bg-[#FFB347]/10 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Additional Services</h2>
              <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Research & Development",
                  icon: "🔬",
                  desc: "Access to R&D facilities and collaborative research opportunities with academic institutions",
                  details: "State-of-the-art labs, research partnerships, patent filing support",
                },
                {
                  name: "Industry Partnerships",
                  icon: "🤝",
                  desc: "Connect with leading industry partners for collaboration and business opportunities",
                  details: "Corporate partnerships, joint ventures, technology transfer",
                },
                {
                  name: "Training & Workshops",
                  icon: "🎓",
                  desc: "Comprehensive skill development programs and specialized workshops",
                  details: "Technical training, business skills, leadership development",
                },
                {
                  name: "Certification Programs",
                  icon: "🏆",
                  desc: "Professional certifications in emerging technologies and business management",
                  details: "Industry-recognized certificates, skill validation, career advancement",
                },
                {
                  name: "International Exposure",
                  icon: "🌍",
                  desc: "Global networking opportunities and international market access",
                  details: "Study tours, international conferences, global partnerships",
                },
                {
                  name: "Alumni Network",
                  icon: "👥",
                  desc: "Access to our extensive alumni network of successful entrepreneurs",
                  details: "Networking events, mentorship, business connections",
                },
                {
                  name: "Innovation Challenges",
                  icon: "🏅",
                  desc: "Participate in innovation competitions and hackathons",
                  details: "Prize money, recognition, industry exposure",
                },
                {
                  name: "Intellectual Property",
                  icon: "📋",
                  desc: "Complete IP protection and commercialization support",
                  details: "Patent filing, trademark registration, IP strategy",
                },
                {
                  name: "Digital Transformation",
                  icon: "💻",
                  desc: "Digital tools and platforms for business automation",
                  details: "Cloud services, digital marketing, e-commerce solutions",
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className={`bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-md card-hover hover-lift scroll-animate stagger-${(index % 6) + 1}`}
                >
                  <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF6B35] transition-colors duration-300 mb-3">
                    {resource.name}
                  </h3>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-3">
                    {resource.desc}
                  </p>
                  <p className="text-xs text-[#FFB347] group-hover:text-white transition-colors duration-300">
                    {resource.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="bg-[#E8E4C9]/30 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Success Metrics</h2>
              <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "500+", label: "Workshop Participants", icon: "👨‍🎓" },
                { value: "50+", label: "Research Projects", icon: "🔬" },
                { value: "25+", label: "Industry Partners", icon: "🤝" },
                { value: "100+", label: "Certified Professionals", icon: "🏆" },
              ].map((metric, index) => (
                <div
                  key={index}
                  className={`bg-[#1B120A] p-6 rounded-xl text-center border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 shadow-lg hover-lift scroll-animate stagger-${index + 1}`}
                >
                  <div className="text-3xl mb-2">{metric.icon}</div>
                  <div className="text-2xl font-bold text-[#FF6B35] mb-2">{metric.value}</div>
                  <div className="text-sm text-white">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#E8E4C9]/30 py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-[#1B120A]">Explore More Resources</h2>
            <Link href="/contact">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-3 btn-animate hover-lift">
                Access Resources
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
