import React from 'react';
import { Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react';

const ExperiencePage = () => {
  const experience = [
    {
      role: "Production AI Developer (Intern)",
      company: "InnoXR Labs Pvt. Ltd.",
      location: "Chennai, India",
      period: "MAR 2026 - JUN 2026",
      type: "INTERNSHIP",
      achievements: [
        "Built and deployed ML-powered FastAPI microservices for real-time inference in AR/immersive applications.",
        "Designed API-first ML systems integrating model inference with scalable backend endpoints.",
        "Delivered end-to-end features from model development to deployment in a fast-paced startup environment."
      ],
      skills: ["FastAPI", "Python", "REST APIs", "Model Deployment", "Microservices", "AR/XR"]
    },
    {
      role: "Data Analyst Intern",
      company: "India Advocacy",
      location: "Chennai, India",
      period: "JUL 2024 - OCT 2024",
      type: "INTERNSHIP",
      achievements: [
        "Built Java + Selenium pipelines to scrape and process 1M+ records.",
        "Transformed raw data into 15–20k structured datasets through multi-stage validation."
      ],
      skills: ["Java", "Selenium", "Data Processing", "Data Cleaning"]
    },
    {
      role: "Security Trooper (National Service)",
      company: "Singapore Armed Forces",
      location: "Singapore",
      period: "JAN 2020 - JAN 2022",
      type: "NATIONAL SERVICE",
      achievements: [
        "Executed security operations in regulated environments, ensuring strict protocol compliance and operational readiness.",
        "Supported COVID-19 response initiatives through structured data collection and reporting under time-sensitive conditions."
      ],
      skills: ["Operations", "Data Collection", "Reporting", "Compliance"]
    },
    {
      role: "Sales Associate (Part-Time)",
      company: "Bata",
      location: "Singapore",
      period: "FEB 2022 - AUG 2022",
      type: "PART-TIME",
      achievements: [
        "Handled high-volume customer interactions in a fast-paced retail environment, ensuring efficient service delivery.",
        "Managed billing, inventory coordination, and issue resolution to support smooth store operations."
      ],
      skills: ["Customer Service", "Sales", "Inventory", "POS Systems"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            <span className="text-white">WORK</span>
            <br />
            <span className="text-amber-400">EXPERIENCE</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl border-l-4 border-amber-400 pl-6">
            Experience building production-grade AI systems and working across data, operations, and real-world environments
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-12 top-0 bottom-0 w-0.5 bg-amber-400"></div>

          <div className="space-y-16">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-28">
                <div className="absolute left-0 md:left-10 w-6 h-6 bg-amber-400 border-4 border-black"></div>

                <div className="border-2 border-gray-800 hover:border-amber-400 transition-all duration-500 bg-gradient-to-br from-gray-900/50 to-black group">
                  <div className="p-8">

                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="text-xs font-bold text-amber-400 tracking-widest mb-2">
                            {exp.type}
                          </div>
                          <h2 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight group-hover:text-amber-400 transition-colors">
                            {exp.role}
                          </h2>
                          <p className="text-xl text-gray-300 font-bold mb-4">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-amber-400" />
                          <span className="font-mono">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-amber-400" />
                          <span className="font-mono">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h3 className="text-sm font-bold text-amber-400 tracking-widest mb-4">KEY ACHIEVEMENTS</h3>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIdx) => (
                          <div key={achIdx} className="flex items-start gap-3">
                            <ArrowRight className="text-amber-400 mt-1 flex-shrink-0" size={18} />
                            <p className="text-gray-300 leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="pt-6 border-t border-gray-800">
                      <div className="text-xs font-bold text-gray-500 tracking-widest mb-3">SKILLS APPLIED</div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1 bg-gray-900 border border-gray-700 text-gray-400 text-xs font-mono hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 border-2 border-amber-400 p-12 text-center bg-gradient-to-br from-amber-400/5 to-transparent">
          <Briefcase className="mx-auto mb-6 text-amber-400" size={48} />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            LET'S WORK TOGETHER
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Looking for opportunities to build scalable AI systems and production ML pipelines
          </p>
          <a
            href="mailto:somaskandan931@gmail.com"
            className="inline-block px-10 py-4 bg-amber-400 text-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300"
          >
            REACH OUT
          </a>
        </div>

      </div>
    </div>
  );
};

export default ExperiencePage;