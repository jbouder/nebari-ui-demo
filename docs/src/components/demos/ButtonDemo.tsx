import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DemoSurface from './DemoSurface';

const VARIANTS = [
  'default',
  'secondary',
  'outline',
  'destructive',
  'ghost',
  'link',
] as const;

const SIZES = ['xs', 'sm', 'default', 'lg'] as const;

export function ButtonVariantsDemo() {
  return (
    <DemoSurface>
      {VARIANTS.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </DemoSurface>
  );
}

export function ButtonSizesDemo() {
  return (
    <DemoSurface>
      {SIZES.map((size) => (
        <Button key={size} size={size}>
          Button {size}
        </Button>
      ))}
    </DemoSurface>
  );
}

export function ButtonLoadingDemo() {
  const [loading, setLoading] = useState(false);

  function simulateAsyncAction() {
    setLoading(true);
    // Reset after a short delay to demo the Button's loading state.
    window.setTimeout(() => setLoading(false), 2000);
  }

  return (
    <DemoSurface>
      <Button loading={loading} loadingText="Saving…" onClick={simulateAsyncAction}>
        Save changes
      </Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
    </DemoSurface>
  );
}
