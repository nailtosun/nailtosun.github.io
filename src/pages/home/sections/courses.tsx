import { FaBookOpen } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { courses } from "@/data/courses";

interface CoursesSectionProps {
  variant?: string;
}

const TITLE = "Selected Graduate Courses";

export default function CoursesSection({
  variant = "default",
}: CoursesSectionProps) {
  if (variant === "card") {
    return (
      <Card className="rounded-md md:px-2">
        <CardHeader>
          <CardTitle className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
            <FaBookOpen />
            {TITLE}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CoursesContent />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
        <FaBookOpen />
        {TITLE}
      </div>
      <CoursesContent />
    </div>
  );
}

function CoursesContent() {
  // group courses by category (institution)
  const grouped = courses.reduce<Record<string, typeof courses>>(
    (acc, item) => {
      const cat = item.category || "Other";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    },
    {},
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category}>
          <div className="text-sm text-muted-foreground font-medium mb-1 px-4">
            {category}
          </div>

          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between gap-2 py-1.5 px-4 rounded-sm hover:bg-muted/80"
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium hover:underline underline-offset-4"
                >
                  {item.title}
                </a>
              ) : (
                <span className="text-base font-medium">{item.title}</span>
              )}
              {item.link && (
                <FaExternalLinkAlt className="w-3 h-3 shrink-0 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
