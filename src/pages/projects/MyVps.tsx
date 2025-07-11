import { useTranslation } from 'react-i18next';

import AnimatedSection from '@/components/AnimatedSection';
import ConceptBadge from '@/components/ConceptBadge';
import TechnoBadge from '@/components/TechnoBadge';

import vpsCover from '/images/projects/vps-cover.png';

const MyVPS = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="mx-auto max-w-4xl px-4 py-12">
      {/* Project Header */}
      <div className="mb-6">
        <h1 className="font-heading mb-2 text-2xl text-primary sm:text-6xl">My VPS</h1>
        <p className="text-lg text-muted-foreground">{t('projects.my-vps.subtitle')}</p>
      </div>

      {/* Project Image */}
      <div className="mb-6 overflow-hidden rounded-lg border border-primary shadow-lg sm:mb-12">
        <img src={vpsCover} alt="Spotify Profile Screenshot" className="w-full object-cover" />
      </div>

      {/* Detailed Description */}
      <div className="mb-4 text-left">
        <h2 className="section-title">{t('projects.titles.about')}</h2>
      </div>

      <div className="mb-4 text-left sm:mb-6">
        <h3 className="paragraph-title">{t('projects.my-vps.p1.title')}</h3>
        <p>{t('projects.my-vps.p1.content')}</p>
      </div>

      <div className="mb-4 text-left sm:mb-6">
        <h3 className="paragraph-title">{t('projects.my-vps.p2.title')}</h3>
        <p>{t('projects.my-vps.p2.content')}</p>
      </div>

      <div className="mb-4 text-left sm:mb-6">
        <h3 className="paragraph-title">{t('projects.my-vps.p3.title')}</h3>
        <p>{t('projects.my-vps.p3.content')}</p>
      </div>

      <div className="mb-4 text-left sm:mb-6">
        <h3 className="paragraph-title">{t('projects.my-vps.p4.title')}</h3>
        <p>{t('projects.my-vps.p4.content')}</p>
      </div>

      <div className="mb-4 text-left sm:mb-6">
        <h3 className="paragraph-title">{t('projects.my-vps.p5.title')}</h3>
        <p>{t('projects.my-vps.p5.content')}</p>
      </div>

      <div className="mb-4 text-left sm:mb-6">
        <h3 className="paragraph-title">{t('projects.my-vps.p6.title')}</h3>
        <p>{t('projects.my-vps.p6.content')}</p>
      </div>

      {/* Technologies */}
      <div className="mb-6 space-y-6 text-left sm:mb-12">
        <h2 className="section-title">{t('projects.titles.technologies')}</h2>
        <div className="flex flex-wrap gap-2">
          <TechnoBadge name="Ubuntu" src="/icons/ubuntu.svg" alt="Ubuntu" />
          <TechnoBadge name="K3S" src="/icons/kubernetes.svg" alt="K3S" />
          <TechnoBadge name="Docker" src="/icons/docker.svg" alt="Docker" />
          <TechnoBadge name="Heml" src="/icons/helm.svg" alt="Helm" />
          <TechnoBadge name="Cert Manager" src="/icons/cert-manager.svg" alt="Cert Manager" />
          <TechnoBadge name="Letsencrypt" src="/icons/letsencrypt.svg" alt="Letsencrypt" />
        </div>
      </div>

      {/* Concepts */}
      <div className="mb-6 space-y-6 text-left sm:mb-12">
        <div>
          <h2 className="section-title">{t('projects.titles.keyConcepts')}</h2>
          <div className="flex flex-wrap gap-2">
            <ConceptBadge conceptKey="concepts.containerization" />
            <ConceptBadge conceptKey="concepts.orchestration" />
            <ConceptBadge conceptKey="concepts.tlsCertificateManagement" />
            <ConceptBadge conceptKey="concepts.githubAutomation" />
            <ConceptBadge conceptKey="concepts.elk" />
            <ConceptBadge conceptKey="concepts.dnsConfiguration" />
          </div>
        </div>
      </div>
      {/* Links */}

      <div className="space-y-6 text-left">
        <h2 className="section-title">{t('projects.titles.links')}</h2>
        <div className="mt-6 flex flex-col gap-2">
          <a
            href="https://github.com/julienprr/vps-cluster-k3s"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {t('projects.text.source')}
          </a>
          <a href="https://julienprr.com" target="_blank" rel="noopener noreferrer" className="link">
            {t('projects.text.site')}
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default MyVPS;
