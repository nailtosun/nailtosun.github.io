export type PublicationKind = "journal" | "conference" | "thesis";

export interface Publication {
  title: string;
  authors: string;
  year: number | string;
  venue: string;
  type: PublicationKind;
  link: string | null;
  note: string | null;
  citations: number | null;
  featured: boolean;
}

export interface PublicationsType {
  authorName: string;
  items: Publication[];
}
