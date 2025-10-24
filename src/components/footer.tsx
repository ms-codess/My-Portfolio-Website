import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/data';
import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-accent" />
          <span className="font-bold">Codefolio</span>
        </div>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted-foreground transition-colors hover:text-accent hover:shadow-neon-accent rounded-full"
            >
              <social.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Codefolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
