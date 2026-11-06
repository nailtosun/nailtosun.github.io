import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { PublicationTable } from "@/components/publication-table";

import { publications } from "@/data/publications";

const featured = publications.items.filter((pub) => pub.featured);

export default function PublicationsSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
        <IoLibrary />
        Recent Publications
      </div>

      <div className="overflow-hidden">
        <PublicationTable
          items={featured}
          authorName={publications.authorName}
        />
      </div>

      <div className="relative w-full">
        <div className="absolute right-0">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="gap-1 text-muted-foreground"
          >
            <Link to="/publications">
              View all {publications.items.length}
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
