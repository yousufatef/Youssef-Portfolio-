import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section section-anchor contact-section"
    >
      <p className="eyebrow">
        <span className="section-number">05</span> LET’S CONNECT
      </p>
      <h2 id="contact-title">
        Have a problem
        <br />
        <span>worth solving?</span>
      </h2>
      <div className="contact-bottom">
        <div className="contact-copy">
          <p>
            Whether you’re building a product, improving an existing system, or
            exploring an interesting opportunity, I’d be happy to connect.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            <span>{profile.email}</span>
            <ArrowUpRight size={23} />
          </a>
        </div>
        <div className="contact-links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
            <ArrowUpRight size={16} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={`tel:${profile.phone}`}>
            <span>
              <Phone size={14} />
              +20 111 573 7646
            </span>
            <ArrowUpRight size={16} />
          </a>
          <span className="contact-location">
            <MapPin size={14} />
            {profile.location}
          </span>
        </div>
      </div>
      <a className="contact-small-link" href={`mailto:${profile.email}`}>
        <Mail size={14} /> A conversation is a good place to start.
      </a>
    </section>
  );
}
