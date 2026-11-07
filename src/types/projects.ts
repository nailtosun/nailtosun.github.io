import type { IconType } from "react-icons";

export interface ProjectLink {
  name: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  details: string;
  partner: { name: string; url: string | null };
  years: string;
  topic: string;
  tools: string[];
  links: ProjectLink[];
  previewImage: string | null;
  /** CSS object-position for the preview image (e.g. "70% 50%"); defaults to centre. */
  previewPosition?: string;
  /** "contain" shows the whole image (e.g. a logo) on a white panel; defaults to "cover". */
  previewFit?: "cover" | "contain";
  icon: IconType;
  featured: boolean;
}

export interface ProjectsType {
  items: Project[];
}
