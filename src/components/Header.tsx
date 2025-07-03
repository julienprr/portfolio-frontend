import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b border-white/10 px-6 py-4">
      <div>
        <LanguageSwitcher />
      </div>
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}
