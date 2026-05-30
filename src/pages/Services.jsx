import React, { useState } from 'react';
import { ArrowRight, Code, GraduationCap, CheckCircle, Mail, Wrench, Users, Zap, FileText, Database } from 'lucide-react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'student-projects',
      number: '01',
      icon: GraduationCap,
      title: 'FINAL YEAR PROJECT BUILDING',
      tagline: 'For B.E. / M.Sc. / MCA Students',
      description:
        'End-to-end final year project development in ML, AI, NLP, and full-stack. I build what your department expects — complete with documentation, demo, and presentation support.',
      offerings: [
        'Full project scoping & tech stack selection',
        'Model training, evaluation & fine-tuning',
        'FastAPI / Flask backend + React / Streamlit frontend',
        'IEEE-format project report & synopsis',
        'Demo video & presentation deck',
        'GitHub setup and version control',
      ],
      pricing: '₹5,000 – ₹15,000',
      pricingNote: 'Depends on complexity & deadline',
      turnaround: '2 – 4 weeks',
      tags: ['ML/AI', 'NLP', 'Computer Vision', 'Full-Stack', 'RAG'],
      featured: true,
    },
    {
      id: 'mini-projects',
      number: '02',
      icon: Code,
      title: 'MINI PROJECT & COURSEWORK HELP',
      tagline: 'Semester-specific, Unit-wise Delivery',
      description:
        'Need a working mini project fast? I build clean, well-commented code for semester submissions — Python, Java, web, data science, whatever your syllabus demands.',
      offerings: [
        'Mini project ideation & scoping',
        'Complete source code with comments',
        'Basic report & viva Q&A prep',
        'Debugging & fixing broken code',
        'Unit-wise assignment support',
      ],
      pricing: '₹500 – ₹2,000',
      pricingNote: 'Per deliverable',
      turnaround: '2 – 5 days',
      tags: ['Python', 'Java', 'Web Dev', 'Data Science'],
      featured: false,
    },
    {
      id: 'ieee-paper',
      number: '03',
      icon: FileText,
      title: 'IEEE PAPER ASSISTANCE',
      tagline: 'Research Formatting & Literature Support',
      description:
        'I am IEEE-published twice. I help you format your research paper correctly, structure your literature review, and prepare for conference submission — without ghostwriting.',
      offerings: [
        'IEEE LaTeX / Word template formatting',
        'Literature review structuring',
        'Abstract & conclusion rewriting',
        'Citation management (BibTeX / APA)',
        'Plagiarism reduction guidance',
        'Camera-ready submission prep',
      ],
      pricing: '₹2,000 – ₹5,000',
      pricingNote: 'Based on scope',
      turnaround: '3 – 7 days',
      tags: ['LaTeX', 'IEEE Format', 'Research', 'Academic Writing'],
      featured: false,
    },
      id: 'saas-mvp',
      number: '04',
      icon: Zap,
      title: 'SAAS MVP FOR SMALL BUSINESSES',
      tagline: 'For Shops, Clinics, Tuition Centers & Local Businesses',
      description:
        'I build lightweight, affordable SaaS tools for small businesses that eliminate daily manual work — order tracking, billing, customer management, appointment booking, and more.',
      offerings: [
        'Requirement gathering & scoping session',
        'Full-stack MVP (React + FastAPI)',
        'WhatsApp / SMS notification integration',
        'UPI / Razorpay payment setup',
        'Cloud deployment (Netlify + Render)',
        '1 month post-launch support',
      ],
      pricing: '₹8,000 – ₹25,000',
      pricingNote: 'One-time build cost. Optional ₹500–₹1,500/month maintenance.',
      turnaround: '3 – 6 weeks',
      tags: ['React', 'FastAPI', 'WhatsApp API', 'Razorpay', 'Cloud Deploy'],
      featured: true,
    },
    {
      id: 'ml-consulting',
      number: '05',
      icon: Database,
      title: 'ML / AI CONSULTING & CUSTOM BUILDS',
      tagline: 'For Startups & Small Teams',
      description:
        'Need a custom ML pipeline, a fraud detection model, a semantic search system, or an AI-powered feature for your product? I scope, build, and deliver production-ready ML solutions.',
      offerings: [
        'Problem scoping & feasibility analysis',
        'Data pipeline design & cleaning',
        'Model selection, training & evaluation',
        'FastAPI inference endpoint deployment',
        'SHAP / explainability layer',
        'Documentation & handover',
      ],
      pricing: '₹15,000 – ₹60,000+',
      pricingNote: 'Scoped per project',
      turnaround: '4 – 10 weeks',
      tags: ['XGBoost', 'SHAP', 'NLP', 'RAG', 'FastAPI', 'Production ML'],
      featured: false,
    },
  ];

  const processSteps = [
    { step: '01', title: 'REACH OUT', desc: 'Drop me a message on WhatsApp or email with your requirement.' },
    { step: '02', title: 'SCOPING CALL', desc: 'We discuss scope, timeline, and deliverables. No commitment yet.' },
    { step: '03', title: 'AGREEMENT', desc: 'Simple written confirmation of deliverables, deadline, and price.' },
    { step: '04', title: 'BUILD', desc: 'I build, keep you updated, and iterate based on your feedback.' },
    { step: '05', title: 'DELIVER', desc: 'Final delivery with documentation, code handover, and support.' },
  ];

  const whyMe = [
    { number: '10+', label: 'PROJECTS SHIPPED' },
    { number: '2×', label: 'IEEE PUBLISHED' },
    { number: '🏆', label: 'NATIONAL WINNER' },
    { number: '∞', label: 'CHAI CONSUMED' },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            <span className="text-white">WHAT I</span>
            <br />
            <span className="text-amber-400">BUILD FOR YOU</span>
          </h1>
          <div className="max-w-3xl border-l-4 border-amber-400 pl-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              From final year projects and IEEE papers to SaaS MVPs and custom ML pipelines —
              <span className="text-amber-400 font-bold"> production-grade delivery, student-friendly pricing.</span>
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {whyMe.map((item, idx) => (
            <div key={idx} className="relative border-2 border-amber-400 p-6 text-center bg-gradient-to-br from-amber-400/10 to-transparent">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              <div className="text-4xl font-black text-white mb-2">{item.number}</div>
              <div className="text-xs font-bold text-amber-400 tracking-widest">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mb-24">
          <h2 className="text-4xl font-black text-white mb-12 tracking-tight">
            <span className="border-b-4 border-amber-400 pb-2">SERVICES</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.id}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                className={`border-2 transition-all duration-500 cursor-pointer group ${
                  service.featured
                    ? 'border-amber-400 bg-gradient-to-br from-amber-400/10 to-transparent'
                    : 'border-gray-800 hover:border-amber-400'
                }`}
              >
                <div className="p-8">
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="text-5xl font-black text-amber-400 leading-none opacity-40">{service.number}</div>
                      <div>
                        <div className="text-xs font-bold text-amber-400 tracking-widest mb-1">{service.tagline}</div>
                        <h3 className="text-2xl md:text-3xl font-black text-white leading-tight group-hover:text-amber-400 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <service.icon className="text-amber-400 flex-shrink-0 mt-1" size={28} />
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-900 border border-gray-700 text-gray-400 text-xs font-mono hover:border-amber-400 hover:text-amber-400 transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Pricing Row */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-800">
                    <div>
                      <div className="text-xs font-bold text-gray-500 tracking-widest mb-1">STARTING FROM</div>
                      <div className="text-2xl font-black text-amber-400">{service.pricing}</div>
                      <div className="text-xs text-gray-500 mt-1">{service.pricingNote}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-gray-500 tracking-widest mb-1">TURNAROUND</div>
                      <div className="text-sm font-bold text-white">{service.turnaround}</div>
                    </div>
                  </div>

                  {/* Expandable Offerings */}
                  <div className={`overflow-hidden transition-all duration-500 ${activeService === service.id ? 'max-h-96 mt-6' : 'max-h-0'}`}>
                    <div className="pt-6 border-t border-gray-800">
                      <div className="text-xs font-bold text-amber-400 tracking-widest mb-4">WHAT YOU GET</div>
                      <div className="space-y-3">
                        {service.offerings.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-amber-400 flex-shrink-0 mt-0.5" size={16} />
                            <span className="text-sm text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expand CTA */}
                  <button className="mt-4 flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-amber-400 transition-colors uppercase tracking-widest">
                    {activeService === service.id ? 'SHOW LESS' : 'SEE WHAT\'S INCLUDED'}
                    <ArrowRight size={14} className={`transition-transform duration-300 ${activeService === service.id ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-black text-white mb-12 tracking-tight">
            <span className="border-b-4 border-amber-400 pb-2">HOW IT WORKS</span>
          </h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-amber-400 hidden md:block"></div>
            <div className="space-y-8">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative md:pl-20">
                  <div className="hidden md:flex absolute left-0 w-12 h-12 bg-amber-400 items-center justify-center">
                    <span className="text-black font-black text-sm">{step.step}</span>
                  </div>
                  <div className="border-2 border-gray-800 hover:border-amber-400 p-6 transition-all duration-300 bg-gradient-to-br from-gray-900/50 to-black">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="md:hidden text-xs font-black text-amber-400 tracking-widest">{step.step}</span>
                      <h3 className="text-xl font-black text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Student-specific callout */}
        <div className="mb-20 border-2 border-white bg-gradient-to-r from-white/5 to-transparent p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <Users className="text-amber-400 flex-shrink-0" size={48} />
            <div className="flex-1">
              <div className="text-xs font-bold text-amber-400 tracking-widest mb-2">FOR STUDENTS</div>
              <h3 className="text-2xl font-black text-white mb-2">
                Tight budget? Let's figure something out.
              </h3>
              <p className="text-gray-400">
                Prices above are guidelines. If you're a student with a real deadline and a tight budget, reach out anyway — I work with people, not rate cards.
              </p>
            </div>
            <a
              href="mailto:somaskandan931@gmail.com"
              className="px-6 py-3 border-2 border-amber-400 text-amber-400 font-bold uppercase tracking-wider text-sm hover:bg-amber-400 hover:text-black transition-all duration-300 whitespace-nowrap flex items-center gap-2"
            >
              TALK TO ME <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="relative border-4 border-amber-400 p-16 text-center bg-gradient-to-br from-amber-400/10 to-transparent overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 border-r-4 border-b-4 border-amber-400"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-l-4 border-t-4 border-amber-400"></div>
          <div className="relative z-10">
            <Wrench className="mx-auto mb-6 text-amber-400" size={56} />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              READY TO GET<br />STARTED?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Drop a message with your requirement and I'll get back within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:somaskandan931@gmail.com"
                className="inline-flex items-center gap-4 px-12 py-5 bg-amber-400 text-black font-bold text-lg uppercase tracking-wider hover:bg-white transition-all duration-300 group"
              >
                <Mail size={24} />
                EMAIL ME
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="https://wa.me/917200288242"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-12 py-5 border-2 border-white text-white font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 font-mono">
            Usually responds within 24 hours • Based in Chennai / Puducherry (GMT+5:30)
          </p>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;