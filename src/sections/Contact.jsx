import { Mail, Send } from 'lucide-react';
import { Section } from '../components/Section.jsx';
import { profile } from '../data/profile.js';

export function Contact() {
  return (
    <Section id="contact" label="Contact" className="pb-28">
      <div className="rounded-lg border border-accent/20 bg-accent/8 p-7 shadow-glow sm:p-9">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Open to projects</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-50">Let’s automate the work that slows you down.</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-mist">
          Share the workflow, admin task, or business process you want to improve. I can help
          scope a practical first version and keep it simple enough to maintain.
        </p>
        <div className="mt-7 flex flex-col gap-4 sm:flex-row">
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-mint"
          >
            <Mail size={17} />
            Email Me
          </a>
          <a
            href="#services"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-bold text-slate-100 transition hover:-translate-y-1 hover:border-accent/70 hover:text-accent"
          >
            <Send size={17} />
            Review Services
          </a>
        </div>
      </div>
    </Section>
  );
}
