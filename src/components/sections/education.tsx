"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import * as React from 'react';
import EDUCATION from "@/data/education";

const EducationSection = () => {
  return (
    <section id="education" className="py-16 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
      <div className="relative border-l border-white/20 ml-4 dark:border-white/20 border-border/40">
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="mb-10 ml-6 flex flex-col sm:flex-row gap-6 relative"
          >
            <span className="absolute -left-[9px] bg-primary h-4 w-4 rounded-full mt-2" />

            {edu.logo && (
              <div className="flex-shrink-0">
                <LogoWithFallback src={edu.logo} alt={`${edu.institution} logo`} />
              </div>
            )}

            <div>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm italic mb-1">
                {edu.institution} • {edu.period}
              </p>
              <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;

function LogoWithFallback({ src, alt }: { src: string; alt: string }) {
  const [s, setS] = React.useState(src);
  return (
    <Image
      src={s}
      alt={alt}
      width={60}
      height={60}
      className="rounded-md object-contain"
      onError={() => setS('/logos/uottawa.svg')}
    />
  );
}

