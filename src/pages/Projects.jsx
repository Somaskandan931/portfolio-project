import React, { useState } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

/**
 * Single source of truth for the Projects page.
 *
 * section : "research" | "products" | "additional"   -> which block the card appears in
 * type    : what kind of work it is (Research, Team Project, Hackathon Project, Planned ...)
 * status  : where it actually stands (Paper in progress, Presented, Planned ...) - optional
 * category: filter chip (ML, NLP, RAG, CV, Security, Fintech)
 *
 * Type and status are separate on purpose: a project can be Research and still
 * be In Progress. Only label something live/published/completed when it is.
 * Set `hidden: true` to keep an entry in the file without rendering it.
 */
const projects = [
  // ───────────────────────── Research & AI Systems ─────────────────────────
  {
    section: "research",
    title: "Prompt Aegis",
    subtitle: "AI Agent Security & Governance Gateway",
    category: "Security",
    type: "Research",
    status: "Paper in progress",
    description:
      "Post-generation governance gateway that sits between AI agents and their tools. Explores tool-permission checks, policy enforcement, risk scoring, rate limiting, prompt-injection evaluation, and audit logging for tool-using agents.",
    tech: ["FastAPI", "LangGraph", "PostgreSQL", "Redis", "React"],
    metrics: ["Policy Enforcement", "Risk Scoring", "Prompt-Injection Testing", "Audit Logging"],
    impact:
      "A controllable, auditable layer for tool-using AI agents instead of trusting them blindly. Research paper in preparation.",
    link: "https://github.com/Somaskandan931/PromptAegis",
    demo: "",
  },
  {
    section: "research",
    title: "AI Smoke Watch",
    subtitle: "Vehicle Exhaust Smoke Detection & Civic Reporting",
    category: "CV",
    type: "Research",
    status: "Paper in progress",
    description:
      "Comparative evaluation of YOLOv8n/s, YOLO11n/s and MobileNetV3-FPN Faster R-CNN for visible vehicle-exhaust smoke detection. A Flutter + FastAPI prototype keeps smoke detection, number-plate detection, OCR and civic reporting as separate stages, with user confirmation before anything is reported.",
    tech: ["YOLOv8", "YOLO11", "Faster R-CNN", "OCR", "Flutter", "FastAPI"],
    metrics: ["5 Detectors Benchmarked", "Staged Pipeline", "Human-Reviewed Reporting"],
    impact:
      "Explores how smoke detection can support civic air-quality reporting without automating accusations.",
    link: "https://github.com/Somaskandan931/AI-SMOKE-WATCH",
    demo: "",
  },
  {
    section: "research",
    title: "Vehicle Emission Intelligence",
    subtitle: "Edge AI & Predictive Emission Analytics",
    category: "ML",
    type: "Research",
    status: "In progress",
    description:
      "In-progress research system for vehicle exhaust emission forecasting using a hybrid Bi-LSTM + Uni-LSTM model, with a VEEI index, a DEHS score, and a monitoring dashboard. Built around real driving emissions (PEMS) data.",
    tech: ["PyTorch", "Bi-LSTM", "Time-Series Forecasting", "Explainability", "Dashboard"],
    metrics: ["Hybrid Bi-LSTM + Uni-LSTM", "Real PEMS Data", "Explainable Assessment"],
    impact:
      "Aims to turn raw tailpipe measurements into forecasts and indices that support regulatory compliance. Ongoing work, not a completed publication.",
    link: "https://github.com/Somaskandan931/Vehicle-Emission-Intelligence",
    demo: "",
  },
  {
    section: "research",
    title: "SourceUp",
    subtitle: "Constraint-Aware & Explainable Supplier Ranking",
    category: "ML",
    type: "Research",
    status: "Presented · IEEE ICECA 2026",
    description:
      "Supplier discovery pipeline for SME procurement over 1.27M records. Sentence-BERT + FAISS retrieval, cross-encoder reranking, LightGBM LambdaRank trained on 23K+ supplier–query pairs, SHAP explanations for every ranked result, and fairness evaluation. The constraint-aware variant is framed as a fairness/stability trade-off, not a strictly better ranker.",
    tech: ["Sentence-BERT", "FAISS", "Cross-Encoder", "LightGBM LambdaRank", "SHAP", "Redis", "Java", "Selenium"],
    metrics: ["1.27M Records", "23K+ Query Pairs", "NDCG@10 0.744", "ICECA 2026"],
    impact:
      "Presented at IEEE ICECA 2026 (Coimbatore). Improves supplier sourcing with explainable ranking for decision support.",
    link: "https://github.com/Somaskandan931/SourceUp",
    demo: "https://drive.google.com/file/d/1DbSymRpBRE23KeZ_wRbQQlbEPcNqokz8/view?usp=sharing",
  },

  // ─────────────────── AI Products & Collaborative Engineering ───────────────────
  {
    section: "products",
    title: "AlloraChat",
    subtitle: "WhatsApp-Native AI Sales Agent",
    category: "RAG",
    type: "Team Project",
    status: "Internship project",
    description:
      "WhatsApp-based AI assistant for businesses, designed around grounded conversations, quotation generation, and appointment booking.",
    tech: ["FastAPI", "Next.js", "LangGraph", "PostgreSQL + pgvector", "Redis / Celery", "Docker"],
    metrics: ["Grounded Conversations", "Quotation Generation", "Appointment Booking"],
    contribution: "My role: AI/ML Lead on the team, covering the conversational agent, RAG and LangGraph workflows.",
    impact: "Built collaboratively; see the team repository for the full system.",
    link: "https://github.com/AlloraTechOfficial/AlloraChat",
    demo: "",
  },
  {
    section: "products",
    title: "JanSetu + DRUNIX",
    subtitle: "Financial-Inclusion Hackathon Concept",
    category: "Fintech",
    type: "Hackathon Project",
    status: "Concept",
    description:
      "Citi Bank hackathon concept combining a consent-driven Financial Passport with institutional verification, trust, and audit mechanisms.",
    tech: ["Explainable AI (SHAP)", "Consent & data minimisation", "Credential verification", "Audit trails"],
    metrics: ["Consent-Driven Passport", "Verification & Trust", "Audit Infrastructure"],
    impact: "A financial-inclusion concept built with a hackathon team.",
    link: "https://github.com/GANESH312006/sh_citi_bank_hackathon",
    demo: "",
  },
  {
    section: "products",
    title: "DeedTrace",
    subtitle: "Property Title Due-Diligence Copilot",
    category: "NLP",
    type: "Planned",
    status: "Not yet implemented",
    description:
      "Planned property-document due-diligence copilot intended to extract details from deeds, reconstruct chains of title, and surface cited red flags for human review.",
    tech: [],
    metrics: ["Document Extraction", "Title-Chain Reconstruction", "Cited Red Flags", "Human Review"],
    impact: "Intended capabilities only. Implementation has not started, and no results are claimed.",
    link: "",
    demo: "",
  },
  {
    section: "products",
    title: "Momentum AI",
    subtitle: "AI-Powered Idea Execution Platform",
    category: "ML",
    type: "Personal Project",
    status: "Active",
    description:
      "Full-stack AI platform that transforms raw ideas into structured project roadmaps, adaptive RL-generated schedules, and auto-built Kanban boards. Features a PPO-based reinforcement learning scheduler, an Idea Survival Score predictor (XGBoost), a trend analyzer, and voice-enabled task management via OpenAI Whisper.",
    tech: ["FastAPI", "React", "MongoDB", "Stable-Baselines3 (PPO)", "XGBoost", "OpenAI Whisper", "Docker"],
    metrics: ["RL Scheduler (PPO)", "Idea Survival Score", "Voice Commands", "Kanban Auto-Gen"],
    impact:
      "Closes the \"idea blackhole\": converting concepts into actionable, scheduled, and trackable projects for students, developers, and hackathon teams.",
    link: "https://github.com/Somaskandan931/Momentum_AI",
    demo: "https://drive.google.com/file/d/16dOdCdAGE-N_g294UMcnlNi9_RLrUtsp/view?usp=sharing",
  },

  // ───────────────────────────── Additional Projects ─────────────────────────────
  {
    section: "additional",
    title: "CareerGenie",
    subtitle: "AI Career Intelligence Platform (RAG + LTR + Multi-Agent)",
    category: "RAG",
    type: "Hackathon Winner 🏆",
    description:
      "Resume parsing, ATS scoring, semantic job matching, and mock interview generation. RAG retrieval with MiniLM embeddings + ChromaDB, BPR learning-to-rank, and a propose–critique–synthesise multi-agent validation system.",
    tech: ["FastAPI", "React", "Ollama (LLaMA 3.2)", "ChromaDB", "Sentence-Transformers"],
    metrics: ["Best Industry Innovation Award", "Semantic Search", "Multi-Agent"],
    impact: "Won Best Industry Innovation Award at Industry Innovation '26 against 63+ teams.",
    link: "https://github.com/Somaskandan931/CareerGenie",
    demo: "https://drive.google.com/file/d/1bzKgHFzkdb9tGm2GzU2xQyOVL-soQPkW/view?usp=sharing",
  },
  {
    section: "additional",
    title: "FinGuard Pro",
    subtitle: "Explainable Fraud Detection",
    category: "ML",
    type: "Research",
    status: "IEEE ICAAIC 2025",
    description:
      "Fraud detection pipeline using XGBoost on imbalanced UPI transactions, with SHAP-based explainability for compliance and audit workflows and automated PDF/ZIP reporting for investigators.",
    tech: ["XGBoost", "SHAP", "FastAPI", "Streamlit", "SQL"],
    metrics: ["94% Recall", "ROC-AUC 0.995", "<3s Latency"],
    impact: "Transaction-level root-cause analysis for fraud investigation.",
    link: "https://github.com/Somaskandan931/FinGuardPro",
    demo: "https://drive.google.com/file/d/1LTMYP7VPCpklF0AAOyjAVMimyFERYrCS/view?usp=sharing",
  },
  {
    section: "additional",
    title: "PaperMind",
    subtitle: "Semantic Paper Recommender",
    category: "RAG",
    description:
      "Academic paper recommender using vector embeddings and LLM-based relevance explanations.",
    tech: ["OpenAI API", "FAISS", "FastAPI", "React"],
    metrics: ["Semantic Scholar API", "Vector Search"],
    impact: "Accelerates research discovery through semantic understanding.",
    link: "https://github.com/Somaskandan931/PaperMind",
    demo: "https://drive.google.com/file/d/1-phNt-Mw1EcSic8PP1Ris-BR6nwAM_We/view?usp=sharing",
  },
  {
    section: "additional",
    title: "S.A.F.E",
    subtitle: "Crowd Anomaly Detection",
    category: "CV",
    description:
      "Privacy-preserving real-time crowd risk detection using optical flow aggregation and unsupervised anomaly detection for CCTV monitoring. Global motion compensation reduces false positives by 40–60%.",
    tech: ["OpenCV", "Farneback Optical Flow", "MAD", "FastAPI", "Streamlit"],
    metrics: ["ROC-AUC 0.8391", "40–60% Fewer False Positives"],
    impact: "Early crowd escalation detection without retraining on new domains.",
    link: "https://github.com/Somaskandan931/S.A.F.E",
    demo: "https://drive.google.com/file/d/1ASMneQJORP1C4Qyo42KwxwXffuGKLMeD/view?usp=sharing",
  },
  {
    section: "additional",
    title: "BrainDUMP",
    subtitle: "Local-First Productivity App",
    category: "ML",
    description:
      "Local-first personal productivity app with a FastAPI backend, a Next.js frontend, and local AI through Ollama.",
    tech: ["FastAPI", "Next.js", "Ollama"],
    metrics: ["Local-First", "Local AI"],
    impact: "Keeps notes and AI assistance on the user's own machine.",
    link: "https://github.com/Somaskandan931/BrainDUMP",
    demo: "",
  },
  {
    section: "additional",
    title: "Sathyabama IntelliGrade",
    subtitle: "Automated Academic Assessment & Feedback",
    category: "NLP",
    description:
      "Automated academic assessment and feedback system built with NLP and machine learning. Final grades are meant to keep human review.",
    tech: ["Python", "NLP", "ML"],
    metrics: [],
    impact: "",
    link: "https://github.com/Somaskandan931/Sathyabama-IntelliGrade",
    demo: "",
  },
  {
    section: "additional",
    title: "EXPLAIN",
    subtitle: "Multilingual Fake News Detection",
    category: "NLP",
    description:
      "Transformer-based multilingual fake news detection across 30+ languages with hybrid routing for low-resource scenarios, combining XLM-R and IndicBERT on 86k+ samples.",
    tech: ["XLM-R", "IndicBERT", "FastText", "PyTorch"],
    metrics: ["Macro-F1 0.914", "30+ Languages", "86k+ Samples"],
    impact: "Scalable misinformation detection across diverse linguistic contexts.",
    link: "https://github.com/Somaskandan931/EXPLAIN",
    demo: "",
  },
  {
    section: "additional",
    title: "Redline",
    subtitle: "Preventive Healthcare Chatbot",
    category: "NLP",
    description:
      "India-centric, multilingual preventive healthcare chatbot using IndicBERT for intent classification with LLM fallback (Groq LLaMA 3.3) and ethical guardrails, delivered via the Telegram API.",
    tech: ["IndicBERT", "Groq LLaMA 3.3", "FastAPI", "Telegram Bot API"],
    metrics: ["82.4% Intent Accuracy", "95.6% Safety Filtering"],
    impact: "First-touch health awareness while limiting medical misinformation across Indian languages.",
    link: "https://github.com/Somaskandan931/Redline",
    demo: "https://drive.google.com/file/d/1X8bDW5r7MXTWSg1QwieaDN-UpV8y10wD/view?usp=sharing",
  },
  {
    section: "additional",
    title: "MonoSplat",
    subtitle: "Single-Video 3D Reconstruction Pipeline",
    category: "CV",
    type: "Internship Project",
    description:
      "Converts RGB video into interactive Gaussian Splat scenes viewable in the browser: COLMAP camera pose estimation, GPU Gaussian Splat training, and a hybrid CPU–GPU architecture with local preprocessing and cloud training.",
    tech: ["PyTorch", "FastAPI", "COLMAP", "FFmpeg", "Three.js"],
    metrics: ["30+ FPS Rendering", "SfM Pose Estimation", "Browser Viewable"],
    impact: "Internship deliverable at InnoXR Labs.",
    link: "https://github.com/Somaskandan931",
    demo: "",
  },
  {
    section: "additional",
    title: "MarketIQ",
    subtitle: "Multi-Asset Price Prediction — Indian Markets",
    category: "ML",
    description:
      "Price prediction and risk analytics for Indian stocks, indices, commodities, currencies, and crypto. A Transformer-based quantile regression model produces probabilistic forecasts (Q10/Q50/Q90) with SHAP explainability and risk metrics including VaR, CVaR, Sharpe ratio, and max drawdown.",
    tech: ["TensorFlow", "Transformer", "FastAPI", "React", "SHAP", "yfinance"],
    metrics: ["Q10/Q50/Q90 Forecasts", "50+ Assets", "VaR & CVaR"],
    impact: "Uncertainty-aware forecasts across NSE stocks, Nifty 50, gold, crude oil, and forex pairs via a REST API.",
    link: "https://github.com/Somaskandan931/MarketIQ",
    demo: "https://drive.google.com/file/d/1qnqGeZ-yZCeWEGiNG-OGyXd-j1UnLp38/view?usp=sharing",
  },
];

const sections = [
  {
    id: "research",
    title: "RESEARCH & AI SYSTEMS",
    blurb: "Active research and experimental systems. Labels show the real stage of each project.",
    featured: true,
  },
  {
    id: "products",
    title: "AI PRODUCTS & COLLABORATIVE ENGINEERING",
    blurb: "Applications built with teams, hackathon concepts, and planned work, clearly marked.",
  },
  {
    id: "additional",
    title: "ADDITIONAL PROJECTS",
    blurb: "Earlier and supporting work, kept discoverable without competing with current priorities.",
    compact: true,
  },
];

const filters = ["All", "ML", "NLP", "RAG", "CV", "Security", "Fintech"];

const ProjectCard = ({ project, featured, compact }) => (
  <div
    className={`border-2 transition-all duration-500 hover:-translate-y-2 ${
      featured
        ? "border-amber-400 bg-gradient-to-br from-amber-400/10 to-transparent"
        : "border-gray-800 hover:border-amber-400"
    }`}
  >
    <div className={compact ? "p-6" : "p-8"}>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex flex-wrap gap-2">
            {project.type && (
              <span className="px-3 py-1 bg-amber-400 text-black text-xs font-bold uppercase tracking-wider">
                {project.type}
              </span>
            )}
            {project.status && (
              <span className="px-3 py-1 border border-amber-400 text-amber-400 text-xs font-bold uppercase tracking-wider">
                {project.status}
              </span>
            )}
          </div>
          <div className="px-3 py-1 bg-gray-900 border border-gray-700 text-gray-400 text-xs font-bold">
            {project.category}
          </div>
        </div>
        <h3 className={`${compact ? "text-2xl" : "text-3xl"} font-black text-white mb-2 leading-tight`}>
          {project.title}
        </h3>
        {project.subtitle && <p className="text-sm text-gray-400 mb-2">{project.subtitle}</p>}
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

      {project.contribution && (
        <p className="text-sm text-amber-400 mb-6 border-l-4 border-amber-400 pl-4">{project.contribution}</p>
      )}

      {project.metrics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.metrics.map((metric, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-amber-400/20 border border-amber-400 text-amber-400 text-xs font-bold"
            >
              {metric}
            </span>
          ))}
        </div>
      )}

      {project.tech.length > 0 && (
        <div className="mb-6 pb-6 border-b border-gray-800">
          <div className="text-xs text-gray-500 font-bold mb-2 tracking-widest">TECH STACK</div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="text-xs text-gray-400 font-mono">
                {t}
                {i < project.tech.length - 1 && " /"}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.impact && (
        <div className="mb-6">
          <div className="text-xs text-gray-500 font-bold mb-2 tracking-widest">
            {project.type === "Planned" ? "NOTE" : "IMPACT"}
          </div>
          <p className="text-sm text-gray-400 italic">{project.impact}</p>
        </div>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-3">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-sm uppercase hover:bg-amber-400 transition-all duration-300"
          >
            <Github size={16} />
            CODE
          </a>
        ) : (
          <span className="px-6 py-3 border-2 border-gray-700 text-gray-500 font-bold text-sm uppercase">
            REPO COMING SOON
          </span>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-amber-400 text-amber-400 font-bold text-sm uppercase hover:bg-amber-400 hover:text-black transition-all duration-300"
          >
            <ExternalLink size={16} />
            DEMO
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");

  const visible = projects.filter((p) => !p.hidden && (filter === "All" || p.category === filter));

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            <span className="text-white">MY</span>
            <br />
            <span className="text-amber-400">PROJECTS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Research and engineering across AI agents, computer vision, and applied ML, with honest
            status labels on every project.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-3 font-bold uppercase tracking-wider text-sm transition-all duration-300 border-2 ${
                filter === f
                  ? "bg-amber-400 text-black border-amber-400"
                  : "bg-transparent text-gray-400 border-gray-700 hover:border-amber-400 hover:text-amber-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Sections */}
        {sections.map((section) => {
          const items = visible.filter((p) => p.section === section.id);
          if (items.length === 0) return null;
          return (
            <section key={section.id} className="mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-amber-400 tracking-tight mb-3">
                {section.title}
              </h2>
              <p className="text-gray-400 mb-10 max-w-3xl">{section.blurb}</p>
              <div className={`grid gap-8 ${section.compact ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}>
                {items.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    featured={section.featured}
                    compact={section.compact}
                  />
                ))}
              </div>
            </section>
          );
        })}

        {visible.length === 0 && <p className="text-gray-400 mb-20">No projects in this category yet.</p>}

        {/* Bottom CTA */}
        <div className="mt-20 border-2 border-amber-400 p-12 text-center bg-gradient-to-r from-amber-400/5 to-transparent">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">WANT TO SEE MORE?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Check out my GitHub for additional projects and contributions
          </p>
          <a
            href="https://github.com/Somaskandan931"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-amber-400 text-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300"
          >
            <Github size={20} />
            VISIT GITHUB
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
