'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Code2 } from 'lucide-react';

// --- Types ---
interface Skill {
  name: string;
  level: number;
  icon: string; // Emoji for simplicity
  color: string; // Tailwind gradient class
}

// --- Unified Skill List (Cyan/Blue Minimalist Theme) ---
const SKILLS_LIST: Skill[] = [
  // Frontend
  { name: 'React.js', level: 95, icon: '⚛️', color: 'from-cyan-500 to-blue-950' },
  { name: 'Next.js', level: 90, icon: '▲', color: 'from-cyan-500 to-blue-950' },
  { name: 'TypeScript', level: 88, icon: '🔷', color: 'from-cyan-500 to-blue-950' },
  { name: 'Redux', level: 80, icon: '🔴', color: 'from-cyan-500 to-cyan-950' },
  { name: 'Tailwind CSS', level: 92, icon: '🎨', color: 'from-cyan-500 to-blue-950' },
  { name: 'JavaScript', level: 95, icon: '📜', color: 'from-cyan-500 to-cyan-950' },
  { name: 'HTML5/CSS3', level: 98, icon: '🌐', color: 'from-cyan-500 to-blue-950' },
  
  // Backend & APIs
  { name: 'Node.js', level: 93, icon: '🟢', color: 'from-cyan-500 to-cyan-950' },
  { name: 'Express.js', level: 90, icon: '🚀', color: 'from-cyan-500 to-blue-950' },
  { name: 'MongoDB', level: 87, icon: '🍃', color: 'from-cyan-500 to-blue-950' },
  { name: 'REST API', level: 95, icon: '🔗', color: 'from-cyan-500 to-cyan-950' },
  
  // Tools & Deployment
  { name: 'Git', level: 92, icon: '📚', color: 'from-cyan-500 to-cyan-950' },
  { name: 'Vercel', level: 88, icon: '◬', color: 'from-cyan-500 to-blue-950' },
  { name: 'Firebase', level: 85, icon: '🔥', color: 'from-cyan-900 to-cyan-800' },
];

// --- Animation Variants ---
const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// --- SkillCard Component (Minimalist) ---
interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <Card 
      className="group relative border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:border-cyan-300/50 dark:hover:border-cyan-500/50"
    >
      <div className={`h-1 bg-gradient-to-r ${skill.color} absolute top-0 left-0 w-full opacity-80`} />
      
      <CardHeader className="flex flex-row items-center justify-between pb-4 pt-6">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl bg-gradient-to-r ${skill.color} shadow-md transition-all duration-300 group-hover:scale-105`}>
            <span className="text-xl leading-none">{skill.icon}</span>
          </div>
          <CardTitle className="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
            {skill.name}
          </CardTitle>
        </div>
        
        <Badge 
          className={`px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-600 shadow-sm`}
        >
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-300 bg-clip-text text-transparent">
            {skill.level}%
          </span>
        </Badge>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          {/* Progress Bar with Framer Motion */}
          <div className="relative h-1 w-full bg-slate-200/50 dark:bg-slate-700/50 rounded-full overflow-hidden">
            <motion.div 
              className={`absolute top-0 left-0 h-full rounded-full`}
              style={{ width: `${skill.level}%` }}
              initial={{ opacity: 0, scaleX: 0, originX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.17, 0.67, 0.83, 0.9] }}
            >
                <div className={`h-full bg-gradient-to-r ${skill.color}`} />
            </motion.div>
          </div>

          <div className="flex justify-between text-[10px] uppercase text-slate-500 dark:text-slate-400 font-bold">
            <span className='opacity-70'>Fundamental</span>
            <span className='opacity-70'>Expert</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// --- Unified Main Component ---
export default function UnifiedSkillsSection() {

  return (
    <section 
      id="skills" 
      className="py-16 container mx-auto" 
      aria-label="Technical Skills Section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section (Minimal) */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-cyan-100/50 dark:bg-cyan-800/20 border border-cyan-200/50 dark:border-cyan-700/30 text-sm font-medium text-cyan-700 dark:text-cyan-300">
            <Code2 className="w-4 h-4" />
            FULL-STACK DEVELOPMENT
          </div>
          
          <h2 className="text-3xl my-5 md:text-4xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Unified Technology Stack
          </h2>
        </motion.header>

        {/* Unified Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {SKILLS_LIST.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                custom={index}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}