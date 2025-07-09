import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => i18n.changeLanguage('fr')}
        className={`rounded-full px-2 py-0.5 text-sm sm:px-3 sm:py-1 sm:text-base ${
          i18n.language === 'fr' ? 'bg-foreground text-background' : 'border border-foreground text-foreground'
        }`}
      >
        🇫🇷 FR
      </button>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`rounded-full px-2 py-0.5 text-sm sm:px-3 sm:py-1 sm:text-base ${
          i18n.language === 'en' ? 'bg-foreground text-background' : 'border border-foreground text-foreground'
        }`}
      >
        🇬🇧 EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
