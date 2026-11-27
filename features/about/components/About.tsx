const ABOUT_PARAGRAPHS = [
  "I'm a Software Developer who enjoys building things from the ground up and understanding what makes them work.",
  "What drives me is the engineering behind a product — designing systems, working through backend logic, exploring architectures, and figuring out how different technologies come together to solve a problem.",
  "I'm particularly curious about technology beneath the surface. How do systems work? How can software automate repetitive workflows? How is technology changing the way humans think, work, and interact with the world?",
  "I enjoy stepping into unfamiliar technologies, experimenting with new approaches, and continuously expanding my understanding of software engineering — from backend development to cloud infrastructure and AI-powered systems.",
  "For me, development isn't just about delivering features. It's about having a clear understanding of the problem, making thoughtful engineering decisions, and building something genuinely useful.",
] as const;

/**
 * Two-column About section with sticky heading on desktop and readable editorial copy.
 */
export function About() {
  return (
    <section
      id="about"
      tabIndex={-1}
      aria-labelledby="about-heading"
      className="py-(--section-y) focus:outline-none"
    >
      <div className="mx-auto grid w-full max-w-(--container-max) grid-cols-1 gap-8 px-5 md:grid-cols-12 md:gap-12 md:px-8">
        <div className="md:sticky md:top-[calc(var(--header-height)+2rem)] md:col-span-4 md:self-start lg:col-span-5">
          <p className="font-mono text-small uppercase tracking-[0.14em] text-text-secondary">
            ABOUT
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-sans text-h2 font-semibold tracking-tight text-text-primary"
          >
            A little about me
          </h2>
        </div>

        <div className="md:col-span-8 lg:col-span-7">
          <div className="max-w-[65ch]">
            <div className="flex flex-col gap-5 font-sans text-body-lg leading-[1.7] text-text-secondary">
              {ABOUT_PARAGRAPHS.map((paragraph, index) => (
                <p key={index} className="text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <span
                aria-hidden="true"
                className="mb-4 block h-0.5 w-8 rounded-full bg-primary"
              />
              <p className="font-sans text-body-lg font-semibold leading-[1.7] text-text-primary">
                Always curious. Always building. Always learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
