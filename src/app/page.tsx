import Contact from "./components/Contact";
import CorporateClients from "./components/CorporateClients";
import HeroCarousel from "./components/HeroCarousel";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import RecentWorks from "./components/RecentWorks";
import Testimonials from "./components/Testimonials";
import WhyUsSection from "./components/WhyUsSection";


export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <CorporateClients />
      <ProfileSection />
      <ProjectsSection />
      <WhyUsSection />
      <RecentWorks />
      <Testimonials />
      <Contact />
    </main>
  );
}