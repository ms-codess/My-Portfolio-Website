import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Link as LinkIcon } from 'lucide-react';
import type { Project } from '@/lib/data';

type ProjectModalProps = {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
};

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-md text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-6">
            {(() => {
              const desc = (project.description || '').trim();
              const longDesc = (project.longDescription || '').trim();
              return longDesc && longDesc.toLowerCase() !== desc.toLowerCase() ? (
                <p className="text-foreground">{longDesc}</p>
              ) : null;
            })()}

            <div>
                <h4 className="font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
                </div>
            </div>

            <div className="flex gap-4">
            {project.liveUrl && project.liveUrl !== '#' && (
                <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                    </a>
                </Button>
            )}
            <Button asChild variant="secondary">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Source Code
                </a>
            </Button>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
