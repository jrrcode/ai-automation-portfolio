import { motion } from 'framer-motion';
import { Section } from '../components/Section.jsx';
import { TagList } from '../components/TagList.jsx';
import { journey } from '../data/experience.js';
import { fadeUp, stagger } from '../utils/motion.js';

export function Experience() {
  return (
    <Section id="experience" label="Experience + Learning Journey">
      <motion.div className="space-y-4" variants={stagger}>
        {journey.map((item) => (
          <motion.article
            key={`${item.period}-${item.title}`}
            variants={fadeUp}
            className="grid gap-3 rounded-lg border border-transparent p-5 transition hover:border-line hover:bg-slate-900/36 sm:grid-cols-[8rem_1fr]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{item.period}</p>
            <div>
              <h3 className="text-base font-bold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-mist">{item.description}</p>
              <TagList tags={item.tags} />
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
