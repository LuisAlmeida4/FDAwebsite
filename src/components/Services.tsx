import React from 'react';
import { Award, Lightbulb, BarChart, Shield, MapPin, Building, Plane, Sprout } from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Certificação de Drones",
      description: "Auxílio completo no processo de certificação de drones junto aos órgãos reguladores, garantindo conformidade com todas as normas vigentes.",
      icon: <Award size={24} />
    },
    {
      title: "Soluções Personalizadas",
      description: "Desenvolvimento de estratégias para integração de drones em seu negócio, com soluções adaptadas às necessidades específicas da sua empresa.",
      icon: <Lightbulb size={24} />
    },
    {
      title: "Estudos de Mercado",
      description: "Análises aprofundadas do mercado de drones civis e militares, oferecendo insights estratégicos para tomada de decisões.",
      icon: <BarChart size={24} />
    },
    {
      title: "Consultoria em Marketing",
      description: "Estratégias especializadas de marketing para empresas do setor de drones, incluindo posicionamento de marca e comunicação.",
      icon: <Shield size={24} />
    },
    {
      title: "Agricultura de Precisão",
      description: "Soluções com drones para agricultura, incluindo mapeamento de culturas, análise de saúde vegetal e pulverização.",
      icon: <Sprout size={24} />
    },
    {
      title: "Mapeamento Aéreo",
      description: "Serviços completos de mapeamento e levantamento topográfico com drones, gerando dados precisos e modelos 3D.",
      icon: <MapPin size={24} />
    },
    {
      title: "Inspeção de Infraestrutura",
      description: "Inspeções detalhadas de estruturas, edifícios e instalações industriais utilizando tecnologia drone avançada.",
      icon: <Building size={24} />
    },
    {
      title: "Consultoria Especializada",
      description: "Assessoria técnica e estratégica para projetos especiais envolvendo tecnologia drone em diferentes setores.",
      icon: <Plane size={24} />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Soluções Completas em Tecnologia Drone
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Oferecemos um conjunto abrangente de serviços em tecnologia drone para 
            ajudar empresas a inovar e resolver desafios complexos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;