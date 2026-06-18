import { CheckIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import DemoSurface from './DemoSurface';

const VARIANTS = [
  'default',
  'secondary',
  'destructive',
  'outline',
  'ghost',
] as const;

export function BadgeVariantsDemo() {
  return (
    <DemoSurface>
      {VARIANTS.map((variant) => (
        <Badge key={variant} variant={variant}>
          {variant}
        </Badge>
      ))}
    </DemoSurface>
  );
}

export function BadgeWithIconDemo() {
  return (
    <DemoSurface>
      <Badge>
        <CheckIcon />
        Verified
      </Badge>
      <Badge variant="secondary">3 new</Badge>
      <Badge variant="destructive">Error</Badge>
    </DemoSurface>
  );
}

export function BadgeAsLinkDemo() {
  return (
    <DemoSurface>
      <Badge render={<a href="#as-a-link" />}>Link badge</Badge>
      <Badge variant="outline" render={<a href="#as-a-link" />}>
        Outline link
      </Badge>
    </DemoSurface>
  );
}
