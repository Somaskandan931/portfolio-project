import React from 'react';

const NavBar = ({ activeTab, setActiveTab }) => (
  <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Somaskandan
        </div>
        <div className="flex space-x-8">
          {['home', 'about', 'projects', 'experience', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;