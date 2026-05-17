import { Moon, Sun } from 'lucide-react';

export function ThemeToggle({ theme, onToggle, compact = false }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className={`focus-ring group inline-flex items-center rounded-full border border-white/12 bg-slate-900/30 text-xs font-bold uppercase tracking-[0.16em] text-mist backdrop-blur transition hover:-translate-y-1 hover:border-accent/60 hover:text-accent ${
        compact ? 'gap-2 px-2 py-2' : 'gap-3 px-3 py-2'
      }`}
    >
      <span className="grid size-7 place-items-center rounded-full bg-white/8 text-slate-100 transition group-hover:bg-accent/15 group-hover:text-accent">
        {isDark ? <Sun size={15} /> : <Moon size={15} />}
      </span>
      <span className={compact ? 'hidden min-[380px]:inline' : ''}>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}
