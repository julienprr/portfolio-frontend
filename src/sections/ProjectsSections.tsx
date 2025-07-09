import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const ProjectsSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section>
      <h2 className="section-title">{t('projects.titles.myProjects')}</h2>

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
    </section>
  );
};

export default ProjectsSection;
