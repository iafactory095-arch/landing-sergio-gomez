import Image from "next/image"

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo0.png"
      alt="Logo Dr. Sergio Gómez"
      width={48}
      height={64}
      className={`h-auto w-auto mb-6 ${className}`}
    />
  )
}

