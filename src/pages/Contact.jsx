import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600">Open to opportunities, collaborations, and discussions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
            <div className="space-y-6">
              <a href="mailto:somaskandan931@gmail.com" className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all group">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Email</p>
                  <p className="text-blue-600 hover:text-blue-700 font-semibold">somaskandan931@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Phone</p>
                  <p className="text-gray-700 font-semibold">+91 7200288242 / +65 83643999</p>
                </div>
              </div>

              <a href="https://www.linkedin.com/in/somaskandan-rajagopal/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all group">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">LinkedIn</p>
                  <p className="text-blue-600 hover:text-blue-700 font-semibold">somaskandan-rajagopal</p>
                </div>
              </a>

              <a href="https://github.com/Somaskandan931" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all group">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">GitHub</p>
                  <p className="text-blue-600 hover:text-blue-700 font-semibold">Somaskandan931</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Let's Work Together</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects, and collaborations in AI/ML.
              Whether you're looking for a machine learning engineer, AI researcher, or data scientist, I'd love to hear from you.
            </p>
            <div className="space-y-4">
              <div className="p-5 bg-blue-50 rounded-xl border-l-4 border-blue-600">
                <h4 className="font-bold text-blue-900 mb-3 text-lg">Areas of Interest</h4>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="font-medium">Machine Learning & AI Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="font-medium">Natural Language Processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="font-medium">Explainable AI Solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="font-medium">Production ML Systems</span>
                  </li>
                </ul>
              </div>
              <div className="p-5 bg-green-50 rounded-xl border-l-4 border-green-600">
                <h4 className="font-bold text-green-900 mb-3 text-lg">Available For</h4>
                <ul className="text-sm text-green-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="font-medium">Full-time opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="font-medium">Freelance projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="font-medium">Research collaborations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="font-medium">Consulting work</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center shadow-2xl">
          <h3 className="text-2xl font-bold mb-3">Ready to collaborate?</h3>
          <p className="text-blue-100 mb-6 text-lg">Let's build something amazing together</p>
          <a
            href="mailto:somaskandan931@gmail.com"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Send me an email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;