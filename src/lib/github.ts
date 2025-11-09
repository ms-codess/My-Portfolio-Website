// @ts-nocheck
'use client';
import { Octokit } from '@octokit/rest';
import type { Project } from './data';
import { PlaceHolderImages } from './placeholder-images';

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

const getPrimaryField = (topics: string[]): string => {
    const preferredFields = ['Web App', 'Mobile App', 'E-commerce', 'Data Analytics', 'Cloud & Security', 'Game'];
    for (const field of preferredFields) {
        if (topics.includes(field.toLowerCase().replace(' ', '-'))) {
            return field;
        }
    }
    return 'Web App';
};

// Repo-name → additional tags/skills mapping.
// Extend this list to enrich skills shown on cards.
const EXTRA_TAGS_BY_REPO: Record<string, string[]> = {
  // AI/ML + Data projects
  'accident-severity-analysis-and-prediction': ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
  'patient-appointment-prediction': ['Python', 'scikit-learn', 'LightGBM', 'Optuna', 'SHAP', 'Streamlit'],
  'online-shoppers-prediction': ['Python', 'scikit-learn', 'Pandas', 'Streamlit'],

  // RAG app
  'askquorarag': ['Python', 'FAISS', 'Sentence Transformers', 'Docker', 'Streamlit', 'RAG'],
  'ask-quora-rag': ['Python', 'FAISS', 'Sentence Transformers', 'Docker', 'Streamlit', 'RAG'],

  // Web apps
  'jobtailor': ['Next.js', 'TypeScript', 'TailwindCSS', 'shadcn/ui', 'Gemini', 'Gemini 2.5 Flash', 'Google Gemini', 'GenAI', 'LLM', 'Node.js'],
  'my-portfolio-website': ['Next.js', 'TypeScript', 'TailwindCSS', 'shadcn/ui', 'Framer Motion'],
  'coffeshop-website-template': ['HTML', 'CSS', 'TypeScript', 'TailwindCSS', 'Bootstrap'],
  'coffeeshop-website-template': ['HTML', 'CSS', 'TypeScript', 'TailwindCSS', 'Bootstrap'],

  // Add more: 'repo-name': ['TagA', 'TagB']
};

const getImageForProject = (repoName: string): Project['image'] => {
    const sanitizedName = repoName.toLowerCase().replace(/[\s-]/g, '');
    const foundImage = PlaceHolderImages.find(img => 
        sanitizedName.includes(img.id.replace('project-', '')) || 
        img.id.replace('project-','').includes(sanitizedName)
    );

    if (foundImage) {
        return {
            imageUrl: foundImage.imageUrl,
            imageHint: foundImage.imageHint,
        };
    }
    
    // Prefer local fallback image; Next.js will serve from /public
    return {
        imageUrl: '/projects.png',
        imageHint: 'project cover',
    };
};

// Per-repo overrides (description, longDescription, etc.)
const REPO_OVERRIDES: Record<string, Partial<Project>> = {
  'jobtailor': {
    description:
      'AI-powered resume tailoring tool — generates optimized, job-specific resumes, cover letters, and ATS insights.',
    longDescription:
      'JobTailor streamlines applications with AI: paste a job posting and your base resume, then generate tailored resumes, cover letters, and ATS keyword insights powered by Google Gemini. Built with Next.js, TypeScript, TailwindCSS, and shadcn/ui, with a Node.js integration.',
    tags: ['TypeScript', 'Next.js', 'TailwindCSS', 'shadcn/ui', 'Google Gemini', 'Node.js'],
  },
  'askquorarag': {
    description:
      'Retrieval-Augmented Generation app that answers questions using real Quora-style Q&A data.',
    longDescription:
      'AskQuoraRAG is a RAG system that indexes Quora-like Q&A content using Sentence Transformers embeddings and FAISS for fast similarity search. A Streamlit UI lets users ask questions and retrieve semantically relevant answers, with Docker for reproducible deployment.',
    tags: ['FAISS', 'Sentence Transformers', 'Docker', 'Streamlit', 'RAG'],
  },
  'ask-quora-rag': {
    description:
      'Retrieval-Augmented Generation app that answers questions using real Quora-style Q&A data.',
    longDescription:
      'AskQuoraRAG is a RAG system that indexes Quora-like Q&A content using Sentence Transformers embeddings and FAISS for fast similarity search. A Streamlit UI lets users ask questions and retrieve semantically relevant answers, with Docker for reproducible deployment.',
    tags: ['FAISS', 'Sentence Transformers', 'Docker', 'Streamlit', 'RAG'],
  },
};

// Normalize and prettify tags/skills; removes repetition across casing/spelling.
const NAME_MAP: Record<string, string> = {
  'nextjs': 'Next.js',
  'next.js': 'Next.js',
  'react': 'React',
  'typescript': 'TypeScript',
  'javascript': 'JavaScript',
  'node': 'Node.js',
  'nodejs': 'Node.js',
  'express': 'Express.js',
  'express.js': 'Express.js',
  'tailwind': 'TailwindCSS',
  'tailwindcss': 'TailwindCSS',
  'shadcn': 'shadcn/ui',
  'shadcn-ui': 'shadcn/ui',
  'shadcn/ui': 'shadcn/ui',
  'graphql': 'GraphQL',
  'vercel': 'Vercel',
  'firebase': 'Firebase',
  'docker': 'Docker',
  'python': 'Python',
  'pytorch': 'PyTorch',
  'tensorflow': 'TensorFlow',
  'scikit-learn': 'scikit-learn',
  'numpy': 'NumPy',
  'pandas': 'Pandas',
  'matplotlib': 'Matplotlib',
  'lightgbm': 'LightGBM',
  'optuna': 'Optuna',
  'shap': 'SHAP',
  'streamlit': 'Streamlit',
  'power bi': 'Power BI',
  'oracle sql': 'Oracle SQL',
  'peoplesoft': 'PeopleSoft',
  'postgresql': 'PostgreSQL',
  'mysql': 'MySQL',
  'html': 'HTML',
  'css': 'CSS',
  'bootstrap': 'Bootstrap',
  'langchain': 'LangChain',
  'huggingface': 'Hugging Face',
  'hugging face': 'Hugging Face',
  'llm': 'LLM',
  'ai': 'AI',
  'ml': 'ML',
  'gemini': 'Gemini',
  'google gemini': 'Google Gemini',
  'faiss': 'FAISS',
  'sentence-transformers': 'Sentence Transformers',
  'sentence transformers': 'Sentence Transformers',
  'sentence_transformers': 'Sentence Transformers',
  'rag': 'RAG',
};

const toTitle = (s: string) =>
  s
    .split(/\s+/)
    .map(w => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(' ');

const normalizeTag = (tag: string): string => {
  const raw = (tag || '').toString().trim();
  if (!raw) return '';
  const lowered = raw.replace(/[_-]/g, ' ').toLowerCase();
  if (NAME_MAP[lowered]) return NAME_MAP[lowered];
  // Preserve known punctuations like "/" and ".js" where appropriate already mapped above
  return toTitle(lowered);
};

export async function getGithubProjects(username: string): Promise<{ projects: Project[], fields: string[] }> {
    try {
        const { data: repos } = await octokit.repos.listForUser({
            username,
            type: 'owner',
            sort: 'pushed',
            per_page: 10,
        });

        const EXCLUDED_REPO_KEYWORDS = ['ms-codes', 'ms-codess', 'ms codes project'];
        const projects: Project[] = repos
            .filter(repo => {
                if (repo.fork) return false;
                if (!repo.description) return false;
                const name = (repo.name || '').toLowerCase();
                // Hide GitHub profile repo (same as username)
                if (name === username.toLowerCase()) return false;
                // Hide known keywords like "ms codes project"
                if (EXCLUDED_REPO_KEYWORDS.some(k => name.includes(k))) return false;
                return true;
            })
            .map(repo => {
                const repoKey = repo.name.toLowerCase();
                // Start with GitHub topics + language
                let rawTags: string[] = [...(repo.topics || [])];
                if (repo.language) rawTags.unshift(repo.language);

                // Enrich from curated map
                if (EXTRA_TAGS_BY_REPO[repoKey]) rawTags.push(...EXTRA_TAGS_BY_REPO[repoKey]);

                // Base project
                let project: Project = {
                    title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                    description: repo.description || 'No description available.',
                    longDescription: repo.description || 'No detailed description available.',
                    image: getImageForProject(repo.name),
                    tags: [],
                    field: getPrimaryField(repo.topics || []),
                    liveUrl: repo.homepage || '#',
                    githubUrl: repo.html_url,
                } as Project;

                // Apply overrides first (may override tags)
                if (REPO_OVERRIDES[repoKey]) {
                  project = { ...project, ...REPO_OVERRIDES[repoKey] } as Project;
                }

                // Choose final tags: override if provided, else rawTags
                const chosenRaw = Array.isArray((project as any).tags) && (project as any).tags.length
                  ? ((project as any).tags as string[])
                  : rawTags;

                // Normalize + dedupe
                project.tags = Array.from(
                  new Map(
                    chosenRaw
                      .map(normalizeTag)
                      .filter(Boolean)
                      .map((t) => [t.toLowerCase(), t])
                  ).values()
                );

                return project;
        });

        const fields = Array.from(new Set(projects.map(p => p.field)));
        
        return { projects, fields };
    } catch (error) {
        console.error('Failed to fetch GitHub projects:', error);
        return { projects: [], fields: [] };
    }
}
