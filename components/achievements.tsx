"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Building, Users } from "lucide-react"
import Image from "next/image"

export function Achievements() {
  const achievements = [
    {
      title: "Complete 2025 Python Bootcamp",
      organization: "Udemy",
      date: "July 26, 2025",
      type: "Course Completion",
      description: "Comprehensive Python programming course covering fundamentals to advanced concepts",
      image: "/certificates/udemy-python.png",
      icon: Award,
    },
    {
      title: "Full Stack Development Internship",
      organization: "Unified Mentor",
      date: "2025",
      type: "Internship Offer",
      description: "Selected for a 3-month full-stack development internship program",
      image: "/certificates/unified-mentor-offer.png",
      icon: Building,
    },
    {
      title: "Hack the Web: 24-Hour Challenge",
      organization: "Unstop (KK Computers)",
      date: "2025",
      type: "Hackathon",
      description: "Participated in 24-hour web development challenge as Team CodeCrafters",
      image: "/certificates/unstop-hackathon.png",
      icon: Users,
    },
    {
      title: "Data Visualization with Python",
      organization: "IBM (Cognitive Class)",
      date: "July 18, 2025",
      type: "Professional Certificate",
      description: "IBM certification in data visualization techniques using Python",
      image: "/certificates/ibm-data-viz.png",
      icon: Award,
    },
    {
      title: "Data Analysis with Python",
      organization: "IBM (Cognitive Class)",
      date: "July 18, 2025",
      type: "Professional Certificate",
      description: "Advanced data analysis techniques and methodologies using Python",
      image: "/certificates/ibm-data-analysis.png",
      icon: Award,
    },
    {
      title: "Cyber Job Simulation",
      organization: "Deloitte",
      date: "July 29, 2025",
      type: "Job Simulation",
      description: "Completed practical cybersecurity tasks and simulations",
      image: "/certificates/deloitte-cyber.png",
      icon: Award,
    },
    {
      title: "Risk Job Simulation",
      organization: "Goldman Sachs",
      date: "July 29, 2025",
      type: "Job Simulation",
      description: "Completed risk management and financial analysis simulations",
      image: "/certificates/goldman-sachs-risk.png",
      icon: Award,
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship Offer":
        return "bg-green-500"
      case "Hackathon":
        return "bg-purple-500"
      case "Professional Certificate":
        return "bg-blue-500"
      case "Job Simulation":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Achievements & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my professional development, certifications, and recognition in the field of technology and
            software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={achievement.image || "/placeholder.svg"}
                      alt={achievement.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`${getTypeColor(achievement.type)} text-white`}>{achievement.type}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {achievement.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-balance">{achievement.title}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{achievement.organization}</p>
                    <p className="text-sm text-muted-foreground text-pretty">{achievement.description}</p>
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
