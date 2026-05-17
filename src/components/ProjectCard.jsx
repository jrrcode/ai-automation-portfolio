import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TagList } from './TagList.jsx';
import { fadeUp } from '../utils/motion.js';

export function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.href}
      variants={fadeUp}
      className="group block rounded-lg border border-transparent p-5 transition duration-300 hover:border-line hover:bg-slate-900/45 hover:shadow-glow sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">{project.metric}</p>
          <h3 className="mt-2 flex items-center gap-2 text-lg font-bold text-slate-100 transition group-hover:text-accent">
            {project.title}
            <ArrowUpRight size={17} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
          </h3>
        </div>
        <div className="h-12 w-full rounded-md border border-white/8 bg-[linear-gradient(135deg,rgba(125,211,252,0.16),rgba(142,246,210,0.05),rgba(255,180,162,0.12))] sm:w-28" />
      </div>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-mist">{project.description}</p>
      <TagList tags={project.tags} />
    </motion.a>
  );
}
