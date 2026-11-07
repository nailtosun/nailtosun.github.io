import { cn } from "@/lib/utils";
import type { Project } from "@/types/projects";

/**
 * Shows the project's preview image, or a tinted panel with the project icon
 * when no image is configured.
 */
export function ProjectVisual({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  if (project.previewImage) {
    // Logos are shown whole on a white plate (readable in both themes);
    // photos are cropped to fill the space.
    const contain = project.previewFit === "contain";

    return (
      <div
        className={cn(
          "w-full overflow-hidden",
          contain && "flex items-center justify-center bg-white p-8",
          className,
        )}
      >
        <img
          src={project.previewImage}
          alt={project.title}
          className={cn(
            "w-full h-full",
            contain ? "max-w-40 object-contain" : "object-cover",
          )}
          style={{ objectPosition: project.previewPosition }}
          loading="lazy"
        />
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 w-full bg-gradient-to-br from-muted to-secondary text-muted-foreground",
        className,
      )}
      aria-hidden="true"
    >
      <Icon className="w-12 h-12 opacity-80" />
      <span className="text-xs font-medium uppercase tracking-wider opacity-80">
        {project.topic}
      </span>
    </div>
  );
}
