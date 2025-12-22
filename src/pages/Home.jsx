import React from 'react';
import { Code, Award, BookOpen, Users, Star, Mail } from 'lucide-react';

const HomePage = ({ setActiveTab }) => {
  const skills = {
    "Programming": ["Python", "Java", "SQL", "JavaScript"],
    "ML & AI": ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "BERT", "HuggingFace"],
    "Data Science": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "OpenCV", "SHAP"],
    "Tools & Deployment": ["Git", "FastAPI", "Flask", "Streamlit", "PostgreSQL", "Docker"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
              SR
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Somaskandan</span> 👋
            </h1>
            <p className="text-xl text-gray-600 mb-2">Machine Learning Engineer & AI Researcher</p>
            <p className="text-lg text-gray-500">M.Sc. Computer Science @ Sathyabama University</p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Results-driven Machine Learning Engineer specializing in Artificial Intelligence and Natural Language Processing. 
              Experienced in developing and deploying ML models with expertise in Python, TensorFlow, PyTorch, and explainable AI solutions.
              Published researcher in IEEE conference proceedings.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button 
                onClick={() => setActiveTab('projects')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Code size={20} />
                View Projects
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Star className="text-yellow-500" size={20} />
                Featured Publication
              </h3>
              <h4 className="text-lg font-medium text-blue-600 mb-2">FinGuard Pro: Explainable AI for Financial Fraud Detection</h4>
              <p className="text-gray-600 mb-3">XGBoost-based fraud detection achieving 97% accuracy with SHAP explainability</p>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <Award size={16} />
                Published in IEEE ICAAIC 2025
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="text-blue-500" size={20} />
                Recent Research
              </h3>
              <h4 className="text-lg font-medium text-purple-600 mb-2">Real-Time Explainable Fake News Detection</h4>
              <p className="text-gray-600 mb-3">Hybrid BERT-LSTM model with SHAP achieving 96.5% accuracy</p>
              <div className="flex items-center gap-2 text-sm text-purple-600">
                <Users size={16} />
                ICASET Conference 2025
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="text-center">
                  <h4 className="font-medium text-gray-800 mb-2">{category}</h4>
                  <div className="flex flex-wrap justify-center gap-1">
                    {skillList.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;