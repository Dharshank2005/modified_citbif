"use client"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import PageTransition from "@/components/page-transition"
import Link from "next/link"

export default function Machineries() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1B120A] animate-slide-in-left mb-6">
              ADVANCED <span className="text-[#FF6B35] text-shimmer">MACHINERIES</span>
            </h1>
            <p className="text-xl text-[#1B120A] max-w-3xl mx-auto animate-slide-in-right">
              State-of-the-art equipment and machinery for cutting-edge innovation
            </p>
          </div>
        </section>

        {/* Equipment Categories */}
        <section className="bg-[#FFB347]/10 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "3D Printers", icon: "🖨️", desc: "Advanced 3D printing technology" },
                { name: "CNC Machines", icon: "⚙️", desc: "Precision manufacturing equipment" },
                { name: "Robotics Lab", icon: "🤖", desc: "Industrial robotics systems" },
                { name: "IoT Devices", icon: "📡", desc: "Internet of Things hardware" },
                { name: "AI Hardware", icon: "🧠", desc: "Machine learning accelerators" },
                { name: "Testing Equipment", icon: "🔬", desc: "Quality assurance tools" },
                { name: "Prototyping Tools", icon: "🛠️", desc: "Rapid prototyping solutions" },
                { name: "Measurement Systems", icon: "📏", desc: "Precision measurement tools" },
              ].map((equipment, index) => (
                <div
                  key={index}
                  className={`bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 text-center group shadow-md card-hover hover-lift scroll-animate stagger-${(index % 6) + 1}`}
                >
                  <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {equipment.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF6B35] transition-colors duration-300 mb-2">
                    {equipment.name}
                  </h3>
                  <p className="text-sm text-gray-300">{equipment.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#E8E4C9]/30 py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-[#1B120A]">Access Our Equipment</h2>
            <Link href="/contact">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-3 btn-animate hover-lift">
                Book Equipment
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
