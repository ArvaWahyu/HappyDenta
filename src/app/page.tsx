"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  Search, Sparkles, Heart, Scissors, Sun,
  Activity, Smile, Star, Baby, Clock,
  MapPin, Phone, Menu, X
} from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useState, useCallback, useEffect } from "react"

const services = [
  {
    icon: Search,
    title: "Pemeriksaan dan Konsultasi Gigi",
    description: "Konsultasi dengan dokter gigi profesional untuk mengetahui kondisi kesehatan gigi Anda."
  },
  {
    icon: Sparkles,
    title: "Pembersihan Karang Gigi (Scaling)",
    description: "Menghilangkan karang gigi untuk mencegah masalah gusi dan menjaga kebersihan mulut."
  },
  {
    icon: Heart,
    title: "Penambalan Gigi",
    description: "Memperbaiki gigi berlubang dengan bahan tambalan berkualitas tinggi."
  },
  {
    icon: Scissors,
    title: "Pencabutan Gigi",
    description: "Prosedur pencabutan gigi yang aman dan nyaman."
  },
  {
    icon: Sun,
    title: "Pemutihan Gigi (Teeth Whitening)",
    description: "Memutihkan gigi secara profesional untuk senyum yang lebih cerah."
  },
  {
    icon: Activity,
    title: "Perawatan Saluran Akar (Root Canal Treatment)",
    description: "Menyelamatkan gigi yang terinfeksi dengan perawatan saluran akar."
  },
  {
    icon: Smile,
    title: "Pemasangan Gigi Tiruan (Gigi Palsu)",
    description: "Solusi pengganti gigi yang hilang dengan gigi tiruan yang nyaman."
  },
  {
    icon: Star,
    title: "Orthodonti (Behel/Gigi Kawat)",
    description: "Merapikan susunan gigi dengan perawatan orthodonti modern."
  },
  {
    icon: Baby,
    title: "Perawatan Gigi Anak",
    description: "Perawatan khusus untuk kesehatan gigi anak-anak."
  }
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setActiveSlide(api.selectedScrollSnap())
    })
  }, [api])

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api]
  )

  return (
    <div className="min-h-screen bg-white relative">
      {/* TODO: Replace with actual content */}
    </div>
  )
}
