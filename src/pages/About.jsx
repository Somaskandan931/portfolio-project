import React from 'react';
import { Award, BookOpen, ExternalLink, GraduationCap, Shield, Trophy, Users2 } from 'lucide-react';

const AboutPage = () => {
  const publications = [
    {
      title: "FinGuard Pro: Explainable AI for Financial Fraud Detection",
      venue: "IEEE ICAAIC 2025",
      date: "2025",
      isbn: "979-8-3315-6587-9",
      link: "https://ieeexplore.ieee.org/document/11330750"
    },
    {
      title: "Real-Time Explainable Fake News Detection System with BERT-LSTM and SHAP",
      venue: "ICASET-2025 — Presented",
      date: "MAR 2025",
      isbn: "Cert. No. IFERP20250322_ICASET_CHE_2230",
      link: null
    }
  ];

  const certifications = [
    {
      title: "AI and Machine Learning Course",
      issuer: "Space Zee Technologies",
      date: "JUN 2024",
      grade: "A+"
    },
    {
      title: "Python Core",
      issuer: "Space Zee Technologies",
      date: "FEB 2024",
      grade: "A+"
    }
  ];

  const education = [
    {
      degree: "M.Sc. Computer Science",
      specialization: "AI SPECIALIZATION",
      institution: "Sathyabama Institute",
      year: "2027",
      status: "IN PROGRESS"
    },
    {
      degree: "B.Sc. Computer Science",
      specialization: "AI SPECIALIZATION",
      institution: "Sathyabama Institute",
      year: "2022-2025",
      status: "FIRST CLASS"
    },
    {
      degree: "GCE A-Level",
      specialization: "SINGAPORE-CAMBRIDGE",
      institution: "Jurong Pioneer JC",
      year: "2018-2019",
      status: "COMPLETED"
    }
  ];

  const leadership = [
    {
      role: "NCC Staff Sergeant",
      detail: "Led 20+ cadets | Gold Award Winner",
      icon: Shield
    },
    {
      role: "Tamil Poetry Creator",
      detail: "@skandan_kavithaigal | 60+ followers",
      icon: BookOpen
    },
    {
      role: "Community Volunteer",
      detail: "AWWA & Woodlands EDC",
      icon: Users2
    }
  ];

  const hackathons = [
    {
      award: "Best Industry Innovation Award",
      event: "Industry Innovation Hackathon '26",
      organizer: "Sathyabama Institute — National Level (with ATRIBS & Bluewind Innovations)",
      date: "MAR 2026",
      detail: "Defeated 63+ teams from institutions across India with the CareerGenie AI platform.",
      icon: Trophy
    },
    {
      award: "Competitor",
      event: "Origin 24-Hour Hackathon",
      organizer: "SIMATS Engineering, Chennai",
      date: "APR 2026",
      detail: "Competed in a 24-hour sprint organized by the SIMATS Hackathon Club, Saveetha Institute of Medical and Technical Sciences.",
      icon: Trophy
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            <span className="text-white">ABOUT</span>
            <br />
            <span className="text-amber-400">ME</span>
          </h1>
          <div className="max-w-3xl border-l-4 border-amber-400 pl-8">
            <p className="text-2xl text-gray-300 leading-relaxed">
              Applied Machine Learning Engineer with hands-on experience building
              <span className="text-amber-400 font-bold"> end-to-end, production-style ML systems</span> for
              fraud detection, semantic search, and ranking problems.
            </p>
          </div>
        </div>

        {/* Education Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-black mb-10 text-amber-400 tracking-tight">
            <GraduationCap className="inline mr-4" size={40} />
            EDUCATION
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="border-2 border-gray-800 hover:border-amber-400 p-8 transition-all duration-300 group bg-gradient-to-br from-gray-900/50 to-black"
              >
                <div className="text-xs font-bold text-amber-400 mb-3 tracking-widest">{edu.specialization}</div>
                <h3 className="text-2xl font-black text-white mb-2 leading-tight">{edu.degree}</h3>
                <p className="text-sm text-gray-400 mb-4">{edu.institution}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <span className="text-xs text-gray-500 font-bold">{edu.year}</span>
                  <span className="text-xs font-bold text-amber-400">{edu.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications - Featured Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-black mb-10 text-amber-400 tracking-tight">
            <Award className="inline mr-4" size={40} />
            PUBLICATIONS
          </h2>
          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <div
                key={idx}
                className="border-2 border-amber-400 bg-gradient-to-r from-amber-400/10 to-transparent p-8 hover:from-amber-400/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="text-xs font-bold text-amber-400 mb-3 tracking-widest">{pub.date} • {pub.venue}</div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">{pub.title}</h3>
                    {pub.isbn && (
                      <div className="text-sm text-gray-400 font-mono">{pub.isbn}</div>
                    )}
                  </div>
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-amber-400 text-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 flex items-center gap-3 whitespace-nowrap"
                    >
                      READ PAPER
                      <ExternalLink size={18} />
                    </a>
                  ) : (
                    <div className="px-8 py-4 border-2 border-gray-700 text-gray-400 font-bold uppercase tracking-wider flex items-center gap-3 whitespace-nowrap">
                      PRESENTED
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div className="mb-20">
          <h2 className="text-4xl font-black mb-10 text-amber-400 tracking-tight">
            <Trophy className="inline mr-4" size={40} />
            HACKATHONS & AWARDS
          </h2>
          <div className="space-y-6">
            {hackathons.map((h, idx) => (
              <div
                key={idx}
                className="border-2 border-gray-800 hover:border-amber-400 p-8 transition-all duration-300 bg-gradient-to-br from-gray-900/50 to-black group"
              >
                <div className="flex items-start gap-4">
                  <h.icon className="text-amber-400 flex-shrink-0 mt-1" size={28} />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-2">
                      <span className="text-xs font-bold text-amber-400 tracking-widest">{h.date}</span>
                      <span className="px-3 py-1 bg-amber-400 text-black text-xs font-bold">{h.award}</span>
                    </div>
                    <h3 className="text-xl font-black text-white mb-1 group-hover:text-amber-400 transition-colors">{h.event}</h3>
                    <p className="text-sm text-gray-400 mb-2">{h.organizer}</p>
                    <p className="text-sm text-gray-300">{h.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-black mb-8 text-white border-b-2 border-gray-800 pb-4">
              CERTIFICATIONS
            </h2>
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-amber-400 pl-6 py-4 hover:pl-8 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{cert.date}</span>
                    <span className="px-3 py-1 bg-amber-400 text-black text-xs font-bold">{cert.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div>
            <h2 className="text-3xl font-black mb-8 text-white border-b-2 border-gray-800 pb-4">
              LEADERSHIP
            </h2>
            <div className="space-y-6">
              {leadership.map((item, idx) => (
                <div
                  key={idx}
                  className="border-2 border-gray-800 hover:border-amber-400 p-6 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <item.icon className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-sm text-gray-400">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="border-4 border-amber-400 p-12 text-center bg-gradient-to-br from-amber-400/5 to-transparent">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            READY TO BUILD SOMETHING?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create ML systems that actually work.
          </p>
          <a
            href="mailto:somaskandan931@gmail.com"
            className="inline-block px-12 py-5 bg-amber-400 text-black font-bold text-lg uppercase tracking-wider hover:bg-white transition-all duration-300"
          >
            GET IN TOUCH
          </a>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;