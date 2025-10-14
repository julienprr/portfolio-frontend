import { useLocation, useNavigate } from 'react-router-dom';

import { ArrowLeft } from 'lucide-react';

import { useBreakpoint } from '@/hooks/useBreakpoint';

import LanguageSwitcher from './LanguageSwitcher';
import TechnoBadge from './TechnoBadge';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';

function LinkedInButton() {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return (
      <a href="https://www.linkedin.com/in/julien-perrier-8735a6226/" target="_blank">
        <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
      </a>
    );
  } else {
    return (
      <a href="https://www.linkedin.com/in/julien-perrier-8735a6226/" target="_blank">
        <TechnoBadge name="LinkedIn" src="/icons/linkedin.svg" alt="LinkedIn" /> 
      </a>
    );
  }
}

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isDetailPage = location.pathname.startsWith('/projects/');

  return (
    <header className="flex w-full items-center justify-between border-b border-white/10 px-6 py-4">
      <LinkedInButton />

      <div className="flex items-center gap-2">
        {isDetailPage && (
          <Button variant={'ghost'} onClick={() => navigate(-1)} className="flex items-center gap-2 2xl:hidden">
            <ArrowLeft className="h-5 w-5 text-foreground" />
            <span className="sr-only">Back</span>
          </Button>
        )}
      </div>
      <div className="flex flex-row gap-5">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
