import { useTranslation } from 'react-i18next';

import AnimatedSection from '@/components/AnimatedSection';
import ConceptBadge from '@/components/ConceptBadge';
import TechnoBadge from '@/components/TechnoBadge';

import SpotifyProfileImage from '/images/projects/spotify-profile/sc_playlist_details.png';

const SpotifyProfile = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="mx-auto max-w-4xl px-4 py-12">
      {/* Project Header */}
      <div className="mb-6">
        <h1 className="font-heading mb-2 text-2xl text-primary sm:text-6xl">Spotify Profile</h1>
        <p className="text-lg text-muted-foreground">{t('projects.spotify-profile.subtitle')}</p>
      </div>

      {/* Project Image */}
      <div className="mb-6 overflow-hidden rounded-lg border border-primary shadow-lg sm:mb-12">
        <img src={SpotifyProfileImage} alt="Spotify Profile Screenshot" className="w-full object-cover" />
      </div>

      {/* Detailed Description */}
      <div className="mb-4 text-left">
        <h2 className="section-title">{t('projects.titles.about')}</h2>
      </div>

      <div className="mb-4 text-left sm:mb-6">
        <h3 className="paragraph-title">{t('projects.spotify-profile.p1.title')}</h3>
        <p>{t('projects.spotify-profile.p1.content')}</p>
      </div>

      <div className="mb-4 text-left sm:mb-6">
        <h3 className="paragraph-title">{t('projects.spotify-profile.p2.title')}</h3>
        <p>{t('projects.spotify-profile.p2.content')}</p>
      </div>

      <div className="mb-4 text-left sm:mb-6">
        <h3 className="paragraph-title">{t('projects.spotify-profile.p3.title')}</h3>
        <p>{t('projects.spotify-profile.p3.content')}</p>
      </div>

      {/* Technologies */}
      <div className="mb-6 space-y-6 text-left sm:mb-12">
        <h2 className="section-title">{t('projects.titles.technologies')}</h2>
        <div className="flex flex-wrap gap-2">
          <TechnoBadge name="NestJS" src="/icons/nestjs.svg" alt="NestJS" />
          <TechnoBadge name="React" src="/icons/react.svg" alt="React" />
          <TechnoBadge name="Vite" src="/icons/vite.svg" alt="Vite" />
          <TechnoBadge name="Redux" src="/icons/redux.svg" alt="Redux" />
          <TechnoBadge name="Tailwind CSS" src="/icons/tailwindcss.svg" alt="Tailwind CSS" />
          <TechnoBadge name="Spotify API" src="/icons/spotify.svg" alt="Spotify API" />
        </div>
      </div>

      {/* Concepts */}
      <div className="mb-6 space-y-6 text-left sm:mb-12">
        <div>
          <h2 className="section-title">{t('projects.titles.keyConcepts')}</h2>
          <div className="flex flex-wrap gap-2">
            <ConceptBadge conceptKey="concepts.oauth2" />
            <ConceptBadge conceptKey="concepts.apiIntegration" />
            <ConceptBadge conceptKey="concepts.restApi" />
            <ConceptBadge conceptKey="concepts.responsiveDesign" />
            <ConceptBadge conceptKey="concepts.providers" />
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="space-y-6 text-left">
        <h2 className="section-title">{t('projects.titles.links')}</h2>
        <div className="mt-6 flex flex-col gap-2">
          <a
            href="https://github.com/julienprr/Spotify-Profile-Frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {t('projects.text.source')}
          </a>
          <a href="https://spotify-profile.julienprr.com" target="_blank" rel="noopener noreferrer" className="link">
            {t('projects.text.site')}
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SpotifyProfile;
