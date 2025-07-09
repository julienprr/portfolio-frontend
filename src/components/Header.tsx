import { useLocation, useNavigate } from 'react-router-dom';

import { ArrowLeft } from 'lucide-react';

import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/projects/');

  return (
    <header className="flex w-full items-center justify-between border-b border-white/10 px-6 py-4">
      <div className="flex items-center gap-2">
        {isDetailPage && (
          <Button variant={'ghost'} onClick={() => navigate(-1)} className="flex 2xl:hidden items-center gap-2">
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
