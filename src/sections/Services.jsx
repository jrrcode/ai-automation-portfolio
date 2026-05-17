import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section.jsx';
import { services } from '../data/services.js';
import { fadeUp, stagger } from '../utils/motion.js';

export function Services() {
  return (
    <Section id="services" label="Services">
      <motion.div className="grid gap-4" variants={stagger}>
        {services.map((service) => (
          <motion.article
            key={service.title}
            variants={fadeUp}
            className="group rounded-lg border border-line/70 bg-slate-900/28 p-6 transition hover:-translate-y-1 hover:border-accent/35 hover:bg-slate-900/50"
          >
            <h3 className="text-lg font-bold text-slate-100 transition group-hover:text-accent">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-mist">{service.description}</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="shrink-0 text-mint" />
                  {outcome}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
