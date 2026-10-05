"use client"

import { useEffect, useRef, useState } from "react"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  from?: "bottom" | "left" | "right"
}

export function Reveal({ children, className = "", delay = 0, from = "bottom" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hiddenTransform =
    from === "left" ? "-translate-x-8" : from === "right" ? "translate-x-8" : "translate-y-8"

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-x-0 translate-y-0 opacity-100" : `${hiddenTransform} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  )
}
