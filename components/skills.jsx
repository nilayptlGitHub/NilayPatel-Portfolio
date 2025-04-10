"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const technicalSkills = [
  { name: "JavaScript", level: 70 },
  { name: "React.js", level: 80 },
  { name: "Node.js", level: 60 },
  { name: "Python", level: 25 },
  { name: "Java", level: 40 },
  { name: "C/C++", level: 70 },
  { name: "HTML/CSS", level: 75 },
  { name: "SQL", level: 50 },
]

const softwareSkills = [
  { name: "Git/Github", level: 80 },
  { name: "AWS", level: 30 },
  { name: "Docker", level: 25 },
  { name: "Vercel", level: 60 },
  { name: "Figma", level: 50 },
  { name: "Postman", level: 90 },
]

const softSkills = [
  { name: "Problem Solving", level: 75 },
  { name: "Communication", level: 70 },
  { name: "Teamwork", level: 75 },
  { name: "Time Management", level: 85 },
  { name: "Leadership", level: 80 },
  { name: "Adaptability", level: 90 },
  { name: "Critical Thinking", level: 95 },
  { name: "Creativity", level: 85 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 py-4 gap-5">
              <TabsTrigger value="technical" className="ml-2 data-[state=active]:bg-primary rounded-md data-[state=active]:py-2 data-[state=active]:text-primary-foreground">Technical Skills</TabsTrigger>
              <TabsTrigger value="software" className="data-[state=active]:bg-primary rounded-md data-[state=active]:py-2 data-[state=active]:text-primary-foreground">Software Skills</TabsTrigger>
              <TabsTrigger value="soft" className="mr-2 data-[state=active]:bg-primary rounded-md data-[state=active]:py-2 data-[state=active]:text-primary-foreground">Soft Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="technical">
              <div className="grid md:grid-cols-2 gap-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{skill.name}</h3>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="software">
              <div className="grid md:grid-cols-2 gap-6">
                {softwareSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{skill.name}</h3>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="soft">
              <div className="grid md:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{skill.name}</h3>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

