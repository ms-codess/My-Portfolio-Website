'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/project-card';
import ProjectModal from '@/components/project-modal';
import type { Project } from '@/lib/data';
import { getGithubProjects } from '@/lib/github';
import { Skeleton } from '../ui/skeleton';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const { projects: fetchedProjects } = await getGithubProjects('ms-codess');
      setProjects(fetchedProjects);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">Recent work from my GitHub.</p>
        </div>

        {loading ? (
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 80}ms` }}>
                <CardSkeleton />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={project.title} className="fade-in-up" style={{ animationDelay: `${index * 80}ms` }}>
                <ProjectCard project={project} onSelect={() => setSelectedProject(project)} />
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

const CardSkeleton = () => {
    return (
        <div className="flex flex-col h-full overflow-hidden rounded-lg border bg-card shadow-sm">
            <div className="relative h-48 w-full bg-muted"></div>
            <div className="flex flex-1 flex-col p-4 space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full flex-1" />
                <div className="flex flex-wrap gap-2 pt-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;
