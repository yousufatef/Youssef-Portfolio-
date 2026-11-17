import { experiences } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/ui/reveal";
import type { CSSProperties } from "react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section section-anchor"
    >
      <div id="experience-title">
        <SectionHeading
          number="02"
          label="EXPERIENCE"
          title="Built in the real world."
          description="From enterprise workflows to healthcare experiences. The work behind the way I think."
        />
      </div>
      <div className="experience-list">
        {experiences.map((job, index) => (
          <Reveal key={job.company}>
            <article
              className="experience-row"
              style={
                {
                  "--company-color":
                    index === 0 ? "var(--accent)" : job.brandColor,
                } as CSSProperties
              }
            >
              <div className="experience-meta">
                <p className="mono">{job.period}</p>
                <span>{job.location}</span>
              </div>
              <div className="experience-content">
                <span
                  className="timeline-dot"
                  data-current={index === 0}
                  aria-hidden="true"
                />
                <div className="job-heading">
                  <h3>{job.company}</h3>
                  {index === 0 && (
                    <span className="current-label">CURRENT</span>
                  )}
                </div>
                <p className="job-role">{job.role}</p>
                <p className="job-description">{job.description}</p>
                <ul className="responsibilities">
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
