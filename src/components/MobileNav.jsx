import { Menu } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle.jsx';

export function MobileNav({ items, theme, onThemeToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/86 px-4 py-3 backdrop-blur-xl sm:px-6 lg:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <a href="#top" className="focus-ring rounded-sm text-sm font-bold uppercase tracking-[0.18em] text-slate-100">
          Portfolio
        </a>
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} compact />
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring grid size-10 place-items-center rounded-full border border-white/10 text-slate-100 transition hover:border-accent/60 hover:text-accent"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-4 grid max-w-7xl gap-2 pb-2">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-semibold text-mist transition hover:bg-white/5 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
