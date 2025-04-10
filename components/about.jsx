"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import UserImage from '../public/userImage.jpg'
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={UserImage}
                alt="Profile"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/20 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">I'm Nilay Patel, Computer Engineer</h3>
            <p className="mb-6 text-muted-foreground">
              I'm a passionate computer engineer with expertise in software development and problem solving. With a strong
              foundation in computer science principles, I specialize in frontend development and thrive on creating innovative, user-centric web applications.
              I've worked on various projects as a frontend developer, constantly expanding my skill set and embracing new technologies.
            </p>
            <p className="mb-8 text-muted-foreground">
                Alongside my technical expertise, I’m committed to strong leadership, collaborating with teams, and fostering positive working environments. 
                Whether facing complex problems or leading initiatives, I approach each challenge with determination and a focus on delivering impactful solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="rounded-md">
                <CardContent className="p-4 ">
                  <p className="font-medium">Name:</p>
                  <p className="text-muted-foreground">Nilay Patel</p>
                </CardContent>
              </Card>
              <Card className="rounded-md">
                <CardContent className="p-4">
                  <p className="font-medium">Email:</p>
                  <p className="text-muted-foreground">patelnilay2003@gmailcom</p>
                </CardContent>
              </Card>
              <Card className="rounded-md">
                <CardContent className="p-4">
                  <p className="font-medium">Location:</p>
                  <p className="text-muted-foreground">Gujarat, India</p>
                </CardContent>
              </Card>
              <Card className="rounded-md">
                <CardContent className="p-4">
                  <p className="font-medium">Availability:</p>
                  <p className="text-muted-foreground">Open to opportunities</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

