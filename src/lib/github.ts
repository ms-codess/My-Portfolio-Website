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
    
    // Fallback image
    const seed = repoName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return {
        imageUrl: `https://picsum.photos/seed/${seed}/600/400`,
        imageHint: 'code project',
    };
};

export async function getGithubProjects(username: string): Promise<{ projects: Project[], fields: string[] }> {
    try {
        const { data: repos } = await octokit.repos.listForUser({
            username,
            type: 'owner',
            sort: 'pushed',
            per_page: 10,
        });

        const projects: Project[] = repos
            .filter(repo => !repo.fork && repo.description)
            .map(repo => {
                const tags = [...(repo.topics || [])];
                if (repo.language) {
                    tags.unshift(repo.language);
                }

                return {
                    title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                    description: repo.description || 'No description available.',
                    longDescription: repo.description || 'No detailed description available.',
                    image: getImageForProject(repo.name),
                    tags: Array.from(new Set(tags)),
                    field: getPrimaryField(repo.topics || []),
                    liveUrl: repo.homepage || '#',
                    githubUrl: repo.html_url,
                    metrics: {
                        'Stars': repo.stargazers_count.toString(),
                        'Forks': repo.forks_count.toString(),
                        'Issues': repo.open_issues_count.toString(),
                    },
                };
        });

        const fields = Array.from(new Set(projects.map(p => p.field)));
        
        return { projects, fields };
    } catch (error) {
        console.error('Failed to fetch GitHub projects:', error);
        return { projects: [], fields: [] };
    }
}
