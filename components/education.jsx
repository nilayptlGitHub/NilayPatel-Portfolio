"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

const educationHistory = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "Chandubhai S Patel Institute of Technology, CHARUSAT",
    period: "2022 - 2026",
    achievements: ["CGPA: 9.27/10.0"],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Gujarat Secondary and Higher Secondary Education Board",
    period: "2020 - 2022",
    achievements: ["Percentage(PCM): 82.33%"],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Gujarat Secondary and Higher Secondary Education Board",
    period: "2019 - 2020",
    achievements: ["Percentage: 86.00%"],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>

            {educationHistory.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                <div className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full p-2 z-10">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Card className={`w-full md:w-1/2 rounded-md ${index % 2 === 0 ? "rounded-s-none" : "rounded-r-none"}`}>
                    <CardHeader>
                      <CardTitle>{edu.degree}</CardTitle>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-muted-foreground mt-2">{edu.institution}</span>
                      </div>
                      <Badge variant="outline" className="mt-2 px-3 py-0.5 w-fit">{edu.period}</Badge>
                    </CardHeader>
                    <CardContent className="-mt-8">
                      {/* <p className="mb-4 text-muted-foreground">{edu.description}</p> */}
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <Badge key={i} variant="secondary" className="px-3 py-0.5 text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

