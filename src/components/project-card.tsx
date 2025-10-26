"use client";

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/data';


type ProjectCardProps = {
  project: Project;
  onSelect: () => void;
};

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  return (
    <Card
      className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1"
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect()}
    >
      <CardHeader className="p-0">
        {/* Decorative header bar instead of photo */}
        <div className="relative h-2 w-full bg-gradient-to-r from-accent via-primary to-accent opacity-80" />
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-4">
        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        <p className="mt-2 flex-1 text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-3 flex justify-end">
          <span className="inline-flex items-center justify-center rounded-full bg-accent p-2 opacity-80 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="h-4 w-4 text-accent-foreground" />
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
