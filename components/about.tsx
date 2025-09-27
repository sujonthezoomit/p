"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Lightbulb, Users, Zap, Briefcase, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing scalable, maintainable code following best practices and modern standards.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical approach to challenges with structured, efficient solutions.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Effective communication and teamwork in cross-functional environments.",
  },
  {
    icon: Zap,
    title: "Fast Learning",
    description: "Quickly adapting to new technologies and frameworks through continuous learning.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/50">
            <Target className="w-3 h-3 mr-2 text-cyan-600 dark:text-cyan-400" />
            ABOUT ME
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Crafting Digital Experiences with{" "}
            <span className="text-cyan-600 dark:text-cyan-400">Precision</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I,m a <strong className="text-cyan-600 dark:text-cyan-400">MERN Stack Developer</strong> with 6 months of professional experience, 
            passionate about building modern, scalable web applications. I specialize in{" "}
            <strong className="text-cyan-600 dark:text-cyan-400">React.js, Next.js, and Node.js</strong>, 
            delivering clean, efficient code that brings ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Content - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Experience Card */}
            <Card className="border-cyan-200 dark:border-cyan-800 shadow-sm bg-gradient-to-r from-cyan-50 to-transparent dark:from-cyan-950/20 dark:to-transparent">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-600 flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">6+ Months</div>
                    <div className="text-slate-600 dark:text-slate-300">Professional Experience</div>
                    <div className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mt-1">
                      <Rocket className="w-3 h-3 inline mr-1" />
                      Ready for new challenges
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2 text-slate-900 dark:text-white">
                <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                My Journey
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Over the past 6 months, I,ve immersed myself in professional web development, 
                working on real-world projects that have honed my skills in both frontend and backend technologies.
                I,ve collaborated with teams to deliver solutions that meet client requirements and performance standards.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                My focus is on building responsive, user-friendly applications that provide seamless experiences 
                while maintaining code quality and scalability.
              </p>
              
              {/* Technologies List */}
              <div>
                <h4 className="font-semibold mb-3 text-lg text-slate-900 dark:text-white">Technologies I Work With:</h4>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JavaScript", "TypeScript", "Tailwind CSS", "Ant Design"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1 bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-cyan-100 dark:border-cyan-900 hover:border-cyan-300 dark:hover:border-cyan-700">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900 mb-4 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800 transition-colors">
                      <highlight.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{highlight.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "6+", label: "Months Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "15+", label: "Technologies" },
            { number: "100%", label: "Dedication" }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 border-cyan-100 dark:border-cyan-900 bg-cyan-50/50 dark:bg-cyan-950/20">
              <CardContent className="p-0">
                <div className="text-2xl md:text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}