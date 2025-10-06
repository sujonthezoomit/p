"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Lightbulb, Users, Zap, Briefcase, Target } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Maintainable and scalable code.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical and creative thinking.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Strong teamwork and communication.",
  },
  {
    icon: Zap,
    title: "Fast Learning",
    description: "Quick to learn new technologies.",
  },
];

const technologies = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Redux",
  "REST API",
  "Git",
  "Vercel",
  "Firebase",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-12 md:py-24  bg-gradient-to-b from-white to-cyan-50 dark:from-slate-950 dark:to-cyan-950/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-3 py-1 text-sm border-cyan-300 dark:border-cyan-700 bg-cyan-100/70 dark:bg-cyan-900/40 text-cyan-800 dark:text-cyan-200"
          >
            <Target className="w-3 h-3 mr-1.5" />
            ABOUT ME
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white mb-7 dark:to-slate-300 bg-clip-text text-transparent">
            MERN Stack Developer
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Passionate MERN Stack Developer with 6+ months of experience
            building fast, scalable, and responsive web applications using
            React.js, Next.js, and Node.js.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Experience Card */}
            <Card className="border-none shadow-md bg-gradient-to-r from-cyan-600 to-cyan-800 dark:from-cyan-700 dark:to-cyan-900 text-white">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold">6+ Months</div>
                  <div className="text-cyan-100 text-sm">Experience</div>
                </div>
              </CardContent>
            </Card>

            {/* Journey Section */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-cyan-100 dark:border-cyan-900">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-slate-900 dark:text-white">
                <Zap className="w-4 h-4 text-cyan-900 dark:text-cyan-400" />
                My Development Journey
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                I started with small React projects and evolved into full-stack
                development. Over time, I’ve built real-world applications,
                mastering both frontend and backend while focusing on
                performance, clean design, and seamless user experience.
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold mb-3 text-base text-slate-900 dark:text-white">
                Technologies I Use
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-2 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 border border-cyan-200 dark:border-cyan-800 hover:bg-cyan-200 dark:hover:bg-cyan-800/60 transition text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-3">
            {highlights.map((item, i) => (
              <Card
                key={i}
                className="group border border-cyan-100 dark:border-cyan-800 hover:border-cyan-400 dark:hover:border-cyan-600 bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md p-3"
              >
                <CardContent className="p-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900 mb-2 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800 transition-colors">
                    <item.icon className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-sm font-semibold mb-1 text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 max-w-[500px] max-h-[500px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    </section>
  );
}
