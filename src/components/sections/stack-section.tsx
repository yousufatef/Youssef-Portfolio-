import { stack } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { SkillIcon } from "@/components/ui/skill-icon";

export function StackSection() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="section section-anchor"
    >
      <div id="stack-title">
        <SectionHeading
          number="03"
          label="STACK"
          title="The tools follow the problem."
          description="A practical stack for building across the product — from the interface to the API."
        />
      </div>
      <ul className="skill-collection" aria-label="Technical skills">
        {stack
          .flatMap((group) => group.skills)
          .map((skill) => (
            <li className="skill-item" key={skill}>
              <SkillIcon name={skill} />
              <span>{skill}</span>
            </li>
          ))}
      </ul>
    </section>
  );
}
