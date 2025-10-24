'use client';

import { SKILLS } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Toolkit</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Card className="fade-in-up w-full max-w-4xl">
            <CardHeader>
              <CardTitle>Core Technologies</CardTitle>
              <CardDescription>A list of my most-used technologies.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {SKILLS.map((skill) => (
                  <Badge 
                    key={skill.name} 
                    variant="default" 
                    className="text-md cursor-pointer px-4 py-2 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-neon-accent"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
