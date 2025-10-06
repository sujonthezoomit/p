'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Send, CheckCircle, Zap } from 'lucide-react'; // Removed unused Clock icon
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  // --- Strict Cyan-800/900 Color Definitions for Dark Mode ---
  const TEXT_WHITE = 'text-white'; // All main text will be white
  const PRIMARY_CYAN_ACCENT_TEXT = 'text-cyan-600'; // For highlighted cyan text
  const LIGHTER_CYAN_ACCENT_TEXT = 'text-cyan-600'; // For slightly lighter cyan text if needed, but keeping it close
  const BORDER_ACCENT = 'border-cyan-800';
  const BADGE_BG = 'bg-cyan-900/30'; // Darker cyan transparent background for badges
  const BADGE_BORDER = 'border-cyan-800/50';
  const BUTTON_GRADIENT_BG = 'bg-gradient-to-r from-cyan-800 to-cyan-900 hover:from-cyan-900 hover:to-cyan-800';
  const CARD_BG_GRADIENT = 'from-gray-900 to-gray-800'; // Dark background for cards
  const CARD_HOVER_SHADOW = 'hover:shadow-cyan-900/50';
  const SHADOW_CYAN = 'shadow-cyan-900/40'; // Consistent shadow color

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sujan25854@gmail.com',
      href: 'mailto:sujan25854@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+8801790876529',
      href: 'tel:+8801790876529'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Rangpur, Bangladesh',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gray-950"> {/* Ensure a consistent dark background */}
      {/* Background Elements (Unified Cyan blur for a dark background) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900"></div> {/* Subtle dark gradient */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-800/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className={`mb-4 px-4 py-2 text-sm font-medium ${BADGE_BG} ${BADGE_BORDER} ${PRIMARY_CYAN_ACCENT_TEXT}`}
          >
            <Zap className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent`}>
            Let,s Work <span className={PRIMARY_CYAN_ACCENT_TEXT}>Together</span>
          </h2>
          <p className={`text-xl ${TEXT_WHITE}/80 max-w-2xl mx-auto`}>
            Have a project in mind or want to discuss opportunities? 
            I,d love to hear from you. Let,s create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className={`hover:shadow-xl  ${CARD_HOVER_SHADOW} transition-all duration-300 border-2 ${BORDER_ACCENT} shadow-lg ${SHADOW_CYAN} bg-gradient-to-br ${CARD_BG_GRADIENT}`}>
            <CardHeader className="pb-4">
              <CardTitle className={`text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent`}>
                Send a Message
              </CardTitle>
              <p className={`${TEXT_WHITE}/80`}>Fill out the form and I,ll get back to you soon</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
              
                  <div className="space-y-2">
                    <label htmlFor="name" className={`text-sm font-medium ${LIGHTER_CYAN_ACCENT_TEXT}`}>Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className={`focus:border-cyan-800 focus:ring-cyan-800 bg-gray-700/50 border ${BORDER_ACCENT}/50 ${TEXT_WHITE} placeholder-gray-400`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className={`text-sm font-medium ${LIGHTER_CYAN_ACCENT_TEXT}`}>Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className={`focus:border-cyan-800 focus:ring-cyan-800 bg-gray-700/50 border ${BORDER_ACCENT}/50 ${TEXT_WHITE} placeholder-gray-400`}
                    />
                  </div>
              
                <div className="space-y-2">
                  <label htmlFor="subject" className={`text-sm font-medium ${LIGHTER_CYAN_ACCENT_TEXT}`}>Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className={`focus:border-cyan-800 focus:ring-cyan-800 bg-gray-700/50 border ${BORDER_ACCENT}/50 ${TEXT_WHITE} placeholder-gray-400`}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className={`text-sm font-medium ${LIGHTER_CYAN_ACCENT_TEXT}`}>Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className={`focus:border-cyan-800 focus:ring-cyan-800 resize-none bg-gray-700/50 border ${BORDER_ACCENT}/50 ${TEXT_WHITE} placeholder-gray-400`}
                  />
                </div>
                <Button 
                  type="submit" 
                  className={`w-full ${BUTTON_GRADIENT_BG} ${TEXT_WHITE} shadow-lg ${SHADOW_CYAN} hover:shadow-xl ${CARD_HOVER_SHADOW} transition-all duration-300`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information Side */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <Card className={`hover:shadow-xl ${CARD_HOVER_SHADOW} transition-all duration-300 border-2 ${BORDER_ACCENT} shadow-lg ${SHADOW_CYAN} bg-gradient-to-br ${CARD_BG_GRADIENT}`}>
              <CardHeader>
                <CardTitle className={`flex items-center text-[16px] md:text-2xl gap-2 ${PRIMARY_CYAN_ACCENT_TEXT}`}>
                  <Mail className="h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index} 
                    href={info.href}
                    className="flex flex-col md:flex-row md:items-center gap-4 p-3 rounded-lg hover:bg-cyan-900/30 transition-all duration-200 group"
                  >
                    <div className={` w-12 h-12 ${BUTTON_GRADIENT_BG} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className={`font-medium ${TEXT_WHITE}`}>{info.label}</p>
                      <p className={`${TEXT_WHITE}/70`}>{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Availability Card */}
            <Card className={`hover:shadow-xl ${CARD_HOVER_SHADOW} transition-all duration-300 border-2 ${BORDER_ACCENT} shadow-lg ${SHADOW_CYAN} bg-gradient-to-r from-gray-900 to-gray-800 border-l-4 border-l-cyan-800`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 bg-cyan-800 rounded-full flex items-center justify-center`}>
                    <CheckCircle className="h-5 w-5 ${TEXT_WHITE}" />
                  </div>
                  <h3 className={`text-lg font-semibold ${TEXT_WHITE}`}>Available for Work</h3>
                </div>
                <p className={`${TEXT_WHITE}/70 mb-4`}>
                  I,m currently available for freelance projects and full-time opportunities. 
                  Let,s discuss how we can bring your ideas to life.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className={`${BADGE_BG} ${TEXT_WHITE} ${BADGE_BORDER}`}>Remote Work</Badge>
                  <Badge className={`${BADGE_BG} ${TEXT_WHITE} ${BADGE_BORDER}`}>Full-time</Badge>
                  <Badge className={`${BADGE_BG} ${TEXT_WHITE} ${BADGE_BORDER}`}>Contract</Badge>
                  <Badge className={`${BADGE_BG} ${TEXT_WHITE} ${BADGE_BORDER}`}>Consulting</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}