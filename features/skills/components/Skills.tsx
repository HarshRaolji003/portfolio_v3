import { SKILL_GROUPS } from "../data";

export function Skills() {
  return (
    <section
      id="skills"
      tabIndex={-1}
      aria-labelledby="skills-heading"
      className="pt-8 pb-(--section-y) focus:outline-none md:pt-10"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-5 md:px-8">
        {/* Eyebrow */}
        <p className="font-mono text-small uppercase tracking-[0.14em] text-text-secondary">
          SKILLS
        </p>

        {/* Heading */}
        <h2
          id="skills-heading"
          className="mt-3 font-sans text-h2 font-semibold tracking-tight text-text-primary"
        >
          What I reach for
        </h2>

        {/* Skills grid */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {SKILL_GROUPS.map((group) => {
            const labelId = `skills-group-${group.label
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`;
            return (
              <section key={group.label} aria-labelledby={labelId}>
                <h3
                  id={labelId}
                  className="font-mono text-small uppercase tracking-[0.14em] text-text-secondary"
                >
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2" role="list">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border border-border-subtle bg-surface-low px-3 py-1.5 font-mono text-small text-text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
