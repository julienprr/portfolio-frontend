import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import AnimatedSection from '@/components/AnimatedSection';

const ProjectsSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <AnimatedSection className='mb-4 sm:mb-8 lg:mb-12'>
      <h2 className="section-title mb-8 sm:mb-12">{t('projects.titles.myProjects')}</h2>
      <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} onClick={() => navigate(project.route)} className="cursor-pointer">
            <ProjectCard
              title={project.title}
              description={t(`projects.${project.key}.subtitle`)}
              imageUrl={project.imageUrl}
              iconUrl={project.iconUrl}
            />
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
