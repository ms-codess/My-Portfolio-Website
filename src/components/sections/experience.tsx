import { EXPERIENCE } from '@/lib/data';
import { Briefcase, GraduationCap } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A timeline of my professional experience and education.
          </p>
        </div>
        <div className="relative mt-12">
          <div
            className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"
            aria-hidden="true"
          ></div>
          <div className="space-y-12">
            {EXPERIENCE.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.role.toLowerCase().includes('bachelor') ? GraduationCap : Briefcase;
              return (
                <div key={index} className="relative flex items-center">
                  <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className={`flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
                        <div className="fade-in-up w-full max-w-md rounded-lg bg-card p-6 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
                          <p className="text-sm text-muted-foreground">{item.period}</p>
                          <h3 className="mt-1 text-xl font-bold text-primary">{item.role}</h3>
                          <p className="mt-1 font-semibold">{item.company}</p>
                          <p className="mt-2 text-muted-foreground">{item.description}</p>
                        </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-primary ring-8 ring-background">
                      <Icon className="h-4 w-4 text-primary-foreground" />
                    </span>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
