import { Github, Linkedin, Twitter, Briefcase, Building, Code, Bot } from "lucide-react";
import { PlaceHolderImages } from "./placeholder-images";

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const SOCIAL_LINKS = [
    { icon: Github, href: 'https://github.com/ms-codess', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/meyssa-smirani-74451a129/', label: 'LinkedIn' }
];

const aboutMeImage = PlaceHolderImages.find(p => p.id === 'about-me');

export const ABOUT_ME = {
  paragraph1:
    "I’m an intermediate software developer with 3+ years of experience building and maintaining robust backend systems and ERP integrations at scale. My expertise spans enterprise application development with PeopleSoft, Oracle SQL, and integration frameworks, with a strong focus on performance, reliability, and clean architecture. Currently pursuing a Master’s in Artificial Intelligence, I’m expanding my skill set into machine learning and AI engineering — bridging enterprise systems with intelligent automation. Outside of tech, I enjoy travel and design, blending structure with creativity in everything I build.",
  image: aboutMeImage
};


export const SKILLS = [
  {
    category: '🧠 Machine Learning & AI',
    skills: [
      { name: 'Python', proficiency: 85, icon: 'python' },
      { name: 'TensorFlow', proficiency: 70, icon: 'tensorflow' },
      { name: 'PyTorch', proficiency: 70, icon: 'pytorch' },
      { name: 'Scikit-learn', proficiency: 80, icon: 'scikitlearn' },
      { name: 'Pandas', proficiency: 85, icon: 'pandas' },
      { name: 'NumPy', proficiency: 85, icon: 'numpy' },
      { name: 'Matplotlib', proficiency: 75, icon: 'matplotlib' },
      { name: 'LangChain', proficiency: 65, icon: 'langchain' },
      { name: 'OpenAI API', proficiency: 70, icon: 'openai' },
      { name: 'Hugging Face', proficiency: 65, icon: 'huggingface' }
    ]
  },
  {
    category: '🧰 Backend & ERP',
    skills: [
      { name: 'PeopleSoft', proficiency: 95, icon: 'peoplesoft' },
      { name: 'Oracle SQL', proficiency: 90, icon: 'oracle' },
      { name: 'Node.js', proficiency: 85, icon: 'nodejs' },
      { name: 'Express.js', proficiency: 80, icon: 'express' },
      { name: 'GraphQL', proficiency: 75, icon: 'graphql' },
      { name: 'REST APIs', proficiency: 85, icon: 'api' }
    ]
  },
  {
    category: '🌐 Frontend & Web',
    skills: [
      { name: 'JavaScript', proficiency: 95, icon: 'javascript' },
      { name: 'TypeScript', proficiency: 90, icon: 'typescript' },
      { name: 'React', proficiency: 95, icon: 'react' },
      { name: 'Next.js', proficiency: 90, icon: 'nextjs' },
      { name: 'Tailwind CSS', proficiency: 95, icon: 'tailwind' },
      { name: 'Figma', proficiency: 75, icon: 'figma' },
      { name: 'HTML5', proficiency: 98, icon: 'html' },
      { name: 'CSS3', proficiency: 98, icon: 'css' }
    ]
  },
  {
    category: '☁️ Cloud & Dev Tools',
    skills: [
      { name: 'Firebase', proficiency: 80, icon: 'firebase' },
      { name: 'Git', proficiency: 90, icon: 'git' },
      { name: 'Docker', proficiency: 70, icon: 'docker' },
      { name: 'Vercel', proficiency: 80, icon: 'vercel' },
      { name: 'Render', proficiency: 75, icon: 'render' }
    ]
  },
  {
    category: '📊 Data & Analytics',
    skills: [
      { name: 'Power BI', proficiency: 75, icon: 'powerbi' },
      { name: 'Excel', proficiency: 85, icon: 'excel' },
      { name: 'Jupyter', proficiency: 80, icon: 'jupyter' }
    ]
  }
];


export const EXPERIENCE = [
  {
    period: 'Nov 2022 - Present',
    role: 'Intermediate Software Developer',
    company: 'University of Ottawa -IT Department',
    description:
      'Develop, enhance, and maintain enterprise-grade PeopleSoft applications supporting critical academic and administrative processes. Build scalable backend workflows using PeopleCode, Application Engine, and Oracle SQL, and integrate with external services through Integration Broker and Component Interfaces. Collaborate with cross-functional teams to streamline business processes, automate data flows, and modernize legacy systems. Contributed to PeopleTools upgrades (8.61.x) and delivered high-impact solutions for transcript and transfer credit services.',
    logo: Building,
    stack: [
      'PeopleSoft',
      'Oracle SQL',
      'JavaScript',
      'BI Publisher',
      'Phire',
      'Git'
    ]
  },
  {
    period: 'May 2022 - May 2023',
    role: 'Full-stack Developer',
    company: 'University of Ottawa',
    description: 'Led the development of a comprehensive accreditation tracker system for the Faculty of Engineering. Developed a full-stack web application using Node.js/Express for the back end and React (TypeScript) for the front end. Implemented a PostgreSQL database with optimized schemas and query tuning for efficient data storage.',
    logo: Building,
    stack: ['Node.js', 'React', 'PostgreSQL','TypeScript']
  },
  {
    period: 'May 2022 - Sep 2022',
    role: 'Junior Software Developer & Technical Business Analyst',
    company: 'Jumping Elephants',
    description: 'Implemented unit, automated, and acceptance tests; optimized relational backend tables in Dataverse. Developed Power BI solutions with advanced data models, dashboards, and automated reporting. Delivered Power Apps for government clients, integrating external data sources to streamline workflow.',
    logo: Briefcase,
    stack: ['Power BI', 'Power Apps', 'Dataverse','JavaScript']
  },
   {
    period: 'Apr 2020 - Apr 2022',
    role: 'Teaching Assistant',
    company: 'uOttawa | Faculty of Engineering',
    description: 'Facilitated bilingual teaching support for courses, including ELG2538, ELG2138, ITI1500, and ITI1100. Developed and prepared engaging and informative lab materials and conducted exam preparation sessions.',
    logo: Code,
    stack: ['Python','Jupyter Notebook','Django']
  },
  {
    period: 'May 2020 - Aug 2020',
    role: 'Machine Learning Research Assistant',
    company: 'University of Ottawa',
    description: 'Designed and populated a relational database with curated phishing and benign email samples. Implemented a machine learning pipeline in Python to classify phishing samples and auto-generate tailored exercises based on model predictions and difficulty levels.',
    logo: Bot,
    stack: ['Python', 'Django','MySQL']
  }
];

export const EDUCATION = [
  {
    period: '2024 - 2026',
    degree: "Master's in Interdisciplinary Artificial Intelligence",
    institution: 'University of Ottawa',
    description:
      ' Developing applied AI projects in NLP, computer vision, and data analysis. Actively exploring research opportunities in data attribution and model unlearning.'
  },
  {
    period: '2018 - 2021',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Ottawa',
    description:
      'Graduated with a strong foundation in software engineering, data structures, algorithms, and enterprise systems. '
  }
];


  export type Project = {
    title: string;
    description: string;
    longDescription: string;
    image?: {
        imageUrl: string;
        imageHint: string;
    };
    tags: string[];
    field: string;
    liveUrl: string;
    githubUrl: string;
};

// This will be populated by the GitHub fetch
export let ALL_FIELDS: string[] = [];
export let ALL_TAGS: string[] = [];

export const setAllFields = (fields: string[]) => {
  ALL_FIELDS = fields;
}

export const setAllTags = (tags: string[]) => {
    ALL_TAGS = tags;
}
