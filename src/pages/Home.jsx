import React, { useState, useEffect, useMemo } from 'react';
import { Code, Mail, Download, ArrowRight, Zap, Terminal, Database, Brain } from 'lucide-react';

const HomePage = ({ setActiveTab }) => {
  const [typedText, setTypedText] = useState('');
  const roles = useMemo(() => ['Machine Learning Engineer'], []);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, [roleIndex, roles]);

  const techStack = [
    { name: "Python", icon: Terminal, color: "text-amber-400" },
    { name: "XGBoost", icon: Brain, color: "text-amber-400" },
    { name: "FastAPI", icon: Zap, color: "text-amber-400" },
    { name: "PostgreSQL", icon: Database, color: "text-amber-400" },
    { name: "SHAP", icon: Brain, color: "text-amber-400" },
    { name: "Transformers", icon: Brain, color: "text-amber-400" },
    { name: "COLMAP", icon: Code, color: "text-amber-400" },
    { name: "ChromaDB", icon: Database, color: "text-amber-400" },
  ];

  const metrics = [
    { label: "IEEE PAPERS", value: "1", border: "border-amber-400" },
    { label: "ML PROJECTS", value: "8+", border: "border-white" },
    { label: "HACKATHON", value: "🏆 WON", border: "border-amber-400" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-20">
            <div className="inline-block mb-8 px-6 py-2 border-2 border-amber-400 transform -skew-x-6">
              <span className="text-amber-400 font-bold text-sm tracking-widest">M.SC. Computer Science</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tight">
              <span className="block text-white">RAJAGOPAL</span>
              <span className="block text-amber-400">SOMASKANDAN</span>
              <span className="block text-white text-4xl md:text-6xl mt-4">{typedText}<span className="animate-pulse">_</span></span>
            </h1>

            <div className="max-w-3xl mb-12">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed border-l-4 border-amber-400 pl-6">
                Building <span className="text-amber-400 font-bold">production-grade ML systems</span> that solve real problems.
                Specializing in fraud detection, NLP, and explainable AI with <span className="text-white font-bold">XGBoost, SHAP</span>, and modern transformer architectures.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 mb-16">
              <button
                onClick={() => setActiveTab('projects')}
                className="group relative px-8 py-4 bg-amber-400 text-black font-bold uppercase tracking-wider text-sm overflow-hidden transition-all duration-300 hover:bg-white"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Code size={20} />
                  VIEW PROJECTS
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </button>

              <a
                href="/Rajagopal_Somaskandan_Resume.pdf"
                download
                className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3"
              >
                <Download size={20} />
                RESUME
              </a>

              <button
                onClick={() => setActiveTab('contact')}
                className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-bold uppercase tracking-wider text-sm hover:bg-amber-400 hover:text-black transition-all duration-300 flex items-center gap-3"
              >
                <Mail size={20} />
                CONTACT
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`relative p-8 border-2 ${metric.border} transform hover:-translate-y-2 transition-all duration-300`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                <div className="text-sm font-bold text-gray-400 tracking-widest mb-2">{metric.label}</div>
                <div className="text-5xl font-black text-white">{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-10 text-white">
              <span className="border-b-4 border-amber-400 pb-2">TECH ARSENAL</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="aspect-square border-2 border-gray-800 hover:border-amber-400 flex flex-col items-center justify-center gap-3 transition-all duration-300 group cursor-pointer bg-black/50"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <tech.icon className={`${tech.color} group-hover:scale-125 transition-transform duration-300`} size={32} />
                  <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-wider">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathon Win Banner */}
          <div className="mb-12 border-2 border-white bg-gradient-to-r from-white/5 to-transparent p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="text-5xl">🏆</div>
            <div className="flex-1">
              <div className="text-xs font-bold text-amber-400 tracking-widest mb-1">HACKATHON WINNER — INDUSTRY INNOVATION '26</div>
              <h3 className="text-2xl font-black text-white mb-1">Best Industry Innovation Award</h3>
              <p className="text-gray-400 text-sm">Defeated 63+ teams from institutions across India with the CareerGenie AI platform. Organized with ATRIBS and Bluewind Innovations at Sathyabama Institute.</p>
            </div>
            <button
              onClick={() => setActiveTab('projects')}
              className="px-6 py-3 border-2 border-amber-400 text-amber-400 font-bold uppercase tracking-wider text-sm hover:bg-amber-400 hover:text-black transition-all duration-300 whitespace-nowrap flex items-center gap-2"
            >
              SEE PROJECT <ArrowRight size={16} />
            </button>
          </div>

          {/* Featured Work Teaser */}
          <div className="border-2 border-amber-400 p-12 transform hover:scale-105 transition-all duration-500 bg-gradient-to-br from-amber-400/5 to-transparent">
            <div className="flex items-start justify-between gap-8 flex-col md:flex-row">
              <div className="flex-1">
                <div className="text-sm font-bold text-amber-400 tracking-widest mb-4">FEATURED PROJECT</div>
                <h3 className="text-3xl md:text-4xl font-black mb-4 text-white">FinGuard Pro</h3>
                <p className="text-lg text-gray-300 mb-6">
                  End-to-end fraud detection pipeline with <span className="text-amber-400">94% recall</span> and
                  <span className="text-amber-400"> ROC-AUC 0.995</span>. Published in IEEE ICAAIC 2025.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-amber-400/20 border border-amber-400 text-amber-400 text-xs font-bold">XGBOOST</span>
                  <span className="px-4 py-2 bg-amber-400/20 border border-amber-400 text-amber-400 text-xs font-bold">SHAP</span>
                  <span className="px-4 py-2 bg-amber-400/20 border border-amber-400 text-amber-400 text-xs font-bold">FASTAPI</span>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('projects')}
                className="px-8 py-4 bg-amber-400 text-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 flex items-center gap-3 whitespace-nowrap"
              >
                EXPLORE
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;