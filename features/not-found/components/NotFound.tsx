import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NotFoundVisual } from "./NotFoundVisual";

/**
 * Custom 404 page view aligned with the portfolio's editorial design system.
 */
export function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="flex min-h-[calc(100svh-var(--header-height))] items-center py-12 md:py-16"
    >
      <div className="mx-auto grid w-full max-w-(--container-max) grid-cols-1 items-center gap-10 px-5 md:grid-cols-12 md:gap-12 md:px-8">
        <div className="md:col-span-7">
          <p className="font-mono text-small uppercase tracking-[0.14em] text-text-secondary">
            404 / NOT FOUND
          </p>

          <h1
            id="not-found-heading"
            className="mt-3 font-sans text-h1 font-bold leading-[1.1] tracking-tight text-text-primary"
          >
            This page doesn&apos;t exist.
          </h1>

          <p className="mt-4 max-w-[60ch] font-sans text-body-lg text-pretty text-text-secondary">
            The link may be broken, or the page may have moved. Head back home
            and pick up from there.
          </p>

          <div className="mt-8">
            <Button
              variant="default"
              nativeButton={false}
              render={<Link href="/" />}
              className="min-h-11 gap-2 px-5 text-base"
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-4 transition-transform duration-200 ease-out group-hover/button:-translate-x-0.5 group-focus-visible/button:-translate-x-0.5 motion-reduce:transition-none motion-reduce:transform-none motion-reduce:group-hover/button:translate-x-0 motion-reduce:group-focus-visible/button:translate-x-0"
              />
              <span>Back to home</span>
            </Button>
          </div>
        </div>

        <div className="md:col-span-5">
          <NotFoundVisual />
        </div>
      </div>
    </section>
  );
}
