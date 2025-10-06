'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, Rocket, Sparkles, Target } from 'lucide-react';

// --- Updated Colors to use Cyan 800/900 only ---
const PRIMARY_ACCENT_GRADIENT = 'from-cyan-900 to-cyan-800'; // Deep Cyan Gradient

const experiences = [
  // {
  //   id: 1,
  //   title: 'Junior Frontend Developer',
  //   company: 'Tech Innovations Inc.',
  //   location: 'San Francisco, CA',
  //   period: '2023 - Present',
  //   type: 'Full-time',
  //   description: 'Crafting digital experiences with React and Next.js, focusing on performance and user engagement.',
  //   achievements: [
  //     'Led development of 15+ responsive components using modern stack',
  //     'Improved site performance by 40% through optimization techniques',
  //     'Collaborated with cross-functional teams to deliver 5+ major features',
  //   ],
  //   technologies: [
  //     'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Redux', 'Node.js', 'Express.js', 'MongoDB', "Mongoose",'Git', 'Firebase', 'REST APIs'
  //   ],
  //   icon: <Rocket className="h-5 w-5" />,
  //   accentColor: PRIMARY_ACCENT_GRADIENT,
  // },
  {
    id: 2,
    title: 'Intern Frontend Developer',
    company: 'Zoom IT',
    location: 'Onside',
    period: '2025 - 2025',
    type: 'Internship',
    description: 'Immersion in professional development workflows and modern web technologies.',
    achievements: [
      'Contributed to 10+ live projects with 100% positive feedback',
      'Mastered React best practices and component architecture',
      'Automated deployment processes reducing setup time by 60%',
    ],
    technologies: [
      'React', "Next Js", "Redux", 'JavaScript', 'CSS', 'HTML', 'Git', 'Tailwind CSS', 'Ant Design', 
    ],
    icon: <Sparkles className="h-5 w-5" />,
    accentColor: PRIMARY_ACCENT_GRADIENT,
  },
];

export default function Experience() {
  // Define consistent cyan accent text colors for light and dark modes
  const CYCLIC_ACCENT_TEXT = 'text-cyan-800 dark:text-cyan-700'; 
  const CYCLIC_LIGHTER_TEXT = 'text-cyan-700 dark:text-cyan-300';
  const BADGE_BG_CLASS = 'bg-cyan-900/10 dark:bg-cyan-900/30 border-cyan-300 dark:border-cyan-800';
  
  return (
    <section id="experience" className="py-20 container mx-auto relative overflow-hidden">
      
      {/* Background Elements (Using subtle cyan blur) */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-800/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className={`mb-4 px-4 py-2 text-sm font-medium ${BADGE_BG_CLASS} inline-flex items-center ${CYCLIC_ACCENT_TEXT}`}
          >
            <Target className="w-4 h-4 mr-2" />
            Career Timeline
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Professional <span className={CYCLIC_ACCENT_TEXT}>Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each step tells a story of growth, challenges, and achievements
          </p>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col md:flex-row gap-5 max-w-6xl mx-auto">
          {experiences.map((exp) => (
            // Card Shadow/Glow (Using Cyan)
            <div key={exp.id}  className="w-full rounded-lg md:w-1/2 flex justify-center ">
              <Card className="group hover:scale-[1.02] transition-all duration-500 border-2  border-cyan-500/30 shadow-2xl relative overflow-hidden w-full dark:bg-slate-900/80 backdrop-blur-sm">
                
                {/* Gradient Border Effect (Deep Cyan) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${exp.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-900/10 to-transparent rounded-bl-full"></div>

                <CardHeader className="pb-3 relative">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      {/* Title Text (Black/White) */}
                      <CardTitle className="text-2xl font-bold text-foreground dark:text-white">
                        {exp.title}
                      </CardTitle>
                      {/* Company Name Icon (Cyan Accent) */}
                      <div className="flex items-center gap-2 mt-1">
                        <Building className={`h-4 w-4 ${CYCLIC_ACCENT_TEXT}`} />
                        <span className="font-semibold text-foreground dark:text-white">{exp.company}</span>
                      </div>
                    </div>
                    {/* Type Badge (Deep Cyan Gradient) */}
                    <Badge className={`px-3 py-1 text-xs font-bold bg-gradient-to-r ${exp.accentColor} text-white border-0 shadow-lg shadow-cyan-900/20`}>
                      {exp.type}
                    </Badge>
                  </div>

                  {/* Location and Period Icons (Black/White with Cyan Icons) */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 text-foreground dark:text-white">
                      <MapPin className={`h-3 w-3 ${CYCLIC_ACCENT_TEXT}`} />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1 text-foreground dark:text-white">
                      <Calendar className={`h-3 w-3 ${CYCLIC_ACCENT_TEXT}`} />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 space-y-4 relative">
                  {/* Description Text (Black/White) */}
                  <p className="text-foreground dark:text-white leading-relaxed border-l-2 border-cyan-500/30 pl-4 py-1">
                    {exp.description}
                  </p>

                  {/* Achievements Section */}
                  <div className="bg-cyan-900/5 dark:bg-cyan-900/20 rounded-lg p-4">
                    {/* Key Milestones Title (Cyan Accent) */}
                    <h4 className={`font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wide ${CYCLIC_ACCENT_TEXT}`}>
                      <Target className="h-4 w-4" />
                      Key Milestones
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground dark:text-white text-sm">
                          {/* Achievement Bullet (Deep Cyan Gradient) */}
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${exp.accentColor}`}
                          ></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Section */}
                  <div>
                    {/* Tech Stack Title (Cyan Accent) */}
                    <h4 className={`font-semibold mb-2 text-sm uppercase tracking-wide ${CYCLIC_ACCENT_TEXT}`}>Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          // Tech Badges (Outline with Muted Cyan Background/Border, Black/White Text)
                          className={`px-3 py-1 text-xs font-medium border-cyan-800/50 dark:border-cyan-700/50 bg-cyan-50/50 dark:bg-cyan-900/30 backdrop-blur-sm text-foreground dark:text-white`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}