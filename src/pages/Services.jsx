import React, { useState } from 'react';
import {
  ArrowRight, Code, GraduationCap, CheckCircle, Mail,
  Wrench, Users, Zap, FileText, Database, Bot, MessageSquare
} from 'lucide-react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'student-projects',
      number: '01',
      icon: GraduationCap,
      title: 'FINAL YEAR PROJECT MENTORING',
      tagline: 'For B.E. / M.Sc. / MCA Students',
      description:
        'I guide you through your final year project end-to-end — from topic selection to viva. ML, AI, NLP, computer vision, full-stack. You understand it, you can defend it, and it actually works.',
      offerings: [
        'Topic selection & feasibility scoping',
        'Week-by-week build plan with milestones',
        'Model training, evaluation & fine-tuning guidance',
        'FastAPI / Flask backend + React / Streamlit frontend',
        'IEEE-format project report & synopsis review',
        'Demo video walkthrough & presentation prep',
        'GitHub setup and version control',
        'Viva mock Q&A session before submission',
      ],
      pricing: '₹5,000 – ₹12,000',
      pricingNote: 'Depends on complexity & deadline. Discuss first.',
      turnaround: '2 – 4 weeks',
      tags: ['ML/AI', 'NLP', 'Computer Vision', 'Full-Stack', 'RAG'],
      featured: true,
    },
    {
      id: 'viva-prep',
      number: '02',
      icon: MessageSquare,
      title: 'VIVA PREP & PROJECT EXPLANATION',
      tagline: 'Understand Your Own Project — Before the Examiner Does',
      description:
        'Already have a project but not confident presenting it? I walk you through every part of your code and system so you can answer any examiner question with clarity. One session, no fluff.',
      offerings: [
        '90-minute walkthrough of your entire project',
        'Likely viva questions with model answers',
        'Technical concept explanation (what, why, how)',
        'Common examiner traps & how to handle them',
        'Confidence coaching for on-the-spot questions',
      ],
      pricing: '₹800 – ₹1,500',
      pricingNote: 'Per session. Book 2–3 days before viva.',
      turnaround: '1 session (90 min)',
      tags: ['Viva Prep', 'Project Explanation', 'ML', 'Full-Stack', 'Any Domain'],
      featured: false,
    },
    {
      id: 'mini-projects',
      number: '03',
      icon: Code,
      title: 'MINI PROJECTS & COURSEWORK',
      tagline: 'Semester Submissions, Assignments & Lab Work',
      description:
        'Need a working mini project fast? Clean, well-commented code for semester submissions — Python, Java, web dev, data science, whatever your syllabus demands.',
      offerings: [
        'Mini project ideation & scoping',
        'Complete source code with comments',
        'Basic report & README',
        'Debugging & fixing broken code',
        'Unit-wise assignment support',
      ],
      pricing: '₹500 – ₹2,500',
      pricingNote: 'Per deliverable. Tight deadline? Ask anyway.',
      turnaround: '2 – 5 days',
      tags: ['Python', 'Java', 'Web Dev', 'Data Science', 'Machine Learning'],
      featured: false,
    },
    {
      id: 'ieee-paper',
      number: '04',
      icon: FileText,
      title: 'IEEE PAPER ASSISTANCE',
      tagline: 'From Someone Who Has Actually Published',
      description:
        'I am IEEE-published (ICAAIC 2025). I help you format your paper correctly, structure your literature review, and get it conference-ready — without ghostwriting your research.',
      offerings: [
        'IEEE LaTeX / Word template formatting',
        'Literature review structuring & gap analysis',
        'Abstract, introduction & conclusion review',
        'Citation management (BibTeX / APA)',
        'Plagiarism reduction guidance',
        'Camera-ready & submission checklist',
      ],
      pricing: '₹2,000 – ₹6,000',
      pricingNote: 'Based on scope. Full paper vs specific sections.',
      turnaround: '3 – 7 days',
      tags: ['LaTeX', 'IEEE Format', 'Research Writing', 'Citation', 'Academic'],
      featured: false,
    },
    {
      id: 'ai-automation',
      number: '05',
      icon: Bot,
      title: 'AI AUTOMATION FOR SMALL BUSINESSES',
      tagline: 'Cut Repetitive Work. You Own the Code.',
      description:
        'I build AI-powered automation tools for small businesses — WhatsApp chatbots, document Q&A systems, lead qualification bots, and workflow automations using LangChain and n8n. No monthly SaaS subscriptions. You own everything.',
      offerings: [
        'WhatsApp FAQ chatbot (n8n + Twilio)',
        'Website RAG chatbot on your documents',
        'Lead qualification & auto-response bot',
        'n8n workflow automation (any business process)',
        'Internal document Q&A system',
        '1 month post-launch support & fixes',
      ],
      pricing: '₹8,000 – ₹30,000',
      pricingNote: 'One-time build. Optional ₹1,500–₹3,000/month maintenance.',
      turnaround: '1 – 3 weeks',
      tags: ['LangChain', 'n8n', 'WhatsApp API', 'RAG', 'FastAPI', 'Automation'],
      featured: true,
    },
    {
      id: 'saas-mvp',
      number: '06',
      icon: Zap,
      title: 'SAAS MVP FOR SMALL BUSINESSES',
      tagline: 'For Shops, Clinics, Tuition Centers & Local Businesses',
      description:
        'I build lightweight, affordable web tools for small businesses that eliminate daily manual work — order tracking, billing, appointment booking, customer management, and more.',
      offerings: [
        'Requirement gathering & scoping session',
        'Full-stack MVP (React + FastAPI)',
        'WhatsApp / SMS notification integration',
        'UPI / Razorpay payment setup',
        'Cloud deployment (Netlify + Render)',
        '1 month post-launch support',
      ],
      pricing: '₹10,000 – ₹30,000',
      pricingNote: 'One-time build cost. Optional ₹500–₹1,500/month maintenance.',
      turnaround: '3 – 6 weeks',
      tags: ['React', 'FastAPI', 'WhatsApp API', 'Razorpay', 'Cloud Deploy'],
      featured: false,
    },
    {
      id: 'ml-consulting',
      number: '07',
      icon: Database,
      title: 'CUSTOM ML / AI BUILDS',
      tagline: 'For Startups & Small Product Teams',
      description:
        'Need a fraud detection model, semantic search system, RAG pipeline, or custom ML feature for your product? I scope, build, and deliver production-ready solutions with full documentation and handover.',
      offerings: [
        'Problem scoping & feasibility analysis',
        'Data pipeline design & cleaning',
        'Model selection, training & evaluation',
        'FastAPI inference endpoint deployment',
        'SHAP / explainability layer',
        'Full documentation & code handover',
      ],
      pricing: '₹15,000 – ₹60,000+',
      pricingNote: 'Scoped per project after discovery call.',
      turnaround: '4 – 10 weeks',
      tags: ['XGBoost', 'SHAP', 'NLP', 'RAG', 'LangChain', 'FastAPI', 'Production ML'],
      featured: false,
    },
  ];

  const processSteps = [
    { step: '01', title: 'REACH OUT', desc: 'Drop a message on WhatsApp or email with your requirement. No forms, no bureaucracy.' },
    { step: '02', title: 'SCOPING CALL', desc: 'We discuss scope, timeline, and deliverables. Free. No commitment.' },
    { step: '03', title: 'AGREEMENT', desc: 'Simple written confirmation of deliverables, deadline, and price. 50% upfront for project work.' },
    { step: '04', title: 'BUILD', desc: 'I build, keep you updated, and iterate based on your feedback throughout.' },
    { step: '05', title: 'DELIVER', desc: 'Final delivery with documentation, code handover, and post-launch support window.' },
  ];

  const whyMe = [
    { number: '10+', label: 'PROJECTS SHIPPED' },
    { number: '1', label: 'IEEE PUBLISHED' },
    { number: '🏆', label: 'NATIONAL WINNER' },
    { number: '63+', label: 'TEAMS DEFEATED' },
  ];

  const quickServices = [
    { label: 'Viva prep session', price: '₹800', time: '90 min' },
    { label: 'Debug my broken code', price: '₹500', time: '24 hrs' },
    { label: 'Mini project — Python/Java', price: '₹1,000', time: '3 days' },
    { label: 'IEEE paper formatting', price: '₹2,000', time: '3 days' },
    { label: 'WhatsApp chatbot (basic)', price: '₹8,000', time: '1 week' },
    { label: 'FYP full mentoring', price: '₹5,000+', time: '2–4 weeks' },
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
              From final year project mentoring and IEEE papers to AI automation and custom ML pipelines —
              <span className="text-amber-400 font-bold"> production-grade delivery, honest pricing.</span>
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

        {/* Quick Pricing Reference */}
        <div className="mb-20">
          <h2 className="text-2xl font-black text-white mb-6 tracking-tight">
            <span className="border-b-4 border-amber-400 pb-2">QUICK PRICING REFERENCE</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {quickServices.map((s, idx) => (
              <div key={idx} className="flex items-center justify-between border border-gray-800 hover:border-amber-400 px-5 py-4 transition-all duration-300 group bg-gradient-to-br from-gray-900/40 to-black">
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">{s.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5 font-mono">{s.time} turnaround</div>
                </div>
                <div className="text-amber-400 font-black text-lg ml-4 whitespace-nowrap">{s.price}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-3 font-mono">All prices are starting points. Final cost depends on scope after discussion.</p>
        </div>

        {/* Services Grid */}
        <div className="mb-24">
          <h2 className="text-4xl font-black text-white mb-12 tracking-tight">
            <span className="border-b-4 border-amber-400 pb-2">SERVICES</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
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
                  <div className={`overflow-hidden transition-all duration-500 ${activeService === service.id ? 'max-h-[500px] mt-6' : 'max-h-0'}`}>
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
                    {activeService === service.id ? 'SHOW LESS' : "SEE WHAT'S INCLUDED"}
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

        {/* Student callout */}
        <div className="mb-20 border-2 border-white bg-gradient-to-r from-white/5 to-transparent p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <Users className="text-amber-400 flex-shrink-0" size={48} />
            <div className="flex-1">
              <div className="text-xs font-bold text-amber-400 tracking-widest mb-2">FOR STUDENTS</div>
              <h3 className="text-2xl font-black text-white mb-2">
                Tight budget? Let's figure something out.
              </h3>
              <p className="text-gray-400">
                Prices above are starting points. If you're a student with a real deadline and a tight budget, reach out anyway — I work with people, not rate cards.
              </p>
            </div>
            <a
              href="https://wa.me/917200288242"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-amber-400 text-amber-400 font-bold uppercase tracking-wider text-sm hover:bg-amber-400 hover:text-black transition-all duration-300 whitespace-nowrap flex items-center gap-2"
            >
              WHATSAPP ME <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Business callout */}
        <div className="mb-20 border-2 border-amber-400 bg-gradient-to-r from-amber-400/10 to-transparent p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <Bot className="text-amber-400 flex-shrink-0" size={48} />
            <div className="flex-1">
              <div className="text-xs font-bold text-amber-400 tracking-widest mb-2">FOR BUSINESSES</div>
              <h3 className="text-2xl font-black text-white mb-2">
                Automate the repetitive. Keep the revenue.
              </h3>
              <p className="text-gray-400">
                WhatsApp chatbots, document Q&A, lead bots, workflow automation — built once, owned by you. No monthly SaaS subscriptions eating your margin.
              </p>
            </div>
            <a
              href="mailto:somaskandan931@gmail.com"
              className="px-6 py-3 bg-amber-400 text-black font-bold uppercase tracking-wider text-sm hover:bg-white transition-all duration-300 whitespace-nowrap flex items-center gap-2"
            >
              GET A QUOTE <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Big CTA */}
        <div className="relative border-4 border-amber-400 p-16 text-center bg-gradient-to-br from-amber-400/10 to-transparent overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 border-r-4 border-b-4 border-amber-400"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-l-4 border-t-4 border-amber-400"></div>
          <div className="relative z-10">
            <Wrench className="mx-auto mb-6 text-amber-400" size={56} />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              READY TO GET<br />STARTED?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Drop a message with your requirement. I reply within 24 hours.
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
            Usually responds within 24 hours · Based in Chennai, India (GMT+5:30)
          </p>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;