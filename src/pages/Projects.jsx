import React from 'react';
import { Github, ExternalLink, Award, TrendingUp } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      title: "FinGuard Pro: Real-Time Fraud Detection",
      description:
        "End-to-end fraud detection and risk scoring pipeline using XGBoost on highly imbalanced UPI transaction dataset with SHAP-based explainability for audit workflows",
      tech: ["XGBoost", "SHAP", "Python", "SQL", "FastAPI", "Streamlit"],
      metrics: ["97% Accuracy", "94% Recall", "ROC-AUC 0.995", "<3s Latency"],
      impact:
        "Architected production-ready fraud detection pipeline with transaction-level root-cause analysis",
      link: "https://github.com/Somaskandan931/FinGuardPro",
      demo: "https://drive.google.com/file/d/1LTMYP7VPCpklF0AAOyjAVMimyFERYrCS/view",
      status: "IEEE Published",
      publication: "ICAAIC 2025 (ISBN: 979-8-3315-6587-9)",
      date: "2025"
    },
    {
      title: "SourceUp: Procurement Intelligence Platform",
      description:
        "Semantic supplier search engine using Sentence-BERT embeddings and FAISS with LightGBM learning-to-rank model for optimized result relevance",
      tech: ["Sentence-BERT", "FAISS", "LightGBM", "FastAPI", "Redis"],
      metrics: ["NDCG@10: 0.744", "+9.2% Improvement", "10k+ Suppliers"],
      impact:
        "Eliminated infeasible matches and improved sourcing efficiency with low-latency semantic retrieval",
      link: "https://github.com/Somaskandan931/SourceUp",
      demo: "https://drive.google.com/file/d/1DbSymRpBRE23KeZ_wRbQQlbEPcNqokz8/view",
      status: "Production Ready",
      date: "2025"
    },
    {
      title: "CareerGenie: Resume-Job Matching (RAG)",
      description:
        "Retrieval-Augmented Generation pipeline combining semantic retrieval with LLM reasoning for intelligent resume-to-job matching with ATS optimization",
      tech: ["Sentence-Transformers", "ChromaDB", "RAG", "LaTeX", "Python"],
      metrics: ["Semantic Search", "Location-Aware", "ATS Optimized"],
      impact:
        "Implemented embedding-based indexing for query-aware retrieval and automated resume generation",
      link: "https://github.com/Somaskandan931/CareerGenie",
      demo: "https://drive.google.com/file/d/1bzKgHFzkdb9tGm2GzU2xQyOVL-soQPkW/view",
      status: "Active Development",
      date: "2025"
    },
    {
      title: "PaperMind: Academic Paper Recommender",
      description:
        "Full-stack semantic search platform using LLM embeddings and vector similarity for academic paper discovery with GPT-based explanations",
      tech: ["FastAPI", "React", "OpenAI API", "FAISS", "Tailwind"],
      metrics: ["Semantic Scholar API", "arXiv Integration", "Vector Search"],
      impact:
        "Built intelligent paper discovery system with semantic understanding and AI-powered insights",
      link: "https://github.com/Somaskandan931/PaperMind",
      demo: "https://drive.google.com/file/d/1-phNt-Mw1EcSic8PP1Ris-BR6nwAM_We/view",
      status: "Active Development",
      date: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600">
            Production-ready ML systems with proven business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 flex-1 pr-4">
                  {project.title}
                </h3>
                <span className="text-sm font-semibold text-gray-500">
                  {project.date}
                </span>
              </div>

              <div className="mb-4">
                <span className="inline-block px-4 py-2 rounded-lg text-sm font-bold bg-blue-100 text-blue-700">
                  {project.status}
                </span>
              </div>

              {project.publication && (
                <div className="mb-4 bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg">
                  <p className="text-sm font-bold text-purple-900 mb-1 flex items-center gap-2">
                    <Award size={16} />
                    Publication
                  </p>
                  <p className="text-xs text-purple-700 font-mono">
                    {project.publication}
                  </p>
                </div>
              )}

              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4 bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm font-bold text-green-900 mb-2 flex items-center gap-2">
                  <TrendingUp size={16} />
                  Key Metrics
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric, mIdx) => (
                    <span
                      key={mIdx}
                      className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-bold"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm font-bold text-blue-900 mb-2">
                  Business Impact
                </p>
                <p className="text-sm text-blue-800">{project.impact}</p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-bold text-gray-900 mb-2">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-lg text-xs font-semibold border border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
                >
                  <Github size={18} />
                  GitHub
                  <ExternalLink size={16} />
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
                >
                  Project Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
