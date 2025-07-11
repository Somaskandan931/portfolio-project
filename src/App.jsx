import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import ExperiencePage from './pages/Experience';
import ContactPage from './pages/Contact';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home': 
        return <HomePage setActiveTab={setActiveTab} />;
      case 'about': 
        return <AboutPage />;
      case 'projects': 
        return <ProjectsPage />;
      case 'experience': 
        return <ExperiencePage />;
      case 'contact': 
        return <ContactPage />;
      default: 
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderPage()}
    </div>
  );
};

export default Portfolio;