import React from 'react';
import { Award, Users, BookOpen } from 'lucide-react';

const AboutPage = () => {
  const certifications = [
    {
      title: "FinGuard Pro: Explainable AI for Financial Fraud Detection",
      issuer: "IEEE ICAAIC 2025",
      date: "Dec 2025",
      id: "ISBN: 979-8-3315-6587-9",
      type: "Publication",
      color: "purple"
    },
    {
      title: "Real-Time Explainable Fake News Detection using BERT-LSTM",
      issuer: "IFERP - ICASET Conference",
      date: "Mar 2025",
      id: "IFERP20250322_ICASET_CHE_2230",
      type: "Publication",
      color: "blue"
    },
    {
      title: "AI and Machine Learning Course",
      issuer: "Space Zee Technologies",
      date: "Jun 2024",
      id: "SZ_CCC_2024_0012",
      type: "Certification",
      grade: "A+",
      color: "green"
    },
    {
      title: "Python Core",
      issuer: "Space Zee Technologies",
      date: "Feb 2024",
      id: "SZ_CCC_2023_0051",
      type: "Certification",
      grade: "A+",
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600">Applied Machine Learning Engineer & AI Researcher</p>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 mb-12 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
          <p className="text-lg leading-relaxed text-blue-50">
            Applied Machine Learning Engineer with hands-on experience building <span className="font-bold text-white">end-to-end, production-style ML systems</span> for fraud detection, semantic search, and ranking problems. Strong focus on <span className="font-bold text-white">model performance, explainability using SHAP</span>, and business-aligned evaluation with XGBoost, LightGBM, and modern NLP pipelines deployed via FastAPI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <BookOpen className="text-blue-500" />
              Education
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-lg text-gray-900">M.Sc. Computer Science (AI Specialization)</h4>
                <p className="text-gray-600 font-semibold">Sathyabama Institute of Science and Technology</p>
                <p className="text-sm text-gray-500">Expected 2027</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-bold text-lg text-gray-900">B.Sc. Computer Science (AI Specialization)</h4>
                <p className="text-gray-600 font-semibold">Sathyabama Institute of Science and Technology</p>
                <p className="text-sm text-gray-500">2022 - 2025 | First Class</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-bold text-lg text-gray-900">Singapore-Cambridge GCE A-Level</h4>
                <p className="text-gray-600 font-semibold">Jurong Pioneer Junior College, Singapore</p>
                <p className="text-sm text-gray-500">2018 - 2019</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <Users className="text-purple-500" />
              Leadership & Community
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <Award className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900">NCC Staff Sergeant</h4>
                  <p className="text-sm text-gray-600">Led 20+ cadets, Gold Award in Best Unit Competition (2015)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                <BookOpen className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900">Tamil Poetry Creator</h4>
                  <p className="text-sm text-gray-600">@skandan_kavithaigal - Author of original Tamil poetry with 60+ followers</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                <Users className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900">Community Service Volunteer</h4>
                  <p className="text-sm text-gray-600">Asian Women's Welfare Association(AWWA) and Woodlands Employment Development Centre</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <Award className="text-yellow-500" />
            Publications & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className={`border-2 rounded-xl p-6 hover:shadow-lg transition-all transform hover:-translate-y-1 ${
                cert.type === 'Publication'
                  ? cert.color === 'purple' ? 'border-purple-400 bg-purple-50' : 'border-blue-400 bg-blue-50'
                  : cert.color === 'green' ? 'border-green-300 bg-green-50' : 'border-orange-300 bg-orange-50'
              }`}>
                <div className="flex justify-between items-start mb-3">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase ${
                    cert.type === 'Publication'
                      ? cert.color === 'purple' ? 'bg-purple-600 text-white' : 'bg-blue-600 text-white'
                      : cert.color === 'green' ? 'bg-green-200 text-green-800' : 'bg-orange-200 text-orange-800'
                  }`}>
                    {cert.type}
                  </span>
                  {cert.grade && (
                    <span className="text-sm font-bold text-green-600">{cert.grade}</span>
                  )}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 leading-tight">{cert.title}</h4>
                <p className="text-sm text-gray-700 font-semibold mb-2">{cert.issuer}</p>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">{cert.date}</p>
                  <p className="text-xs text-gray-400 font-mono">{cert.id}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;