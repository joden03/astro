import Hero from '../components/Hero';
import FloatingBox from '../components/FloatingBox';
import WaveDivider from '../components/WaveDivider';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import { floatingBoxesTop, floatingBoxesBottom } from '../data/content';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Top Floating Boxes */}
      <section className="py-8 md:py-16">
        <div className="flex gap-4 md:gap-8 justify-center px-6 md:px-8 max-w-7xl mx-auto flex-wrap">
          {floatingBoxesTop.map((box) => (
            <FloatingBox key={box.id} {...box} />
          ))}
        </div>
      </section>
      
      <WaveDivider />
      
      {/* Services Section */}
      <ServicesSection />
      
      <WaveDivider />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Bottom Floating Boxes */}
      <section className="py-8 md:py-16">
        <div className="flex gap-4 md:gap-8 justify-center px-6 md:px-8 max-w-7xl mx-auto flex-wrap">
          {floatingBoxesBottom.map((box) => (
            <FloatingBox key={box.id} {...box} />
          ))}
        </div>
      </section>
      
      <WaveDivider />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;