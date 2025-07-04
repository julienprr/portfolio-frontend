import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center py-12 text-center">

      {/* Titre principal */}
      <h1 className="sm:text-4xl lg:text-6xl text-2xl font-bold pb-4">
        {t('hero.title')}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent"
        >
          Julien
        </motion.span>
      </h1>

      {/* Sous-titre */}
      <h2 className="mb-6 text-lg text-muted-foreground sm:text-xl">{t('hero.subtitle')}</h2>

    </section>
  );
};

export default HeroSection;
