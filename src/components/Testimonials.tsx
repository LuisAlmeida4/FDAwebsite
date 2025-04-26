import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "DroneTech Consulting helped us reduce our infrastructure inspection costs by 65% while improving safety outcomes. Their team's expertise in drone technology transformed our operations.",
      name: "Jennifer Reeves",
      title: "Operations Director",
      company: "Global Utilities Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "The agricultural drone solution developed by DroneTech Consulting increased our crop yields by 28% in just one growing season. Their data-driven approach to precision agriculture is revolutionary.",
      name: "Robert Chen",
      title: "CEO",
      company: "Harvest Innovations",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "Working with DroneTech Consulting was a game-changer for our construction projects. Their site mapping and progress monitoring solutions saved us thousands of hours and millions in costs.",
      name: "Michael Torres",
      title: "Project Manager",
      company: "Apex Construction",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-white bg-white/20 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80">
            Don't just take our word for it. Hear from organizations that have transformed 
            their operations with our drone technology solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial */}
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
              <div className="flex justify-center mb-6">
                <Quote className="h-12 w-12 text-primary/30" />
              </div>
              
              <blockquote className="text-xl md:text-2xl text-center font-medium text-gray-800 mb-8">
                {testimonials[currentIndex].quote}
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-600">{testimonials[currentIndex].title}</div>
                  <div className="text-primary font-medium">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={goToPrevious}
              className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6 bg-white rounded-full p-2 shadow-lg text-primary hover:text-primary-dark focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6 bg-white rounded-full p-2 shadow-lg text-primary hover:text-primary-dark focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;