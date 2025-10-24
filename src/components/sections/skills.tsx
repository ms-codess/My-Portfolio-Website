'use client';

import { SKILLS } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartTooltipContent } from '@/components/ui/chart';

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

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle>Core Technologies</CardTitle>
              <CardDescription>A list of my most-used technologies.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill) => (
                  <Badge key={skill.name} variant="default" className="text-md px-4 py-2 cursor-pointer transition-transform hover:scale-110 hover:shadow-neon-accent">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="fade-in-up" style={{animationDelay: '200ms'}}>
            <CardHeader>
              <CardTitle>Proficiency Levels</CardTitle>
              <CardDescription>A visual representation of my confidence in each tool.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={SKILLS} layout="vertical" margin={{ left: 10 }}>
                    <XAxis type="number" hide />
                    <YAxis
                      dataKey="name"
                      type="category"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      width={80}
                    />
                    <Tooltip
                        cursor={{ fill: 'hsl(var(--muted))' }}
                        content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Bar
                      dataKey="proficiency"
                      radius={[0, 4, 4, 0]}
                      className="fill-primary"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
