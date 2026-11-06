import { Link } from "react-router";
import { FaWrench, FaArrowRight, FaRegCalendar } from "react-icons/fa6";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectVisual } from "@/components/project-visual";

import { projects } from "@/data/projects";
import type { Project } from "@/types/projects";

const featured = projects.items.filter((project) => project.featured);

export default function ProjectsSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
        <FaWrench />
        Projects
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="relative w-full">
        <div className="absolute right-0">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="gap-1 text-muted-foreground"
          >
            <Link to="/projects">
              View all
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="rounded-md overflow-hidden gap-0 py-0 w-full flex flex-col h-full">
      <Link to={`/projects?topic=${encodeURIComponent(project.topic)}`}>
        <ProjectVisual project={project} className="h-36" />
      </Link>

      <div className="w-full border-t" />

      <div className="flex flex-col flex-grow py-3 px-4 gap-y-2">
        <div className="text-base font-semibold line-clamp-2">
          {project.title}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {project.summary}
        </p>

        {project.tools.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <Badge
                key={tool}
                variant="secondary"
                className="rounded-sm font-normal"
              >
                {tool}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex flex-row items-center justify-between gap-2 text-sm text-muted-foreground mt-auto pt-2">
          {project.partner.url ? (
            <a
              href={project.partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="truncate hover:text-foreground hover:underline underline-offset-4"
            >
              {project.partner.name}
            </a>
          ) : (
            <span className="truncate">{project.partner.name}</span>
          )}
          <span className="flex flex-row items-center gap-1 shrink-0">
            <FaRegCalendar />
            {project.years}
          </span>
        </div>
      </div>
    </Card>
  );
}
