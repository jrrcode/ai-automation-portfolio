export function SideNav({ items }) {
  return (
    <nav className="mt-16 hidden lg:block" aria-label="Section navigation">
      <ol className="space-y-4">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="group focus-ring flex w-fit items-center gap-4 rounded-sm py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-100"
            >
              <span className="h-px w-9 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-accent" />
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
