import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from './ui/Link';

const heroImages = [
  "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1500",
  "https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&w=1500",
  "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1500"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background images with fade transition */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/60" />
      
      {/* Content */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-wider text-white bg-accent rounded-full">
            Soluções Inovadoras em Drones
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transforme seu Negócio com 
            <span className="text-accent"> Tecnologia Drone</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Ajudamos empresas a aproveitar tecnologia drone de ponta para coleta de dados, 
            inspeção, mapeamento e muito mais. Conte com os especialistas líderes do mercado.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#services" 
              className="btn-primary flex items-center"
            >
              Conheça Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="#contact" 
              className="btn-secondary"
            >
              Agende uma Consultoria
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;