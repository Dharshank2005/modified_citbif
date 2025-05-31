"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navItems = [
  { name: "HOME", href: "/" },
  //{ name: "ABOUT", href: "/about" },
  { name: "MONEY", href: "/money" },
  //{ name: "MACHINERIES", href: "/machineries" },
  //{ name: "MARKET", href: "/market" },
  { name: "MENTOR", href: "/mentor" },
  { name: "MORE", href: "/more" },
  //{ name: "GALLERY", href: "/gallery" },
  { name: "OUR STARTUPS", href: "/startups" },
  //{ name: "CONTACT", href: "/contact" },
  { name: "IN-CUBATE", href: "/incubate" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-sm border-b border-[#3a3a3a] animate-slide-up">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center animate-slide-in-left">
          <div className="relative">
            <Image
              src="/company6.jpg"
              alt="CITIL Logo"
              width={120}
              height={40}
              className="h-10 w-auto transition-transform duration-300 hover:scale-110"
              priority
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg?height=40&width=120"
              }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 animate-slide-in-right">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-all duration-300 hover:scale-110 relative group stagger-${index + 1} ${
                item.name === "IN-CUBATE"
                  ? "bg-[#FFB347] text-[#1B120A] px-4 py-2 rounded-lg nav-highlight font-bold hover:bg-[#FFB347]/90"
                  : pathname === item.href
                    ? "text-[#FFB347]"
                    : "text-white hover:text-[#FFB347]"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
              {item.name !== "IN-CUBATE" && (
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#FFB347] transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white hover:bg-[#FFB347]/20 transition-all duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1a1a1a]/95 backdrop-blur-sm border-t border-[#3a3a3a] animate-slide-down">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-sm font-medium transition-all duration-300 hover:scale-105 py-2 px-4 rounded-lg ${
                  item.name === "IN-CUBATE"
                    ? "bg-[#FFB347] text-[#1B120A] font-bold"
                    : pathname === item.href
                      ? "text-[#FFB347] bg-[#FFB347]/10"
                      : "text-white hover:text-[#FFB347] hover:bg-[#FFB347]/10"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
