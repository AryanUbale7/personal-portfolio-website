"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Hero />
          <About />
          <Skills />
          <Achievements />
          <Contact />
        </motion.div>
      </main>
    </div>
  )
}
