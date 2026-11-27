"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function getScrolledHref(hrefs: readonly string[]): string {
  const headerHeight =
    document.querySelector("header")?.getBoundingClientRect().height ?? 64;
  const activationLine =
    headerHeight + Math.min(window.innerHeight * 0.3, 240);

  const sections = hrefs
    .map((href) => {
      const element = document.getElementById(href.slice(1));
      if (!element) return null;
      const rect = element.getBoundingClientRect();
      return { href, top: rect.top, bottom: rect.bottom };
    })
    .filter(
      (section): section is { href: string; top: number; bottom: number } =>
        section !== null
    )
    .sort((a, b) => a.top - b.top);

  if (sections.length === 0) {
    return "";
  }

  let currentHref = "";
  for (const section of sections) {
    if (section.top <= activationLine && section.bottom > headerHeight) {
      currentHref = section.href;
    }
  }

  const atBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2;
  const lastSection = sections[sections.length - 1];
  if (
    !currentHref &&
    atBottom &&
    window.scrollY > 0 &&
    lastSection.top < window.innerHeight &&
    lastSection.bottom > headerHeight
  ) {
    currentHref = lastSection.href;
  }

  return currentHref;
}

/**
 * Keeps navigation active state in sync with scroll position and URL hash links.
 */
export function useActiveSection(hrefs: readonly string[]) {
  const [activeHref, setActiveHref] = useState("");
  const pendingHrefRef = useRef<string | null>(null);
  const pendingTimerRef = useRef<number | null>(null);

  const clearPendingTimer = useCallback(() => {
    if (pendingTimerRef.current !== null) {
      window.clearTimeout(pendingTimerRef.current);
      pendingTimerRef.current = null;
    }
  }, []);

  const selectHref = useCallback(
    (href: string) => {
      pendingHrefRef.current = href;
      setActiveHref(href);
      clearPendingTimer();
      pendingTimerRef.current = window.setTimeout(() => {
        pendingHrefRef.current = null;
        pendingTimerRef.current = null;
      }, 700);
    },
    [clearPendingTimer]
  );

  useEffect(() => {
    let rafId = 0;

    const syncFromScroll = () => {
      rafId = 0;
      const scrolledHref = getScrolledHref(hrefs);
      const pending = pendingHrefRef.current;

      if (pending !== null) {
        if (scrolledHref === pending) {
          pendingHrefRef.current = null;
          clearPendingTimer();
          setActiveHref(scrolledHref);
        }
        return;
      }

      if (scrolledHref) {
        setActiveHref((prev) => (prev === scrolledHref ? prev : scrolledHref));
        return;
      }

      const hash = window.location.hash;
      const isPlaceholderHash =
        hash !== "" &&
        hrefs.includes(hash) &&
        document.getElementById(hash.slice(1)) === null;

      const nextHref = isPlaceholderHash ? hash : "";
      setActiveHref((prev) => (prev === nextHref ? prev : nextHref));
    };

    const scheduleSync = () => {
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(syncFromScroll);
    };

    const cancelPendingAndSync = () => {
      if (pendingHrefRef.current !== null) {
        pendingHrefRef.current = null;
        clearPendingTimer();
      }
      scheduleSync();
    };

    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash === "" || hash === "#") {
        selectHref("");
        return;
      }
      if (hrefs.includes(hash)) {
        selectHref(hash);
        return;
      }
      scheduleSync();
    };

    scheduleSync();
    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", scheduleSync, { passive: true });
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("wheel", cancelPendingAndSync, { passive: true });
    window.addEventListener("touchstart", cancelPendingAndSync, {
      passive: true,
    });

    return () => {
      if (rafId !== 0) window.cancelAnimationFrame(rafId);
      clearPendingTimer();
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", scheduleSync);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("wheel", cancelPendingAndSync);
      window.removeEventListener("touchstart", cancelPendingAndSync);
    };
  }, [hrefs, clearPendingTimer, selectHref]);

  return { activeHref, selectHref };
}
