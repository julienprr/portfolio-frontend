import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import AnimatedSection from '@/components/AnimatedSection';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="flex flex-col items-center justify-center text-center">
      <h1 className="hero-title">
        {t('hero.title')}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent"
        >
          Julien
        </motion.span>
      </h1>
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.7 }}
      >
        <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
      </motion.span>

      {/* Sous-titre */}
      <h3 className="mb-6 px-4 text-base text-muted-foreground sm:text-xl">{t('hero.p1')}</h3>
    </AnimatedSection>
  );
};

export default HeroSection;
