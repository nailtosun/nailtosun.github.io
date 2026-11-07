import { useSearchParams, useNavigate } from "react-router";
import { FaWrench, FaRegCalendar, FaHandshake } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProjectVisual } from "@/components/project-visual";
import { usePageTitle } from "@/hooks/use-pagetitle";

import { projects } from "@/data/projects";
import type { Project } from "@/types/projects";

const allTopics = Array.from(
  new Set(projects.items.map((project) => project.topic)),
);

export default function ProjectsPage() {
  usePageTitle("Projects");

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const topic = searchParams.get("topic");
  const topicFilter: string =
    topic && allTopics.includes(topic) ? topic : "all";

  const updateTopicFilter = (newTopic: string) => {
    const params = new URLSearchParams(searchParams);
    if (newTopic === "all") params.delete("topic");
    else params.set("topic", newTopic);
    navigate({ search: params.toString() }, { replace: true });
  };

  const filteredProjects = projects.items.filter(
    (project) => topicFilter === "all" || project.topic === topicFilter,
  );

  return (
    <div className="flex flex-1 flex-col items-center gap-10">
      <div className="w-full max-w-6xl space-y-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-row justify-center items-center gap-4 text-4xl font-semibold">
            <FaWrench />
            Projects
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Selected research and industrial projects.
          </p>
        </div>

        <div className="flex justify-between flex-wrap gap-2 items-center mx-2 sm:mx-6 my-1 relative -top-2">
          <TopicFilter
            topicFilter={topicFilter}
            setTopicFilter={updateTopicFilter}
          />
          <span className="text-sm text-muted-foreground">
            {filteredProjects.length} project
            {filteredProjects.length === 1 ? "" : "s"}
          </span>
        </div>

        <Separator />

        <div className="grid grid-cols-1 w-full gap-4 px-2 sm:px-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setTopicFilter={updateTopicFilter}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TopicFilter({
  topicFilter,
  setTopicFilter,
}: {
  topicFilter: string;
  setTopicFilter: (val: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <label>Filter by topic:</label>
      <Select value={topicFilter} onValueChange={setTopicFilter}>
        <SelectTrigger className="w-[210px] cursor-pointer">
          <SelectValue placeholder="Topic" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">📂 All Topics</SelectItem>
          {allTopics.map((topic) => (
            <SelectItem key={topic} value={topic}>
              {topic}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {topicFilter !== "all" && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTopicFilter("all")}
          className="px-2 text-sm cursor-pointer text-muted-foreground"
        >
          Clear filter ✕
        </Button>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  setTopicFilter,
}: {
  project: Project;
  setTopicFilter: (val: string) => void;
}) {
  return (
    <Card className="rounded-md overflow-hidden gap-0 py-0 w-full">
      <div className="flex flex-col lg:flex-row">
        <ProjectVisual
          project={project}
          className="h-40 lg:h-auto lg:w-64 lg:min-h-52 shrink-0"
        />

        <div className="w-full border-t block lg:hidden" />
        <div className="border-l hidden lg:block" />

        <div className="flex flex-col gap-y-2 p-4 lg:py-3 lg:px-5 flex-1">
          <div className="text-base font-semibold">{project.title}</div>

          <div className="flex flex-row flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="flex flex-row items-center gap-1.5">
              <FaHandshake className="shrink-0" />
              {project.partner.url ? (
                <a
                  href={project.partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground hover:underline underline-offset-4"
                >
                  {project.partner.name}
                </a>
              ) : (
                project.partner.name
              )}
            </span>
            <span className="flex flex-row items-center gap-1.5">
              <FaRegCalendar className="shrink-0" />
              {project.years}
            </span>
          </div>

          <p className="text-sm text-muted-foreground">{project.details}</p>

          <div className="flex flex-wrap items-center gap-1.5">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setTopicFilter(project.topic)}
              className="rounded-sm cursor-pointer font-normal px-2 h-7 text-sm"
            >
              {project.topic}
            </Button>
            {project.tools.map((tool) => (
              <Badge
                key={tool}
                variant="outline"
                className="rounded-sm font-normal h-7 px-2 text-sm"
              >
                {tool}
              </Badge>
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="flex flex-row flex-wrap items-center gap-1.5 mt-auto pt-2">
              {project.links.map((link) => (
                <Button
                  key={link.url}
                  asChild
                  size="sm"
                  variant="outline"
                  className="gap-1 h-7 text-muted-foreground"
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="w-3 h-3" />
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
