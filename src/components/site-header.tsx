import Link from 'next/link';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button, buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/60 backdrop-blur">
      <div className="container flex h-16 items-center">
        <h1 className="font-semibold">GreenEdge Starter</h1>
        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  }),
                  'w-9 px-0'
                )}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
            <Button variant="outline" asChild>
              <Link href="/signin" className='ml-8!'>
                Sign In <Icons.chevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
