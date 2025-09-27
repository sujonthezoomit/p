'use client';

import { useState, useMemo, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code2, 
  Server, 
  Zap, 
  Brain, 
  Rocket, 
  Sparkles, 
  Target, 
  Layers,
  Cpu,
  Database,
  Cloud,
  GitBranch
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Types for better type safety
interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<any>;
  color: string;
  skills: Skill[];
}

interface StatItem {
  number: string;
  label: string;
  icon: React.ComponentType<any>;
}

// Constants with cyan color theme
const SKILL_CATEGORIES: Record<string, SkillCategory> = {
  frontend: {
    title: 'Frontend Development',
    icon: Code2,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'React.js', level: 95, icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
      { name: 'Next.js', level: 90, icon: '▲', color: 'from-cyan-600 to-blue-600' },
      { name: 'TypeScript', level: 88, icon: '🔷', color: 'from-cyan-400 to-blue-400' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨', color: 'from-cyan-300 to-teal-400' },
      { name: 'JavaScript', level: 95, icon: '📜', color: 'from-cyan-400 to-cyan-600' },
      { name: 'HTML/CSS', level: 98, icon: '🌐', color: 'from-cyan-500 to-teal-500' }
    ]
  },
  backend: {
    title: 'Backend Development',
    icon: Server,
    color: 'from-cyan-600 to-teal-500',
    skills: [
      { name: 'Node.js', level: 93, icon: '🟢', color: 'from-cyan-500 to-emerald-500' },
      { name: 'Express.js', level: 90, icon: '🚀', color: 'from-cyan-400 to-blue-400' },
      { name: 'MongoDB', level: 87, icon: '🍃', color: 'from-cyan-300 to-green-400' },
      { name: 'PostgreSQL', level: 85, icon: '🐘', color: 'from-cyan-500 to-indigo-400' },
      { name: 'REST APIs', level: 95, icon: '🔗', color: 'from-cyan-400 to-cyan-600' },
      { name: 'GraphQL', level: 80, icon: '📊', color: 'from-cyan-300 to-purple-400' }
    ]
  },
  infrastructure: {
    title: 'Infrastructure & Tools',
    icon: Cpu,
    color: 'from-cyan-500 to-teal-600',
    skills: [
      { name: 'Git', level: 92, icon: '📚', color: 'from-cyan-400 to-cyan-600' },
      { name: 'Docker', level: 78, icon: '🐳', color: 'from-cyan-300 to-blue-400' },
      { name: 'AWS', level: 75, icon: '☁️', color: 'from-cyan-400 to-cyan-600' },
      { name: 'Firebase', level: 85, icon: '🔥', color: 'from-cyan-300 to-orange-400' },
      { name: 'Jest', level: 80, icon: '🧪', color: 'from-cyan-400 to-pink-400' },
      { name: 'CI/CD', level: 82, icon: '⚡', color: 'from-cyan-500 to-purple-500' }
    ]
  }
};

const FUTURE_TECHNOLOGIES = [
  'AI & Machine Learning',
  'Cloud Architecture', 
  'Microservices',
  'Serverless Computing',
  'WebAssembly',
  'Real-time Systems'
];

const STATISTICS: StatItem[] = [
  { number: "18+", label: "Technologies", icon: Sparkles },
  { number: "89%", label: "Proficiency", icon: Target },
  { number: "3", label: "Expertise Areas", icon: Layers },
  { number: "5+", label: "Years Experience", icon: Rocket }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.3
    }
  })
};

export default function ProfessionalSkillsSection() {
  const [activeTab, setActiveTab] = useState<string>('frontend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const averageProficiency = useMemo(() => {
    const allSkills = Object.values(SKILL_CATEGORIES).flatMap(category => category.skills);
    const total = allSkills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / allSkills.length);
  }, []);

  const handleTabChange = useCallback((value: string) => {
    setActiveTab(value);
  }, []);

  const handleSkillHover = useCallback((skillName: string | null) => {
    setHoveredSkill(skillName);
  }, []);

  const currentCategory = SKILL_CATEGORIES[activeTab];

  return (
    <section 
      id="skills" 
      className="py-24 container mx-auto dark:via-slate-900 dark:to-cyan-950/30"
      aria-label="Technical Skills Section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 border border-cyan-200/50 dark:border-cyan-800/50"
          >
            <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
              TECHNICAL EXPERTISE
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Professional
            <span className="block mt-2 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise in modern web technologies, software architecture, 
            and development methodologies to deliver robust, scalable solutions.
          </p>
        </motion.header>

        {/* Skills Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 gap-4 p-2 pb-14 bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
              {Object.entries(SKILL_CATEGORIES).map(([key, category]) => {
                const IconComponent = category.icon;
                return (
                  <TabsTrigger 
                    key={key}
                    value={key}
                    className="flex items-center gap-3 py-2 px-6 rounded-xl text-slate-700 dark:text-slate-300 data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-cyan-600 dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-cyan-400 transition-all duration-300 font-semibold hover:text-cyan-500 dark:hover:text-cyan-300"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} shadow-md`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    {category.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Skills Grid */}
            <AnimatePresence mode="wait">
              <TabsContent key={activeTab} value={activeTab} className="mt-12">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {currentCategory.skills.map((skill, index) => (
                    <motion.div
                      key={`${activeTab}-${skill.name}`}
                      // @ts-expect-error
                      variants={itemVariants}
                      custom={index}
                    >
                      <SkillCard 
                        skill={skill}
                        index={index}
                        isHovered={hoveredSkill === skill.name}
                        onHover={handleSkillHover}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </motion.div>

        {/* Continuous Learning Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-cyan-50/80 via-white to-blue-50/80 dark:from-cyan-950/30 dark:via-slate-900 dark:to-blue-950/20 backdrop-blur-sm shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-200/20 via-transparent to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full translate-y-24 -translate-x-24" />
            
            <CardContent className="relative p-12 z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg mb-8"
                  >
                    <Brain className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                    Continuous Innovation
                  </h2>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                    Committed to staying at the forefront of technology through continuous learning 
                    and adoption of emerging trends and best practices in software development.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {FUTURE_TECHNOLOGIES.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          className="px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Cloud className="w-4 h-4 mr-2 text-cyan-600 dark:text-cyan-400" />
                          <span className="font-medium text-slate-700 dark:text-slate-200">{tech}</span>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Database, label: 'Database Design', value: 'Advanced' },
                    { icon: GitBranch, label: 'Version Control', value: 'Expert' },
                    { icon: Cloud, label: 'Cloud Platforms', value: 'Proficient' },
                    { icon: Cpu, label: 'System Architecture', value: 'Advanced' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                      className="p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-cyan-200/30 dark:border-cyan-700/30 hover:border-cyan-300/50 dark:hover:border-cyan-600/50 transition-colors duration-300"
                    >
                      <item.icon className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mb-2" />
                      <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                        {item.label}
                      </div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Statistics Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATISTICS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-cyan-50/80 dark:from-slate-800/80 dark:to-cyan-950/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="relative p-6 text-center z-10">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/50 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/50 transition-colors duration-300 mb-3">
                      <stat.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}

// SkillCard Component
interface SkillCardProps {
  skill: Skill;
  index: number;
  isHovered: boolean;
  onHover: (skillName: string | null) => void;
}

const SkillCard = ({ skill, index, isHovered, onHover }: SkillCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => onHover(skill.name)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={`h-1 bg-gradient-to-r ${skill.color}`} />
      
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} shadow-md`}>
              <span className="text-lg">{skill.icon}</span>
            </div>
            <span className="text-lg font-semibold text-slate-900 dark:text-white">
              {skill.name}
            </span>
          </div>
          
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* <Badge 
              className={`bg-gradient-to-r ${skill.color} text-white border-0 shadow-md`}
            >
              {skill.level}%
            </Badge> */}
          </motion.div>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="relative">
            <Progress 
              value={skill.level} 
              className="h-2 bg-slate-200 dark:bg-slate-700"
            />
            <motion.div 
              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
              custom={skill.level}
                // @ts-expect-error
              variants={progressVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
          
          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span>Basic</span>
            <span>Advanced</span>
            <span>Expert</span>
          </div>
        </div>
      </CardContent>

      {/* Hover overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
    </Card>
  );
};