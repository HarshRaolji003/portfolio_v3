"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};
const getClientYear = () => new Date().getFullYear();
const getServerYear = () => null;

/**
 * Site footer with dynamic copyright year.
 * Uses useSyncExternalStore so the year is read on the client without
 * triggering Next.js prerender time checks or synchronous setState in an effect.
 */
export function Footer() {
  const year = useSyncExternalStore(
    emptySubscribe,
    getClientYear,
    getServerYear
  );

  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto w-full max-w-(--container-max) px-5 py-6 md:px-8">
        <p className="font-sans text-small text-text-secondary">
          © {year ?? ""} Harsh Raolji
        </p>
      </div>
    </footer>
  );
}
