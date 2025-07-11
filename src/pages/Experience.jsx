import React from 'react';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

const ExperiencePage = () => {
  const experience = [
    {
      role: "Data Analyst Intern",
      company: "India Advocacy",
      location: "India",
      period: "July 2024 - October 2024",
      achievements: [
        "Developed automation scripts using Java and Selenium",
        "Performed data cleaning, transformation, and analysis using Excel on advocacy campaign datasets",
        "Generated insightful reports and visualizations to support data-driven decision making",
        "Conducted email marketing campaign through data-backed strategy recommendations"
      ]
    },
    {
      role: "Part-Time Sales Associate",
      company: "Bata",
      location: "Singapore",
      period: "February 2022 - August 2022",
      achievements: [
        "Guided customers in product selection, improving sales conversion rate by 15%",
        "Managed point-of-sale systems with 100% accuracy in transaction processing",
        "Supported inventory tracking and visual merchandising, reducing stock discrepancies by 20%"
      ]
    },
    {
      role: "Security Trooper",
      company: "Singapore Armed Forces",
      location: "Singapore",
      period: "January 2020 - January 2022",
      achievements: [
        "Managed operations of the Pass Making Office (PMO), ensuring 100% compliance with security protocols",
        "Collaborated with Ministry of Health COVID-19 Task Force to implement containment strategies",
        "Maintained detailed security records and generated analytical reports for command leadership"
      ]
    },
    {
      role: "Podcast Head",
      company: "Philosophy and Open Discussion Club, Sathyabama Institute of Science and Technology",
      location: "Chennai",
      period: "Jan 2023 – Jan 2024",
      achievements: [
        "Spearheaded creation and growth of 'The Socratic Method' Spotify podcast",
        "Managed podcast lifecycle: ideation, scripting, speaker outreach, editing, publishing",
        "Produced Women’s Day Special and premiere 'college life' episodes with positive reception",
        "Handled post-production using DaVinci, sourced original jingles, and ensured audio quality"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-600">Professional journey and achievements</p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {exp.achievements.map((achievement, achIdx) => (
                  <div key={achIdx} className="flex items-start gap-2">
                    <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
