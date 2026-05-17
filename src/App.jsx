import { Layout } from './components/Layout.jsx';
import { About } from './sections/About.jsx';
import { Contact } from './sections/Contact.jsx';
import { Experience } from './sections/Experience.jsx';
import { Hero } from './sections/Hero.jsx';
import { Projects } from './sections/Projects.jsx';
import { Services } from './sections/Services.jsx';
import { Skills } from './sections/Skills.jsx';
import { useLenis } from './hooks/useLenis.js';

export default function App() {
  useLenis();

  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  );
}
