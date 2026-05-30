import React, { useState } from 'react';
import {
  ArrowRight, Code, GraduationCap, CheckCircle, Mail,
  Wrench, Users, Zap, FileText, Database, Bot, MessageSquare,
  Clock, IndianRupee, Star, X, Send, Loader
} from 'lucide-react';

// ─── Inquiry Modal ────────────────────────────────────────────────────────────
const InquiryModal = ({ service, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/.netlify/functions/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: service.title,
          budget: form.budget || null,
          message: form.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Failed to send. Please try WhatsApp or email directly.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg border-2 border-amber-400 bg-black shadow-2xl shadow-amber-400/10">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-amber-400 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 border-2 border-amber-400 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-amber-400" size={32} />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
              <p className="text-gray-400 text-sm mb-8">
                I'll reply within 24 hours. You'll hear from me at <span className="text-amber-400">{form.email}</span>.
              </p>
              <button
                onClick={onClose}
                className="px-8 py-3 bg-amber-400 text-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300"
              >
                DONE
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-800">
                <div className="p-3 border-2 border-amber-400 bg-amber-400/10 flex-shrink-0">
                  <service.icon className="text-amber-400" size={22} />
                </div>
                <div>
                  <div className="text-xs text-amber-400 font-bold tracking-widest uppercase mb-1">Inquiry</div>
                  <h3 className="text-xl font-black text-white leading-tight">{service.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{service.price} · {service.time}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Your Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Arjun Kumar"
                    className="w-full bg-gray-900 border-2 border-gray-700 focus:border-amber-400 outline-none px-4 py-3 text-white placeholder-gray-600 text-sm transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-gray-900 border-2 border-gray-700 focus:border-amber-400 outline-none px-4 py-3 text-white placeholder-gray-600 text-sm transition-colors duration-200"
                  />
                </div>

                {/* Budget (optional) */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Budget <span className="text-gray-600 normal-case font-normal">(optional)</span>
                  </label>
                  <input
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    placeholder={`Suggested: ${service.price}`}
                    className="w-full bg-gray-900 border-2 border-gray-700 focus:border-amber-400 outline-none px-4 py-3 text-white placeholder-gray-600 text-sm transition-colors duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Tell me about your project *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="What do you need? Timeline, tech stack, special requirements..."
                    className="w-full bg-gray-900 border-2 border-gray-700 focus:border-amber-400 outline-none px-4 py-3 text-white placeholder-gray-600 text-sm transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <div className="border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-amber-400 text-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader size={18} className="animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      SEND INQUIRY
                    </>
                  )}
                </button>
              </form>

              <p className="mt-4 text-center text-xs text-gray-600">
                Or reach out directly on{' '}
                <a
                  href="https://wa.me/917200288242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const ServicesPage = () => {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [inquiryService, setInquiryService] = useState(null);

  const categories = ['All', 'For Students', 'For Businesses'];

  const services = [
    {
      id: 'student-projects',
      icon: GraduationCap,
      category: 'For Students',
      title: 'Final Year Project Mentoring',
      tagline: 'B.E. / M.Sc. / MCA — end-to-end',
      description: 'I guide you through your final year project from topic selection to viva. ML, AI, NLP, computer vision, full-stack. You understand it, you can defend it, and it actually works.',
      offerings: [
        'Topic selection & feasibility scoping',
        'Week-by-week build plan with milestones',
        'Model training, evaluation & fine-tuning',
        'FastAPI / Flask backend + React / Streamlit frontend',
        'IEEE-format report & synopsis review',
        'Demo video & presentation prep',
        'GitHub setup and version control',
        'Viva mock Q&A session',
      ],
      price: '₹5,000 – ₹12,000',
      time: '2 – 4 weeks',
      badge: 'Most Popular',
      featured: true,
    },
    {
      id: 'viva-prep',
      icon: MessageSquare,
      category: 'For Students',
      title: 'Viva Prep & Project Explanation',
      tagline: 'Understand your project before the examiner does',
      description: 'Already have a project but not confident presenting it? I walk you through every part of your code and system so you can answer any examiner question with clarity.',
      offerings: [
        '90-minute project walkthrough',
        'Likely viva questions with model answers',
        'Technical concept explanation (what, why, how)',
        'Common examiner traps & how to handle them',
        'Confidence coaching for on-the-spot questions',
      ],
      price: '₹800 – ₹1,500',
      time: '1 session (90 min)',
      badge: null,
      featured: false,
    },
    {
      id: 'mini-projects',
      icon: Code,
      category: 'For Students',
      title: 'Mini Projects & Coursework',
      tagline: 'Semester submissions, assignments & lab work',
      description: 'Need a working mini project fast? Clean, well-commented code for semester submissions — Python, Java, web dev, data science, whatever your syllabus demands.',
      offerings: [
        'Mini project ideation & scoping',
        'Complete source code with comments',
        'Basic report & README',
        'Debugging & fixing broken code',
        'Unit-wise assignment support',
      ],
      price: '₹500 – ₹2,500',
      time: '2 – 5 days',
      badge: null,
      featured: false,
    },
    {
      id: 'ieee-paper',
      icon: FileText,
      category: 'For Students',
      title: 'IEEE Paper Assistance',
      tagline: 'From someone who has actually published',
      description: 'I am IEEE-published (ICAAIC 2025). I help you format your paper correctly, structure your literature review, and get it conference-ready — without ghostwriting your research.',
      offerings: [
        'IEEE LaTeX / Word template formatting',
        'Literature review structuring & gap analysis',
        'Abstract, introduction & conclusion review',
        'Citation management (BibTeX / APA)',
        'Plagiarism reduction guidance',
        'Camera-ready & submission checklist',
      ],
      price: '₹2,000 – ₹6,000',
      time: '3 – 7 days',
      badge: null,
      featured: false,
    },
    {
      id: 'ai-automation',
      icon: Bot,
      category: 'For Businesses',
      title: 'AI Automation for Small Businesses',
      tagline: 'Cut repetitive work. You own the code.',
      description: 'WhatsApp chatbots, document Q&A systems, lead qualification bots, and workflow automations using LangChain and n8n. No monthly SaaS subscriptions — you own everything.',
      offerings: [
        'WhatsApp FAQ chatbot (n8n + Twilio)',
        'Website RAG chatbot on your documents',
        'Lead qualification & auto-response bot',
        'n8n workflow automation',
        'Internal document Q&A system',
        '1 month post-launch support & fixes',
      ],
      price: '₹8,000 – ₹30,000',
      time: '1 – 3 weeks',
      badge: 'New',
      featured: true,
    },
    {
      id: 'saas-mvp',
      icon: Zap,
      category: 'For Businesses',
      title: 'SaaS MVP for Small Businesses',
      tagline: 'Shops, clinics, tuition centers & local businesses',
      description: 'Lightweight, affordable web tools that eliminate daily manual work — order tracking, billing, appointment booking, customer management, and more.',
      offerings: [
        'Requirement gathering & scoping session',
        'Full-stack MVP (React + FastAPI)',
        'WhatsApp / SMS notification integration',
        'UPI / Razorpay payment setup',
        'Cloud deployment (Netlify + Render)',
        '1 month post-launch support',
      ],
      price: '₹10,000 – ₹30,000',
      time: '3 – 6 weeks',
      badge: null,
      featured: false,
    },
    {
      id: 'ml-consulting',
      icon: Database,
      category: 'For Businesses',
      title: 'Custom ML / AI Builds',
      tagline: 'For startups & small product teams',
      description: 'Fraud detection models, semantic search systems, RAG pipelines, or custom ML features for your product. I scope, build, and deliver production-ready solutions with full documentation.',
      offerings: [
        'Problem scoping & feasibility analysis',
        'Data pipeline design & cleaning',
        'Model selection, training & evaluation',
        'FastAPI inference endpoint deployment',
        'SHAP / explainability layer',
        'Full documentation & code handover',
      ],
      price: '₹15,000 – ₹60,000+',
      time: '4 – 10 weeks',
      badge: null,
      featured: false,
    },
  ];

  const filtered = activeCategory === 'All' ? services : services.filter(s => s.category === activeCategory);
  const selectedService = services.find(s => s.id === selected);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      {/* Inquiry Modal */}
      {inquiryService && (
        <InquiryModal
          service={inquiryService}
          onClose={() => setInquiryService(null)}
        />
      )}

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            <span className="text-white">WHAT I</span>
            <br />
            <span className="text-amber-400">BUILD FOR YOU</span>
          </h1>
          <div className="max-w-2xl border-l-4 border-amber-400 pl-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Student projects, IEEE papers, AI automation, and custom ML builds —
              <span className="text-amber-400 font-bold"> production-grade delivery, honest pricing.</span>
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { n: '10+', l: 'Projects Shipped' },
            { n: '2×', l: 'IEEE Published' },
            { n: '🏆', l: 'National Winner' },
            { n: '63+', l: 'Teams Defeated' },
          ].map((s, i) => (
            <div key={i} className="border border-amber-400/40 p-5 text-center hover:border-amber-400 transition-colors duration-300">
              <div className="text-3xl font-black text-amber-400 mb-1">{s.n}</div>
              <div className="text-xs text-gray-400 tracking-widest uppercase">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 font-bold text-sm uppercase tracking-wider border-2 transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-amber-400 text-black border-amber-400'
                  : 'text-gray-400 border-gray-700 hover:border-amber-400 hover:text-amber-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Layout: Cards + Detail Panel */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20">

          {/* Service Cards List */}
          <div className="flex-1 space-y-4">
            {filtered.map(service => (
              <div
                key={service.id}
                onClick={() => setSelected(selected === service.id ? null : service.id)}
                className={`cursor-pointer border-2 transition-all duration-300 group ${
                  selected === service.id
                    ? 'border-amber-400 bg-amber-400/5'
                    : 'border-gray-800 hover:border-gray-600'
                }`}
              >
                <div className="p-6 flex items-start gap-5">
                  {/* Icon */}
                  <div className={`p-3 border-2 flex-shrink-0 transition-colors duration-300 ${
                    selected === service.id ? 'border-amber-400 bg-amber-400/10' : 'border-gray-700 group-hover:border-amber-400/50'
                  }`}>
                    <service.icon className="text-amber-400" size={22} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className={`text-lg font-black transition-colors duration-300 ${
                          selected === service.id ? 'text-amber-400' : 'text-white group-hover:text-amber-400'
                        }`}>
                          {service.title}
                        </h3>
                        {service.badge && (
                          <span className="px-2 py-0.5 bg-amber-400 text-black text-xs font-black uppercase tracking-wider">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <ArrowRight
                        size={18}
                        className={`text-amber-400 flex-shrink-0 transition-transform duration-300 ${
                          selected === service.id ? 'rotate-90' : 'group-hover:translate-x-1'
                        }`}
                      />
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{service.tagline}</p>
                    <div className="flex items-center gap-5 text-xs">
                      <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                        <IndianRupee size={12} />
                        {service.price}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-500">
                        <Clock size={12} />
                        {service.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Inline expand on mobile */}
                {selected === service.id && (
                  <div className="lg:hidden border-t border-amber-400/30 p-6">
                    <p className="text-gray-300 text-sm leading-relaxed mb-5">{service.description}</p>
                    <div className="text-xs font-bold text-amber-400 tracking-widest mb-3">WHAT YOU GET</div>
                    <div className="space-y-2 mb-6">
                      {service.offerings.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle className="text-amber-400 flex-shrink-0 mt-0.5" size={14} />
                          <span className="text-sm text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); setInquiryService(service); }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-black font-bold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300"
                    >
                      <Send size={16} />
                      GET STARTED
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sticky Detail Panel — desktop only */}
          <div className="hidden lg:block w-96 flex-shrink-0">
            <div className="sticky top-28">
              {selectedService ? (
                <div className="border-2 border-amber-400 bg-amber-400/5 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 border-2 border-amber-400 bg-amber-400/10">
                      <selectedService.icon className="text-amber-400" size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-amber-400 font-bold tracking-widest uppercase mb-0.5">{selectedService.category}</div>
                      <h3 className="text-xl font-black text-white leading-tight">{selectedService.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{selectedService.description}</p>

                  <div className="flex gap-6 mb-6 pb-6 border-b border-amber-400/20">
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Price</div>
                      <div className="text-amber-400 font-black">{selectedService.price}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Turnaround</div>
                      <div className="text-white font-bold text-sm">{selectedService.time}</div>
                    </div>
                  </div>

                  <div className="text-xs font-bold text-amber-400 tracking-widest mb-4">WHAT YOU GET</div>
                  <div className="space-y-2.5 mb-8">
                    {selectedService.offerings.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="text-amber-400 flex-shrink-0 mt-0.5" size={14} />
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* PRIMARY CTA — opens modal */}
                  <button
                    onClick={() => setInquiryService(selectedService)}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-amber-400 text-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 group"
                  >
                    <Send size={18} />
                    GET STARTED
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="https://wa.me/917200288242"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-3 flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-700 text-gray-400 font-bold text-sm uppercase tracking-wider hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
                  >
                    WHATSAPP INSTEAD
                  </a>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-700 p-10 text-center">
                  <Star className="mx-auto mb-4 text-gray-700" size={36} />
                  <p className="text-gray-600 text-sm font-bold uppercase tracking-widest">
                    Select a service<br />to see details
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-white mb-10 tracking-tight border-b-4 border-amber-400 pb-3 inline-block">
            HOW IT WORKS
          </h2>
          <div className="grid md:grid-cols-5 gap-0">
            {[
              { n: '01', t: 'Reach Out', d: 'Fill the form or WhatsApp.' },
              { n: '02', t: 'Free Call', d: 'Scope, timeline, deliverables.' },
              { n: '03', t: 'Agreement', d: '50% upfront, rest on delivery.' },
              { n: '04', t: 'Build', d: 'Regular updates throughout.' },
              { n: '05', t: 'Deliver', d: 'Code, docs, and support window.' },
            ].map((step, idx, arr) => (
              <div key={idx} className="flex items-start md:flex-col">
                <div className="flex-1 border-2 border-gray-800 hover:border-amber-400 p-6 transition-colors duration-300 group h-full">
                  <div className="text-3xl font-black text-amber-400 mb-2 opacity-60">{step.n}</div>
                  <div className="text-sm font-black text-white mb-1 group-hover:text-amber-400 transition-colors">{step.t}</div>
                  <div className="text-xs text-gray-500">{step.d}</div>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden md:flex items-center justify-center w-0 relative">
                    <ArrowRight className="text-amber-400/40 absolute -right-3 top-6 z-10" size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Student callout */}
        <div className="mb-8 border-2 border-gray-800 hover:border-amber-400 transition-colors duration-300 p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <Users className="text-amber-400 flex-shrink-0" size={40} />
            <div className="flex-1">
              <div className="text-xs font-bold text-amber-400 tracking-widest mb-2 uppercase">For Students</div>
              <h3 className="text-xl font-black text-white mb-1">Tight budget? Reach out anyway.</h3>
              <p className="text-gray-400 text-sm">Prices are starting points. I work with people, not rate cards.</p>
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
        <div className="mb-16 border-2 border-amber-400 bg-amber-400/5 p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <Bot className="text-amber-400 flex-shrink-0" size={40} />
            <div className="flex-1">
              <div className="text-xs font-bold text-amber-400 tracking-widest mb-2 uppercase">For Businesses</div>
              <h3 className="text-xl font-black text-white mb-1">Automate the repetitive. Keep the revenue.</h3>
              <p className="text-gray-400 text-sm">Built once, owned by you. No monthly SaaS subscriptions eating your margin.</p>
            </div>
            <button
              onClick={() => {
                const svc = services.find(s => s.id === 'ai-automation');
                setInquiryService(svc);
              }}
              className="px-6 py-3 bg-amber-400 text-black font-bold uppercase tracking-wider text-sm hover:bg-white transition-all duration-300 whitespace-nowrap flex items-center gap-2"
            >
              GET A QUOTE <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Big CTA */}
        <div className="relative border-4 border-amber-400 p-16 text-center bg-amber-400/5 overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 border-r-4 border-b-4 border-amber-400"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-l-4 border-t-4 border-amber-400"></div>
          <div className="relative z-10">
            <Wrench className="mx-auto mb-6 text-amber-400" size={48} />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              READY TO GET STARTED?
            </h2>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto">
              Drop a message with your requirement. I reply within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setInquiryService(services[0])}
                className="inline-flex items-center gap-3 px-10 py-4 bg-amber-400 text-black font-bold text-base uppercase tracking-wider hover:bg-white transition-all duration-300 group"
              >
                <Send size={20} />
                SEND INQUIRY
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://wa.me/917200288242"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 border-2 border-white text-white font-bold text-base uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-gray-600 font-mono">
            Usually responds within 24 hours · Chennai, India (GMT+5:30)
          </p>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;