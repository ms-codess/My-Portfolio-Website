export type SkillItem = {
  name: string;
  proficiency: number; // 0-100
  icon: string; // key used by the icon map in the component
};

export type SkillCategory = {
  category: string;
  skills: SkillItem[];
};

export const SKILLS: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', proficiency: 98, icon: 'html' },
      { name: 'CSS3', proficiency: 98, icon: 'css' },
      { name: 'JavaScript', proficiency: 95, icon: 'javascript' },
      { name: 'TypeScript', proficiency: 90, icon: 'typescript' },
      { name: 'React', proficiency: 95, icon: 'react' },
      { name: 'Next.js', proficiency: 90, icon: 'nextjs' },
      { name: 'Tailwind CSS', proficiency: 95, icon: 'tailwind' },
      { name: 'Figma', proficiency: 75, icon: 'figma' },
    ],
  },
  {
    category: 'Backend & Cloud',
    skills: [
      { name: 'Node.js', proficiency: 85, icon: 'nodejs' },
      { name: 'GraphQL', proficiency: 75, icon: 'graphql' },
      { name: 'Firebase', proficiency: 80, icon: 'firebase' },
      { name: 'Docker', proficiency: 70, icon: 'docker' },
      { name: 'Vercel', proficiency: 80, icon: 'vercel' },
      { name: 'API Design', proficiency: 80, icon: 'api' },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'Python', proficiency: 70, icon: 'python' },
      { name: 'TensorFlow', proficiency: 60, icon: 'tensorflow' },
      { name: 'PyTorch', proficiency: 60, icon: 'pytorch' },
      { name: 'scikit-learn', proficiency: 70, icon: 'scikitlearn' },
      { name: 'Pandas', proficiency: 70, icon: 'pandas' },
      { name: 'NumPy', proficiency: 70, icon: 'numpy' },
      { name: 'Jupyter', proficiency: 75, icon: 'jupyter' },
      { name: 'OpenAI', proficiency: 70, icon: 'openai' },
      { name: 'Hugging Face', proficiency: 65, icon: 'huggingface' },
      { name: 'LangChain', proficiency: 60, icon: 'langchain' },
    ],
  },
  {
    category: 'Data & BI',
    skills: [
      { name: 'Power BI', proficiency: 70, icon: 'powerbi' },
      { name: 'Oracle Database', proficiency: 65, icon: 'oracle' },
      { name: 'PeopleSoft', proficiency: 65, icon: 'peoplesoft' },
      { name: 'Git', proficiency: 90, icon: 'git' },
    ],
  },
];

export default SKILLS;

