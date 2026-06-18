import { Spinner } from '@/components/ui/spinner';
import DemoSurface from './DemoSurface';

export function SpinnerDemo() {
  return (
    <DemoSurface>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="lg" className="text-primary" />
      <Spinner size="xl" className="text-muted-foreground" />
      <span className="text-sm text-muted-foreground">
        Standalone loading indicator
      </span>
    </DemoSurface>
  );
}
