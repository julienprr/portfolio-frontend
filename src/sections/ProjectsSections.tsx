import { useNavigate } from 'react-router-dom';

import SpotifyProfileImage from '@/assets/images/projects/spotify-profile.png';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'Spotify Profile',
    description: 'An app to manage and copy your Spotify playlists easily.',
    imageUrl: SpotifyProfileImage,
    route: '/projects/spotify-profile',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React, Tailwind, and shadcn/ui.',
    imageUrl: '../../assets/images/projects/spotify-profile.png',
    route: '/projects/portfolio-website',
  },
  {
    title: 'E-Commerce API',
    description: 'REST API for a shopping platform with Spring Boot and PostgreSQL.',
    imageUrl: '/images/ecommerce-api.png',
    route: '/projects/ecommerce-api',
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <h2 className="text-4xl font-heading text-center mb-8">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <div key={index} onClick={() => navigate(project.route)} className="cursor-pointer">
            <ProjectCard title={project.title} description={project.description} imageUrl={project.imageUrl} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
