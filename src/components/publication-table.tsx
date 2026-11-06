import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PUBLICATION_KIND_LABELS } from "@/lib/publications";
import type { Publication } from "@/types/publications";

export function PublicationTable({
  items,
  authorName,
}: {
  items: Publication[];
  authorName: string;
}) {
  return (
    <Table className="table-fixed w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[calc(100%-50px)]">Publication</TableHead>
          <TableHead className="w-[46px] text-right">Year</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((pub) => (
          <PublicationRow
            key={`${pub.year}-${pub.title}`}
            pub={pub}
            authorName={authorName}
          />
        ))}
      </TableBody>
    </Table>
  );
}

function PublicationRow({
  pub,
  authorName,
}: {
  pub: Publication;
  authorName: string;
}) {
  const authors = pub.authors.split(", ");

  return (
    <TableRow className="transition-none">
      <TableCell className="whitespace-normal space-y-1 py-3">
        {pub.link ? (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base/5 font-semibold hover:underline underline-offset-4"
          >
            {pub.title}
          </a>
        ) : (
          <span className="text-base/5 font-semibold">{pub.title}</span>
        )}

        <div className="text-sm leading-4.5 text-muted-foreground mt-1">
          {authors.map((author, i) => (
            <span
              key={i}
              className={
                author === authorName ? "font-semibold text-foreground" : ""
              }
            >
              {author}
              {i < authors.length - 1 && ", "}
            </span>
          ))}
        </div>

        <div className="text-sm italic leading-4.5 text-muted-foreground">
          {pub.venue}
        </div>

        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <Badge variant="outline" className="rounded-sm font-normal">
            {PUBLICATION_KIND_LABELS[pub.type]}
          </Badge>
          {pub.note && (
            <Badge variant="secondary" className="rounded-sm font-medium">
              {pub.note}
            </Badge>
          )}
          {pub.citations ? (
            <span className="text-xs text-muted-foreground">
              Cited by {pub.citations}
            </span>
          ) : null}
        </div>
      </TableCell>

      <TableCell className="text-sm text-right text-muted-foreground">
        {pub.year}
      </TableCell>
    </TableRow>
  );
}
