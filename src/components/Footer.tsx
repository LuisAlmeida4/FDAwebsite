import React from 'react';
import { Bone as Drone, ChevronRight, Mail } from 'lucide-react';
import { Link } from './ui/Link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Drone className="h-8 w-8 text-accent" />
              <span className="ml-2 text-xl font-bold tracking-tight">
                DroneTech
              </span>
              <span className="ml-1 text-xl font-light tracking-tight text-accent">
                Consulting
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading drone technology consulting firm helping businesses across industries leverage 
              aerial intelligence for smarter operations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#services" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link 
                  href="#case-studies" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="#blog" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#services" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Aerial Mapping & Surveying
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Drone Fleet Management
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Data Analytics & Insights
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Regulatory Compliance
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Aerial Photography & Videography
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Custom Drone Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest industry insights and company news.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-accent text-white rounded-r-md hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} DroneTech Consulting. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;