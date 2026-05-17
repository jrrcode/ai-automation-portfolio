import { FaGithub, FaLinkedin, FaUpwork } from 'react-icons/fa6';
import { profile, navItems } from '../data/profile.js';
import { useSpotlight } from '../hooks/useSpotlight.js';
import { useTheme } from '../hooks/useTheme.js';
import { MobileNav } from './MobileNav.jsx';
import { SideNav } from './SideNav.jsx';
import { ThemeToggle } from './ThemeToggle.jsx';

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Upwork: FaUpwork,
};

export function Layout({ children }) {
  useSpotlight();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(216,228,242,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(216,228,242,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <MobileNav items={navItems} theme={theme} onThemeToggle={toggleTheme} />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 px-5 py-8 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-16 lg:py-0">
        <div className="absolute right-6 top-8 hidden sm:right-10 lg:right-16 lg:top-24 lg:block">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
        <aside className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div className="lg:block">
              <a href="#top" className="focus-ring inline-block rounded-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  Portfolio
                </p>
                <h1 className="mt-5 max-w-xl text-5xl font-bold tracking-tight text-slate-50 sm:text-6xl">
                  {profile.name}
                </h1>
              </a>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-slate-200">{profile.role}</h2>
            </div>
            <p className="mt-5 max-w-md text-base leading-8 text-mist">{profile.summary}</p>
            <SideNav items={navItems} />
          </div>

          <div className="mt-10 flex items-center gap-4 lg:mt-0">
            {profile.socials.map((item) => {
              const Icon = socialIcons[item.label];
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className="focus-ring grid size-10 place-items-center rounded-full border border-white/10 bg-slate-900/28 text-mist transition hover:-translate-y-1 hover:border-accent/60 hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </aside>

        <main id="top" className="pt-16 lg:py-24">
          {children}
        </main>
      </div>
    </div>
  );
}
