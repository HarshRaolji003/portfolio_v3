"use client";

import { useState, useSyncExternalStore } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

function subscribeToHash(callback: () => void) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

function getHashSnapshot() {
  return window.location.hash;
}

function getServerHashSnapshot() {
  return "";
}

/**
 * Responsive navigation links for the site header.
 * Renders an inline horizontal nav on md+ screens and a shadcn Sheet drawer on mobile.
 */
export function HeaderNav() {
  const [open, setOpen] = useState(false);
  const activeHash = useSyncExternalStore(
    subscribeToHash,
    getHashSnapshot,
    getServerHashSnapshot
  );

  return (
    <>
      <nav
        aria-label="Primary"
        className="hidden md:flex md:items-center md:gap-6"
      >
        {NAV_ITEMS.map(({ label, href }) => {
          const isActive = activeHash === href;
          return (
            <a
              key={href}
              href={href}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "relative inline-flex min-h-11 items-center rounded-sm px-1 text-sm transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                isActive
                  ? "font-medium text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {label}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-1 bottom-2 h-0.5 rounded-full bg-primary"
                />
              )}
            </a>
          );
        })}
      </nav>

      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="size-11"
                aria-label="Open navigation menu"
              />
            }
          >
            <Menu aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <nav
              aria-label="Mobile"
              className="flex flex-col gap-1 px-4 pt-12 pb-6"
            >
              {NAV_ITEMS.map(({ label, href }) => {
                const isActive = activeHash === href;
                return (
                  <a
                    key={href}
                    href={href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex min-h-11 items-center gap-3 rounded-md px-3 text-base transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                      isActive
                        ? "bg-accent font-medium text-primary"
                        : "text-foreground hover:bg-accent"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "size-1.5 rounded-full transition-opacity",
                        isActive ? "bg-primary opacity-100" : "opacity-0"
                      )}
                    />
                    {label}
                  </a>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
