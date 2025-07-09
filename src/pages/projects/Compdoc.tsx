import { useTranslation } from 'react-i18next';

import CompdocHomepageImage from '/images/projects/compdoc/sc_homepage.png';
import ConceptBadge from '@/components/ConceptBadge';
import FadeInOnScroll from '@/components/FadeInOnScroll';
import TechnoBadge from '@/components/TechnoBadge';

const Compdoc = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      {/* Project Header */}
      <FadeInOnScroll className="mb-6">
        <h1 className="text-2xl sm:text-6xl font-heading mb-2 text-primary">Compdoc</h1>
        <p className="text-muted-foreground text-lg">{t('projects.compdoc.subtitle')}</p>
      </FadeInOnScroll>

      {/* Project Image */}
      <FadeInOnScroll className="rounded-lg overflow-hidden shadow-lg mb-6 sm:mb-12 border border-primary">
        <img src={CompdocHomepageImage} alt="Compdoc Screenshot" className="w-full object-cover " />
      </FadeInOnScroll>

      {/* Detailed Description */}
      <FadeInOnScroll className="text-left mb-4">
        <h2 className="section-title">{t('projects.titles.about')}</h2>
      </FadeInOnScroll>

      <FadeInOnScroll className="text-left mb-4 sm:mb-6">
        <h3 className="paragraph-title">{t('projects.compdoc.p1.title')}</h3>
        <p>{t('projects.compdoc.p1.content')}</p>
      </FadeInOnScroll>

      <FadeInOnScroll className="text-left mb-4 sm:mb-6">
        <h3 className="paragraph-title">{t('projects.compdoc.p2.title')}</h3>
        <p>{t('projects.compdoc.p2.content')}</p>
      </FadeInOnScroll>

      <FadeInOnScroll className="text-left mb-4 sm:mb-6">
        <h3 className="paragraph-title">{t('projects.compdoc.p3.title')}</h3>
        <p>{t('projects.compdoc.p3.content')}</p>
      </FadeInOnScroll>

      <FadeInOnScroll className="text-left mb-4 sm:mb-6">
        <h3 className="paragraph-title">{t('projects.compdoc.p4.title')}</h3>
        <p>{t('projects.compdoc.p4.content')}</p>
      </FadeInOnScroll>

      <FadeInOnScroll className="text-left mb-4 sm:mb-6">
        <h3 className="paragraph-title">{t('projects.compdoc.p5.title')}</h3>
        <p>{t('projects.compdoc.p5.content')}</p>
      </FadeInOnScroll>

      {/* Technologies */}
      <FadeInOnScroll className="space-y-6 text-left mb-6 sm:mb-12">
        <h2 className="section-title">{t('projects.titles.technologies')}</h2>
        <div className="flex flex-wrap gap-2">
          <TechnoBadge name="FastAPI" src="/icons/fastapi.svg" alt="FastAPI" />
          <TechnoBadge name="Python" src="/icons/python.svg" alt="Python" />
          <TechnoBadge name="Preact" src="/icons/preact.svg" alt="Preact" />
          <TechnoBadge name="Material UI" src="/icons/materialui.svg" alt="Material UI" />
          <TechnoBadge name="Docker" src="/icons/docker.svg" alt="Docker" />
          <TechnoBadge name="Nginx" src="/icons/nginx.svg" alt="Nginx" />
        </div>
      </FadeInOnScroll>

      {/* Concepts */}
      <FadeInOnScroll className="space-y-6 text-left mb-6 sm:mb-12">
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
      </FadeInOnScroll>

      {/* Contributors */}
      <FadeInOnScroll className="space-y-6 text-left mb-6 sm:mb-12">
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
      </FadeInOnScroll>

      {/* Links */}
      <FadeInOnScroll className="space-y-6 text-left">
        <h2 className="section-title">{t('projects.titles.links')}</h2>
        <div className="flex flex-col gap-2 mt-6">
          <a href="https://github.com/julienprr/compdoc" target="_blank" rel="noopener noreferrer" className="link">
            {t('projects.text.source')}
          </a>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default Compdoc;
