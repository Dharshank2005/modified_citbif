"use client"

import { Rocket, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import PageTransition from "@/components/page-transition"

export default function Incubate() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] text-gray-800 overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#FFB347]/30 to-[#E8E4C9]/30 overflow-hidden py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1B120A] animate-slide-in-left mb-6">
              START YOUR <span className="text-[#FF6B35] text-shimmer">INCUBATION</span>
            </h1>
            <p className="text-xl text-[#1B120A] max-w-3xl mx-auto animate-slide-in-right mb-8">
              Transform your innovative ideas into successful businesses with our comprehensive incubation program
            </p>
            <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-4 text-lg btn-animate hover-lift group">
              Apply Now
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Incubation Process */}
        <section className="bg-[#FFB347]/10 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Incubation Journey</h2>
              <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
              <p className="text-[#1B120A] mt-4 max-w-2xl mx-auto">
                From idea to market-ready business in 12-18 months
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Application & Screening",
                  desc: "Submit your innovative idea and business plan through our online portal",
                  duration: "2 weeks",
                  details: "Initial screening, documentation review, eligibility check",
                },
                {
                  step: "02",
                  title: "Evaluation & Pitch",
                  desc: "Present your idea to our expert panel and investment committee",
                  duration: "3 weeks",
                  details: "Pitch presentation, technical evaluation, market assessment",
                },
                {
                  step: "03",
                  title: "Incubation Program",
                  desc: "12-month intensive program with mentorship and resources",
                  duration: "12 months",
                  details: "Mentorship, funding, workspace, technical support",
                },
                {
                  step: "04",
                  title: "Market Launch",
                  desc: "Graduate as a market-ready business with ongoing support",
                  duration: "Ongoing",
                  details: "Market entry, scaling support, alumni network access",
                },
              ].map((process, index) => (
                <div key={index} className={`text-center scroll-animate stagger-${index + 1}`}>
                  <div className="bg-[#1B120A] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#FF6B35] hover:scale-110 transition-transform duration-300 group">
                    <span className="text-[#FF6B35] font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B120A] mb-2">{process.title}</h3>
                  <p className="text-[#1B120A]/80 mb-2">{process.desc}</p>
                  <div className="text-sm text-[#FF6B35] font-medium mb-2">Duration: {process.duration}</div>
                  <p className="text-xs text-[#1B120A]/60">{process.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="bg-[#E8E4C9]/30 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Program Benefits</h2>
              <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Seed Funding",
                  icon: "💰",
                  desc: "Up to ₹50 lakhs in seed funding for promising startups",
                  details: "Equity-based investment, milestone-based disbursement",
                },
                {
                  name: "Expert Mentorship",
                  icon: "🧠",
                  desc: "One-on-one guidance from industry experts and successful entrepreneurs",
                  details: "Weekly sessions, domain expertise, strategic guidance",
                },
                {
                  name: "State-of-art Infrastructure",
                  icon: "🏢",
                  desc: "Access to modern workspace, labs, and cutting-edge equipment",
                  details: "Co-working space, meeting rooms, high-speed internet",
                },
                {
                  name: "Technical Support",
                  icon: "⚙️",
                  desc: "Access to advanced technology, R&D facilities, and technical expertise",
                  details: "Lab access, prototyping support, technical consultancy",
                },
                {
                  name: "Market Access",
                  icon: "🌐",
                  desc: "Connect with potential customers, partners, and global markets",
                  details: "Customer introductions, partnership facilitation, export support",
                },
                {
                  name: "Legal & Compliance",
                  icon: "⚖️",
                  desc: "Complete legal support including IP protection and compliance",
                  details: "Patent filing, legal documentation, regulatory compliance",
                },
                {
                  name: "Business Development",
                  icon: "📈",
                  desc: "Strategic business planning and growth acceleration support",
                  details: "Business model refinement, go-to-market strategy",
                },
                {
                  name: "Networking Opportunities",
                  icon: "🤝",
                  desc: "Access to extensive network of investors, partners, and alumni",
                  details: "Investor meetups, industry events, peer networking",
                },
                {
                  name: "Follow-on Funding",
                  icon: "🚀",
                  desc: "Support in raising subsequent funding rounds from VCs and angels",
                  details: "Investor introductions, pitch deck preparation, due diligence",
                },
              ].map((offer, index) => (
                <div
                  key={index}
                  className={`bg-[#1B120A] p-6 rounded-xl border border-[#FFB347]/50 hover:border-[#FF6B35] transition-all duration-500 group shadow-md card-hover hover-lift scroll-animate stagger-${(index % 6) + 1}`}
                >
                  <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {offer.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF6B35] transition-colors duration-300 mb-3">
                    {offer.name}
                  </h3>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-3">
                    {offer.desc}
                  </p>
                  <p className="text-xs text-[#FFB347] group-hover:text-white transition-colors duration-300">
                    {offer.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="bg-[#FFB347]/10 py-20 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B120A] text-shimmer">Eligibility Criteria</h2>
              <div className="w-20 h-1 bg-[#FF6B35] mx-auto animate-scale-in"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1B120A] p-8 rounded-xl border border-[#FFB347]/50 shadow-lg card-hover hover-lift">
                <h3 className="text-xl font-bold text-[#FF6B35] mb-6">Who Can Apply?</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="text-[#FF6B35] mr-2">✓</span>
                    Early-stage startups with innovative technology solutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B35] mr-2">✓</span>
                    Students and faculty with entrepreneurial ideas
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B35] mr-2">✓</span>
                    Entrepreneurs with scalable business models
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B35] mr-2">✓</span>
                    Deep-tech focused innovations (AI/ML, IoT, Biotech, etc.)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B35] mr-2">✓</span>
                    Sustainable and socially impactful ventures
                  </li>
                </ul>
              </div>

              <div className="bg-[#1B120A] p-8 rounded-xl border border-[#FFB347]/50 shadow-lg card-hover hover-lift">
                <h3 className="text-xl font-bold text-[#FF6B35] mb-6">Required Documents</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="text-[#FF6B35] mr-2">•</span>
                    Detailed business plan and executive summary
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B35] mr-2">•</span>
                    Proof of concept or prototype demonstration
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B35] mr-2">•</span>
                    Team member profiles and resumes
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B35] mr-2">•</span>
                    Market research and competitive analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B35] mr-2">•</span>
                    Financial projections and funding requirements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Application Form */}
        <section className="bg-[#E8E4C9]/30 py-20 scroll-animate">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-[#1B120A] p-8 rounded-xl border border-[#FFB347]/50 shadow-lg">
              <h3 className="text-3xl font-bold mb-8 text-[#FF6B35] text-center">Apply for Incubation Program</h3>

              <form className="space-y-8">
                {/* Startup Information */}
                <div className="border-b border-[#FFB347]/30 pb-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Startup Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Startup Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                        placeholder="Your Startup Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Industry Sector *</label>
                      <select
                        required
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                      >
                        <option value="">Select Sector</option>
                        <option>Artificial Intelligence/Machine Learning</option>
                        <option>Internet of Things (IoT)</option>
                        <option>Biotechnology</option>
                        <option>Clean Energy & Sustainability</option>
                        <option>Healthcare Technology</option>
                        <option>Fintech</option>
                        <option>Edtech</option>
                        <option>Agritech</option>
                        <option>Manufacturing Technology</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Stage of Development *</label>
                      <select
                        required
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                      >
                        <option value="">Select Stage</option>
                        <option>Idea Stage</option>
                        <option>Prototype Development</option>
                        <option>MVP Ready</option>
                        <option>Early Revenue</option>
                        <option>Scaling</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Funding Required</label>
                      <select className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300">
                        <option value="">Select Range</option>
                        <option>₹5L - ₹15L</option>
                        <option>₹15L - ₹30L</option>
                        <option>₹30L - ₹50L</option>
                        <option>₹50L+</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Founder Information */}
                <div className="border-b border-[#FFB347]/30 pb-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Founder Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Founder Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                        placeholder="Primary Founder Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Contact Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                        placeholder="founder@startup.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Educational Background</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                        placeholder="Degree, Institution"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Details */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Business Details</h4>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Business Description *</label>
                      <textarea
                        rows={4}
                        required
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white resize-none transition-all duration-300"
                        placeholder="Describe your business idea, innovation, and value proposition in detail..."
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Problem Statement *</label>
                      <textarea
                        rows={3}
                        required
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white resize-none transition-all duration-300"
                        placeholder="What problem are you solving? Who is your target market?"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Unique Solution *</label>
                      <textarea
                        rows={3}
                        required
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white resize-none transition-all duration-300"
                        placeholder="How is your solution different from existing alternatives?"
                      ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Team Size</label>
                        <select className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300">
                          <option value="">Select Team Size</option>
                          <option>1-2 members</option>
                          <option>3-5 members</option>
                          <option>6-10 members</option>
                          <option>10+ members</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Expected Timeline</label>
                        <select className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300">
                          <option value="">Select Timeline</option>
                          <option>6 months</option>
                          <option>12 months</option>
                          <option>18 months</option>
                          <option>24 months</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* File Uploads */}
                <div className="border-t border-[#FFB347]/30 pt-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Supporting Documents</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Business Plan (PDF)</label>
                      <input
                        type="file"
                        accept=".pdf"
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Pitch Deck (PDF/PPT)</label>
                      <input
                        type="file"
                        accept=".pdf,.ppt,.pptx"
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#FFB347]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-white transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="border-t border-[#FFB347]/30 pt-6">
                  <div className="flex items-start mb-6">
                    <input type="checkbox" id="terms" required className="mr-3 mt-1" />
                    <label htmlFor="terms" className="text-sm text-gray-300">
                      I agree to the terms and conditions of the CITIL incubation program and consent to the processing
                      of my personal data for evaluation purposes. I understand that this application does not guarantee
                      acceptance into the program.
                    </label>
                  </div>

                  <div className="flex items-center mb-6">
                    <input type="checkbox" id="updates" className="mr-3" />
                    <label htmlFor="updates" className="text-sm text-gray-300">
                      I would like to receive updates about CITIL programs and opportunities
                    </label>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFB347] hover:from-[#FF6B35]/90 hover:to-[#FFB347]/90 text-white py-4 text-lg font-semibold btn-animate hover-lift group">
                    Submit Application
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
