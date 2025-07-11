import { useTranslation } from 'react-i18next';

import AnimatedSection from '@/components/AnimatedSection';
import ConceptBadge from '@/components/ConceptBadge';
import TechnoBadge from '@/components/TechnoBadge';

import CompdocHomepageImage from '/images/projects/compdoc/sc_homepage.png';

const Compdoc = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="mx-auto max-w-4xl px-4 py-12">
      {/* Project Header */}
      <div className="mb-6">
        <h1 className="font-heading mb-2 text-2xl text-primary sm:text-6xl">Compdoc</h1>
        <p className="text-lg text-muted-foreground">{t('projects.compdoc.subtitle')}</p>
      </div>

      {/* Project Image */}
      <div className="mb-6 overflow-hidden rounded-lg border border-primary shadow-lg sm:mb-12">
        <img src={CompdocHomepageImage} alt="Compdoc Screenshot" className="w-full object-cover" />
      </div>

      {/* Detailed Description */}
      <div className="mb-4 text-left">
        <h2 className="section-title">{t('projects.titles.about')}</h2>
      </div>

      <div className="mb-4 text-left sm:mb-6">
        <h3 className="paragraph-title">{t('projects.compdoc.p1.title')}</h3>
        <p>{t('projects.compdoc.p1.content')}</p>
      </div>

      <div className="mb-4 text-left sm:mb-6">
        <h3 className="paragraph-title">{t('projects.compdoc.p2.title')}</h3>
        <p>{t('projects.compdoc.p2.content')}</p>
      </div>

      <div className="mb-4 text-left sm:mb-6">
        <h3 className="paragraph-title">{t('projects.compdoc.p3.title')}</h3>
        <p>{t('projects.compdoc.p3.content')}</p>
      </div>

      <div className="mb-4 text-left sm:mb-6">
        <h3 className="paragraph-title">{t('projects.compdoc.p4.title')}</h3>
        <p>{t('projects.compdoc.p4.content')}</p>
      </div>

      <div className="mb-4 text-left sm:mb-6">
        <h3 className="paragraph-title">{t('projects.compdoc.p5.title')}</h3>
        <p>{t('projects.compdoc.p5.content')}</p>
      </div>

      {/* Technologies */}
      <div className="mb-6 space-y-6 text-left sm:mb-12">
        <h2 className="section-title">{t('projects.titles.technologies')}</h2>
        <div className="flex flex-wrap gap-2">
          <TechnoBadge name="FastAPI" src="/icons/fastapi.svg" alt="FastAPI" />
          <TechnoBadge name="Python" src="/icons/python.svg" alt="Python" />
          <TechnoBadge name="Preact" src="/icons/preact.svg" alt="Preact" />
          <TechnoBadge name="Material UI" src="/icons/materialui.svg" alt="Material UI" />
          <TechnoBadge name="Docker" src="/icons/docker.svg" alt="Docker" />
          <TechnoBadge name="Nginx" src="/icons/nginx.svg" alt="Nginx" />
        </div>
      </div>

      {/* Concepts */}
      <div className="mb-6 space-y-6 text-left sm:mb-12">
        <div>
          <h2 className="section-title">{t('projects.titles.keyConcepts')}</h2>
          <div className="flex flex-wrap gap-2">
            <ConceptBadge conceptKey="concepts.cosineSimilarity" />
            <ConceptBadge conceptKey="concepts.lemmatization" />
            <ConceptBadge conceptKey="concepts.restApi" />
            <ConceptBadge conceptKey="concepts.agile" />
            <ConceptBadge conceptKey="concepts.gitflow" />
          </div>
        </div>
      </div>

      {/* Contributors */}
      <div className="mb-6 space-y-6 text-left sm:mb-12">
        <div>
          <h2 className="section-title">{t('projects.titles.contributors')}</h2>
          <div className="flex flex-wrap gap-2">
            <a href="https://www.linkedin.com/in/roberto-chacon/" className="link">
              <p>Roberto Chacon</p>
            </a>
            <a href="https://www.linkedin.com/in/hugo-thomas-/" className="link">
              <p>Hugo Thomas</p>
            </a>
            <a href="https://www.linkedin.com/in/manh-huan-nguyen-aa4b97203/" className="link">
              <p>Manh Huan Nguyen</p>
            </a>
            <a href="https://www.linkedin.com/in/tristan-le-saux-65b47629a/" className="link">
              <p>Tistan Le Saux</p>
            </a>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="space-y-6 text-left">
        <h2 className="section-title">{t('projects.titles.links')}</h2>
        <div className="mt-6 flex flex-col gap-2">
          <a href="https://github.com/julienprr/compdoc" target="_blank" rel="noopener noreferrer" className="link">
            {t('projects.text.source')}
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Compdoc;
