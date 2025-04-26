import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="FA Consulting" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="nav-link">Serviços</Link>
            <Link href="#case-studies" className="nav-link">Cases</Link>
            <Link href="#about" className="nav-link">Sobre</Link>
            <Link href="#blog" className="nav-link">Blog</Link>
            <Link href="#contact" className="btn-primary">Contato</Link>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-dark focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link 
            href="#services" 
            className="block px-3 py-2 text-base font-medium text-primary hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Serviços
          </Link>
          <Link 
            href="#case-studies" 
            className="block px-3 py-2 text-base font-medium text-primary hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Cases
          </Link>
          <Link 
            href="#about" 
            className="block px-3 py-2 text-base font-medium text-primary hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Sobre
          </Link>
          <Link 
            href="#blog" 
            className="block px-3 py-2 text-base font-medium text-primary hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link 
            href="#contact" 
            className="block px-3 py-2 text-base font-medium bg-primary text-white rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;