import { GraduationCap } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="section section-anchor education-section"
    >
      <div id="education-title">
        <SectionHeading
          number="04"
          label="EDUCATION"
          title="A foundation in computer science."
        />
      </div>
      <div className="education-record">
        <span className="education-icon">
          <GraduationCap size={24} strokeWidth={1.4} />
        </span>
        <div>
          <h3>{profile.education.degree}</h3>
          <p>
            {profile.education.school}
            <span className="metadata-divider">/</span>
            {profile.education.country}
          </p>
        </div>
      </div>
    </section>
  );
}
