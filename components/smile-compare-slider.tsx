"use client"

import Image from "next/image"
import { useCallback, useRef, useState } from "react"


type SmileCompareSliderProps = {
  beforeSrc?: string
  afterSrc?: string
  altBefore?: string
  altAfter?: string
}

export function SmileCompareSlider({
  beforeSrc = "/images/smile-before.png",
  afterSrc = "/images/smile-after.png",
  altBefore = "Sonrisa antes del diseño de sonrisa",
  altAfter = "Sonrisa después del diseño de sonrisa",
}: SmileCompareSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
   const [position, setPosition] = useState(50)

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, x)))
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => updatePosition(e.clientX)}
       onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
      className="group relative aspect-[16/9] w-full touch-none select-none overflow-hidden rounded-sm sm:aspect-[21/9]"
    >
      {/* After image (full, base layer) */}
      <Image
        src={afterSrc}
        alt={altAfter}
        fill
        priority
        draggable={false}
        className="pointer-events-none object-cover"
        sizes="(min-width: 768px) 80vw, 100vw"
      />

      {/* Before image, clipped to the left of the divider */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={altBefore}
          fill
          priority
          draggable={false}
          className="object-cover"
          sizes="(min-width: 768px) 80vw, 100vw"
        />
      </div>

      {/* Divider line */}
      <div
        className="pointer-events-none absolute inset-y-0 w-[2px] bg-primary-foreground shadow-[0_0_0_1px_oklch(0.58_0.19_245/0.5)]"
        style={{ left: `${position}%` }}
      ></div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-sm bg-foreground/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-sm">
        Antes
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-sm bg-primary/85 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-sm">
        Después
      </span>

      <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-sm bg-background/85 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-foreground/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        Mueve el mouse para comparar
      </span>
    </div>
  )
}
