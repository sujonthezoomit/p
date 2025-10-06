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

  // Typing effect
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-teal-950"
    >


      <div className="container mx-auto px-4 sm:px-6 mt-32 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-block -mt-20">
            <Card className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border-cyan-500/30 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-600" />
                <span className="text-sm font-medium bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  Hello, I,m Md. Sujon Mia
                </span>
              </div>
            </Card>
          </div>

          {/* Main title with gradient */}
          <div className="relative">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-cyan-800 via-teal-700 to-sky-950 bg-clip-text text-transparent">
                SUJON
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
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
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

          {/* Action buttons */}
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

            {/* Social links */}
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
    </section>
  );
}