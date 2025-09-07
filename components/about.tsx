"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Database, Trophy } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "2nd Year IT Student at Mumbai University",
    },
    {
      icon: Code,
      title: "Programming",
      description: "Proficient in C++, Python, and Web Development",
    },
    {
      icon: Database,
      title: "Data Skills",
      description: "Data Analysis, Visualization, and SQL",
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "Multiple certifications and internship offers",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            I'm a passionate Information Technology student with a strong foundation in programming and data analysis.
            Currently pursuing my degree at Mumbai University, I'm dedicated to building innovative solutions and
            continuously expanding my technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-pretty">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
