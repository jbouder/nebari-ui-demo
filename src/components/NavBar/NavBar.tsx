import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Dashboard', to: '/dashboard' },
] as const;

function NavBar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex min-h-16 max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <NavLink
          className="text-lg font-semibold tracking-tight text-foreground"
          to="/"
        >
          Nebari UI
        </NavLink>
        <nav aria-label="Main navigation" className="flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                cn(
                  'rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground',
                  isActive &&
                    'bg-primary text-primary-foreground hover:bg-primary',
                )
              }
              end={item.to === '/'}
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
