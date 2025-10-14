import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';

import Footer from './components/Footer';

const storedTheme = localStorage.getItem('theme');

if (storedTheme === 'dark' || !storedTheme) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
