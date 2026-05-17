import { motion } from 'framer-motion';
import { Section } from '../components/Section.jsx';
import { skillGroups } from '../data/skills.js';
import { fadeUp, stagger } from '../utils/motion.js';

export function Skills() {
  return (
    <Section id="skills" label="Skills + Tools">
      <motion.div className="grid gap-4 sm:grid-cols-2" variants={stagger}>
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={fadeUp}
            className="rounded-lg border border-line/70 bg-slate-900/28 p-5 transition hover:-translate-y-1 hover:border-accent/35 hover:bg-slate-900/50"
          >
            <h3 className="text-base font-bold text-slate-100">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
