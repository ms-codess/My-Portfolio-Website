export type AboutInfo = {
  name: string;
  headline: string;
  location: {
    current: string;
    origin?: string;
  };
  avatarUrl?: string;
  bio?: string;
  highlights: string[];
  tags: string[];
};

export const ABOUT_ME: AboutInfo = {
  name: 'Meyssa Smirani',
  headline: 'Intermediate Software Developer • Aspiring ML Engineer',
  location: {
    current: 'Ottawa, Canada',
  },
  avatarUrl: '/avatar.png',
   highlights: [
    '3+ years developing and integrating enterprise systems',
    'Strong background in PeopleSoft, Oracle SQL, and modern web technologies',
    'Pursuing a Master\'s in Artificial Intelligence and building machine learning projects'
  ],
  tags: [
    'Python',
    'PeopleSoft',
    'Oracle SQL',
    'React/Next.js',
    'System Design',
    'Machine Learning'
  ],
};


export default ABOUT_ME;
