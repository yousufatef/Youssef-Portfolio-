import { PersonalHeader } from "@/components/layout/personal-header";
import { HeroSection } from "@/components/sections/hero-section";
import { ValueSection } from "@/components/sections/value-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { StackSection } from "@/components/sections/stack-section";
import { EducationSection } from "@/components/sections/education-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/portfolio";

export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    telephone: profile.phone,
    sameAs: [profile.linkedin, ...(profile.github ? [profile.github] : [])],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Giza",
      addressCountry: "EG",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education.school,
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
      <PersonalHeader />
      <main id="main-content" className="container">
        <HeroSection />
        <ValueSection />
        <ExperienceSection />
        <Reveal>
          <StackSection />
        </Reveal>
        <Reveal>
          <EducationSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
    </>
  );
}
