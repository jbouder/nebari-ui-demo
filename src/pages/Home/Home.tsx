import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useTheme } from '@/providers/ThemeProvider';

const VARIANTS = [
  'default',
  'secondary',
  'outline',
  'destructive',
  'ghost',
  'link',
] as const;

const SIZES = ['xs', 'sm', 'default', 'lg'] as const;

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h2>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </section>
  );
}

function Home() {
  const { theme, setTheme } = useTheme();
  const [loading, setLoading] = useState(false);

  const isDark = theme === 'dark';

  function simulateAsyncAction() {
    setLoading(true);
    // Reset after a short delay to demo the Button's loading state.
    window.setTimeout(() => setLoading(false), 2000);
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Nebari UI Demo</h1>
          <p className="mt-3 text-muted-foreground">
            Components from the{' '}
            <span className="font-medium text-foreground">
              Nebari design system
            </span>{' '}
            (<code className="text-primary">@nebari</code> shadcn registry).
          </p>
        </div>
        <Button
          variant="outline"
          size="icon"
          aria-label="Toggle theme"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
        >
          {isDark ? <Sun /> : <Moon />}
        </Button>
      </header>

      <div className="mt-12 space-y-12">
        <Section title="Variants">
          {VARIANTS.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </Section>

        <Section title="Sizes">
          {SIZES.map((size) => (
            <Button key={size} size={size}>
              Button {size}
            </Button>
          ))}
        </Section>

        <Section title="Loading state">
          <Button
            loading={loading}
            loadingText="Saving…"
            onClick={simulateAsyncAction}
          >
            Save changes
          </Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </Section>

        <Section title="Spinner">
          <Spinner />
          <Spinner className="size-6 text-primary" />
          <span className="text-sm text-muted-foreground">
            Standalone loading indicator
          </span>
        </Section>
      </div>
    </div>
  );
}

export default Home;
