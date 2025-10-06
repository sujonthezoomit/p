'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:sujan25854@gmail.com', label: 'Email' }
];

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' }
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // --- Strict "all text white, bg cyan" Color Definitions ---

  const TEXT_COLOR = 'text-white'; // All text is white
  const ACCENT_BORDER = 'border-cyan-700'; // Darker cyan for borders/separators
  const SOCIAL_BUTTON_BORDER = 'border-white'; // White border for social icons
  const SOCIAL_BUTTON_HOVER_BG = 'hover:bg-cyan-800'; // Slightly darker cyan on hover
  const QUICK_LINK_HOVER_TEXT = 'hover:text-cyan-200'; // Subtle hover for quick links
  const HEART_COLOR = 'text-red-400'; // A softer red against the deep cyan

  return (
    <footer className={`bg-gradient-to-r from-cyan-700/20 to-teal-600/20 border-cyan-600/30 backdrop-blur-sm ${TEXT_COLOR} border-t ${ACCENT_BORDER}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className={`text-2xl font-bold ${TEXT_COLOR} mb-4`}>
              Md. Sujon Mia
            </h3>
            <p className={`${TEXT_COLOR} mb-4`}>
              MERN Stack Developer passionate about building responsive, scalable, and modern web applications.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className={`${SOCIAL_BUTTON_BORDER} ${TEXT_COLOR} ${SOCIAL_BUTTON_HOVER_BG} ${QUICK_LINK_HOVER_TEXT} transition-all`}
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${TEXT_COLOR}`}>Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className={`${TEXT_COLOR} ${QUICK_LINK_HOVER_TEXT} text-left transition-colors`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`font-semibold mb-4 ${TEXT_COLOR}`}>Get In Touch</h4>
            <div className={`space-y-2 ${TEXT_COLOR}`}>
              <p>📧 sujan25854@gmail.com</p>
              <p>📱 +8801790876529</p>
              <p>📍 Rangpur, Bangladesh</p>
            </div>
            <div className={`mt-4 ${TEXT_COLOR} text-sm`}>
              Open to new projects and collaborations.
            </div>
          </div>
        </div>

        <Separator className={`my-8 ${ACCENT_BORDER}`} />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className={`${TEXT_COLOR} text-sm`}>
            © {new Date().getFullYear()} Md. Sujon Mia. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-white text-sm">
            Built with <Heart className={`h-4 w-4 ${HEART_COLOR} mx-1`} /> Next.js & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}