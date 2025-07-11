import React from 'react';
import { MapPin, Calendar, ChevronRight, Briefcase, Users, TrendingUp, Shield } from 'lucide-react';

const ExperiencePage = () => {
  const experience = [
    {
      role: "Data Analyst Intern",
      company: "India Advocacy",
      location: "India",
      period: "July 2024 - October 2024",
      type: "Internship",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-blue-500",
      achievements: [
        "Developed automation scripts using Java and Selenium",
        "Performed data cleaning, transformation, and analysis using Excel on advocacy campaign datasets",
        "Generated insightful reports and visualizations to support data-driven decision making for stakeholders",
        "Conducted email marketing campaign through data-backed strategy recommendations"
      ]
    },
    {
      role: "Podcast Head",
      company: "Philosophy and Open Discussion Club, Sathyabama Institute of Science and Technology",
      location: "Chennai, India",
      period: "Jan 2024 - Present",
      type: "Leadership",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-500",
      achievements: [
        "Spearheaded the creation and growth of The Socratic Method, the club's official Spotify podcast, focused on exploring philosophical and social topics",
        "Managed the entire podcast lifecycle: ideation, scripting, speaker outreach, audio editing, and publishing",
        "Produced the Women's Day Special Episode and premiere 'college life' episode, driving listener engagement and positive campus reception",
        "Handled post-production using DaVinci, sourced original jingles, and maintained consistent audio quality across episodes"
      ]
    },
    {
      role: "Part-Time Sales Associate",
      company: "Bata",
      location: "Singapore",
      period: "February 2022 - August 2022",
      type: "Retail",
      icon: <Briefcase className="w-6 h-6" />,
      color: "bg-green-500",
      achievements: [
        "Guided customers in product selection, improving sales conversion rate by 15% in assigned department",
        "Managed point-of-sale systems with 100% accuracy in transaction processing",
        "Supported inventory tracking and visual merchandising, reducing stock discrepancies by 20%"
      ]
    },
    {
      role: "Security Trooper",
      company: "Singapore Armed Forces",
      location: "Singapore",
      period: "January 2020 - January 2022",
      type: "Military Service",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-red-500",
      achievements: [
        "Managed operations of the Pass Making Office (PMO), ensuring 100% compliance with security protocols",
        "Collaborated with the Ministry of Health COVID-19 Task Force to implement containment strategies",
        "Maintained detailed security records and generated analytical reports for command leadership"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through diverse roles spanning technology, leadership, retail, and military service
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>
          
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-white border-4 border-gray-300 rounded-full hidden md:block"></div>
                
                <div className="md:ml-16">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex items-start gap-4 mb-4 md:mb-0">
                        <div className={`${exp.color} p-3 rounded-xl text-white flex-shrink-0`}>
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                          <p className="text-lg text-blue-600 font-semibold mb-2">{exp.company}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Achievements</h4>
                      {exp.achievements.map((achievement, achIdx) => (
                        <div key={achIdx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <ChevronRight className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                          <p className="text-gray-700 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">4</div>
            <div className="text-gray-600">Different Industries</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
            <div className="text-gray-600">Countries Worked</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;