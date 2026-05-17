import { ArrowDown, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile.js';
import { fadeUp, stagger } from '../utils/motion.js';

export function Hero() {
  const availabilityColor =
    profile.availability.status === 'available' ? 'bg-emerald-400' : 'bg-rose-500';

  return (
    <motion.section
      className="min-h-[78vh] scroll-mt-24 pt-8 lg:flex lg:min-h-[calc(100vh-12rem)] lg:items-center lg:pt-0"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <div>
        <motion.p
          variants={fadeUp}
          className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent"
        >
          <span className="relative flex size-3">
            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${availabilityColor} opacity-50`} />
            <span className={`relative inline-flex size-3 rounded-full ${availabilityColor}`} />
          </span>
          {profile.availability.label}
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl"
        >
          {profile.headline}
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-mist">
          I help founders, operators, and service businesses connect the tools they already use:
          n8n, Airtable, Google Sheets, Gmail, Typeform, APIs, and AI assistants.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-mint"
          >
            View Projects
            <ArrowDown size={17} />
          </a>
          <a
            href="#contact"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-bold text-slate-100 transition hover:-translate-y-1 hover:border-accent/70 hover:text-accent"
          >
            Start a Conversation
            <CalendarCheck size={17} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
