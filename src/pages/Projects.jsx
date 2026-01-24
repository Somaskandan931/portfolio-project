import React, { useState } from "react";
import { Github } from "lucide-react";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      title: "FinGuard Pro: Explainable Fraud Detection",
      category: "ML",
      description:
        "End-to-end fraud detection pipeline using XGBoost on imbalanced UPI transactions with SHAP-based explainability for compliance and audit workflows.",
      tech: ["XGBoost", "SHAP", "FastAPI", "SQL", "Python"],
      metrics: ["94% Recall", "ROC-AUC 0.995", "<3s Latency"],
      impact:
        "Delivered transaction-level root-cause analysis for real-world fraud detection systems.",
      link: "https://github.com/Somaskandan931/FinGuardPro",
      demo: "https://drive.google.com/file/d/1LTMYP7VPCpklF0AAOyjAVMimyFERYrCS/view?usp=sharing",
      status: "IEEE Published",
      publication: "ICAAIC 2025 (ISBN: 979-8-3315-6587-9)",
      date: "2025"
    },
    {
      title: "EXPLAIN: Multilingual Fake News Detection",
      category: "NLP",
      description:
        "Transformer-based multilingual fake news detection across 30+ languages using hybrid routing for low-resource scenarios.",
      tech: ["XLM-R", "IndicBERT", "FastText", "PyTorch"],
      metrics: ["Macro-F1 0.914", "30+ Languages", "86k+ Samples"],
      impact:
        "Enabled scalable misinformation detection across diverse linguistic contexts.",
      link: "https://github.com/Somaskandan931/EXPLAIN",
      demo: "", // Removed because no demo link provided
      status: "Research Project",
      date: "2025"
    },
    {
      title: "CareerGenie: Resume–Job Matching (RAG)",
      category: "RAG",
      description:
        "Retrieval-Augmented Generation system combining semantic retrieval with LLM reasoning for intelligent resume–job matching.",
      tech: ["Sentence-Transformers", "ChromaDB", "RAG", "Python"],
      metrics: ["Semantic Search", "Skill Gap Analysis"],
      impact:
        "Improved job relevance and automated ATS-optimized resume generation.",
      link: "https://github.com/Somaskandan931/CareerGenie",
      demo: "https://drive.google.com/file/d/1bzKgHFzkdb9tGm2GzU2xQyOVL-soQPkW/view?usp=sharing",
      status: "RAG System",
      date: "2025"
    },
    {
      title: "PaperMind: Semantic Paper Recommender",
      category: "RAG",
      description:
        "Academic paper recommender using vector embeddings and LLM-based relevance explanations.",
      tech: ["OpenAI API", "FAISS", "FastAPI", "React"],
      metrics: ["Semantic Scholar API", "Vector Search"],
      impact:
        "Accelerated research discovery through semantic understanding.",
      link: "https://github.com/Somaskandan931/PaperMind",
      demo: "https://drive.google.com/file/d/1-phNt-Mw1EcSic8PP1Ris-BR6nwAM_We/view?usp=sharing",
      status: "Active Development",
      date: "2024"
    },
    {
      title: "S.A.F.E: Crowd Anomaly Detection",
      category: "CV",
      description:
        "Real-time crowd risk detection using optical flow signals and unsupervised anomaly detection.",
      tech: ["OpenCV", "Optical Flow", "Isolation Forest", "Streamlit"],
      metrics: ["Real-Time", "Unsupervised"],
      impact:
        "Enabled early crowd escalation detection in dense environments.",
      link: "https://github.com/Somaskandan931/S.A.F.E",
      demo: "https://drive.google.com/file/d/1ASMneQJORP1C4Qyo42KwxwXffuGKLMeD/view?usp=sharing",
      status: "AI Safety System",
      date: "2025"
    },
    {
      title: "SourceUp: Procurement Intelligence",
      category: "ML",
      description:
        "Semantic supplier discovery platform with learning-to-rank optimization.",
      tech: ["Sentence-BERT", "LightGBM", "FAISS", "Redis"],
      metrics: ["NDCG@10 0.744", "+9.2% Relevance"],
      impact:
        "Improved supplier sourcing efficiency with explainable ranking.",
      link: "https://github.com/Somaskandan931/SourceUp",
      demo: "https://drive.google.com/file/d/1DbSymRpBRE23KeZ_wRbQQlbEPcNqokz8/view?usp=sharing",
      status: "Production Ready",
      date: "2025"
    },
    {
  title: "Redline: Preventive Healthcare Chatbot",
  category: "NLP",
  description:
    "India-centric, multilingual preventive healthcare chatbot using IndicBERT for intent classification, safe home-care guidance, vaccination awareness, and doctor-visit decision support with ethical guardrails.",
  tech: [
    "IndicBERT",
    "FastAPI",
    "Telegram Bot API",
    "Python",
    "Rule-Based NLP"
  ],
  metrics: [
    "80%+ Intent Accuracy",
    "Confidence-Aware Responses",
    "Real-Time Decisions"
  ],
  impact:
    "Enabled first-touch health awareness while actively preventing medical misinformation in low-literacy settings.",
  link: "https://github.com/Somaskandan931/Redline",
  demo: "https://drive.google.com/file/d/1X8bDW5r7MXTWSg1QwieaDN-UpV8y10wD/view?usp=sharing", // optional – add later if you have one
  status: "Healthcare AI Chatbot",
  date: "2026"
}

  ];

  const filters = ["All", "ML", "NLP", "RAG", "CV"];

  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Projects</h2>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{project.date}</p>

              <p className="text-gray-700 mb-4">
                {expanded === idx
                  ? project.description
                  : project.description.slice(0, 120) + "..."}
              </p>

              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="text-blue-600 font-semibold text-sm mb-4"
              >
                {expanded === idx ? "Show Less" : "Show More"}
              </button>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg"
                >
                  <Github size={16} />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
