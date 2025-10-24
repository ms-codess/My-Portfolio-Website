'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/project-card';
import ProjectModal from '@/components/project-modal';
import type { Project } from '@/lib/data';
import { getGithubProjects } from '@/lib/github';
import { Skeleton } from '../ui/skeleton';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [allFields, setAllFields] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const { projects: fetchedProjects, fields } = await getGithubProjects('ms-codess');
      setProjects(fetchedProjects);
      setAllFields(fields);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.field === filter);

  return (
    <section id="projects">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of projects from my GitHub.
          </p>
        </div>

        <div className="my-8 flex flex-wrap justify-center gap-2">
          <Button
            variant={filter === 'All' ? 'default' : 'outline'}
            onClick={() => setFilter('All')}
            className="rounded-full"
          >
            All
          </Button>
          {allFields.map((field) => (
            <Button
              key={field}
              variant={filter === field ? 'default' : 'outline'}
              onClick={() => setFilter(field)}
              className="rounded-full"
            >
              {field}
            </Button>
          ))}
        </div>

        {loading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 100}ms`}}>
                    <CardSkeleton />
                </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div key={project.title} className="fade-in-up" style={{ animationDelay: `${index * 100}ms`}}>
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
