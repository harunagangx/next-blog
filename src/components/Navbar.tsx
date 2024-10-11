'use client';

import { siteConfig } from '@/config/siteConfig';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import { Icons } from './Icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="w-6 h-6" />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>

          <Link
            href="/blog"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
              pathname === '/blog' ? 'text-foreground' : 'text-foreground/60'
            )}
          >
            Blog
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav>
            <Link href={siteConfig.links.github} target="_blank">
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0 hidden sm:inline-flex'
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="_blank">
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0 hidden sm:inline-flex'
                )}
              >
                <Icons.twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
