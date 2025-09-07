"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "JavaScript", "SQL"],
      color: "bg-blue-500",
    },
    {
      title: "Web Development",
      skills: ["React", "HTML/CSS", "Node.js", "TailwindCSS"],
      color: "bg-green-500",
    },
    {
      title: "DSA & Problem Solving",
      skills: ["DSA in C++", "Algorithms", "Problem Solving", "Competitive Programming"],
      color: "bg-purple-500",
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
      color: "bg-orange-500",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Here are the technologies and skills I've developed through my studies, projects, and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-4 h-4 rounded-full ${category.color} mr-3`} />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="secondary" className="text-sm py-1 px-3">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
