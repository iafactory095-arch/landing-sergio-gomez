"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Plus, X } from "lucide-react"
import { createPortal } from "react-dom"

type GalleryImage = {
  src: string
  title: string
}

const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/sonrisa_modelo.jpeg", title: "Caso clínico 1" },
  { src: "/images/sonrisa_modelo_hombre.jpeg", title: "Caso clínico 2" },
  { src: "/images/sonrisa_modelo_hombre2.jpeg", title: "Caso clínico 3" },
  { src: "/images/foto_despues.jpeg", title: "Caso clínico 4" },
  { src: "/images/despues_1.jpeg", title: "Resultado del tratamiento" },
  { src: "/images/galeria.jpeg", title: "Galería 1" },
  { src: "/images/galeria2.jpeg", title: "Galería 2" },
  { src: "/images/galeria3.jpeg", title: "Galería 3" },
  { src: "/images/galeria4.jpeg", title: "Galería 4" },
  { src: "/images/galeria5.jpeg", title: "Galería 5" },
  { src: "/images/galeria6.jpeg", title: "Galería 6" },
  { src: "/images/galeria7.jpeg", title: "Galería 7" },
]

export function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [currentIndex])

  const prevImage = () => {
    setCurrentIndex((i) => (i === null ? i : i === 0 ? GALLERY_IMAGES.length - 1 : i - 1))
  }

  const nextImage = () => {
    setCurrentIndex((i) => (i === null ? i : (i + 1) % GALLERY_IMAGES.length))
  }

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="grid grid-cols-2 gap-[1px] bg-slate-200 md:grid-cols-4 lg:grid-cols-6">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.src + i}
              className="group relative w-full h-full aspect-square overflow-hidden cursor-pointer"
              onClick={() => setCurrentIndex(i)}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                priority={i < 2}
                className="w-full h-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Plus className="h-10 w-10 text-white" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {mounted && currentIndex !== null && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setCurrentIndex(null)}
        >
          <div
            className="relative flex flex-col max-w-[90vw] md:max-w-5xl max-h-[90vh] items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[currentIndex].src}
                alt={GALLERY_IMAGES[currentIndex].title}
                width={1920}
                height={1080}
                className="max-h-[75vh] w-auto object-contain"
                sizes="90vw"
              />
            </div>

            <div className="mt-3 flex w-full justify-between items-center text-sm font-medium text-white/70">
              <span>{GALLERY_IMAGES[currentIndex].title}</span>
              <span>{currentIndex + 1}/{GALLERY_IMAGES.length}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setCurrentIndex(null)}
            aria-label="Cerrar"
            className="absolute top-6 right-6 z-[60] text-white hover:text-gray-300 text-4xl cursor-pointer p-2"
          >
            <X className="h-7 w-7" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setCurrentIndex((prev) =>
                prev === null || prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1
              )
            }}
            aria-label="Imagen anterior"
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-[60] text-white hover:text-gray-300 text-5xl cursor-pointer p-2"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setCurrentIndex((prev) =>
                prev === null ? 0 : (prev + 1) % GALLERY_IMAGES.length
              )
            }}
            aria-label="Imagen siguiente"
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-[60] text-white hover:text-gray-300 text-5xl cursor-pointer p-2"
          >
            ›
          </button>
        </div>,
        document.body
      )}
    </>
  )
}