import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Wraps a live component demo. The `nebari-demo` class scopes the border-style
 * reset (see src/css/tailwind.css) and the token-driven `bg-background` /
 * `text-foreground` make the surface follow the site's light/dark mode.
 */
export default function DemoSurface({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'nebari-demo flex flex-wrap items-center gap-3 rounded-lg border border-border bg-background p-6 text-foreground',
        className,
      )}
    >
      {children}
    </div>
  );
}
