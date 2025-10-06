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
  const [selectedProject, setSelectedProject] = useState<IProject | undefined>(undefined); // Ensure initial state is undefined

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === 'All' || project.category === selectedCategory
  );

  // --- Theme-related constants for consistency ---
  const TEXT_WHITE = 'text-white';
  const CYAN_PRIMARY_TEXT_LIGHT = 'text-cyan-100'; // For header badges
  const CYAN_TITLE_GRADIENT_DARK_BG = 'bg-gradient-to-r from-white to-gray-200'; // White gradient against dark background
  const BUTTON_ACTIVE_GRADIENT = 'bg-gradient-to-r from-cyan-800 to-cyan-900';
  const BUTTON_OUTLINE_CLASSES = 'border-cyan-700 text-white hover:bg-cyan-800'; // Buttons for main projects card
  const CARD_BORDER_COLOR = 'border-cyan-700'; // Card borders
  const CARD_BACKGROUND = 'bg-gray-900'; // Dark background for cards
  const CARD_HOVER_SHADOW = 'hover:shadow-cyan-900/50';
  const BADGE_FULLSTACK_GRADIENT = 'bg-gradient-to-r from-cyan-800 to-teal-700';
  const BADGE_FRONTEND_BACKEND_BG = 'bg-cyan-800/50'; // For category badges in cards
  const DIALOG_BACKGROUND = 'bg-cyan-950'; // Very deep cyan for dialog background
  const DIALOG_BORDER = 'border-cyan-700';
  const DIALOG_HEADING_TEXT = 'text-cyan-200'; // Lighter cyan for dialog headings
  const DIALOG_BODY_TEXT = 'text-white';
  const DIALOG_FEATURE_BULLET = 'bg-cyan-500'; // Feature bullet color in dialog
  const DIALOG_TECH_BADGE_BG = 'bg-cyan-800';
  const DIALOG_TECH_BADGE_BORDER = 'border-cyan-600';
  const CYAN_BORDER = 'border-cyan-600';
  const DIALOG_BUTTON_GRADIENT = 'bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-600 hover:to-cyan-700';
  const DIALOG_OUTLINE_BUTTON_CLASSES = 'border-white text-white hover:bg-cyan-800';


  return (
    <section id="projects" className=" py-10 md:py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className={`mb-4 px-4 py-1 ${BADGE_FULLSTACK_GRADIENT} ${TEXT_WHITE} font-medium border ${CYAN_BORDER}`}
          >
            Portfolio
          </Badge>
          <h2 className={`text-3xl md:text-4xl font-extrabold ${CYAN_TITLE_GRADIENT_DARK_BG} bg-clip-text text-transparent mb-4`}>
            Featured Projects
          </h2>
          <p className={`text-[18px] ${TEXT_WHITE}/80 max-w-3xl mx-auto leading-relaxed`}>
            A showcase of my recent work, demonstrating expertise across the full
            development stack and various domains.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? `${BUTTON_ACTIVE_GRADIENT} ${TEXT_WHITE} shadow-lg shadow-cyan-900/40`
                  : `${BUTTON_OUTLINE_CLASSES} bg-transparent`
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
              className={`group overflow-hidden ${CARD_BORDER_COLOR} ${CARD_BACKGROUND} hover:shadow-xl ${CARD_HOVER_SHADOW} transition-all duration-500 hover:-translate-y-2`}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className={`text-xl font-bold ${CYAN_PRIMARY_TEXT_LIGHT}`}>
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className={
                      project.category === 'Full Stack'
                        ? `${BADGE_FULLSTACK_GRADIENT} ${TEXT_WHITE} font-semibold`
                        : `${BADGE_FRONTEND_BACKEND_BG} ${TEXT_WHITE}`
                    }
                  >
                    {project.category}
                  </Badge>
                </div>
                <p className={`${TEXT_WHITE}/80 text-sm leading-relaxed line-clamp-2`}>
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`text-xs ${BADGE_FRONTEND_BACKEND_BG} ${TEXT_WHITE} ${CARD_BORDER_COLOR}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="outline"
                      className={`text-xs ${BADGE_FRONTEND_BACKEND_BG} ${TEXT_WHITE} ${CARD_BORDER_COLOR}`}
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className={`flex-1 ${BUTTON_OUTLINE_CLASSES} bg-transparent`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className={`flex-1 ${BUTTON_OUTLINE_CLASSES} bg-transparent`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="default"
                        className={`flex-1 ${BUTTON_ACTIVE_GRADIENT} ${TEXT_WHITE} shadow-md shadow-cyan-900/25`}
                        onClick={() => setSelectedProject(project)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className={`max-w-4xl max-h-[80vh] overflow-y-auto ${DIALOG_BACKGROUND} ${DIALOG_BORDER}`}>
                      <DialogHeader>
                        <DialogTitle className={`text-2xl font-bold ${TEXT_WHITE}`}>
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
                            <h3 className={`text-lg font-semibold mb-2 ${DIALOG_HEADING_TEXT}`}>
                              Overview
                            </h3>
                            <p className={`${DIALOG_BODY_TEXT} leading-relaxed`}>
                              {selectedProject.details.overview}
                            </p>
                          </div>
                          <div>
                            <h3 className={`text-lg font-semibold mb-2 ${DIALOG_HEADING_TEXT}`}>
                              Key Features
                            </h3>
                            <ul className="space-y-2">
                              {selectedProject.details.features.map(
                                (feature, index) => (
                                  <li
                                    key={index}
                                    className={`flex items-center gap-3 ${DIALOG_BODY_TEXT}`}
                                  >
                                    <div className={`w-2 h-2 ${DIALOG_FEATURE_BULLET} rounded-full flex-shrink-0`}></div>
                                    <span>{feature}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                          <div>
                            <h3 className={`text-lg font-semibold mb-2 ${DIALOG_HEADING_TEXT}`}>
                              Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className={`${DIALOG_TECH_BADGE_BG} ${TEXT_WHITE} ${DIALOG_TECH_BADGE_BORDER}`}
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className={`text-lg font-semibold mb-2 ${DIALOG_HEADING_TEXT}`}>
                              Challenges & Solutions
                            </h3>
                            <p className={`${DIALOG_BODY_TEXT} leading-relaxed`}>
                              {selectedProject.details.challenges}
                            </p>
                          </div>
                          <div>
                            <h3 className={`text-lg font-semibold mb-2 ${DIALOG_HEADING_TEXT}`}>
                              Outcome
                            </h3>
                            <p className={`${DIALOG_BODY_TEXT} leading-relaxed`}>
                              {selectedProject.details.outcome}
                            </p>
                          </div>
                          <div className="flex gap-4 pt-4">
                            <Button className={`flex-1 ${DIALOG_BUTTON_GRADIENT} ${TEXT_WHITE}`}>
                              <Github className="w-4 h-4 mr-2" />
                              View on GitHub
                            </Button>
                            <Button
                              variant="outline"
                              className={`flex-1 ${DIALOG_OUTLINE_BUTTON_CLASSES} bg-transparent`}
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

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className={`group rounded-full px-8 py-3 ${BUTTON_OUTLINE_CLASSES} bg-transparent font-medium`}
          >
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}