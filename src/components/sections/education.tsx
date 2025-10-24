import { EDUCATION } from '@/lib/data';
import { GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  return (
    <section id="education">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My academic background.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1">
          {EDUCATION.map((edu, index) => (
            <Card key={index} className="fade-in-up">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>{edu.degree}</CardTitle>
                  <CardDescription>{edu.institution} | {edu.period}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
