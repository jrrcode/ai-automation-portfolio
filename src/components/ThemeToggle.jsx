import { Moon, Sun } from 'lucide-react';

export function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className="focus-ring group inline-flex items-center gap-3 rounded-full border border-white/12 bg-slate-900/30 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-mist backdrop-blur transition hover:-translate-y-1 hover:border-accent/60 hover:text-accent"
    >
      <span className="grid size-7 place-items-center rounded-full bg-white/8 text-slate-100 transition group-hover:bg-accent/15 group-hover:text-accent">
        {isDark ? <Sun size={15} /> : <Moon size={15} />}
      </span>
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}
