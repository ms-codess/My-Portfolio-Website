import { Github, Linkedin, Twitter, Briefcase, Building, Code, Bot } from "lucide-react";
import { PlaceHolderImages } from "./placeholder-images";

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export const SOCIAL_LINKS = [
    { icon: Github, href: 'https://github.com/ms-codess', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

const aboutMeImage = PlaceHolderImages.find(p => p.id === 'about-me');

export const ABOUT_ME = {
  paragraph1: "Hello! I'm Meyssa Smirani, a passionate and detail-oriented Full-Stack Developer with a love for creating elegant and efficient solutions. My journey in technology has been driven by a curiosity to understand how things work and a desire to build applications that make a difference.",
  paragraph2: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee. I believe in continuous learning and am always looking for new challenges to grow my skills.",
  image: aboutMeImage
};

export const SKILLS = [
    { name: 'JavaScript', proficiency: 95, icon: 'javascript' },
    { name: 'TypeScript', proficiency: 90, icon: 'typescript' },
    { name: 'React', proficiency: 95, icon: 'react' },
    { name: 'Next.js', proficiency: 90, icon: 'nextjs' },
    { name: 'Node.js', proficiency: 85, icon: 'nodejs' },
    { name: 'Firebase', proficiency: 80, icon: 'firebase' },
    { name: 'Tailwind CSS', proficiency: 95, icon: 'tailwind' },
    { name: 'Figma', proficiency: 75, icon: 'figma' },
    { name: 'HTML5', proficiency: 98, icon: 'html' },
    { name: 'CSS3', proficiency: 98, icon: 'css' },
    { name: 'Python', proficiency: 70, icon: 'python' },
    { name: 'GraphQL', proficiency: 75, icon: 'graphql' },
];

export const EXPERIENCE = [
  {
    period: 'Nov 2022 - Present',
    role: 'Intermediate Software Developer',
    company: 'uOttawa TI | IT',
    description: 'Designed and implemented full stack PeopleSoft applications using PeopleCode, integrating dynamic front-end interfaces with robust Oracle SQL back-end systems. Applied the MVC architecture across multiple PeopleSoft projects to streamline processes and optimize overall system performance. Delivered tailored PeopleSoft applications for university clients and students, enhancing functionality and user engagement.',
    logo: Building,
    stack: ['PeopleSoft', 'Oracle SQL']
  },
  {
    period: 'May 2022 - May 2023',
    role: 'Full-stack Developer',
    company: 'University of Ottawa',
    description: 'Led the development of a comprehensive accreditation tracker system for the Faculty of Engineering. Developed a full-stack web application using Node.js/Express for the back end and React (TypeScript) for the front end. Implemented a PostgreSQL database with optimized schemas and query tuning for efficient data storage.',
    logo: Building,
    stack: ['Node.js', 'React', 'PostgreSQL']
  },
  {
    period: 'May 2022 - Sep 2022',
    role: 'Junior Software Developer & Technical Business Analyst',
    company: 'Jumping Elephants',
    description: 'Implemented unit, automated, and acceptance tests; optimized relational backend tables in Dataverse. Developed Power BI solutions with advanced data models, dashboards, and automated reporting. Delivered Power Apps for government clients, integrating external data sources to streamline workflow.',
    logo: Briefcase,
    stack: ['Power BI', 'Power Apps', 'Dataverse']
  },
   {
    period: 'Apr 2020 - Apr 2022',
    role: 'Teaching Assistant',
    company: 'uOttawa | Faculty of Engineering',
    description: 'Facilitated bilingual teaching support for courses, including ELG2538, ELG2138, ITI1500, and ITI1100. Developed and prepared engaging and informative lab materials and conducted exam preparation sessions.',
    logo: Code,
    stack: []
  },
  {
    period: 'May 2020 - Aug 2020',
    role: 'Machine Learning Research Assistant',
    company: 'University of Ottawa',
    description: 'Designed and populated a relational database with curated phishing and benign email samples. Implemented a machine learning pipeline in Python to classify phishing samples and auto-generate tailored exercises based on model predictions and difficulty levels.',
    logo: Bot,
    stack: ['Python', 'Machine Learning']
  }
];

  export const EDUCATION = [
    {
      period: '2018 - 2021',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      description: 'Graduated with honors, focusing on software engineering, data structures, and algorithms. Completed a final year project on machine learning applications.'
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
