"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Frontend Developer",
    company: "Charusat University",
    period: "March 2024 - April 2025",
    description:
      "Worked as a frontend developer for university project under mentorship of Prof. Ronak Patel, developed web-based platform that digitizes and streamlines the entire student project workflow, from submission to evaluation and performance tracking. ",
    skills: ["React", "Redux" , "Tailwind","Router"],
  },
  {
    title: "Technology Training in React js",
    company: "BrainyBeam Technologies Pvt Ltd",
    period: "May,2024 - june,2024",
    description:
      "Obtained Basic to intermediate level of knowledge and hands on experience in ReactJs with industry standards and experties.",
    skills: ["JavaScript", "HTML", "CSS", "Bootstrap", "ReactJs"],
  },
  {
    title: "Software Engineer Intern",
    company: "Azilen Technologies Pvt Ltd",
    period: "January,2026 - june,2026",
    description:
      "Obained industry level training on core software engineer fundamentals, hands on experience on enterprise level project on .NET and Angular tech.",
    skills: [".NET","Angular","Postgres","Linux"],
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border "></div>

            {experiences.map((exp, index) => (
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
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full p-2">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Card className={`w-full md:w-1/2 rounded-md ${index % 2 === 0 ? "rounded-s-none" : "rounded-r-none"}`}>
                    <CardHeader>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-muted-foreground">{exp.company}</span>
                        <Badge variant="outline" className="text-xs p-1 px-2 mt-2">{exp.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-muted-foreground text-sm">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="px-3 py-0.5 text-xs">
                            {skill}
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

