import { siteConfig } from '@/config/siteConfig';
import { Mail } from 'lucide-react';
import { Icons } from './Icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mb-6 mt-10 flex flex-col items-center">
        <div className="mb-3 flex items-center space-x-8">
          <Link
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
          >
            <span className="sr-only">Mail</span>
            <Mail className="h-6 w-6" />
          </Link>
          <Link href={siteConfig.links.twitter} target="_blank">
            <span className="sr-only">Twitter</span>
            <Icons.twitter className="h-6 w-6" />
          </Link>
          <Link href={siteConfig.links.github} target="_blank">
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
