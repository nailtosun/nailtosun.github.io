import { useState, useMemo } from "react";
import type { IconType } from "react-icons";
import { FaScrewdriverWrench } from "react-icons/fa6";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { skills as skillsData } from "@/data/skills";

interface SkillItem {
  name: string;
  icon?: IconType;
  logo?: string | null;
  proficiency?: string | null;
  description?: string | null;
}

const skills = skillsData as Record<string, SkillItem[]>;

const TITLE = "Skills";
const CATEGORIES = ["All", ...Object.keys(skills)];

export default function SkillsSection() {
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allSkills = useMemo(() => {
    return Object.entries(skills).flatMap(([category, items]) =>
      items.map((item) => ({
        ...item,
        category,
      })),
    );
  }, []);

  const filtered =
    active === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === active);

  return (
    <div className="space-y-6">
      <div className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
        <FaScrewdriverWrench />
        {TITLE}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="sm:w-52 shrink-0 flex flex-row flex-wrap sm:flex-col gap-1">
          <span className="hidden sm:block text-sm font-medium text-muted-foreground mb-2">
            Categories
          </span>

          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-3 py-2 rounded-sm text-left text-sm sm:text-base cursor-pointer",
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted",
              )}
            >
              {cat}
            </button>
          ))}

          <Separator className="hidden sm:block my-4" />

          <p className="hidden sm:block text-sm leading-relaxed text-muted-foreground">
            Tools and techniques I use across machine design, power electronics
            and motor-drive research.
          </p>
        </div>

        {/* cap the viewport too: in the stacked (mobile) layout the root's
            max-height alone does not stop the cards from overflowing */}
        <ScrollArea className="w-full max-h-96 sm:px-4 [&>[data-slot=scroll-area-viewport]]:max-h-96">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 flex-1">
            {filtered.map((skill) => {
              const key = `${skill.category}-${skill.name}`;
              const isExpanded = expanded[key];
              const Icon = skill.icon;

              return (
                <Card
                  key={key}
                  className="py-4 rounded-md gap-2 h-full flex flex-col justify-between"
                >
                  <CardHeader>
                    <CardTitle className="flex flex-row items-center gap-2">
                      {Icon ? (
                        <Icon className="w-5 h-5 shrink-0 text-muted-foreground" />
                      ) : skill.logo ? (
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-6 h-6 object-contain rounded"
                          loading="lazy"
                        />
                      ) : null}
                      {skill.name}
                    </CardTitle>

                    {skill.proficiency && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {skill.proficiency}
                      </p>
                    )}
                  </CardHeader>

                  <CardContent className="pt-1 flex flex-col gap-3 flex-1">
                    {isExpanded && skill.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    )}

                    <div className="flex flex-row items-center justify-between mt-auto">
                      <Badge variant="secondary" className="text-xs w-fit">
                        {skill.category}
                      </Badge>

                      {skill.description && (
                        <div className="flex items-center">
                          <button
                            onClick={() => toggleExpand(key)}
                            className="text-xs leading-none underline underline-offset-2 text-muted-foreground hover:text-foreground cursor-pointer"
                          >
                            {isExpanded ? "Less" : "More"}
                          </button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
