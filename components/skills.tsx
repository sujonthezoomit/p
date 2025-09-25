'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, Server, Zap, Brain, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = {
  frontend: {
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React.js', level: 95, icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
      { name: 'Next.js', level: 90, icon: '▲', color: 'from-slate-800 to-slate-600' },
      { name: 'TypeScript', level: 88, icon: '🔷', color: 'from-blue-500 to-cyan-500' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨', color: 'from-cyan-400 to-teal-400' },
      { name: 'JavaScript', level: 95, icon: '📜', color: 'from-yellow-400 to-amber-400' },
      { name: 'HTML/CSS', level: 98, icon: '🌐', color: 'from-orange-500 to-red-500' }
    ]
  },
  backend: {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 93, icon: '🟢', color: 'from-green-500 to-emerald-500' },
      { name: 'Express.js', level: 90, icon: '🚀', color: 'from-gray-500 to-gray-700' },
      { name: 'MongoDB', level: 87, icon: '🍃', color: 'from-green-400 to-emerald-400' },
      { name: 'PostgreSQL', level: 85, icon: '🐘', color: 'from-blue-600 to-indigo-600' },
      { name: 'REST APIs', level: 95, icon: '🔗', color: 'from-cyan-500 to-teal-500' },
      { name: 'GraphQL', level: 80, icon: '📊', color: 'from-pink-500 to-purple-500' }
    ]
  },
  tools: {
    title: 'Tools & Others',
    icon: Rocket,
    skills: [
      { name: 'Git', level: 92, icon: '📚', color: 'from-orange-500 to-red-500' },
      { name: 'Docker', level: 78, icon: '🐳', color: 'from-blue-400 to-cyan-400' },
      { name: 'AWS', level: 75, icon: '☁️', color: 'from-amber-500 to-orange-500' },
      { name: 'Firebase', level: 85, icon: '🔥', color: 'from-yellow-500 to-orange-500' },
      { name: 'Jest', level: 80, icon: '🧪', color: 'from-red-400 to-pink-400' },
      { name: 'Figma', level: 70, icon: '🎯', color: 'from-purple-400 to-pink-400' }
    ]
  }
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge 
            variant="secondary" 
            className="mb-4 px-4 py-1.5 text-sm border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/50"
          >
            <Zap className="w-3 h-3 mr-2 text-cyan-600 dark:text-cyan-400" />
            TECHNICAL SKILLS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            My <span className="text-cyan-600 dark:text-cyan-400">Technical</span> Arsenal
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Mastering modern technologies to build scalable, performant applications 
            with clean code and best practices.
          </p>
        </motion.div>

        {/* Skills Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 p-1  pb-[49px] bg-slate-100 dark:bg-slate-800 rounded-2xl">
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger 
                  key={key}
                  value={key}
                  className="flex items-center gap-2 py-3  data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-cyan-600 dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-cyan-400 rounded-xl transition-all duration-300"
                >
                  <IconComponent className="w-4 h-4" />
                  {category.title}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Skills Content */}
          {Object.entries(skillCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200 dark:border-slate-700 overflow-hidden">
                      <div className={`h-1 bg-gradient-to-r ${skill.color}`} />
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="text-lg font-semibold text-slate-900 dark:text-white">
                              {skill.name}
                            </span>
                          </div>
                          <Badge 
                            variant="outline" 
                            className="bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700"
                          >
                            {skill.level}%
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <Progress 
                            value={skill.level} 
                            className="h-2 bg-slate-200 dark:bg-slate-700"
                          />
                          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                            <span>Beginner</span>
                            <span>Expert</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-800/30 dark:to-teal-950/30 border-cyan-200 dark:border-cyan-800 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-400/10 rounded-full translate-y-12 -translate-x-12" />
            
            <CardContent className="p-8 text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-100 dark:bg-cyan-900/50 mb-6">
                <Brain className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Continuous Learning Journey
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Technology never stands still, and neither do I. Currently expanding my expertise in 
                cutting-edge technologies to stay ahead of the curve and deliver innovative solutions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {['Python', 'Machine Learning', 'Kubernetes', 'Serverless', 'WebAssembly', 'AI/ML'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-cyan-200 dark:border-cyan-700"
                    >
                      <Rocket className="w-3 h-3 mr-2 text-cyan-600 dark:text-cyan-400" />
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "15+", label: "Technologies" },
            { number: "95%", label: "Average Skill" },
            { number: "3", label: "Categories" },
            { number: "∞", label: "Learning Capacity" }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}