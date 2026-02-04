import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const NavBar = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['home', 'about', 'projects', 'experience', 'contact'];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-black/95 backdrop-blur-xl border-b-2 border-amber-400">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <Sparkles className="text-amber-400 animate-pulse" size={24} />
                  <div className="absolute inset-0 blur-xl bg-amber-400/50"></div>
                </div>
                <div className="font-black text-xl md:text-2xl tracking-tight leading-tight">
                  <span className="text-white">RAJAGOPAL </span>
                  <span className="text-amber-400">SOMASKANDAN</span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-2">
                {navItems.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                      activeTab === tab
                        ? 'text-black'
                        : 'text-amber-400 hover:text-white'
                    }`}
                  >
                    {activeTab === tab && (
                      <div className="absolute inset-0 bg-amber-400 transform -skew-x-12"></div>
                    )}
                    <span className="relative z-10">{tab}</span>
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-3 text-amber-400 hover:text-white transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sliding Menu */}
      <div
        className={`md:hidden fixed top-20 right-0 bottom-0 w-72 bg-black/98 backdrop-blur-xl border-l-2 border-amber-400 z-40 transform transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navItems.map((tab, idx) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`relative px-6 py-4 font-bold uppercase tracking-wider text-left transition-all duration-300 overflow-hidden group ${
                activeTab === tab
                  ? 'text-black'
                  : 'text-amber-400'
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {activeTab === tab && (
                <div className="absolute inset-0 bg-amber-400 transform -skew-x-12"></div>
              )}
              <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300 inline-block">
                {tab}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-20 bg-black/60 backdrop-blur-sm z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default NavBar;