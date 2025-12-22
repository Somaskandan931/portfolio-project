import React from 'react';
import { Award, Users, BookOpen } from 'lucide-react';

const AboutPage = () => {
  const certifications = [
    {
      title: "AI and Machine Learning Course",
      issuer: "Space Zee Technologies",
      date: "June 2024",
      id: "SZ_CCC_2024_0012",
      grade: "A+"
    },
    {
      title: "Python Core",
      issuer: "Space Zee Technologies", 
      date: "February 2024",
      id: "SZ_CCC_2023_0051",
      grade: "A+"
    },
    {
      title: "FinGuard Pro: Explainable AI for Financial Fraud Detection",
      issuer: "IEEE ICAAIC 2025",
      date: "December 2025",
      id: "ISBN: 979-8-3315-6587-9",
      grade: "Published"
    },
    {
      title: "Real-Time Explainable Fake News Detection with BERT-LSTM",
      issuer: "IFERP - ICASET Conference",
      date: "March 2025",
      id: "IFERP20250322_ICASET_CHE_2230",
      grade: "Published"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600">Machine Learning Engineer & AI Researcher</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-gray-700 leading-relaxed">
              Results-driven Machine Learning Engineer specializing in Artificial Intelligence and Natural Language Processing. 
              Experienced in developing and deploying machine learning models with demonstrated expertise in Python, TensorFlow, 
              PyTorch, FastAPI, and data analysis. Proven ability to build end-to-end data pipelines, implement explainable AI solutions, 
              and deliver user-friendly applications. Published researcher with IEEE conference proceedings.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">M.Sc. Computer Science, AI Specialization</h4>
                <p className="text-gray-600">Sathyabama Institute of Science and Technology</p>
                <p className="text-sm text-gray-500">2022 - 2025</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Singapore-Cambridge GCE A-Level</h4>
                <p className="text-gray-600">Jurong Pioneer Junior College, Singapore</p>
                <p className="text-sm text-gray-500">2018 - 2019</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h3 className="text-xl font-semibold mb-6">Certifications & Publications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <Award className="text-yellow-500" size={20} />
                  <span className="text-sm font-medium text-green-600">{cert.grade}</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">{cert.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500">{cert.date}</span>
                  <span className="text-xs text-gray-400">{cert.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Leadership & Community</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Users className="text-blue-500 mt-1" size={20} />
              <div>
                <h4 className="font-medium">Tamil Poetry Creator</h4>
                <p className="text-gray-600">Instagram: @skandan_kavithaigal - Author of original Tamil poetry with 60+ followers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="text-purple-500 mt-1" size={20} />
              <div>
                <h4 className="font-medium">NCC Staff Sergeant</h4>
                <p className="text-gray-600">Led 20+ cadets, contributed to Gold Award in Best Unit Competition (2015)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BookOpen className="text-green-500 mt-1" size={20} />
              <div>
                <h4 className="font-medium">Community Service Volunteer</h4>
                <p className="text-gray-600">Pioneer Fiesta and Woodlands Employment Development Centre outreach initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;