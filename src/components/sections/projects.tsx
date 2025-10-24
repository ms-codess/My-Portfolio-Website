'use client';

import { useState } from 'react';
import { PROJECTS, ALL_FIELDS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/project-card';
import ProjectModal from '@/components/project-modal';

type ProjectType = (typeof PROJECTS)[0];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const filteredProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.field === filter);

  return (
    <section id="projects">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Creations</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of projects I'm proud of.
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
          {ALL_FIELDS.map((field) => (
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div key={project.title} className="fade-in-up" style={{ animationDelay: `${index * 100}ms`}}>
              <ProjectCard project={project} onSelect={() => setSelectedProject(project)} />
            </div>
          ))}
        </div>
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

export default ProjectsSection;
