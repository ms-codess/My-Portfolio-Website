'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const CodeSnippet = ({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) => (
    <div
      className={cn(
        'absolute hidden lg:block bg-card/80 backdrop-blur-sm border border-border/20 rounded-lg p-3 text-xs text-muted-foreground shadow-lg animate-[float_6s_ease-in-out_infinite]',
        className
      )}
      style={style}
    >
      <pre><code>{children}</code></pre>
    </div>
  );

const Typewriter = ({ text, speed = 100 }: { text: string; speed?: number }) => {
    const [displayedText, setDisplayedText] = useState('');
  
    useEffect(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
  
      return () => {
        clearInterval(typingInterval);
      };
    }, [text, speed]);
  
    return (
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        {displayedText}
        <span className="animate-ping">|</span>
      </h1>
    );
  };

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-background z-0">
            <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] bg-gradient-to-r from-primary via-accent to-primary/50 opacity-20 animate-[rotate-gradient_20s_linear_infinite]"></div>
        </div>

        <CodeSnippet className="top-[15%] left-[10%]" style={{ animationDelay: '0s' }}>
            {`const coder = {\n  name: 'Meyssa Smirani',\n  skills: ['React', 'Next.js']\n};`}
        </CodeSnippet>
        <CodeSnippet className="bottom-[20%] left-[20%]" style={{ animationDelay: '2s' }}>
            {`function helloWorld() {\n  console.log('Welcome!');\n}`}
        </CodeSnippet>
        <CodeSnippet className="top-[25%] right-[12%]" style={{ animationDelay: '1s' }}>
            {`<Button>\n  Contact Me\n</Button>`}
        </CodeSnippet>
        <CodeSnippet className="bottom-[15%] right-[8%]" style={{ animationDelay: '3s' }}>
            {`SELECT * FROM projects\nWHERE featured = true;`}
        </CodeSnippet>


      <div className="container relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center px-4">
        <Typewriter text="Meyssa Smirani" />
        <h2 className="text-2xl font-bold tracking-tight text-accent sm:text-3xl md:text-4xl">Digital Craftsman & Code Artisan</h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          I build beautiful, scalable, and user-friendly web applications that solve real-world problems.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="group shadow-lg transition-shadow hover:shadow-neon-accent">
            <Link href="#projects">
              View My Work <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
