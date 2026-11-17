import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      id="about"
      aria-labelledby="hero-title"
      className="hero section-anchor"
    >
      <h1 id="hero-title">
        Complex problems.
        <br />
        <span>Thoughtful software.</span>
      </h1>
      <div className="hero-content">
        <p className="hero-introduction">{profile.introduction}</p>
        <p className="hero-philosophy">{profile.philosophy}</p>
        <div className="hero-meta">
          <span className="location">
            <MapPin size={14} aria-hidden="true" />
            {profile.location}
          </span>
          <div className="hero-actions">
            <a
              className="text-link cv-link"
              href={
                profile.cv ?? `mailto:${profile.email}?subject=CV%20request`
              }
              download={profile.cv ? true : undefined}
            >
              Request CV{" "}
              {<ArrowUpRight size={14} />}
            </a>
          </div>
        </div>
        <p className="hero-note">Thinking in systems. Building for people.</p>
      </div>
    </section>
  );
}
