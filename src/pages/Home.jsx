import React, { useState, useEffect, useMemo } from 'react';
import { Code, Award, BookOpen, Users, Mail, TrendingUp, ArrowRight, Download, Zap } from 'lucide-react';

const HomePage = ({ setActiveTab }) => {
  const [typedText, setTypedText] = useState('');
  const roles = useMemo(
  () => ['Machine Learning Engineer'],
  []
);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, [roleIndex, roles]);

  const skills = {
    "Core ML/AI": [
      { name: "Python", level: 95 },
      { name: "XGBoost", level: 90 },
      { name: "LightGBM", level: 85 },
      { name: "SHAP", level: 90 }
    ],
    "NLP & LLMs": [
      { name: "Transformers", level: 85 },
      { name: "RAG Systems", level: 80 },
      { name: "Sentence-BERT", level: 85 },
      { name: "LangChain", level: 75 }
    ],
    "Data & APIs": [
      { name: "FastAPI", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Pandas", level: 95 },
      { name: "Docker", level: 70 }
    ],
    "Tools": [
      { name: "Git/GitHub", level: 90 },
      { name: "Streamlit", level: 85 },
      { name: "FAISS", level: 80 },
      { name: "MLflow", level: 70 }
    ]
  };

  const highlights = [
  {
    icon: Award,
    value: "IEEE",
    label: "Research Paper",
    color: "text-blue-600",
  },
  {
    icon: BookOpen,
    value: "5+",
    label: "ML Projects",
    color: "text-purple-600",
  },
  {
    icon: Users,
    value: "3",
    label: "Dashboards Built",
    color: "text-green-600",
  },
];




  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-40 h-40 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold shadow-2xl ring-4 ring-white">
              SR
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-4">
              Somaskandan Rajagopal
            </h1>
            <div className="h-8 mb-4">
              <p className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {typedText}<span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-lg text-gray-600 mb-6">M.Sc. Computer Science Student @ Sathyabama Institute of Science and Technology</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center gap-2 font-semibold"
            >
              <Code size={20} />
              View Projects
              <ArrowRight size={18} />
            </button>
            <a
              href="/Somaskandan_New.pdf"
              download
              className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 flex items-center gap-2 font-semibold shadow-md"
            >
              <Download size={20} />
              Download Resume
            </a>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center gap-2 font-semibold"
            >
              <Mail size={20} />
              Let's Connect
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 justify-items-center">
  {highlights.map((item, idx) => (
    <div
      key={idx}
      className="w-full max-w-xs bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
    >
      <item.icon className={`${item.color} mb-3`} size={32} />
      <div className={`text-3xl font-bold ${item.color} mb-1`}>{item.value}</div>
      <div className="text-sm text-gray-600 font-medium">{item.label}</div>
    </div>
  ))}
</div>


          <div className="max-w-4xl mx-auto mb-12">
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
    <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Professional Summary</h3>
    <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
      Applied Machine Learning Engineer with hands-on experience building <span className="font-semibold text-blue-600">end-to-end, production-style ML systems</span> for fraud detection, semantic search, and ranking problems. Strong focus on <span className="font-semibold text-purple-600">model performance, explainability using SHAP</span>, and business-aligned evaluation with XGBoost, LightGBM, and modern NLP pipelines deployed via FastAPI.
    </p>
    <div className="flex flex-wrap justify-center gap-3 mt-4">
  <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium flex items-center gap-2">
    <Award size={16} />
    IEEE Published Researcher
  </span>
  <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg font-medium flex items-center gap-2">
    <TrendingUp size={16} />
    Production-Ready ML Systems
  </span>
  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-lg font-medium flex items-center gap-2">
    <Zap size={16} />
    AI/ML Solving Real-World Problems
  </span>
</div>

  </div>
</div>


          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Technical Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 pb-2 border-b-2 border-blue-200">{category}</h4>
                  <div className="space-y-3">
                    {skillList.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
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