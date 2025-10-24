'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? Drop me a line.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>I'm always open to discussing new projects and opportunities.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center text-center py-10">
                    <Mail className="h-16 w-16 text-accent mb-4" />
                    <h3 className="text-2xl font-bold">meyssasmirani1@gmail.com</h3>
                    <p className="text-muted-foreground mt-2">Click the button below to send me an email.</p>
                    <Button asChild className="mt-6">
                        <a href="mailto:meyssasmirani1@gmail.com">
                            <Mail className="mr-2 h-4 w-4" />
                            Email Me
                        </a>
                    </Button>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
