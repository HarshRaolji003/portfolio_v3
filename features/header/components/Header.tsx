import Link from "next/link";
import { cn } from "@/lib/utils";
import { dancingScript } from "@/styles/fonts";
import { HeaderNav } from "./HeaderNav";

/**
 * Sticky site header with brand link on the left and responsive navigation on the right.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 h-(--header-height) w-full border-b border-border-subtle bg-background">
      <div className="mx-auto flex h-full w-full max-w-(--container-max) items-center justify-between px-5 md:px-8">
        <Link
          href="#"
          aria-label="HR — Harsh Raolji"
          className={cn(
            dancingScript.className,
            "inline-flex min-h-11 items-center rounded-sm text-2xl font-bold text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          )}
        >
          HR
        </Link>
        <HeaderNav />
      </div>
    </header>
  );
}
