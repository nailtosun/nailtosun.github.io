import { useSearchParams, useNavigate } from "react-router";
import { IoLibrary } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PublicationTable } from "@/components/publication-table";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { PUBLICATION_KIND_LABELS } from "@/lib/publications";

import { publications } from "@/data/publications";
import { scholarMetrics } from "@/data/scholarMetrics";
import type { PublicationKind } from "@/types/publications";

const KINDS = Object.keys(PUBLICATION_KIND_LABELS) as PublicationKind[];

const countByKind = (kind: PublicationKind) =>
  publications.items.filter((pub) => pub.type === kind).length;

export default function PublicationsPage() {
  usePageTitle("Publications");

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const typeParam = searchParams.get("type");
  const activeKind = KINDS.find((k) => k === typeParam) ?? "all";

  const setKind = (kind: PublicationKind | "all") => {
    const params = new URLSearchParams(searchParams);
    if (kind === "all") params.delete("type");
    else params.set("type", kind);
    navigate({ search: params.toString() }, { replace: true });
  };

  const items =
    activeKind === "all"
      ? publications.items
      : publications.items.filter((pub) => pub.type === activeKind);

  const filters: { key: PublicationKind | "all"; label: string; count: number }[] =
    [
      { key: "all", label: "All", count: publications.items.length },
      ...KINDS.map((k) => ({
        key: k,
        label: PUBLICATION_KIND_LABELS[k],
        count: countByKind(k),
      })).filter((f) => f.count > 0),
    ];

  return (
    <div className="flex flex-1 flex-col items-center gap-10">
      <div className="w-full max-w-6xl space-y-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-row justify-center items-center gap-4 text-4xl font-semibold">
            <IoLibrary />
            Publications
          </div>
          <p className="text-sm text-muted-foreground text-center">
            {scholarMetrics.stats
              .map((stat) => `${stat.label}: ${stat.value}`)
              .join(" · ")}{" "}
            (
            <a
              href={scholarMetrics.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              {scholarMetrics.source}
            </a>
            , {scholarMetrics.lastUpdated})
          </p>
        </div>

        <div className="flex flex-wrap gap-2 items-center mx-2 sm:mx-6 relative -top-2">
          <span className="mr-1">Filter by type:</span>
          {filters.map((f) => (
            <Button
              key={f.key}
              size="sm"
              variant={activeKind === f.key ? "default" : "secondary"}
              onClick={() => setKind(f.key)}
              className="cursor-pointer rounded-sm font-normal"
            >
              {f.label}
              <span className="opacity-70 tabular-nums">{f.count}</span>
            </Button>
          ))}
        </div>

        <Separator />

        <div className="w-full px-2 sm:px-6 overflow-hidden">
          <PublicationTable
            items={items}
            authorName={publications.authorName}
          />
        </div>
      </div>
    </div>
  );
}
