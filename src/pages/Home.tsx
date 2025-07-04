import ProjectsSection from '@/sections/ProjectsSections';
import HeroSection from '../sections/HeroSection';

const Home = () => {
  return (
    <main className="flex h-screen flex-col overflow-y-auto">
      <HeroSection />
      <ProjectsSection/>
    </main>
  );
};

export default Home;
