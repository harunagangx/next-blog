import Link from 'next/link';
import { slug } from 'github-slugger';
import { badgeVariants } from './ui/badge';
import { cn } from '@/lib/utils';

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}

export function Tag({ tag, current, count }: TagProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant: current ? 'default' : 'secondary' }),
        'mt-3'
      )}
    >
      <Link href={`/tags/${slug(tag)}`}>
        {tag} {count ? `(${count})` : null}
      </Link>
    </div>
  );
}
