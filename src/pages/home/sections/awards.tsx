import { FaTrophy, FaRegCalendar } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { awards } from "@/data/awards";

interface AwardsSectionProps {
  variant?: string;
}

const TITLE = "Honors & Awards";

export default function AwardsSection({
  variant = "default",
}: AwardsSectionProps) {
  if (variant === "card") {
    return (
      <Card className="rounded-md md:px-2">
        <CardHeader>
          <CardTitle className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
            <FaTrophy />
            {TITLE}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AwardsContent />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
        <FaTrophy />
        {TITLE}
      </div>
      <AwardsContent />
    </div>
  );
}

function AwardsContent() {
  return (
    <div className="space-y-1">
      {awards.map((item) => (
        <div
          key={item.title}
          className="flex flex-col py-2 px-4 rounded-sm hover:bg-muted/80 group"
        >
          <div className="flex items-center justify-between gap-2">
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold hover:underline underline-offset-4"
              >
                {item.title}
              </a>
            ) : (
              <span className="text-base font-semibold">{item.title}</span>
            )}

            {item.link && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="flex flex-row items-center cursor-pointer gap-1 h-6 opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
                title="Open link"
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                  <span className="hidden md:inline">Link</span>
                </a>
              </Button>
            )}
          </div>

          <div className="flex flex-row justify-between gap-4 text-sm text-muted-foreground">
            {item.organization && <span>{item.organization}</span>}
            {item.date && (
              <p className="flex flex-row gap-1 items-center shrink-0">
                <FaRegCalendar />
                {item.date}
              </p>
            )}
          </div>

          {item.description && (
            <p className="text-sm text-muted-foreground mt-0.5">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
