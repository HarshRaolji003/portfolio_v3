import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { dancingScript } from "@/styles/fonts";

/**
 * Full-viewport hero section introducing Harsh Raolji with CSS-only link interaction.
 */
export function Hero() {
  return (
    <section className="pt-12 pb-(--section-y) md:pt-20">
      <div className="mx-auto w-full max-w-(--container-max) px-5 md:px-8">
        <p className="font-sans text-body-lg text-text-secondary">
          Hi, I&apos;m{" "}
          <span
            className={cn(
              dancingScript.className,
              "text-2xl font-bold text-primary"
            )}
          >
            Harsh Raolji
          </span>
        </p>

        <p className="mt-3 font-mono text-small uppercase tracking-[0.14em] text-text-secondary">
          SOFTWARE DEVELOPER · INDIA
        </p>

        <h1 className="mt-4 font-sans text-display font-bold leading-[1.1] tracking-tight text-balance text-text-primary">
          <span className="block">Curious by nature.</span>
          <span className="block">
            <span className="text-primary">Engineer</span> by mindset.
          </span>
        </h1>

        <p className="mt-6 max-w-[60ch] font-sans text-body-lg text-pretty text-text-secondary">
          Building products, designing systems, and exploring technology.
        </p>

        {/* TODO: Add public/resume.pdf before production launch; asset does not exist yet. */}
        <div className="mt-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-1.5 rounded-sm font-sans text-body-lg font-medium text-text-primary underline decoration-border-strong decoration-1 underline-offset-4 transition-colors duration-200 ease-out hover:text-primary hover:decoration-primary focus-visible:text-primary focus-visible:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <span>Resume</span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 motion-reduce:transition-none motion-reduce:transform-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0 motion-reduce:group-focus-visible:translate-x-0 motion-reduce:group-focus-visible:translate-y-0"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
