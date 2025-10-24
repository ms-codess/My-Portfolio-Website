'use client';

import Image from 'next/image';
import { ABOUT_ME } from '@/lib/data';

const AboutSection = () => {
  return (
    <section id="about" className="bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <p className="mt-6 text-lg text-muted-foreground">{ABOUT_ME.paragraph1}</p>
            <p className="mt-4 text-lg text-muted-foreground">{ABOUT_ME.paragraph2}</p>
          </div>
          <div className="order-1 md:order-2">
            {ABOUT_ME.image && (
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <Image
                  src={ABOUT_ME.image.imageUrl}
                  alt="About Me"
                  fill
                  className="object-cover"
                  data-ai-hint={ABOUT_ME.image.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
