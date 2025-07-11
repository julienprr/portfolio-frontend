import HeroSection from '@/sections/HeroSection';
import ProjectsSection from '@/sections/ProjectsSections';
import TimelineSection from '@/sections/TimelineSection';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col gap-12">
      <HeroSection />
      <ProjectsSection />
      <TimelineSection />
    </main>
  );
};

export default Home;
