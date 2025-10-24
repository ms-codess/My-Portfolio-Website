import Image from 'next/image';
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
        <div className="relative h-48 w-full overflow-hidden">
          {project.image && (
            <Image
              src={project.image.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={project.image.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
           <div className="absolute bottom-4 right-4 flex items-center justify-center rounded-full bg-accent p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
             <ArrowRight className="h-4 w-4 text-accent-foreground" />
           </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-4">
        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        <p className="mt-2 flex-1 text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
