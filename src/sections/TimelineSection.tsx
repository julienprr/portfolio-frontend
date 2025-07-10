import { useTranslation } from 'react-i18next';

import AnimatedSection from '@/components/AnimatedSection.tsx';

import BackgroundTimeLine from './BackgroundTimeline.tsx';

export type BackgroundItem = {
  date: string;
  title: string;
  location: string;
  description: string;
};

const TimelineSection = () => {
  const { t } = useTranslation();
  const timeline = t('background.items', { returnObjects: true }) as BackgroundItem[];

  return (
    <AnimatedSection>
      <h1 className="section-title">{t('background.title')}</h1>
      <p className="section-subtitle">{t('background.subtitle')}</p>
      <BackgroundTimeLine timeline={timeline} />
    </AnimatedSection>
  );
};

export default TimelineSection;
