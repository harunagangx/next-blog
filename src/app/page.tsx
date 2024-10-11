import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/siteConfig';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
      <div className="container flex flex-col gap-4 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-black text-balance">
          next blog
        </h1>
        <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
          Welcome to my template. Built using Nextjs 14, tailwind, shadcn
        </p>
        <div className="flex flex-col gap-4 justify-center sm:flex-row">
          <Link
            href="/blog"
            className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-fit')}
          >
            View My Blog
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'w-full sm:w-fit'
            )}
          >
            Github
          </Link>
        </div>
      </div>
    </section>
  );
}
