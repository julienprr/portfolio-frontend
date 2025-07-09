import { useNavigate } from 'react-router-dom';



import CompdocHomepageImage from '@/assets/images/projects/compdoc/sc_homepage.png';
import PlaylistDetailsImage from '@/assets/images/projects/spotify-profile/sc_playlist_details.png';
import ProjectCard from '@/components/ProjectCard';





const projects = [
  {
    title: 'Spotify Profile',
    description: 'An app to visualyze and manage your Spotify playlists easily.',
    imageUrl: PlaylistDetailsImage,
    iconUrl: '/icons/spotify.svg',
    route: '/projects/spotify-profile',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React, Tailwind, and shadcn/ui.',
    imageUrl: '/icons/portfolio.svg',
    iconUrl: '/icons/portfolio.svg',
    route: '/projects/portfolio-website',
  },
  {
    title: 'VPS',
    description: 'VPS managed by myself with Linux / K3S / Hostinger & More',
    imageUrl: '/icons/kubernetes.svg',
    iconUrl: '/icons/kubernetes.svg',
    route: '/projects/my-vps',
  },
  {
    title: 'Compdoc',
    description: 'VPS managed by myself with Linux / K3S / Hostinger & More',
    imageUrl: CompdocHomepageImage,
    iconUrl: '/icons/compdoc.svg',
    route: '/projects/compdoc',
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h2 className="section-title">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <div key={index} onClick={() => navigate(project.route)} className="cursor-pointer">
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              iconUrl={project.iconUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
