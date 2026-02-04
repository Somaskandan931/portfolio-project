import React from 'react';
import { Mail, Phone, Linkedin, Github, ArrowRight, Send } from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "somaskandan931@gmail.com",
      link: "mailto:somaskandan931@gmail.com",
      primary: true
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+91 7200288242",
      secondary: "+65 83643999",
      link: "tel:+917200288242"
    },
    {
      icon: Linkedin,
      label: "LINKEDIN",
      value: "somaskandan-rajagopal",
      link: "https://www.linkedin.com/in/somaskandan-rajagopal/",
      external: true
    },
    {
      icon: Github,
      label: "GITHUB",
      value: "Somaskandan931",
      link: "https://github.com/Somaskandan931",
      external: true
    }
  ];

  const interests = [
    "Machine Learning & AI Development",
    "Natural Language Processing",
    "Explainable AI Solutions",
    "Production ML Systems",
    "Research Collaborations"
  ];

  const availability = [
    "Full-time opportunities",
    "Freelance projects",
    "Research collaborations",
    "Consulting work"
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            <span className="text-white">LET'S</span>
            <br />
            <span className="text-amber-400">CONNECT</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl border-l-4 border-amber-400 pl-6">
            Open to opportunities, collaborations, and discussions about building production ML systems
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.link}
              target={method.external ? "_blank" : "_self"}
              rel={method.external ? "noopener noreferrer" : ""}
              className={`group border-2 transition-all duration-500 hover:-translate-y-2 ${
                method.primary
                  ? "border-amber-400 bg-gradient-to-br from-amber-400/10 to-transparent"
                  : "border-gray-800 hover:border-amber-400"
              }`}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <method.icon className="text-amber-400 group-hover:scale-110 transition-transform" size={40} />
                  <div className="text-xs font-bold text-amber-400 tracking-widest">
                    {method.label}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {method.value}
                </div>
                {method.secondary && (
                  <div className="text-lg text-gray-400 font-mono">{method.secondary}</div>
                )}
                <div className="mt-6 flex items-center gap-2 text-gray-400 group-hover:text-amber-400 transition-colors">
                  <span className="text-sm font-bold uppercase tracking-wider">
                    {method.external ? "VISIT PROFILE" : "GET IN TOUCH"}
                  </span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          {/* Areas of Interest */}
          <div className="border-2 border-amber-400 bg-gradient-to-br from-amber-400/5 to-transparent">
            <div className="p-8">
              <h2 className="text-3xl font-black text-amber-400 mb-6 tracking-tight">
                AREAS OF INTEREST
              </h2>
              <div className="space-y-4">
                {interests.map((interest, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 bg-amber-400 mt-2 group-hover:scale-150 transition-transform"></div>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {interest}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Available For */}
          <div className="border-2 border-gray-800">
            <div className="p-8">
              <h2 className="text-3xl font-black text-white mb-6 tracking-tight">
                AVAILABLE FOR
              </h2>
              <div className="space-y-4">
                {availability.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 bg-white mt-2 group-hover:scale-150 transition-transform group-hover:bg-amber-400"></div>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Work Together Section */}
        <div className="border-2 border-gray-800 mb-20">
          <div className="p-12">
            <h2 className="text-4xl font-black text-white mb-8">
              WHY WORK WITH ME?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-6xl font-black text-amber-400 mb-3">01</div>
                <h3 className="text-xl font-bold text-white mb-2">PRODUCTION-READY</h3>
                <p className="text-gray-400">
                  I build ML systems that actually work in production, not just notebooks.
                </p>
              </div>
              <div>
                <div className="text-6xl font-black text-amber-400 mb-3">02</div>
                <h3 className="text-xl font-bold text-white mb-2">RESEARCH-BACKED</h3>
                <p className="text-gray-400">
                  IEEE published researcher with focus on explainable AI and real-world impact.
                </p>
              </div>
              <div>
                <div className="text-6xl font-black text-amber-400 mb-3">03</div>
                <h3 className="text-xl font-bold text-white mb-2">END-TO-END</h3>
                <p className="text-gray-400">
                  From data cleaning to deployment, I handle the complete ML pipeline.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Big CTA */}
        <div className="relative border-4 border-amber-400 p-16 text-center bg-gradient-to-br from-amber-400/10 to-transparent overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border-r-4 border-b-4 border-amber-400"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-l-4 border-t-4 border-amber-400"></div>

          <div className="relative z-10">
            <Send className="mx-auto mb-6 text-amber-400" size={56} />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              READY TO BUILD<br />SOMETHING AMAZING?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's create ML systems that make a real impact. Drop me a message and let's discuss your project.
            </p>
            <a
              href="mailto:somaskandan931@gmail.com"
              className="inline-flex items-center gap-4 px-12 py-5 bg-amber-400 text-black font-bold text-lg uppercase tracking-wider hover:bg-white transition-all duration-300 group"
            >
              SEND MESSAGE
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 font-mono">
            Usually responds within 24 hours • Based in Chennai, India (GMT+5:30)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;