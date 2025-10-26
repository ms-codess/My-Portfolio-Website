'use client';

import Image from 'next/image';
import ABOUT_ME from '@/data/about';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import * as React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <div className="mt-3 text-muted-foreground flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>{ABOUT_ME.location.current}</span>
              {ABOUT_ME.location.origin && <span>• From {ABOUT_ME.location.origin}</span>}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{ABOUT_ME.name}</h3>
            <p className="text-md text-muted-foreground">{ABOUT_ME.headline}</p>
            {ABOUT_ME.bio && (
              <p className="mt-4 text-lg text-muted-foreground">{ABOUT_ME.bio}</p>
            )}
            {ABOUT_ME.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {ABOUT_ME.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            ) : null}
            {ABOUT_ME.highlights?.length ? (
              <ul className="mt-6 list-disc pl-5 space-y-2 text-muted-foreground">
                {ABOUT_ME.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            ) : null}
            
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <AvatarImage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

function AvatarImage() {
  const [src, setSrc] = React.useState(ABOUT_ME.avatarUrl || '/meyssa-avatar.png');
  return (
    <Image
      src={src}
      alt="Meyssa Smirani"
      fill
      className="object-cover"
      onError={() => setSrc('/avatar-fallback.svg')}
    />
  );
}
