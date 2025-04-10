"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Github, ExternalLink } from "lucide-react"
import Project1 from "../public/projecticon1.jpg"
import Project2 from "../public/charusat1.png"
import Project3 from "../public/project3.jpg"

const projects = [
  {
    title: "Progress Matrix",
    description:
      "A project for school teachers to manage and keep track of individual student results and get auto-generated Result-reports.",
    image: Project1,
    tags: ["React", "Node", "MySQL", "ReduxToolkit", "ChartJS", "PDF-js"],
    github: "https://github.com/bhavyaGP/StudentFlow",
    demo: "https://drive.google.com/file/d/1WiXgRdBA5mOWw5wJlWR21LIzW294a0uw/view?usp=drive_link",
  },
  {
    title: "Student Reporting System - for CHARUSAT university",
    description:
      "The Project Reporting System is a web-based platform designed to streamline the submission, evaluation, and tracking of student projects.",
    image: Project2,
    tags: ["Node","Express", "PostgreSQL","React", "Redux" , "Tailwind"],
    github: "https://github.com/nilayptlGitHub/8th-sem-reporting-live",
    demo: "http://117.239.83.200:8114/about",
  },
  {
    title: "ProjectPlus",
    description:
    "A web-based project for students of CHARUSAT to collaboratively work on a project, along with guidance from faculty. Students can share their project ideas and form a team to develop those ideas.",    
    image: Project3,
    tags: ["Node", "Express", "Postgres", "React", "Redux", "Tailwind"],
    github: "https://github.com/nilayptlGitHub/ProjectPlus-frontend",
    demo: "https://github.com/nilayptlGitHub/ProjectPlus-frontend",
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={containerVariants}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <div */}
          {/* > */}
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          {/* </div> */}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col rounded-md">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader className="-mb-5">
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="px-3 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

