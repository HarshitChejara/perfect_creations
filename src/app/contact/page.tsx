import ContactSection from "app/components/ContactSection";
import ExploreProjectsSection from "app/components/ExploreProjectsSection";
import FaqSection from "app/components/FaqSection";

const ContactPage = () => {
  return (
    <main className="pt-24"> {/* space for header */}
      <ContactSection />
      <ExploreProjectsSection />
      <FaqSection />
    </main>
  );
};

export default ContactPage;
