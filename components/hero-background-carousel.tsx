"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const SLIDES = [
  "/images/sonrisa_modelo.jpeg",
  "/images/mujer_modelo.jpeg",
  "/images/foto_despues.jpeg",
  "/images/sonrisa_modelo_hombre.jpeg",
]

export function HeroBackgroundCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="absolute inset-0">
      {SLIDES.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt=""
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}
      {/* Readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      <div className="absolute inset-0 bg-background/10" />
    </div>
  )
}
