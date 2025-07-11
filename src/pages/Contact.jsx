import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">Let's connect and discuss opportunities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-500" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:somaskandan931@gmail.com" className="text-blue-600 hover:text-blue-700">
                    somaskandan931@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-500" size={20} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+91 7200288242 / +65 83643999</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="text-blue-600" size={20} />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/somaskandan-rajagopal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    linkedin.com/in/somaskandan-rajagopal
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Github className="text-gray-800" size={20} />
                <div>
                  <p className="font-medium">GitHub</p>
                  <a 
                    href="https://github.com/Somaskandan931"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    github.com/Somaskandan931
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Let's Work Together</h3>
            <p className="text-gray-700 mb-6">
              I'm always interested in discussing new opportunities, innovative projects, and collaborations in AI/ML. 
              Whether you're looking for a machine learning engineer, AI researcher, or data scientist, I'd love to hear from you.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Areas of Interest</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Machine Learning & AI Development</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision Applications</li>
                  <li>• Explainable AI Solutions</li>
                  <li>• Data Science & Analytics</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">Available For</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Full-time opportunities</li>
                  <li>• Freelance projects</li>
                  <li>• Research collaborations</li>
                  <li>• Consulting work</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;