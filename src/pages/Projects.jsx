import React, { useState } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "FinGuard Pro",
      subtitle: "Explainable Fraud Detection",
      category: "ML",
      description: "End-to-end fraud detection pipeline using XGBoost on imbalanced UPI transactions with SHAP-based explainability for compliance and audit workflows. Includes automated PDF/ZIP reporting pipelines for fraud investigation.",
      tech: ["XGBoost", "SHAP", "FastAPI", "Streamlit", "SQL"],
      metrics: ["94% Recall", "ROC-AUC 0.995", "<3s Latency"],
      impact: "Delivered transaction-level root-cause analysis for real-world fraud detection systems.",
      link: "https://github.com/Somaskandan931/FinGuardPro",
      demo: "https://drive.google.com/file/d/1LTMYP7VPCpklF0AAOyjAVMimyFERYrCS/view?usp=sharing",
      status: "IEEE PUBLISHED",
      featured: true
    },
    {
      title: "CareerGenie",
      subtitle: "AI Career Intelligence Platform (RAG + LTR + Multi-Agent)",
      category: "RAG",
      description: "AI career platform integrating resume parsing, ATS scoring, semantic job matching, and mock interview generation. Implements RAG-based retrieval using MiniLM embeddings + ChromaDB, adaptive ranking using BPR learning-to-rank, and a multi-agent validation system (propose–critique–synthesise).",
      tech: ["FastAPI", "React", "Ollama (LLaMA 3.2)", "ChromaDB", "Sentence-Transformers"],
      metrics: ["Hackathon Winner 🏆", "Semantic Search", "Multi-Agent"],
      impact: "Won Best Industry Innovation Award at Industry Innovation '26 — defeating 63+ teams from institutions across India.",
      link: "https://github.com/Somaskandan931/CareerGenie",
      demo: "https://drive.google.com/file/d/1bzKgHFzkdb9tGm2GzU2xQyOVL-soQPkW/view?usp=sharing",
      status: "HACKATHON WINNER 🏆",
      featured: true
    },
    {
      title: "EXPLAIN",
      subtitle: "Multilingual Fake News Detection",
      category: "NLP",
      description: "Transformer-based multilingual fake news detection across 30+ languages using hybrid routing for low-resource scenarios. Combines XLM-R and IndicBERT for cross-lingual generalization on 86k+ samples.",
      tech: ["XLM-R", "IndicBERT", "FastText", "PyTorch"],
      metrics: ["Macro-F1 0.914", "30+ Languages", "86k+ Samples"],
      impact: "Enabled scalable misinformation detection across diverse linguistic contexts.",
      link: "https://github.com/Somaskandan931/EXPLAIN",
      demo: "",
      status: "NLP"
    },
    {
      title: "MonoSplat",
      subtitle: "Single-Video 3D Reconstruction Pipeline",
      category: "CV",
      description: "Single-video 3D reconstruction pipeline converting RGB video into interactive Gaussian Splat scenes viewable in browser. Implements SfM-based camera pose estimation (COLMAP), GPU-based Gaussian Splat training, and a hybrid CPU–GPU architecture with local preprocessing and cloud GPU training.",
      tech: ["PyTorch", "FastAPI", "COLMAP", "FFmpeg", "Three.js"],
      metrics: ["30+ FPS Rendering", "SfM Pose Estimation", "Browser Viewable"],
      impact: "Delivered real-time 3D scene reconstruction from ordinary video as an internship deliverable at InnoXR Labs.",
      link: "https://github.com/Somaskandan931",
      demo: "",
      status: "IN PROGRESS 🔧"
    },
    {
      title: "Momentum AI",
      subtitle: "AI-Powered Idea Execution Platform",
      category: "ML",
      description: "Full-stack AI platform that transforms raw ideas into structured project roadmaps, adaptive RL-generated schedules, and auto-built Kanban boards. Features a PPO-based reinforcement learning scheduler that learns from user productivity patterns, an Idea Survival Score predictor (XGBoost), a trend analyzer for competitive differentiation, and voice-enabled task management via OpenAI Whisper.",
      tech: ["FastAPI", "React", "MongoDB", "Stable-Baselines3 (PPO)", "XGBoost", "OpenAI Whisper", "Docker"],
      metrics: ["RL Scheduler (PPO)", "Idea Survival Score", "Voice Commands", "Kanban Auto-Gen"],
      impact: "Closes the \"idea blackhole\" — converting concepts into actionable, scheduled, and trackable projects for students, developers, and hackathon teams.",
      link: "https://github.com/Somaskandan931/Momentum_AI",
      demo: "https://drive.google.com/file/d/16dOdCdAGE-N_g294UMcnlNi9_RLrUtsp/view?usp=sharing",
      status: "ACTIVE"
    },
    {
      title: "PaperMind",
      subtitle: "Semantic Paper Recommender",
      category: "RAG",
      description: "Academic paper recommender using vector embeddings and LLM-based relevance explanations.",
      tech: ["OpenAI API", "FAISS", "FastAPI", "React"],
      metrics: ["Semantic Scholar API", "Vector Search"],
      impact: "Accelerated research discovery through semantic understanding.",
      link: "https://github.com/Somaskandan931/PaperMind",
      demo: "https://drive.google.com/file/d/1-phNt-Mw1EcSic8PP1Ris-BR6nwAM_We/view?usp=sharing",
      status: "ACTIVE"
    },
    {
      title: "MarketIQ",
      subtitle: "AI-Powered Multi-Asset Price Prediction — Indian Markets",
      category: "ML",
      description: "Production-ready price prediction and risk analytics platform for Indian stocks, indices, commodities, currencies, and crypto. Uses a Transformer-based quantile regression model to produce probabilistic forecasts (Q10/Q50/Q90) with SHAP explainability and full risk metrics including VaR, CVaR, Sharpe ratio, and max drawdown.",
      tech: ["TensorFlow", "Transformer", "FastAPI", "React", "SHAP", "yfinance", "CoinGecko API"],
      metrics: ["Q10/Q50/Q90 Forecasts", "50+ Assets", "VaR & CVaR", "SHAP Explainability"],
      impact: "Delivers uncertainty-aware price forecasts across NSE stocks, Nifty 50, gold, crude oil, and major forex pairs via a production REST API.",
      link: "https://github.com/Somaskandan931/MarketIQ",
      demo: "https://drive.google.com/file/d/1qnqGeZ-yZCeWEGiNG-OGyXd-j1UnLp38/view?usp=sharing",
      status: "PRODUCTION"
    },
    {
      title: "S.A.F.E",
      subtitle: "Crowd Anomaly Detection",
      category: "CV",
      description: "Privacy-preserving real-time crowd risk detection using optical flow aggregation and unsupervised anomaly detection for CCTV monitoring. Global motion compensation reduces false positives by 40–60%.",
      tech: ["OpenCV", "Farneback Optical Flow", "MAD", "FastAPI", "Streamlit"],
      metrics: ["ROC-AUC 0.8391", "40–60% Fewer False Positives", "Real-Time"],
      impact: "Enabled early crowd escalation detection in dense environments without retraining on new domains.",
      link: "https://github.com/Somaskandan931/S.A.F.E",
      demo: "https://drive.google.com/file/d/1ASMneQJORP1C4Qyo42KwxwXffuGKLMeD/view?usp=sharing",
      status: "AI SAFETY"
    },
    {
      title: "SourceUp",
      subtitle: "Procurement Intelligence",
      category: "ML",
      description: "Semantic supplier discovery platform with learning-to-rank optimization. Built Java + Selenium pipeline for 1M+ record collection, semantic search using Sentence-BERT + FAISS, and explainability layer with feature-level insights and risk classification.",
      tech: ["Sentence-BERT", "LightGBM", "FAISS", "Redis", "Java", "Selenium"],
      metrics: ["NDCG@10 0.744", "+9.2% Relevance", "1M+ Records"],
      impact: "Improved supplier sourcing efficiency with explainable ranking for decision support.",
      link: "https://github.com/Somaskandan931/SourceUp",
      demo: "https://drive.google.com/file/d/1DbSymRpBRE23KeZ_wRbQQlbEPcNqokz8/view?usp=sharing",
      status: "CAPSTONE"
    },
    {
      title: "Redline",
      subtitle: "Preventive Healthcare Chatbot",
      category: "NLP",
      description: "India-centric, multilingual preventive healthcare chatbot using IndicBERT for intent classification with LLM fallback (Groq LLaMA 3.3) and ethical guardrails. Deployed with real-time region-specific health data via Telegram API.",
      tech: ["IndicBERT", "Groq LLaMA 3.3", "FastAPI", "Telegram Bot API", "Python"],
      metrics: ["82.4% Intent Accuracy", "95.6% Safety Filtering", "Real-Time Alerts"],
      impact: "Enabled first-touch health awareness while preventing medical misinformation across multiple Indian languages.",
      link: "https://github.com/Somaskandan931/Redline",
      demo: "https://drive.google.com/file/d/1X8bDW5r7MXTWSg1QwieaDN-UpV8y10wD/view?usp=sharing",
      status: "HEALTHCARE AI"
    }
  ];

  const filters = ["All", "ML", "NLP", "RAG", "CV"];

  const visibleProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter);

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
            Production-ready ML systems solving real-world problems
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`border-2 transition-all duration-500 ${
                project.featured
                  ? "border-amber-400 bg-gradient-to-br from-amber-400/10 to-transparent"
                  : "border-gray-800 hover:border-amber-400"
              } ${hoveredProject === idx ? "transform -translate-y-2" : ""}`}
            >
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-xs font-bold text-amber-400 tracking-widest uppercase">
                      {project.status}
                    </div>
                    <div className="px-3 py-1 bg-gray-900 border border-gray-700 text-gray-400 text-xs font-bold">
                      {project.category}
                    </div>
                  </div>
                  <h2 className="text-3xl font-black text-white mb-2 leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-4">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Metrics */}
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

                {/* Tech Stack */}
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

                {/* Impact */}
                <div className="mb-6">
                  <div className="text-xs text-gray-500 font-bold mb-2 tracking-widest">IMPACT</div>
                  <p className="text-sm text-gray-400 italic">{project.impact}</p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-sm uppercase hover:bg-amber-400 transition-all duration-300"
                  >
                    <Github size={16} />
                    CODE
                  </a>
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
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 border-2 border-amber-400 p-12 text-center bg-gradient-to-r from-amber-400/5 to-transparent">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            WANT TO SEE MORE?
          </h2>
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