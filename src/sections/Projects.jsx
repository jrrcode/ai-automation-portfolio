import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard.jsx';
import { Section } from '../components/Section.jsx';
import { projects } from '../data/projects.js';
import { stagger } from '../utils/motion.js';

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <motion.div className="grid gap-3" variants={stagger}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}
