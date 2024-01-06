import Footer from './components/footer';
import Navbar from './components/navbar';
import ContactSection from './sections/contact';
import ExperienceSection from './sections/experience';
import HelloSection from './sections/hello';
import ProjectSection from './sections/project';
import SkillSection from './sections/skill';

function App() {
  return (
    <>
      <Navbar />
      <HelloSection />
      <ProjectSection />
      <SkillSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
