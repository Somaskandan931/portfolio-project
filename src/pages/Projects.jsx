import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Real-Time Explainable Fake News Detection",
      description: "Hybrid BERT-LSTM model with SHAP explainability achieving 96.5% accuracy",
      tech: ["Python", "FastAPI", "BERT", "LSTM", "SHAP", "MongoDB"],
      metrics: "96.5% accuracy, 500+ requests/hour",
      link: "https://github.com/Somaskandan931",
      status: "Published Research",
      date: "Nov 2024 - Feb 2025"
    },
    {
      title: "Women Safety Analytics",
      description: "YOLOv5-based computer vision solution for distress gesture detection",
      tech: ["Python", "YOLOv5", "OpenCV", "Twilio", "TensorFlow"],
      metrics: "91% accuracy, 3-second alert system",
      link: "https://github.com/Somaskandan931",
      status: "Smart India Hackathon 2024",
      date: "Sep 2024"
    },
    {
      title: "ADHD Screening Web Application",
      description: "AI-powered screening tool using computer vision and NLP",
      tech: ["Python", "OpenCV", "RandomForest", "Streamlit"],
      metrics: "83% accuracy, 82% F1-score",
      link: "https://github.com/Somaskandan931",
      status: "Healthcare Innovation",
      date: "Jul 2024 - Aug 2024"
    },
    {
      title: "FinGuard Pro",
      description: "Smart fraud detection system with XGBoost and SHAP explainability",
      tech: ["Python", "XGBoost", "SHAP", "Flask", "Streamlit"],
      metrics: "Real-time fraud detection",
      link: "https://github.com/Somaskandan931/fin-guard-pro",
      status: "Production Ready",
      date: "2024"
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
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
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