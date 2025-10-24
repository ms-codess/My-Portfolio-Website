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
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
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

const projectImages = {
    'project-1': PlaceHolderImages.find(p => p.id === 'project-1'),
    'project-2': PlaceHolderImages.find(p => p.id === 'project-2'),
    'project-3': PlaceHolderImages.find(p => p.id === 'project-3'),
    'project-4': PlaceHolderImages.find(p => p.id === 'project-4'),
    'project-5': PlaceHolderImages.find(p => p.id === 'project-5'),
    'project-6': PlaceHolderImages.find(p => p.id === 'project-6'),
}

export const PROJECTS = [
  {
    title: 'Project Alpha',
    description: 'A comprehensive project management tool designed for agile teams. Features include Kanban boards, sprint planning, and performance analytics.',
    longDescription: 'Project Alpha was built from the ground up to solve the key pain points in modern agile development. It integrates seamlessly with popular version control systems and provides real-time insights into team velocity and project progress, helping teams deliver faster and more efficiently.',
    image: projectImages['project-1'],
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    field: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
    metrics: { 'User Growth': '150%', 'Performance': '98/100', 'Satisfaction': '4.8/5' },
  },
  {
    title: 'E-Commerce Platform',
    description: 'A scalable e-commerce solution for small to medium-sized businesses. Includes inventory management, payment gateway integration, and a customer review system.',
    longDescription: 'This platform provides a turnkey solution for businesses looking to establish a strong online presence. It is built on a modular architecture, allowing for easy customization and integration of third-party services. The focus is on performance, security, and user experience to maximize conversion rates.',
    image: projectImages['project-2'],
    tags: ['React', 'Node.js', 'GraphQL', 'Stripe'],
    field: 'E-commerce',
    liveUrl: '#',
    githubUrl: '#',
    metrics: { 'Conversion Rate': '+25%', 'Avg. Order Value': '$75', 'Load Time': '<1s' },
  },
  {
    title: 'FitTrack Mobile App',
    description: 'A cross-platform mobile application to help users track their fitness journey, set goals, and connect with a community of fitness enthusiasts.',
    longDescription: 'FitTrack leverages real-time data synchronization to provide a seamless experience across devices. It includes features like workout logging, nutrition tracking, and social sharing. Gamification elements are incorporated to keep users motivated and engaged with their fitness goals.',
    image: projectImages['project-3'],
    tags: ['React Native', 'Firebase', 'TypeScript'],
    field: 'Mobile App',
    liveUrl: '#',
    githubUrl: '#',
    metrics: { 'Daily Active Users': '10k+', 'Retention': '40%', 'App Store Rating': '4.9/5' },
  },
  {
    title: 'FinDash Analytics',
    description: 'A data visualization dashboard for financial analysts, providing real-time market data, portfolio tracking, and predictive modeling.',
    longDescription: 'FinDash processes and visualizes complex financial data streams to provide actionable insights. It features a highly customizable dashboard where users can create their own layouts and widgets. The backend is powered by a high-performance data processing pipeline.',
    image: projectImages['project-4'],
    tags: ['React', 'Python', 'D3.js', 'WebSocket'],
    field: 'Data Analytics',
    liveUrl: '#',
    githubUrl: '#',
    metrics: { 'Data Latency': '<50ms', 'Queries per Second': '500+', 'Uptime': '99.99%' },
  },
  {
    title: 'BookVerse Social',
    description: 'A social network for book lovers to discover new books, write reviews, and join virtual book clubs.',
    longDescription: 'BookVerse aims to create a thriving community around literature. It uses a recommendation engine to suggest books based on user preferences and reading history. The platform fosters interaction through discussion forums and live author Q&A sessions.',
    image: projectImages['project-5'],
    tags: ['Next.js', 'GraphQL', 'Node.js'],
    field: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
    metrics: { 'Community Growth': '2000 users/month', 'Engagement': '12 sessions/user/month' },
  },
  {
    title: 'CloudSafe Storage',
    description: 'A secure, decentralized cloud storage solution offering end-to-end encryption and robust file-sharing capabilities.',
    longDescription: 'CloudSafe prioritizes user privacy and data security. By leveraging decentralized storage networks, it eliminates single points of failure and enhances data durability. The user interface is designed for simplicity, making secure file management accessible to everyone.',
    image: projectImages['project-6'],
    tags: ['TypeScript', 'Node.js', 'Cryptography'],
    field: 'Cloud & Security',
    liveUrl: '#',
    githubUrl: '#',
    metrics: { 'Security Rating': 'A+', 'Storage Cost': '-40% vs AWS S3' },
  },
];

export const ALL_TAGS = Array.from(new Set(PROJECTS.flatMap(p => p.tags)));
export const ALL_FIELDS = Array.from(new Set(PROJECTS.map(p => p.field)));
