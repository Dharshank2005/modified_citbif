"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-[#FFB347] to-[#E8E4C9] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-[#FF6B35]/20 rounded-full"></div>
          <div
            className="absolute inset-0 border-4 border-[#FF6B35] rounded-full border-t-transparent animate-spin"
            style={{ animationDuration: "1s" }}
          ></div>
          <div className="absolute inset-4 bg-[#1B120A] rounded-full flex items-center justify-center">
            <span className="text-[#FF6B35] font-bold text-xl">{progress}%</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#1B120A] mb-4 animate-pulse">Loading...</h2>
        <div className="w-64 h-2 bg-[#1B120A]/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FFB347] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
