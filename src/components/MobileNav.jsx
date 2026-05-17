import { Menu } from 'lucide-react';
import { useState } from 'react';

export function MobileNav({ items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/86 px-6 py-4 backdrop-blur-xl lg:hidden">
      <div className="flex items-center justify-between">
        <a href="#top" className="focus-ring rounded-sm text-sm font-bold uppercase tracking-[0.18em] text-slate-100">
          Portfolio
        </a>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring rounded-full border border-white/10 p-2 text-slate-100 transition hover:border-accent/60 hover:text-accent"
        >
          <Menu size={18} />
        </button>
      </div>

      {open && (
        <nav className="mt-4 grid gap-2 pb-2">
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
