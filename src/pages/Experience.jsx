import React from 'react';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

const ExperiencePage = () => {
  const experience = [
    {
      role: "Data Analyst Intern",
      company: "India Advocacy",
      location: "Chennai, India",
      period: "Jul 2024 - Oct 2024",
      type: "Internship",
      achievements: [
        "Cleaned, filtered, and structured over 1M web records, reducing to 15-20k high-quality records for targeted outreach campaigns",
        "Built automated data extraction pipelines using Java and Selenium to improve data collection efficiency by 40%",
        "Implemented validation checks aligned with business usability requirements, handling real-world data quality issues",
        "Generated insightful reports and visualizations to support data-driven decision making across campaigns"
      ],
      skills: ["Python", "Java", "Selenium", "Data Cleaning", "Excel", "Automation"]
    },
    {
      role: "Security Trooper (National Service)",
      company: "Singapore Armed Forces",
      location: "Singapore",
      period: "Jan 2020 - Jan 2022",
      type: "Full-time",
      achievements: [
        "Managed operations of the Pass Making Office (PMO), ensuring 100% compliance with security protocols",
        "Collaborated with Ministry of Health COVID-19 Task Force to implement containment strategies during pandemic",
        "Operated authorized transport vehicles under regulated operational environments with zero safety incidents",
        "Maintained detailed security records and generated analytical reports for command leadership"
      ],
      skills: ["Operations Management", "Data Collection", "Reporting", "Teamwork"]
    },
    {
      role: "Sales Associate (Part-Time)",
      company: "Bata",
      location: "Singapore",
      period: "Feb 2022 - Aug 2022",
      type: "Part-time",
      achievements: [
        "Guided customers in product selection, improving sales conversion rate by 15%",
        "Managed point-of-sale systems with 100% accuracy in transaction processing",
        "Supported inventory tracking and visual merchandising, reducing stock discrepancies by 20%",
        "Demonstrated strong communication, time management, and teamwork skills in high-volume retail environment"
      ],
      skills: ["Customer Service", "Sales", "POS Systems", "Inventory Management"]
    },
    {
      role: "Podcast Head",
      company: "Sathyabama Institute - Philosophy Club",
      location: "Chennai, India",
      period: "Jan 2023 - Jan 2024",
      type: "Leadership",
      achievements: [
        "Spearheaded creation and growth of 'The Socratic Method' Spotify podcast for Philosophy and Open Discussion Club",
        "Managed podcast lifecycle: ideation, scripting, speaker outreach, editing, and publishing",
        "Produced Women's Day Special and premiere 'college life' episodes with positive audience reception",
        "Handled post-production using DaVinci Resolve, sourced original jingles, and ensured professional audio quality"
      ],
      skills: ["Content Creation", "Audio Editing", "Project Management", "Leadership"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600">Building skills across data, operations, and leadership</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-20">
                <div className="absolute left-4 w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg ring-4 ring-white">
                  {idx + 1}
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                      <p className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin size={16} className="text-red-500" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={16} className="text-green-500" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-bold">
                      {exp.type}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Key Achievements</h4>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIdx) => (
                        <div key={achIdx} className="flex items-start gap-3">
                          <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                          <p className="text-gray-700 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-bold text-gray-900 mb-2">Skills Applied</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;