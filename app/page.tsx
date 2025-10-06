'use client';

import { Sparkles, Code2, Zap, GitBranch, Server, Workflow, Eye, TrendingUp, Users, Lightbulb, Boxes } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroRef.current.style.opacity = `${1 - scrolled / 800}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: Server, title: 'Complex backend systems', gradient: 'from-blue-500 to-cyan-500' },
    { icon: GitBranch, title: 'CI/CD', gradient: 'from-purple-500 to-pink-500' },
    { icon: Workflow, title: 'Workflow Automatization', gradient: 'from-green-500 to-emerald-500' },
    { icon: Eye, title: 'Observability', gradient: 'from-orange-500 to-red-500' },
    { icon: TrendingUp, title: 'Process optimization', gradient: 'from-indigo-500 to-blue-500' },
    { icon: Code2, title: 'DevOps', gradient: 'from-violet-500 to-purple-500' },
    { icon: Sparkles, title: 'Technical debt and code cleaning', gradient: 'from-pink-500 to-rose-500' },
    { icon: Users, title: 'Workshops, lectures & public speaking', gradient: 'from-cyan-500 to-blue-500' },
    { icon: Lightbulb, title: 'AI adoption', gradient: 'from-yellow-500 to-orange-500' },
    { icon: Boxes, title: 'Software architecture', gradient: 'from-teal-500 to-green-500' },
  ];

  const portfolio = [
    'My Speed Puzzling',
    'StringData',
    'Omnicado',
    'Peon.dev',
    'Sharry.tech',
    'Carvago',
    'GLAMI',
    'Spaceflow',
    'Apploud',
  ];

  const communities = [
    { name: 'Pehapkari.cz', url: 'https://pehapkari.cz' },
    { name: 'AI4Dev.cz', url: 'https://ai4dev.cz' },
    { name: 'Techmeetup.cz', url: 'https://techmeetup.cz' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div ref={heroRef} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              We are like wizards,
            </span>
            <br />
            <span className="text-white">but with code!</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            We turn complex problems into elegant solutions.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2"
            >
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              What we do
            </h2>
            <p className="text-gray-500">Transforming ideas into production-ready solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg border border-white/5 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-base font-medium text-gray-300 mt-2">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-gray-500 text-sm">We love open-source and contribute back</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-slate-950 to-slate-950"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Portfolio
            </h2>
            <p className="text-gray-500">Proudly helped with</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="px-6 py-3 text-sm text-gray-400 border border-white/10 rounded-full hover:border-white/20 hover:text-gray-300 transition-colors"
              >
                {project}
              </div>
            ))}
          </div>

            <div className="text-center space-y-2">
                <p className="text-gray-600 text-sm">... many more, and ...</p>
                <p className="text-xl font-semibold text-white">100% Customer Satisfaction</p>
            </div>
        </div>
      </section>

      {/* Contact & Community Section */}
      <section id="contact" className="py-40 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-slate-900/40 to-blue-950/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Contact */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Get in touch</h2>
            <p className="text-gray-500 mb-4">
              Leave a message to Jan
            </p>
            <a
              href="mailto:j.mikes@me.com"
              className="text-white hover:text-gray-300 transition-colors text-lg"
            >
              j.mikes@me.com
            </a>
          </div>

          {/* Community */}
          <div className="text-center pt-12 border-t border-white/5">
            <p className="text-gray-500 mb-8">You can often meet us at</p>
            <div className="flex flex-wrap justify-center gap-4">
              {communities.map((community, index) => (
                <a
                  key={index}
                  href={community.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-sm text-gray-400 border border-white/10 rounded-full hover:border-white/20 hover:text-gray-300 transition-colors"
                >
                  {community.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
