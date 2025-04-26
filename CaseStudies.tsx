import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from './ui/Link';

interface CaseStudy {
  id: number;
  title: string;
  summary: string;
  description: string;
  image: string;
  category: string;
  results: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Agricultural Yield Monitoring System",
    summary: "Implementing drone technology to optimize crop management",
    description: "We developed a comprehensive drone monitoring system for a major agricultural client that increased crop yields by 28% and reduced resource usage.",
    image: "https://images.pexels.com/photos/2219590/pexels-photo-2219590.jpeg?auto=compress&cs=tinysrgb&w=1500",
    category: "Agriculture",
    results: [
      "28% increase in crop yield",
      "35% reduction in water usage",
      "Significant decrease in pesticide application"
    ]
  },
  {
    id: 2,
    title: "Infrastructure Inspection Solution",
    summary: "Automated drone inspections for critical infrastructure",
    description: "Our team created an autonomous drone inspection system for a utility company that reduced inspection costs by 65% while improving safety metrics.",
    image: "https://images.pexels.com/photos/2416600/pexels-photo-2416600.jpeg?auto=compress&cs=tinysrgb&w=1500",
    category: "Utilities",
    results: [
      "65% reduction in inspection costs",
      "90% decrease in safety incidents",
      "Identified 23 critical infrastructure issues"
    ]
  },
  {
    id: 3,
    title: "Emergency Response Coordination",
    summary: "Drone network for disaster management and response",
    description: "We implemented a rapid-deployment drone network for emergency services that improved response times and situation assessment capabilities.",
    image: "https://images.pexels.com/photos/442584/pexels-photo-442584.jpeg?auto=compress&cs=tinysrgb&w=1500",
    category: "Public Safety",
    results: [
      "42% faster emergency response times",
      "Improved situational awareness",
      "Enhanced coordination across emergency services"
    ]
  }
];

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Proven Success Stories
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Explore how we've helped organizations transform their operations with innovative drone technology solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.id} 
              className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => setActiveCase(study)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <span className="p-2 m-3 text-xs font-bold bg-accent text-white rounded">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.summary}</p>
                <button 
                  className="text-primary font-medium flex items-center transition-colors hover:text-primary-dark"
                >
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Case Study Modal */}
        {activeCase && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setActiveCase(null)}>
            <div 
              className="bg-white rounded-lg max-w-3xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <img 
                  src={activeCase.image} 
                  alt={activeCase.title} 
                  className="w-full h-full object-cover"
                />
                <button
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
                  onClick={() => setActiveCase(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-accent rounded-full mb-4">
                  {activeCase.category}
                </span>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{activeCase.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{activeCase.description}</p>
                
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Key Results:</h4>
                <ul className="mb-6 space-y-2">
                  {activeCase.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-accent mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-end">
                  <button 
                    className="btn-primary"
                    onClick={() => setActiveCase(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;