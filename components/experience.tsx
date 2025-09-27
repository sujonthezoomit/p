'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, Rocket, Sparkles, Target } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Junior Frontend Developer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    period: '2023 - Present',
    type: 'Full-time',
    description: 'Crafting digital experiences with React and Next.js, focusing on performance and user engagement.',
    achievements: [
      'Led development of 15+ responsive components using modern stack',
      'Improved site performance by 40% through optimization techniques',
      'Collaborated with cross-functional teams to deliver 5+ major features',
    ],
    technologies: [
      'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Redux', 'Node.js', 'Express.js', 'MongoDB', "Mongoose",'Git', 'Firebase', 'REST APIs'
    ],
    icon: <Rocket className="h-5 w-5" />,
    accentColor: 'from-blue-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Intern Developer',
    company: 'Digital Solutions LLC',
    location: 'Remote',
    period: '2022 - 2023',
    type: 'Internship',
    description: 'Immersion in professional development workflows and modern web technologies.',
    achievements: [
      'Contributed to 3 live projects with 100% positive feedback',
      'Mastered React best practices and component architecture',
      'Automated deployment processes reducing setup time by 60%',
    ],
    technologies: [
      'React', 'JavaScript', 'CSS', 'HTML', 'Git', 'Bootstrap', 'Tailwind CSS', 'Firebase'
    ],
    icon: <Sparkles className="h-5 w-5" />,
    accentColor: 'from-green-500 to-teal-600',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 container mx-auto relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 border-primary/20 inline-flex items-center"
          >
            <Target className="w-4 h-4 mr-2" />
            Career Timeline
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each step tells a story of growth, challenges, and achievements
          </p>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col md:flex-row gap-5 max-w-6xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.id}  style={{boxShadow:"1px 1px 10px cyan"}} className="w-full rounded-sm md:w-1/2 flex justify-center ">
              <Card className="group hover:scale-105 transition-all duration-500 border-0 shadow-2xl relative overflow-hidden w-full">
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${exp.accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>

                <CardHeader className="pb-3 relative">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Building className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-foreground">{exp.company}</span>
                      </div>
                    </div>
                    <Badge className={`px-3 py-1 text-xs font-bold bg-gradient-to-r ${exp.accentColor} text-white border-0`}>
                      {exp.type}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 space-y-4 relative">
                  <p className="text-foreground/80 leading-relaxed border-l-2 border-primary/20 pl-4 py-1">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <Target className="h-4 w-4" />
                      Key Milestones
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground/70 text-sm">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${exp.accentColor}`}
                          ></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="px-3 py-1 text-xs font-medium bg-background/50 backdrop-blur-sm"
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
