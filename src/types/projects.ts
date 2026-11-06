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
  icon: IconType;
  featured: boolean;
}

export interface ProjectsType {
  items: Project[];
}
