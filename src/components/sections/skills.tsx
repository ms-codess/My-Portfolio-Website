"use client";

import { motion } from "framer-motion";
import SKILLS from "@/data/skills";
import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiDocker,
  SiFirebase,
  SiVercel,
  SiGit,
  SiOracle,
  SiJupyter,
  SiGraphql,
  SiOpenai,
  SiHuggingface,
  SiLangchain,
  SiNodedotjs
} from "react-icons/si";
import { FaPeopleArrows, FaChartBar } from "react-icons/fa";

const icons: Record<string, IconType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  figma: SiFigma,
  html: SiHtml5,
  css: SiCss3,
  python: SiPython,
  tensorflow: SiTensorflow,
  pytorch: SiPytorch,
  scikitlearn: SiScikitlearn,
  pandas: SiPandas,
  numpy: SiNumpy,
  docker: SiDocker,
  firebase: SiFirebase,
  vercel: SiVercel,
  powerbi: FaChartBar,
  git: SiGit,
  oracle: SiOracle,
  jupyter: SiJupyter,
  graphql: SiGraphql,
  openai: SiOpenai,
  huggingface: SiHuggingface,
  langchain: SiLangchain,
  nodejs: SiNodedotjs,
  peoplesoft: FaPeopleArrows,
  api: SiGraphql
};

export default function SkillsSection() {
  const palettes = [
    "from-pink-500/25 via-fuchsia-500/20 to-purple-500/25",
    "from-amber-500/25 via-orange-500/20 to-rose-500/25",
    "from-emerald-500/25 via-teal-500/20 to-cyan-500/25",
    "from-blue-500/25 via-indigo-500/20 to-violet-500/25",
    "from-lime-500/25 via-green-500/20 to-emerald-500/25",
  ];
  return (
    <section id="skills" className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">🧠 Skills & Tools</h2>
      <div className="space-y-12">
        {SKILLS.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.skills.map((skill, index) => {
                const Icon = icons[skill.icon];
                const palette = palettes[(idx + index) % palettes.length];
                return (
                  <motion.div
                    key={index}
                    className="group relative rounded-xl p-4 border border-border bg-card/60 backdrop-blur-sm flex flex-col items-center justify-center transition hover:-translate-y-0.5 hover:shadow-neon-accent overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {/* Animated colorful backdrop */}
                    <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${palette} opacity-60 group-hover:opacity-90 blur-xl transition-opacity`} />
                    <motion.div
                      className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.25),transparent_40%)]"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    {Icon && <Icon className="text-4xl mb-2 text-accent transition-colors group-hover:text-primary" />}
                    <span className="font-medium text-center">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
