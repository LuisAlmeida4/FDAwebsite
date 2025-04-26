import React from 'react';
import { Award, Users, Clock, Briefcase } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 transition-all duration-300 hover:shadow-lg">
      <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold text-center mb-1 text-gray-900">{name}</h3>
      <p className="text-accent text-center mb-3">{role}</p>
      <p className="text-gray-600 text-center">{bio}</p>
    </div>
  );
};

const About = () => {
  const stats = [
    { value: '10+', label: 'Anos de Experiência', icon: <Clock className="h-8 w-8" /> },
    { value: '200+', label: 'Clientes Atendidos', icon: <Users className="h-8 w-8" /> },
    { value: '500+', label: 'Projetos Concluídos', icon: <Briefcase className="h-8 w-8" /> },
    { value: '15+', label: 'Prêmios do Setor', icon: <Award className="h-8 w-8" /> }
  ];

  const team = [
    {
      name: "Dr. Carlos Ferreira",
      role: "Fundador & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Especialista em tecnologia drone com mais de 15 anos de experiência em consultoria empresarial."
    },
    {
      name: "Dra. Ana Almeida",
      role: "Diretora de Tecnologia",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "PhD em Engenharia Aeroespacial, especialista em sistemas autônomos e IA."
    },
    {
      name: "Roberto Santos",
      role: "Diretor de Operações",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Especialista em gestão de operações com drones e conformidade regulatória."
    },
    {
      name: "Dra. Marina Costa",
      role: "Diretora de Pesquisa",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Especialista em sistemas de aquisição de dados e visão computacional."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Especialistas Líderes em Consultoria Drone
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Com uma década de experiência no setor, ajudamos organizações a aproveitar o poder da 
            tecnologia drone para transformar suas operações e alcançar resultados extraordinários.
          </p>
        </div>
        
        {/* Company stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-primary mb-3 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Mission statement */}
        <div className="bg-primary text-white rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
          <p className="text-lg mb-0">
            Democratizar o acesso à tecnologia drone avançada em todos os setores, permitindo que 
            organizações de todos os portes aproveitem a inteligência aérea para operações mais 
            inteligentes, seguras e eficientes.
          </p>
        </div>
        
        {/* Team section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Conheça Nossa Equipe de Liderança</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;