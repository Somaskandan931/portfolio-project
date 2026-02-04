import React from 'react';
import { Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react';

const ExperiencePage = () => {
  const experience = [
    {
      role: "Data Analyst Intern",
      company: "India Advocacy",
      location: "Chennai, India",
      period: "JUL 2024 - OCT 2024",
      type: "INTERNSHIP",
      achievements: [
        "Cleaned, filtered, and structured over 1M web records, reducing to 15-20k high-quality records for targeted outreach campaigns",
        "Built automated data extraction pipelines using Java and Selenium to improve data collection efficiency by 40%",
        "Implemented validation checks aligned with business usability requirements, handling real-world data quality issues",
        "Generated insightful reports and visualizations to support data-driven decision making across campaigns"
      ],
      skills: ["Python", "Java", "Selenium", "Data Cleaning", "Excel", "Automation"]
    },
    {
      role: "Security Trooper",
      company: "Singapore Armed Forces",
      location: "Singapore",
      period: "JAN 2020 - JAN 2022",
      type: "NATIONAL SERVICE",
      achievements: [
        "Managed operations of the Pass Making Office (PMO), ensuring 100% compliance with security protocols",
        "Collaborated with Ministry of Health COVID-19 Task Force to implement containment strategies during pandemic",
        "Operated authorized transport vehicles under regulated operational environments with zero safety incidents",
        "Maintained detailed security records and generated analytical reports for command leadership"
      ],
      skills: ["Operations Management", "Data Collection", "Reporting", "Teamwork"]
    },
    {
      role: "Sales Associate",
      company: "Bata",
      location: "Singapore",
      period: "FEB 2022 - AUG 2022",
      type: "PART-TIME",
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
      period: "JAN 2023 - JAN 2024",
      type: "LEADERSHIP",
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
            Building skills across data, operations, and leadership
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-12 top-0 bottom-0 w-0.5 bg-amber-400"></div>

          <div className="space-y-16">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-28">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-10 w-6 h-6 bg-amber-400 border-4 border-black"></div>

                {/* Content Card */}
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

                      {/* Meta Info */}
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
                          <div key={achIdx} className="flex items-start gap-3 group/item">
                            <ArrowRight className="text-amber-400 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" size={18} />
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

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border-2 border-amber-400 p-6 text-center">
            <div className="text-4xl font-black text-amber-400 mb-2">4+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Roles</div>
          </div>
          <div className="border-2 border-gray-800 p-6 text-center">
            <div className="text-4xl font-black text-white mb-2">3</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Years</div>
          </div>
          <div className="border-2 border-gray-800 p-6 text-center">
            <div className="text-4xl font-black text-white mb-2">15+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Skills</div>
          </div>
          <div className="border-2 border-amber-400 p-6 text-center">
            <div className="text-4xl font-black text-amber-400 mb-2">100%</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Delivery</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 border-2 border-amber-400 p-12 text-center bg-gradient-to-br from-amber-400/5 to-transparent">
          <Briefcase className="mx-auto mb-6 text-amber-400" size={48} />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            LET'S WORK TOGETHER
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Looking for opportunities to build production ML systems
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