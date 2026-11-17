import { capabilities } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/ui/reveal";

export function ValueSection() {
  return (
    <section
      id="what-i-bring"
      aria-labelledby="value-title"
      className="section section-anchor value-section"
    >
      <div id="value-title">
        <SectionHeading
          number="01"
          label="WHAT I BRING"
          title="Good software starts with the right questions."
        />
      </div>
      <div className="capabilities">
        {capabilities.map((item) => (
          <Reveal key={item.number}>
            <article className="capability">
              <span className="capability-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
