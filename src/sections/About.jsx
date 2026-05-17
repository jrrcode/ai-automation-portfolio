import { Section } from '../components/Section.jsx';

export function About() {
  return (
    <Section id="about" label="About">
      <div className="space-y-5 text-base leading-8 text-mist">
        <p>
          I specialize in building practical automation systems for teams that need less manual
          admin work and more operational clarity. My work sits between process design, technical
          setup, and day-to-day business support.
        </p>
        <p>
          I can help turn messy handoffs into clear workflows: lead forms that update your CRM,
          email requests that become tracked tasks, spreadsheets that stay current, and AI summaries
          that make follow-up easier.
        </p>
        <p>
          The goal is simple: useful systems that are easy to understand, easy to maintain, and
          reliable enough to become part of your daily rhythm.
        </p>
      </div>
    </Section>
  );
}
