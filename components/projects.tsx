"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Eye } from "lucide-react";

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
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with admin dashboard, payment integration, and real-time notifications.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
    category: "Full Stack",
    github: "#",
    live: "#",
    details: {
      overview:
        "A comprehensive e-commerce platform built with modern web technologies, featuring user authentication, product management, shopping cart, payment processing, and real-time order tracking.",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment integration with Stripe",
        "Admin dashboard for inventory management",
        "Real-time notifications and order tracking",
        "Responsive design for all devices",
      ],
      challenges:
        "Implementing secure payment processing and real-time features while maintaining optimal performance.",
      outcome:
        "Successfully deployed platform serving 1000+ users with 99.9% uptime.",
    },
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "WebSockets",
    ],
    category: "Full Stack",
    github: "#",
    live: "#",
    details: {
      overview:
        "A sophisticated project management application designed for teams to collaborate effectively with real-time updates and comprehensive analytics.",
      features: [
        "Real-time collaboration with WebSockets",
        "Kanban boards and Gantt charts",
        "Team management and role-based access",
        "Time tracking and reporting",
        "File attachments and comments",
        "Advanced analytics dashboard",
        "Mobile-responsive design",
      ],
      challenges:
        "Handling real-time synchronization across multiple users and implementing complex data relationships.",
      outcome:
        "Adopted by 5 companies for their internal project management needs.",
    },
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with data visualization and automated reporting.",
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "D3.js", "Express", "Redis", "Chart.js"],
    category: "Frontend",
    github: "#",
    live: "#",
    details: {
      overview:
        "A comprehensive social media analytics dashboard that aggregates data from multiple platforms and provides actionable insights through interactive visualizations.",
      features: [
        "Multi-platform data integration",
        "Interactive data visualizations",
        "Automated report generation",
        "Custom dashboard creation",
        "Real-time metrics tracking",
        "Export functionality (PDF/CSV)",
        "Dark/light theme support",
      ],
      challenges:
        "Integrating multiple social media APIs and creating performant data visualizations for large datasets.",
      outcome: "Reduced report generation time by 80% for marketing teams.",
    },
  },
  {
    id: 4,
    title: "Weather Forecast API",
    description:
      "RESTful API service providing accurate weather forecasts with caching and rate limiting.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Node.js", "Express", "Redis", "JWT", "OpenWeather API"],
    category: "Backend",
    github: "#",
    live: "#",
    details: {
      overview:
        "A robust weather API service that provides real-time weather data with intelligent caching, rate limiting, and comprehensive documentation.",
      features: [
        "RESTful API design",
        "JWT authentication",
        "Rate limiting and throttling",
        "Redis caching for performance",
        "Comprehensive API documentation",
        "Error handling and logging",
        "Unit and integration tests",
      ],
      challenges:
        "Implementing efficient caching strategies and handling high-volume API requests while maintaining data accuracy.",
      outcome:
        "Serving 10,000+ API calls daily with 99.95% uptime and sub-200ms response times.",
    },
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<IProject>();

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 font-medium"
          >
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-cyan-700 dark:text-cyan-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise across the
            full development stack and various domains.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                  : "border-cyan-200 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300 hover:border-cyan-300 dark:hover:border-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-900/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project : IProject) => (
            <Card
              key={project.id}
              className="group overflow-hidden border border-cyan-100 dark:border-cyan-800 bg-white dark:bg-slate-900 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-3"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-cyan-900 dark:text-cyan-100">
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className={
                      project.category === "Full Stack"
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                        : project.category === "Frontend"
                        ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    }
                  >
                    {project.category}
                  </Badge>
                </div>
                <p className="text-cyan-700 dark:text-cyan-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-cyan-200 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300 bg-cyan-50/50 dark:bg-cyan-900/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="outline"
                      className="text-xs border-cyan-200 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300 bg-cyan-50/50 dark:bg-cyan-900/20"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-cyan-200 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/50"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-cyan-200 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/50"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="default"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-md"
                        onClick={() => setSelectedProject(project)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white dark:bg-slate-900 border-cyan-200 dark:border-cyan-800">
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
                            <h3 className="text-lg font-semibold mb-2 text-cyan-800 dark:text-cyan-200">
                              Overview
                            </h3>
                            <p className="text-cyan-700 dark:text-cyan-300 leading-relaxed">
                              {selectedProject.details.overview}
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-cyan-800 dark:text-cyan-200">
                              Key Features
                            </h3>
                            <ul className="space-y-2">
                              {selectedProject.details.features.map(
                                (feature, index) => (
                                  <li
                                    key={index}
                                    className="flex items-center gap-3 text-cyan-700 dark:text-cyan-300"
                                  >
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                                    <span>{feature}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-cyan-800 dark:text-cyan-200">
                              Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-cyan-800 dark:text-cyan-200">
                              Challenges & Solutions
                            </h3>
                            <p className="text-cyan-700 dark:text-cyan-300 leading-relaxed">
                              {selectedProject.details.challenges}
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-cyan-800 dark:text-cyan-200">
                              Outcome
                            </h3>
                            <p className="text-cyan-700 dark:text-cyan-300 leading-relaxed">
                              {selectedProject.details.outcome}
                            </p>
                          </div>
                          <div className="flex gap-4 pt-4">
                            <Button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                              <Github className="w-4 h-4 mr-2" />
                              View on GitHub
                            </Button>
                            <Button
                              variant="outline"
                              className="flex-1 border-cyan-200 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/50"
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
            className="group rounded-full px-8 py-3 border-cyan-200 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/50 font-medium hover:border-cyan-300 dark:hover:border-cyan-500"
          >
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
