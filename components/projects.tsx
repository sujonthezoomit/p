'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ExternalLink, Github, Eye } from 'lucide-react';

type IProject = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github: string;
  live: string;
  details: {
    overview: string;
    features: string[];
    challenges: string;
    outcome: string;
  };
};

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with admin dashboard, payment integration, and real-time notifications.',
    image:
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
    category: 'Full Stack',
    github: '#',
    live: '#',
    details: {
      overview:
        'A comprehensive e-commerce platform built with modern web technologies, featuring user authentication, product management, shopping cart, payment processing, and real-time order tracking.',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and wishlist functionality',
        'Secure payment integration with Stripe',
        'Admin dashboard for inventory management',
        'Real-time notifications and order tracking',
        'Responsive design for all devices',
      ],
      challenges:
        'Implementing secure payment processing and real-time features while maintaining optimal performance.',
      outcome:
        'Successfully deployed platform serving 1000+ users with 99.9% uptime.',
    },
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.',
    image:
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'WebSockets',
    ],
    category: 'Full Stack',
    github: '#',
    live: '#',
    details: {
      overview:
        'A sophisticated project management application designed for teams to collaborate effectively with real-time updates and comprehensive analytics.',
      features: [
        'Real-time collaboration with WebSockets',
        'Kanban boards and Gantt charts',
        'Team management and role-based access',
        'Time tracking and reporting',
        'File attachments and comments',
        'Advanced analytics dashboard',
        'Mobile-responsive design',
      ],
      challenges:
        'Handling real-time synchronization across multiple users and implementing complex data relationships.',
      outcome:
        'Adopted by 5 companies for their internal project management needs.',
    },
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description:
      'Analytics dashboard for social media management with data visualization and automated reporting.',
    image:
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'D3.js', 'Express', 'Redis', 'Chart.js'],
    category: 'Frontend',
    github: '#',
    live: '#',
    details: {
      overview:
        'A comprehensive social media analytics dashboard that aggregates data from multiple platforms and provides actionable insights through interactive visualizations.',
      features: [
        'Multi-platform data integration',
        'Interactive data visualizations',
        'Automated report generation',
        'Custom dashboard creation',
        'Real-time metrics tracking',
        'Export functionality (PDF/CSV)',
        'Dark/light theme support',
      ],
      challenges:
        'Integrating multiple social media APIs and creating performant data visualizations for large datasets.',
      outcome: 'Reduced report generation time by 80% for marketing teams.',
    },
  },
  {
    id: 4,
    title: 'Weather Forecast API',
    description:
      'RESTful API service providing accurate weather forecasts with caching and rate limiting.',
    image:
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'OpenWeather API'],
    category: 'Backend',
    github: '#',
    live: '#',
    details: {
      overview:
        'A robust weather API service that provides real-time weather data with intelligent caching, rate limiting, and comprehensive documentation.',
      features: [
        'RESTful API design',
        'JWT authentication',
        'Rate limiting and throttling',
        'Redis caching for performance',
        'Comprehensive API documentation',
        'Error handling and logging',
        'Unit and integration tests',
      ],
      challenges:
        'Implementing efficient caching strategies and handling high-volume API requests while maintaining data accuracy.',
      outcome:
        'Serving 10,000+ API calls daily with 99.95% uptime and sub-200ms response times.',
    },
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<IProject>();

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <section
      id="projects"
      className="py-20 "
      // 1. Updated Background/Border colors for the section (not applicable here, but general theme)
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* 2. Header Badge Update */}
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1 bg-cyan-900/10 text-cyan-900 dark:bg-cyan-900 dark:text-cyan-300 font-medium border border-cyan-300 dark:border-cyan-800"
          >
            Portfolio
          </Badge>
          {/* 3. Title Text Gradient Update */}
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-[18px] text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise across the full
            development stack and various domains.
          </p>
        </div>

        {/* 4. Category Filter Buttons Update */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-900 to-teal-900 text-white shadow-lg shadow-cyan-900/40' // Active: Deep Cyan Gradient
                  : 'border-cyan-800 text-cyan-900 dark:border-cyan-700 dark:text-white hover:border-cyan-900 dark:hover:border-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-900/50' // Outline: Cyan-900 text/border
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: IProject) => (
            <Card
              key={project.id}
              className="group overflow-hidden border border-cyan-200 dark:border-cyan-800 bg-white dark:bg-slate-900 hover:shadow-xl hover:shadow-cyan-900/15 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Image Overlay: Deep Cyan-900 */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  {/* Card Title: Deep Cyan-900 */}
                  <CardTitle className="text-xl font-bold text-cyan-900 dark:text-cyan-100">
                    {project.title}
                  </CardTitle>
                  {/* Category Badge Logic Update */}
                  <Badge
                    variant="secondary"
                    className={
                      project.category === 'Full Stack'
                        ? 'bg-gradient-to-r from-cyan-900 to-teal-700 text-white font-semibold' // Full Stack: Deep Cyan Gradient
                        : project.category === 'Frontend'
                        ? 'bg-cyan-100 text-cyan-900 dark:bg-cyan-900/30 dark:text-cyan-300' // Frontend: Light/Dark Cyan-900
                        : 'bg-teal-100 text-teal-900 dark:bg-teal-900/30 dark:text-teal-300' // Backend: Teal for contrast
                    }
                  >
                    {project.category}
                  </Badge>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Tech Badges Update: Border and Text using Cyan-900 theme */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-cyan-800 text-cyan-900 dark:border-cyan-700 dark:text-cyan-300 bg-cyan-50/50 dark:bg-cyan-900/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="outline"
                      className="text-xs border-cyan-800 text-cyan-900 dark:border-cyan-700 dark:text-cyan-300 bg-cyan-50/50 dark:bg-cyan-900/20"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  {/* Outline Buttons Update: Border and Text using Cyan-900 theme */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-cyan-800 text-cyan-900 dark:border-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/50"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-cyan-800 text-cyan-900 dark:border-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/50"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      {/* Primary Detail Button Update: Deep Cyan Gradient */}
                      <Button
                        size="sm"
                        variant="default"
                        className="flex-1 bg-gradient-to-r from-cyan-900 to-teal-700 hover:from-cyan-800 hover:to-teal-600 text-white shadow-md shadow-cyan-900/25"
                        onClick={() => setSelectedProject(project)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white dark:bg-slate-900 border-cyan-800 dark:border-cyan-700">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-cyan-900 dark:text-cyan-100">
                          {project.title}
                        </DialogTitle>
                      </DialogHeader>
                      {selectedProject && (
                        <div className="space-y-6">
                          <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <div>
                            {/* Detail Headings: Deep Cyan-900 */}
                            <h3 className="text-lg font-semibold mb-2 text-cyan-900 dark:text-cyan-300">
                              Overview
                            </h3>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                              {selectedProject.details.overview}
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-cyan-900 dark:text-cyan-300">
                              Key Features
                            </h3>
                            <ul className="space-y-2">
                              {selectedProject.details.features.map(
                                (feature, index) => (
                                  <li
                                    key={index}
                                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                                  >
                                    {/* Feature Bullet: Deep Cyan-500 */}
                                    <div className="w-2 h-2 bg-cyan-700 dark:bg-cyan-500 rounded-full flex-shrink-0"></div>
                                    <span>{feature}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-cyan-900 dark:text-cyan-300">
                              Technologies Used
                            </h3>
                            {/* Detail Tech Badges: Cyan-900 Theme */}
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="bg-cyan-900/10 text-cyan-900 dark:bg-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-cyan-900 dark:text-cyan-300">
                              Challenges & Solutions
                            </h3>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                              {selectedProject.details.challenges}
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-cyan-900 dark:text-cyan-300">
                              Outcome
                            </h3>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                              {selectedProject.details.outcome}
                            </p>
                          </div>
                          <div className="flex gap-4 pt-4">
                            {/* Dialog Button Update: Deep Cyan Gradient */}
                            <Button className="flex-1 bg-gradient-to-r from-cyan-900 to-teal-700 hover:from-cyan-800 hover:to-teal-600">
                              <Github className="w-4 h-4 mr-2" />
                              View on GitHub
                            </Button>
                            {/* Dialog Outline Button Update: Cyan-900 Theme */}
                            <Button
                              variant="outline"
                              className="flex-1 border-cyan-800 text-cyan-900 dark:border-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/50"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 5. Footer Button Update: Cyan-900 theme */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="group rounded-full px-8 py-3 border-cyan-800 text-cyan-900 dark:border-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/50 font-medium hover:border-cyan-900 dark:hover:border-cyan-500"
          >
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}