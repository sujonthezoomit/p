"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const roles = [
  "Frontend Developer",
  "React.js Specialist",
  "Next.js Developer",
  "MERN Stack Developer",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(${Math.random() * 50 + 50}, ${
          Math.random() * 100 + 150
        }, ${Math.random() * 100 + 200}, ${Math.random() * 0.3 + 0.1})`,
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(10, 20, 30, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections between nearby particles
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(50, 200, 255, ${
              0.1 * (1 - distance / 100)
            })`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const role = roles[currentRole];
    let index = 0;

    const typeInterval = setInterval(
      () => {
        if (isTyping) {
          if (index < role.length) {
            setDisplayText(role.substring(0, index + 1));
            index++;
          } else {
            setIsTyping(false);
            setTimeout(() => setIsTyping(false), 2000);
          }
        } else {
          if (index > 0) {
            setDisplayText(role.substring(0, index - 1));
            index--;
          } else {
            setIsTyping(true);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isTyping ? 100 : 50
    );

    return () => clearInterval(typeInterval);
  }, [currentRole, isTyping]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-950"
    >
      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 rounded-full blur-3xl animate-float delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-sky-500/15 to-cyan-500/15 rounded-full blur-3xl animate-float delay-1000"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 sm:px-6 mt-32 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-block -mt-20">
            <Card className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border-cyan-500/30 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Hello, I,m Md. Sujon Mia
                </span>
              </div>
            </Card>
          </div>

          {/* Main title with gradient animation */}
          <div className="relative">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 bg-clip-text text-transparent animate-gradient-x">
                  SUJON
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 bg-clip-text text-transparent opacity-0 animate-pulse">
                  SUJON
                </div>
              </span>
            </h1>

            {/* Animated subtitle */}
            <div className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold">
              <div className="flex items-center justify-center gap-3">
                <span className="text-slate-300">I build</span>
                <div className="relative">
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-bold min-w-[320px] text-left">
                    {displayText}
                    <span className="inline-block w-1 h-8 bg-cyan-400 ml-1 animate-pulse"></span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/50 to-cyan-400/50 blur-sm opacity-50"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Description with enhanced styling */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              <span className="text-cyan-400 font-semibold">
                Creative frontend developer
              </span>{" "}
              specializing in React.js, Next.js, and modern web technologies. I
              create responsive, performant web applications that deliver
              exceptional user experiences and solve real-world challenges.
            </p>
          </div>

          {/* Action buttons with hover effects */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 pb-20 lg:pb-40">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 border-0 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>

            {/* Social links with glassmorphism effect */}
            <div className="flex items-center gap-3 backdrop-blur-sm bg-white/10 rounded-full p-2 border border-white/20">
              {[
                {
                  icon: Github,
                  href: "https://github.com/sujon-258549",
                  color: "hover:text-cyan-400",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/your-linkedin",
                  color: "hover:text-teal-400",
                },
                {
                  icon: Mail,
                  href: "mailto:sujan25854@gmail.com",
                  color: "hover:text-emerald-400",
                },
              ].map(({ icon: Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300 ${color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
          >
            <ChevronDown className="h-6 w-6 group-hover:animate-bounce" />
          </Button>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}