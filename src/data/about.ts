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
  headline: ' Software Development & Artificial Intelligence',
  location: {
    current: 'Ottawa, Canada',
  },
  avatarUrl: '/avatar.png',
   highlights: [
    '3+ years developing and integrating enterprise systems',
    'Strong background in PeopleSoft, Oracle SQL, and modern web technologies',
    'Pursuing a Master\'s in Artificial Intelligence and building machine learning projects'
  ]
};


export default ABOUT_ME;
