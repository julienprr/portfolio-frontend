import { useTranslation } from "react-i18next";

const Footer = () => {
      const { t } = useTranslation();

  return (
    <footer className="mt-16 w-full border-t border-muted py-6 text-center text-sm text-muted-foreground">
      <p>
         {t('footer.developpedBy')} <span className="font-semibold text-foreground">julienprr</span>.  {t('footer.contact')}
        <a href="mailto:perrierjulien22@gmail.com" className="underline hover:text-foreground">
          perrierjulien22@gmail.com
        </a>{' '}
        {t('footer.visit')}
        <a
          href="https://github.com/julienprr"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
