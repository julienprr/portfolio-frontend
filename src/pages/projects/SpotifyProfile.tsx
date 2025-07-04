import { useTranslation } from 'react-i18next';

import SpotifyProfileImage from '@/assets/images/projects/spotify-profile.png';
import FadeInOnScroll from '@/components/FadeInOnScroll';
import TechnoBadge from '@/components/TechnoBadge';
import { Badge } from '@/components/ui/badge';

const SpotifyProfile = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      {/* Project Header */}
      <FadeInOnScroll className="mb-6">
        <h1 className="text-2xl sm:text-6xl font-heading mb-2 text-primary">Spotify Profile</h1>
        <p className="text-muted-foreground text-lg">{t("projects.play-manager.subtitle")}</p>
      </FadeInOnScroll>

      {/* Project Image */}
      <FadeInOnScroll className="rounded-lg overflow-hidden shadow-lg mb-6 sm:mb-12 border border-primary">
        <img src={SpotifyProfileImage} alt="Spotify Profile Screenshot" className="w-full object-cover " />
      </FadeInOnScroll>

      {/* Detailed Description */}
      <FadeInOnScroll className="text-left mb-4">
        <h2 className="section-title">{t("projects.titles.about")}</h2>
        <p>{t('projects.play-manager.p1')}</p>
      </FadeInOnScroll>

      <FadeInOnScroll className="text-left mb-4 sm:mb-12">
        <p>{t('projects.play-manager.p2')}</p>
      </FadeInOnScroll>

      {/* Technologies */}
      <FadeInOnScroll className="space-y-6 text-left mb-6 sm:mb-12">
        <h2 className="section-title">{t("projects.titles.technologies")}</h2>
        <div className="flex flex-wrap gap-2">
          <TechnoBadge name="NestJS" src="/icons/nestjs.svg" alt="NestJS" />
          <TechnoBadge name="React" src="/icons/react.svg" alt="React" />
          <TechnoBadge name="Vite" src="/icons/vite.svg" alt="Vite" />
          <TechnoBadge name="Redux" src="/icons/redux.svg" alt="Redux" />
          <TechnoBadge name="Tailwind CSS" src="/icons/tailwindcss.svg" alt="Tailwind CSS" />
          <TechnoBadge name="Spotify API" src="/icons/spotify.svg" alt="Spotify API" />
        </div>
      </FadeInOnScroll>

      {/* Concepts */}
      <FadeInOnScroll className="space-y-6 text-left mb-6 sm:mb-12">
        <div>
          <h2 className="section-title">{t("projects.titles.keyConcepts")}</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant={'outline'}>OAuth2</Badge>
            <Badge variant={'outline'}>API Integration</Badge>
            <Badge variant={'outline'}>Responsive Design</Badge>
            <Badge variant={'outline'}>Store & providers</Badge>
          </div>
        </div>
      </FadeInOnScroll>
      {/* Links */}

      <FadeInOnScroll className="space-y-6 text-left">
        <h2 className="section-title">{t("projects.titles.links")}</h2>
        <div className="flex flex-col gap-2 mt-6">
          <a
            href="https://github.com/julienprr/Spotify-Profile-Frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            View Source on GitHub
          </a>
          <a
            href="https://spotify-profile.julienprr.com"
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

export default SpotifyProfile;
