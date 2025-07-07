import { useTranslation } from 'react-i18next';

import vpsCover from '@/assets/images/projects/vps-cover.png';
import FadeInOnScroll from '@/components/FadeInOnScroll';
import TechnoBadge from '@/components/TechnoBadge';
import { Badge } from '@/components/ui/badge';

const MyVPS = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      {/* Project Header */}
      <FadeInOnScroll className="mb-6">
        <h1 className="text-2xl sm:text-6xl font-heading mb-2 text-primary">My VPS</h1>
        <p className="text-muted-foreground text-lg">{t('projects.my-vps.subtitle')}</p>
      </FadeInOnScroll>

      {/* Project Image */}
      <FadeInOnScroll className="rounded-lg overflow-hidden shadow-lg mb-6 sm:mb-12 border border-primary">
        <img src={vpsCover} alt="Spotify Profile Screenshot" className="w-full object-cover " />
      </FadeInOnScroll>

      {/* Detailed Description */}
      <FadeInOnScroll className="text-left mb-4">
        <h2 className="section-title">{t('projects.titles.about')}</h2>
      </FadeInOnScroll>

      <FadeInOnScroll className="text-left mb-4 sm:mb-6">
        <h3 className="paragraph-title">{t('projects.my-vps.p1.title')}</h3>
        <p>{t('projects.my-vps.p1.content')}</p>
      </FadeInOnScroll>

      <FadeInOnScroll className="text-left mb-4 sm:mb-6">
        <h3 className="paragraph-title">{t('projects.my-vps.p2.title')}</h3>
        <p>{t('projects.my-vps.p2.content')}</p>
      </FadeInOnScroll>

      <FadeInOnScroll className="text-left mb-4 sm:mb-6">
        <h3 className="paragraph-title">{t('projects.my-vps.p3.title')}</h3>
        <p>{t('projects.my-vps.p3.content')}</p>
      </FadeInOnScroll>

      <FadeInOnScroll className="text-left mb-4 sm:mb-6">
        <h3 className="paragraph-title">{t('projects.my-vps.p4.title')}</h3>
        <p>{t('projects.my-vps.p4.content')}</p>
      </FadeInOnScroll>

      <FadeInOnScroll className="text-left mb-4 sm:mb-6">
        <h3 className="paragraph-title">{t('projects.my-vps.p5.title')}</h3>
        <p>{t('projects.my-vps.p5.content')}</p>
      </FadeInOnScroll>

      <FadeInOnScroll className="text-left mb-4 sm:mb-6">
        <h3 className="paragraph-title">{t('projects.my-vps.p6.title')}</h3>
        <p>{t('projects.my-vps.p6.content')}</p>
      </FadeInOnScroll>

      {/* Technologies */}
      <FadeInOnScroll className="space-y-6 text-left mb-6 sm:mb-12">
        <h2 className="section-title">{t('projects.titles.technologies')}</h2>
        <div className="flex flex-wrap gap-2">
          <TechnoBadge name="Ubuntu" src="/icons/ubuntu.svg" alt="Ubuntu" />
          <TechnoBadge name="K3S" src="/icons/kubernetes.svg" alt="K3S" />
          <TechnoBadge name="Docker" src="/icons/docker.svg" alt="Docker" />
          <TechnoBadge name="Heml" src="/icons/helm.svg" alt="Helm" />
          <TechnoBadge name="Cert Manager" src="/icons/cert-manager.svg" alt="Cert Manager" />
          <TechnoBadge name="Letsencrypt" src="/icons/letsencrypt.svg" alt="Letsencrypt" />
        </div>
      </FadeInOnScroll>

      {/* Concepts */}
      <FadeInOnScroll className="space-y-6 text-left mb-6 sm:mb-12">
        <div>
          <h2 className="section-title">{t('projects.titles.keyConcepts')}</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant={'outline'}>Containerisation</Badge>
            <Badge variant={'outline'}>Orchestration</Badge>
            <Badge variant={'outline'}>TLS Certificate Management</Badge>
            <Badge variant={'outline'}>Sealed Secrets</Badge>
            <Badge variant={'outline'}>Automation (Github Action)</Badge>
            <Badge variant={'outline'}>Monitoring (ELK)</Badge>
            <Badge variant={'outline'}>DNS configuration </Badge>
          </div>
        </div>
      </FadeInOnScroll>
      {/* Links */}

      <FadeInOnScroll className="space-y-6 text-left">
        <h2 className="section-title">{t('projects.titles.links')}</h2>
        <div className="flex flex-col gap-2 mt-6">
          <a
            href="https://github.com/julienprr/vps-cluster-k3s"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            View Source on GitHub
          </a>
          <a
            href="https://julienprr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            Visit Live Site
          </a>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default MyVPS;
