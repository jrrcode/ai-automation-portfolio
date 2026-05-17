import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion.js';

export function Section({ id, label, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-15% 0px' }}
      variants={fadeUp}
    >
      <h2 className="section-label">{label}</h2>
      {children}
    </motion.section>
  );
}
