import { usePageTitle } from "@/hooks/use-pagetitle";

import IntroductionSection from "./sections/introduction";
import ExperienceSection from "./sections/experience";
import PublicationsSection from "./sections/publications";
import ProjectsSection from "./sections/projects";
import SkillsSection from "./sections/skills";
import AwardsSection from "./sections/awards";
import CoursesSection from "./sections/courses";

import { homepage } from "@/data/homepage";

interface SectionProps {
  variant?: string;
}

const sectionComponents: Record<string, React.ComponentType<SectionProps>> = {
  Introduction: IntroductionSection,
  Experience: ExperienceSection,
  Publications: PublicationsSection,
  Projects: ProjectsSection,
  Skills: SkillsSection,
  Awards: AwardsSection,
  Courses: CoursesSection,
};

export default function HomePage() {
  usePageTitle("About Me");

  return (
    <div className="flex flex-1 flex-col items-center gap-24 my-4">
      {homepage.sections.map((section) => {
        if (!section.enabled) return null;
        const SectionComponent = sectionComponents[section.name];
        if (!SectionComponent) return null;
        return (
          <div key={section.name} className="w-full max-w-5xl px-2 md:px-8">
            <SectionComponent variant={section.variant} />
          </div>
        );
      })}
    </div>
  );
}
