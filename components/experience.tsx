'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    type: 'Full-time',
    description: 'Leading development of scalable web applications using MERN stack. Mentoring junior developers and collaborating with cross-functional teams to deliver high-quality solutions.',
    achievements: [
      'Architected and developed 5+ production applications serving 100K+ users',
      'Reduced application load time by 40% through optimization techniques',
      'Led a team of 4 developers in delivering projects ahead of schedule',
      'Implemented CI/CD pipelines reducing deployment time by 60%'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB']
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'New York, NY',
    period: '2020 - 2022',
    type: 'Full-time',
    description: 'Developed and maintained web applications in a fast-paced startup environment. Worked closely with product team to translate requirements into technical solutions.',
    achievements: [
      'Built MVP from scratch that acquired 10K+ users in first 6 months',
      'Integrated multiple third-party APIs and payment systems',
      'Improved code coverage from 40% to 85% through comprehensive testing',
      'Reduced server costs by 30% through performance optimization'
    ],
    technologies: ['JavaScript', 'React', 'Express.js', 'PostgreSQL', 'Redis']
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'DesignAgency Pro',
    location: 'Los Angeles, CA',
    period: '2019 - 2020',
    type: 'Full-time',
    description: 'Specialized in creating responsive and interactive user interfaces for client projects. Collaborated with designers to implement pixel-perfect designs.',
    achievements: [
      'Delivered 20+ responsive websites with 100% client satisfaction',
      'Reduced development time by 25% through component library creation',
      'Improved website performance scores to 95+ on Google PageSpeed',
      'Mentored 2 junior developers in modern frontend technologies'
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'React', 'SASS', 'Webpack']
  }
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of California, Berkeley',
    period: '2015 - 2019',
    achievements: ['Magna Cum Laude', 'Dean\'s List', 'CS Honor Society']
  }
];

const certifications = [
  'AWS Certified Developer',
  'MongoDB Certified Developer',
  'React Professional Certificate',
  'Node.js Application Developer'
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Career Journey</Badge>
          <h2 className="text-4xl font-bold mb-4">
            Professional
            <span className="text-primary"> Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My career progression and key achievements in software development, 
            building impactful solutions and leading successful projects.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={exp.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{exp.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎓 Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.school}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {edu.achievements.map((achievement) => (
                      <Badge key={achievement} variant="secondary" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🏆 Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}