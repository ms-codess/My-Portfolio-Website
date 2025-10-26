"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
// removed center icon per request
import experienceData from "@/lib/experience.json";
import * as React from 'react';

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  stack: string[];
  description?: string;
  achievements?: string[];
};

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const itemVariants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } } };

const ExperienceSection = () => {
  const items: ExperienceItem[] = experienceData as ExperienceItem[];

  return (
    <section id="experiences" className="bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experiences</h2>
          <p className="mt-4 text-lg text-muted-foreground">A dynamic timeline of my professional journey.</p>
        </div>

        <div className="mt-10 relative mx-auto max-w-4xl">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-10 pr-2"
            >
            {items.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div key={`${item.company}-${index}`} variants={itemVariants} className="relative md:flex md:items-center">
                  <div className={`md:w-1/2 ${isLeft ? 'md:pr-8 md:text-right' : 'md:order-2 md:pl-8'}`}>
                    <Card className="bg-card/90 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-neon-accent border-accent/30">
                      <CardHeader className="pb-2">
                        <CardDescription className="text-xs">{item.period}</CardDescription>
                        <CardTitle className="text-lg">{item.role}</CardTitle>
                        <div className="mt-1 text-sm font-semibold">{item.company}</div>
                      </CardHeader>
                      <CardContent>
                        {item.stack?.length > 0 && (
                          <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-start md:justify-end' : 'justify-start'}`}>
                            {item.stack.map((tech) => (
                              <motion.span key={tech} whileHover={{ rotate: -2, scale: 1.05 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
                                <Badge variant="secondary" className="cursor-default">{tech}</Badge>
                              </motion.span>
                            ))}
                          </div>
                        )}

                        {(item.achievements && item.achievements.length > 0) || item.description ? (
                          <Accordion type="single" collapsible className="mt-3">
                            <AccordionItem value="achievements">
                              <AccordionTrigger className="text-sm">More details</AccordionTrigger>
                              <AccordionContent>
                                {(() => {
                                  const bullets = (item.achievements && item.achievements.length > 0)
                                    ? item.achievements
                                    : splitIntoBullets(item.description || '');
                                  return (
                                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 text-left md:text-left">
                                      {bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                      ))}
                                    </ul>
                                  );
                                })()}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : null}
                      </CardContent>
                    </Card>
                  </div>

                  {/* center icon removed */}

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

function excerpt(text: string, max = 180) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, Math.max(0, lastSpace))}…`;
}

function splitIntoBullets(text: string) {
  return text
    .split(/\.(\s+|$)/)
    .map((t) => t.replace(/\s+/g, ' ').trim())
    .filter((t) => t.length > 0)
    .map((t) => (t.endsWith('.') ? t : `${t}.`));
}
