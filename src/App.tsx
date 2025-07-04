import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
