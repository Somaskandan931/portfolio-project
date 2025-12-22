import React from 'react';
import { Github, ExternalLink, Award } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      title: "FinGuard Pro: Real-Time Fraud Detection",
      description: "End-to-end AI system for UPI fraud detection with XGBoost and SHAP explainability achieving 97% accuracy and 94% recall",
      tech: ["XGBoost", "SHAP", "Flask", "Streamlit", "PostgreSQL", "RapidFuzz"],
      metrics: "97% accuracy, 94% recall, AUC 0.9951, sub-3-second latency",
      link: "https://github.com/Somaskandan931/FinGuardPro",
      status: "Published in IEEE ICAAIC 2025",
      date: "2025",
      publication: "ISBN: 979-8-3315-6587-9",
      featured: true
    },
    {
      title: "EXPLAIN: Multilingual Fake News Detection",
      description: "Real-time explainable fake news detection for Indian content supporting English, Hindi, Hinglish, and Indic languages with XLM-RoBERTa and IndicBERT models",
      tech: ["PyTorch", "Transformers", "SHAP", "Captum", "FastAPI", "Streamlit"],
      metrics: "LoRA-based continual learning, Integrated Gradients explainability",
      link: "https://github.com/Somaskandan931/EXPLAIN",
      status: "Ongoing Research",
      date: "2024 - Present"
    },
    {
      title: "PaperMind: AI-Powered Academic Paper Recommender",
      description: "Full-stack semantic search platform using LLM embeddings and vector similarity for academic paper discovery",
      tech: ["Python", "FastAPI", "React", "OpenAI API", "FAISS", "Tailwind CSS"],
      metrics: "Semantic Scholar & arXiv integration, GPT-based explanations",
      link: "https://github.com/Somaskandan931/PaperMind",
      status: "Ongoing Development",
      date: "2024 - Present"
    },
    {
      title: "SourceUp: AI-Powered Supplier Sourcing Platform",
      description: "B2B intelligent sourcing platform for SMEs with AI recommendations and automated procurement across ASEAN markets",
      tech: ["Java", "Spring Boot", "Python", "NLP", "Web Scraping"],
      metrics: "AI chat assistant, automated quotations, delivery ETA prediction",
      link: "https://github.com/Somaskandan931/SourceUp",
      status: "Ongoing Development",
      date: "2024 - Present"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-lg text-gray-600">Innovative solutions in AI, ML, and Data Science</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-xl p-6 shadow-sm border ${
                project.featured 
                  ? 'border-blue-300 ring-2 ring-blue-100' 
                  : 'border-gray-100'
              } hover:shadow-md transition-shadow relative`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Award className="text-yellow-500" size={24} />
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1 pr-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    project.featured 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{project.date}</span>
              </div>
              
              <p className="text-gray-700 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Key Metrics:</p>
                <p className="text-sm text-green-600 font-medium">{project.metrics}</p>
              </div>

              {project.publication && (
                <div className="mb-4 bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-purple-900 mb-1 flex items-center gap-2">
                    <Award size={16} className="text-purple-600" />
                    Publication:
                  </p>
                  <p className="text-xs text-purple-700 font-mono">{project.publication}</p>
                </div>
              )}

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Github size={16} />
                View Project
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;